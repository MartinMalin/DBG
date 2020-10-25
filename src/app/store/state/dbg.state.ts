import { Series } from '../model/series.model';
import TableState, { EstimatorTableState } from './table.state';

export default class DbgState {
  products: TableState;
  series: TableState;
  estimator: EstimatorTableState;
  selectedProduct?: string;
  selectedSeries?: Series[];
}

export const intialState = {
    products: {},
    series: {},
    estimator: {},
    selectedProduct: undefined,
    selectedSeries: [],
} as DbgState;

