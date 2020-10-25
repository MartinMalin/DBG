import { createAction, props } from '@ngrx/store';

import { Series } from '../model/series.model';
​
export const GetSeriesAction = createAction('[Series] - Get Series');
​
export const BeginGetSeriestAction = createAction('[Series] - Begin Get Series', props<{ selectedProduct: string }>());
​
export const SuccessGetSeriesAction = createAction(
  '[Series] - Success Get Series',
  props<{ payload: Series[] }>()
);

export const ResetSeriesAction = createAction('[Series] - Reset Series');
​
export const ErrorSeriesAction = createAction('[Series] - Error', props<{ error: Error }>());