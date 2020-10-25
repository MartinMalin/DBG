import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as SeriesActions from '../actions/series.actions';
import * as SelectedProductActions from '../actions/selected-product.actions';

@Injectable()
export class SelectedProductEffect {
    constructor(private action$: Actions) {}

    SelectedProduct$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(SelectedProductActions.SetSelectedProduct),
            mergeMap(action => {
                return of(SeriesActions.BeginGetSeriestAction({ selectedProduct: action.payload }));
            }
            )
        )
    );
}
