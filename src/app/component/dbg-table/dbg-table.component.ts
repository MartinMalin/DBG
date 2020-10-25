import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { isEmpty } from 'lodash';
import { MatDialog } from '@angular/material/dialog';

import { DbgDialogComponent } from '../dbg-dialog/dbg-dialog.component';

@Component({
  selector: 'app-dbg-table',
  templateUrl: './dbg-table.component.html',
  styleUrls: ['./dbg-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbgTableComponent {

  @Output() actionButtonNavigationHandler = new EventEmitter();
  @Output() selectionChangedHandler = new EventEmitter();

  @Input() title = '';
  @Input() isLoadingResults = true;
  @Input() showActionButton = false;
  @Input() showSelection = false;
  @Input() filter = false;
  @Input() hidePaginator = false;
  @Input() actionButtonTitle = 'Select';
  @Input() set dataSource(data: MatTableDataSource<any>) {
    this.tableData = data;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!isEmpty(this.tableData)) {
      this.tableData.sort = sort;
    }
  }
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    if (!isEmpty(this.tableData)) {
      this.tableData.paginator = paginator;
    }
  }
  @Input() set tableColumns(columns: Array<{ key: string, name: string }>) {
    this.columns = columns;
    this.tableColumnsWithoutActionOrSelect = this.columns.filter(item => item.key !== 'action' && item.key !== 'select');
  }

  columns: Array<{ key: string, name: string }>;
  tableColumnsWithoutActionOrSelect: Array<{ key: string, name: string }>;
  trackByFn = (index: number, item: any) => item;
  tableData: MatTableDataSource<any>;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  constructor(
    private dialog: MatDialog,
  ) { }

  get keys() {
    return this.columns.map(({ key }) => key);
  }

  actionButtonNavigate(element: any) {
    this.actionButtonNavigationHandler.emit(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();

    if (this.tableData.paginator) {
      this.tableData.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableData.data.forEach(row => this.selection.select(row));
    this.selectionChangedHandler.emit(this.selection);
  }

  selectionChanged(event: any, row: any) {
    if (event) {
      this.selection.toggle(row);
    }
    this.selectionChangedHandler.emit(this.selection);
  }

  checkIfKeyIsArray(key: any) {
    return Array.isArray(key);
  }

  showInnerArray(key: any) {
    this.dialog.open(DbgDialogComponent, { data: key });
  }
}
