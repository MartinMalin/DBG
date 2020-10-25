import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dbg-dialog',
  templateUrl: './dbg-dialog.component.html',
  styleUrls: ['./dbg-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbgDialogComponent {

  dataSource: MatTableDataSource<any>;
  tableColumns = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) {
    this.tableColumns = Object.keys(this.data[0]).map(itemKey => {
      return { key: itemKey, name: itemKey }
    });
    this.dataSource = new MatTableDataSource(this.data);
  }
}
