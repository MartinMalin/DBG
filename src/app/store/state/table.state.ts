import { Estimator } from '../model/estimator.model';

export default class TableState {
    tableData: any[];
    error: Error;
    isLoading: boolean;
}

export class EstimatorTableState {
    tableData: Estimator;
    error: Error;
    isLoading: boolean;
}