import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorDataListComponent } from './estimator-data-list.component';

describe('EstimatorDataListComponent', () => {
  let component: EstimatorDataListComponent;
  let fixture: ComponentFixture<EstimatorDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatorDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
