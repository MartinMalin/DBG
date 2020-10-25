import { Action, createReducer, on } from '@ngrx/store';

import * as EstimatorActions from '../actions/estimator.actions';
import { EstimatorTableState } from '../state/table.state';

export const initial = {
    tableData: {},
    isLoading: true,
    error: undefined,
} as EstimatorTableState;

const reducer = createReducer(
    initial,
    on(EstimatorActions.GetEstimatorAction, state => state),
    on(EstimatorActions.SuccessGetEstimatorAction, (state: EstimatorTableState, { payload }) => {
        return { ...state, tableData: payload, isLoading: false};
    }),
    on(EstimatorActions.ErrorEstimatorAction, (state: EstimatorTableState, { error }) => {
        return { ...state, error };
    }),
    on(EstimatorActions.ResetEstimatorAction, _ => initial),
);

export function EstimatorReducer(state: EstimatorTableState | undefined, action: Action) {
    return reducer(state, action);
}
