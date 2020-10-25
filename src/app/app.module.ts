import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { EstimatorDataListComponent } from './component/estimator-data/estimator-data-list.component';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { GoBackComponent } from './component/go-back/go-back.component';
import { MaterialModule } from './material.module';
import { DbgTableComponent } from './component/dbg-table/dbg-table.component';
import { ProductEffect } from './store/effects/product.effects';
import { dbgReducers } from './store/reducers/dbg.reducers';
import { SelectedProductEffect } from './store/effects/selected-product.effects';
import { SeriesEffect } from './store/effects/series.effects';
import { EstimatorEffect } from './store/effects/estimator.effects';
import { DbgDialogComponent } from './component/dbg-dialog/dbg-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SeriesListComponent,
    EstimatorDataListComponent,
    GoBackComponent,
    DbgTableComponent,
    DbgDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(dbgReducers),
    EffectsModule.forRoot([ProductEffect, SelectedProductEffect, SeriesEffect, EstimatorEffect]),
    StoreDevtoolsModule.instrument(),
  ],
  entryComponents: [DbgDialogComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
