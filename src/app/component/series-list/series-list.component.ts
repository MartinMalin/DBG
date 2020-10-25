import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { seriesColumns } from 'src/app/object/dbg-constants';
import * as SeriesActions from '../../store/actions/series.actions';
import DbgState from 'src/app/store/state/dbg.state';
import TableState from 'src/app/store/state/table.state';
import { BeginGetEstimatorAction } from '../../store/actions/estimator.actions';
import { Series } from '../../store/model/series.model';
import { SetSelectedProduct } from '../../store/actions/selected-product.actions';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesListComponent implements OnInit, OnDestroy {

  displayedColumns = seriesColumns;
  series: MatTableDataSource<Series>;
  isLoadingResults = true;
  title = '* Select one or more series to submit to estimator and view results!';
  productId: string;
  showSelection = true;
  selection$ = new BehaviorSubject([]);
  series$: Observable<TableState>;
  subscription = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private store: Store<DbgState>
  ) {
    this.series$ = this.store.pipe(select('series'));
  }

  ngOnInit() {
    this.subscription.add(
      this.series$.pipe(
        filter<TableState>(Boolean),
      ).subscribe(seriesState => {
        this.isLoadingResults = seriesState.isLoading;
        this.series = new MatTableDataSource(seriesState.tableData);
        this.cdr.markForCheck();
      }),
    );
    this.dispatchSelectedProduct();
  }

  private dispatchSelectedProduct() {
    this.activatedRoute.params.pipe(
      take(1),
      map(params => params['id']),
    ).subscribe(productId => this.store.dispatch(SetSelectedProduct({ payload: productId })));
  }

  submitToEstimator() {
    if (this.selection$ && this.selection$.value && this.selection$.value.length) {
      this.store.dispatch(BeginGetEstimatorAction({ selections: this.selection$.value, productId: this.productId }));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(SeriesActions.ResetSeriesAction());
  }
}
