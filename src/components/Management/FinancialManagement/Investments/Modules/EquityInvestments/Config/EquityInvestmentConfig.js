
export const fieldsConfig = {
    investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    investment_name: { label: 'Investment Name', type: 'text', required: true, faker: 'company.name' },
    ticker_symbol: { label: 'Ticker Symbol', type: 'text', faker: 'finance.currencyCode' },
    purchase_date: { label: 'Purchase Date', type: 'date', required: true, faker: 'date.past' },
    number_of_shares: { label: 'Number of Shares', type: 'number', required: true, faker: 'datatype.number' },
    purchase_price_per_share: { label: 'Purchase Price/Share', type: 'number', required: true, faker: 'finance.amount' },
    total_cost: { label: 'Total Cost', type: 'number', required: true, faker: 'finance.amount' },
    current_valuation: { label: 'Current Valuation', type: 'number', faker: 'finance.amount' },
    currency: { label: 'Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'active', label: 'Active' },
            { id: 'sold', label: 'Sold' },
            { id: 'impaired', label: 'Impaired' }
        ],
        defaultValue: 'active'
    }
};

export const entityName = 'Equity Investment';
export const collectionName = 'equity_investments';
