import { createAction, props } from '@ngrx/store';

import { Product } from '../model/product.model';
​
export const GetProductsAction = createAction('[Product] - Get Products');
​
export const BeginGetProducstAction = createAction('[Product] - Begin Get Products');
​
export const SuccessGetProductsAction = createAction(
  '[Product] - Success Get Products',
  props<{ payload: Product[] }>()
);

export const ResetProductsAction = createAction('[Product] - Reset Products');
​
export const ErrorProductAction = createAction('[Product] - Error', props<{ error: Error }>());