import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbgDataProviderService {

  constructor(private http: HttpClient) { }

  getProducts$(): Observable<any> {
    return this.http
      .get(`${environment.baseUrl}/products`)
      .pipe(
        catchError(() => {
          return throwError('Could not load data!');
        })
      );
  }

  getSeries$(product: string): Observable<any> {
    let params = new HttpParams().set('products', product);
    return this.http
      .get(`${environment.baseUrl}/series`, { params })
      .pipe(
        catchError(() => {
          return throwError('Could not load data!');
        })
      );
  }

  postEstimator$(payload: any) {
    return this.http
      .post(`${environment.baseUrl}/estimator`, payload)
      .pipe(
        catchError(() => {
          return throwError('Could not load data!');
        })
      );
  }

}
