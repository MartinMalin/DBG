import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgDialogComponent } from './dbg-dialog.component';

describe('DbgDialogComponent', () => {
  let component: DbgDialogComponent;
  let fixture: ComponentFixture<DbgDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbgDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
