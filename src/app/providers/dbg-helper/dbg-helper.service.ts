import { Injectable } from '@angular/core';

import { Series } from 'src/app/store/model/series.model';
import { DbgDataProviderService } from '../dbg-data/dbg-data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DbgHelperService {

  constructor(
    private dbgDataProviderService: DbgDataProviderService,
  ) { }

  loadProductsData$() {
    return this.dbgDataProviderService.getProducts$();
  }

  loadSeriesData$(productId: string) {
    return this.dbgDataProviderService.getSeries$(productId);
  }

  submitToEstimator$(selections: Series[], productId: string) {
    const etdPrtfolio = selections.map((selection, index) => {
      return {
        ...selection,
        net_ls_balance: 1,
        line_no: ++index,
        product_id: productId,
      };
    });
    const payload = {
      portfolio_components: [
        {
          type: 'etd_portfolio',
          etd_portfolio: etdPrtfolio,
        },
      ],
    };
    return this.dbgDataProviderService.postEstimator$(payload);
  }
}
