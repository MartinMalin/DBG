import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimatorDataListComponent } from './component/estimator-data/estimator-data-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SeriesListComponent } from './component/series-list/series-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'series/:id', component: SeriesListComponent },
  { path: 'estimator', component: EstimatorDataListComponent },
  { path: '**', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
