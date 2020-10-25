interface KeyName {
    key: string;
    name: string;
}
export const drilldownsColumns: KeyName[] = [
    { key: 'line_no', name: 'Line_no' },
    { key: 'component_margin_currency', name: 'Margin Currency' },
    { key: 'component_margin', name: 'Margin' },
    { key: 'call_put_flag', name: 'Call Put Flag' },
    { key: 'exercise_price', name: 'Exercise Price' },
    { key: 'liquidation_group', name: 'Liquidation Group' },
    { key: 'liquidation_group_split', name: 'L.G. Split' },
    { key: 'maturity', name: 'Maturity' },
    { key: 'net_ls_balance', name: 'Net Ls Balance' },
    { key: 'premium_margin', name: 'Premium Margin' },
    { key: 'premium_margin_currency', name: 'Premium Margin Currency' },
    { key: 'product_id', name: 'Product Id' },
    { key: 'iid', name: 'Iid' },
    { key: 'version_number', name: 'Version_no' }
];

export const protfolioMarginColumns: KeyName[] = [
    { key: 'initial_margin', name: 'Initial Margin' },
    { key: 'liquidation_group', name: 'Liquidation Group' },
    { key: 'liquidation_group_split', name: 'Liquidation Group Split' },
    { key: 'liquidity_addon', name: 'Liquidity Addon' },
    { key: 'long_option_credit', name: 'Long Option Credit' },
    { key: 'market_risk', name: 'Market Risk' },
    { key: 'market_risk_per_rms', name: 'Market Risk Per Rms' },
    { key: 'premium_margin', name: 'Premium Margin' },
    { key: 'time_to_expiry_adjustment', name: 'Expiry Adjustment Time' },
];

export const productColumns: KeyName[] = [
    { key: 'product', name: 'Product' },
    { key: 'instrument_type', name: 'Instrument Type' },
    { key: 'action', name: 'Action' }
];

export const seriesColumns: KeyName[] = [
    { key: 'select', name: 'Select' },
    { key: 'iid', name: 'Iid' },
    { key: 'product_id', name: 'Product Id' },
    { key: 'expiry_maturity', name: 'Expiry Maturity' },
    { key: 'contract_maturity', name: 'Contract Maturity' },
];
