export interface Estimator {
    business_date: number;
    clearing_currency: string;
    drilldowns: Drildown[],
    live: boolean,
    live_timestamp: number;
    portfolio_margin: PortfolioMargin[]
}

export interface Drildown {
    call_put_flag: string;
    component_margin: number;
    component_margin_currency: string;
    exercise_price: number;
    iid: number;
    line_no: number;
    liquidation_group: string;
    liquidation_group_split: string;
    maturity: number;
    net_ls_balance: number;
    premium_margin: number;
    premium_margin_currency: string;
    product_id: string;
    version_number: string;
}

export interface PortfolioMargin {
    initial_margin: number;
    liquidation_group: string;
    liquidation_group_split: string;
    liquidity_addon: number;
    long_option_credit: number;
    market_risk: number;
    market_risk_per_rms: MarketRiskPerRms[]
    premium_margin: number;
    time_to_expiry_adjustment: number;
}

export interface MarketRiskPerRms {
    rms_components: RmsComponent[];
    rms_market_risk: number;
    rms_name: string;
    simulation_type: string;
    weighting_factor: number;
}

export interface RmsComponent {
    compression_adjustment: number;
    correlation_break_adjustment: number;
    risk_measure_value: number;
    subsample_id: number;
}