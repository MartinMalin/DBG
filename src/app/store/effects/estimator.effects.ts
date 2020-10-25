import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import * as EstimatorActions from '../actions/estimator.actions';
import { Observable, of } from 'rxjs';
import { DbgHelperService } from 'src/app/providers/dbg-helper/dbg-helper.service';
import { Estimator } from '../model/estimator.model';

@Injectable()
export class EstimatorEffect {

    constructor(
        private action$: Actions,
        private dbgHelperService: DbgHelperService,
        private router: Router,
        private snackBar: MatSnackBar,
    ) { }

    PostAndGetEstimatorData$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(EstimatorActions.BeginGetEstimatorAction),
            mergeMap(action =>
                this.dbgHelperService.submitToEstimator$(action.selections, action.productId).pipe(
                    map((data: Estimator) => {
                        return EstimatorActions.SuccessGetEstimatorAction({ payload: data });
                    }),
                    tap(() => this.router.navigateByUrl('estimator')),
                    catchError((error: Error) => {
                        this.snackBar.open(JSON.stringify(error), undefined, {
                            duration: 2000,
                            panelClass: ['toast-warning'],
                        });
                        return of(EstimatorActions.ErrorEstimatorAction({ error }));
                    }),
                )
            ),
        )

    )
}
