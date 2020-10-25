import { ActionReducerMap } from '@ngrx/store';
import DbgState from '../state/dbg.state';
import { ProductReducer } from './product.reducers';
import { SeriesReducer } from './series.reducer';
import { SelectedProductReducer } from './selected-product.reducers';
import { EstimatorReducer } from './estimator.reduces';

export const dbgReducers: ActionReducerMap<DbgState> = {
    products: ProductReducer,
    series: SeriesReducer,
    selectedProduct: SelectedProductReducer,
    estimator: EstimatorReducer,
}
