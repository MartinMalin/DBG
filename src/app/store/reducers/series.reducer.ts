import { Action, createReducer, on } from '@ngrx/store';

import * as SeriesActions from '../actions/series.actions';
import TableState from '../state/table.state';

export const initial = {
    tableData: [],
    isLoading: true,
    error: undefined,
} as TableState;

const reducer = createReducer(
    initial,
    on(SeriesActions.GetSeriesAction, state => state),
    on(SeriesActions.SuccessGetSeriesAction, (state: TableState, { payload }) => {
        return { ...state, tableData: payload, isLoading: false};
    }),
    on(SeriesActions.ErrorSeriesAction, (state: TableState, { error }) => {
        return { ...state, error };
    }),
    on(SeriesActions.ResetSeriesAction, _ => initial),
);

export function SeriesReducer(state: TableState | undefined, action: Action) {
    return reducer(state, action);
}
