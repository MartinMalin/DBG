import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isEmpty } from 'lodash';

import { productColumns } from 'src/app/object/dbg-constants';
import { Product } from 'src/app/store/model/product.model';
import * as ProductActions from 'src/app/store/actions/product.actions';
import DbgState from 'src/app/store/state/dbg.state';
import TableState from 'src/app/store/state/table.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit, OnDestroy {

  displayedColumns = productColumns;
  dataSource: MatTableDataSource<Product>;
  isLoadingResults = true;
  title = '* Select one product to view the coresponding series!';
  showActionButton = true;
  actionButtonTitle = 'Select';
  product$: Observable<TableState>;
  subscription = new Subscription;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<DbgState>
  ) {
    this.product$ = this.store.pipe(select('products'));
  }

  ngOnInit() {
    this.subscription.add(
      this.product$.pipe(
        filter<TableState>(Boolean),
      ).subscribe(productState => {
        this.isLoadingResults = productState.isLoading;
        this.dataSource = new MatTableDataSource(productState.tableData);
        this.cdr.markForCheck();
      }),
    );
    if (isEmpty(this.dataSource.data)) {
      this.store.dispatch(ProductActions.BeginGetProducstAction());
    }
  }

  navigateFromButton(element: {product: string}) {
    this.router.navigate(['series', element.product]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
