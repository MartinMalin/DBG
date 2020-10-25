import { createAction, props } from '@ngrx/store';

export const SetSelectedProduct = createAction(
    '[Selected Product] - Set Selected Product',
    props<{ payload: string }>());
