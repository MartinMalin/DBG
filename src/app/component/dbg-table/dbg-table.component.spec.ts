import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgTableComponent } from './dbg-table.component';

describe('DbgTableComponent', () => {
  let component: DbgTableComponent;
  let fixture: ComponentFixture<DbgTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbgTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
