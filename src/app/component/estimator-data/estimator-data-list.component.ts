import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { drilldownsColumns, protfolioMarginColumns } from 'src/app/object/dbg-constants';
import DbgState from 'src/app/store/state/dbg.state';
import { EstimatorTableState } from 'src/app/store/state/table.state';
import { Drildown, PortfolioMargin } from '../../store/model/estimator.model';

@Component({
  selector: 'app-estimator-data-list',
  templateUrl: './estimator-data-list.component.html',
  styleUrls: ['./estimator-data-list.component.scss']
})
export class EstimatorDataListComponent implements OnInit {

  drildownColumns = drilldownsColumns;
  protfolioMarginColumns = protfolioMarginColumns;
  estimatorDatacolumns = [];
  drildowns: MatTableDataSource<Drildown>;
  protfolioMargin: MatTableDataSource<PortfolioMargin>;
  selectedIndex = 0;
  estimator$: Observable<EstimatorTableState>;
  subscription = new Subscription;
  estimatorWithoutArrays: MatTableDataSource<any>;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<DbgState>
  ) {
    this.estimator$ = this.store.pipe(select('estimator'));
  }

  ngOnInit() {
    this.subscription.add(
      this.estimator$.pipe(
        filter<EstimatorTableState>(Boolean),
      ).subscribe(estimatorData => {
        const objMap = {}
        Object.keys(estimatorData.tableData).forEach(key => {
          if (!Array.isArray(estimatorData.tableData[key])) {
            objMap[key] = estimatorData.tableData[key];
          }
        });
        this.estimatorWithoutArrays = this.constructEstimatorBasicFields(estimatorData.tableData);
        this.estimatorDatacolumns = this.constructEstimatorDataColumns(this.estimatorWithoutArrays.data[0]);
        this.drildowns = new MatTableDataSource<Drildown>(estimatorData.tableData.drilldowns);
        this.protfolioMargin = new MatTableDataSource<PortfolioMargin>(estimatorData.tableData.portfolio_margin);
        this.cdr.markForCheck();
      }),
    );
  }

  private constructEstimatorBasicFields(data: any) {
    const objMap = {}
        Object.keys(data).forEach(key => {
          if (!Array.isArray(data[key])) {
            objMap[key] = data[key];
          }
        });
        return new MatTableDataSource<any>([objMap]);
  }

  private constructEstimatorDataColumns(data: any) {
    return Object.keys(data).map(itemKey => {
      return { key: itemKey, name: itemKey }
    });
  }
}
