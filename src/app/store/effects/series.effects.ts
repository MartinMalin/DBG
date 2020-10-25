import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as SeriesActions from '../actions/series.actions';
import { DbgHelperService } from 'src/app/providers/dbg-helper/dbg-helper.service';

@Injectable()
export class SeriesEffect {
    constructor(
        private action$: Actions,
        private dbgHelperService: DbgHelperService,
        private snackBar: MatSnackBar,
    ) { }

    GetSeries$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(SeriesActions.BeginGetSeriestAction),
            mergeMap(action =>
                this.dbgHelperService.loadSeriesData$(action.selectedProduct).pipe(
                    map(data => {
                        return SeriesActions.SuccessGetSeriesAction({ payload: data.list_series });
                    }),
                    catchError((error: Error) => {
                        this.snackBar.open(JSON.stringify(error), undefined, {
                            duration: 2000,
                            panelClass: ['toast-warning'],
                        });
                        return of(SeriesActions.ErrorSeriesAction({ error }));
                    }),
                ),
            )
        )
    );
}
