import { createAction, props } from '@ngrx/store';

import { Estimator } from '../model/estimator.model';
import { Series } from '../model/series.model';
​
export const GetEstimatorAction = createAction('[Estimator] - Get Estimator');
​
export const BeginGetEstimatorAction = createAction(
    '[Estimator] - Begin Get Estimator',
    props<{ selections: Series[], productId: string }>()
    );
​
export const SuccessGetEstimatorAction = createAction(
  '[Estimator] - Success Get Estimator',
  props<{ payload: Estimator }>()
);

export const ResetEstimatorAction = createAction('[Estimator] - Reset Estimator');
​
export const ErrorEstimatorAction = createAction('[Estimator] - Error', props<{ error: Error }>());