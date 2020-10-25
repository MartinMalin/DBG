import { Action, createReducer, on } from '@ngrx/store';
import * as SelectedProductActions from '../actions/selected-product.actions';

const reducer = createReducer(
    '',
    on(SelectedProductActions.SetSelectedProduct, (state: string, { payload }) => {
        return payload;
    }),
);

export function SelectedProductReducer(state: string | undefined, action: Action) {
    return reducer(state, action);
}
