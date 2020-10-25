import { Action, createReducer, on} from '@ngrx/store';

import * as ProductActions from '../actions/product.actions';
import TableState from '../state/table.state';

export const initial = {
    tableData: [],
    isLoading: true,
    error: {},
} as TableState;


const reducer = createReducer(
    initial,
    on(ProductActions.GetProductsAction, state => state),
    on(ProductActions.SuccessGetProductsAction, (state: TableState, { payload }) => {
        return { ...state, tableData: payload, isLoading: false};
    }),
    on(ProductActions.ErrorProductAction, (state: TableState, { error }) => {
        return { ...state, error };
    }),
    on(ProductActions.ResetProductsAction, _ => initial),
);

export function ProductReducer(state: TableState | undefined, action: Action) {
    return reducer(state, action);
}
