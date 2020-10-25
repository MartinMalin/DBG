import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as ProductActions from '../actions/product.actions';
import { DbgHelperService } from 'src/app/providers/dbg-helper/dbg-helper.service';

@Injectable()
export class ProductEffect {
    constructor(
        private action$: Actions,
        private dbgHelperService: DbgHelperService,
        private snackBar: MatSnackBar,
    ) { }

    GetProducts$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(ProductActions.BeginGetProducstAction),
            mergeMap(_ =>
                this.dbgHelperService.loadProductsData$().pipe(
                    map(data => (ProductActions.SuccessGetProductsAction({ payload: data.products }))),
                    catchError((error: Error) => {
                        this.snackBar.open(JSON.stringify(error), undefined, {
                            duration: 2000,
                            panelClass: ['toast-warning'],
                        });
                        return of(ProductActions.ErrorProductAction({ error }));
                    }),
                ),
            )
        )
    );
}
