
// Financial Management - Investments
import { modules as EquityInvestmentModules } from './components/Management/FinancialManagement/Investments/Modules/EquityInvestments';
import { modules as FixedIncomeInvestmentModules } from './components/Management/FinancialManagement/Investments/Modules/FixedIncomeInvestments';
import { modules as InvestmentReturnModules } from './components/Management/FinancialManagement/Investments/Modules/InvestmentReturns';

// Financial Management - Taxation
import { modules as TaxFilingsModules } from './components/Management/FinancialManagement/Taxation/TaxFilings';
import { modules as TaxCreditsModules } from './components/Management/FinancialManagement/Taxation/TaxCredits';
import { modules as WithholdingTaxesModules } from './components/Management/FinancialManagement/Taxation/Modules/WithholdingTaxes';
import { modules as TaxAuditsModules } from './components/Management/FinancialManagement/Taxation/Modules/TaxAudits';
import { modules as VATGSTRecordsModules } from './components/Management/FinancialManagement/Taxation/Modules/VATGSTRecords';

// Financial Management - Treasury Management
import { modules as CashFlowForecastsModules } from './components/Management/FinancialManagement/TreasuryManagement/Modules/CashFlowForecasts';
import { modules as LiquidityManagementModules } from './components/Management/FinancialManagement/TreasuryManagement/Modules/LiquidityManagement';
import { modules as TreasuryPoliciesModules } from './components/Management/FinancialManagement/TreasuryManagement/Modules/TreasuryPolicies';

// Financial Management - Budget
import { modules as BudgetAllocationsModules } from './components/Management/FinancialManagement/Budget/Modules/BudgetAllocations';
import { modules as VarianceAnalysisModules } from './components/Management/FinancialManagement/Budget/Modules/VarianceAnalysis';
import { modules as ForecastingModules } from './components/Management/FinancialManagement/Budget/Modules/Forecasting';

// Financial Management - Accounts Payable
import { modules as CreditorsLedgerModules } from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger';
import { modules as PaymentTermsModules } from './components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms';
import { modules as VendorInvoicesModules } from './components/Management/FinancialManagement/AccountsPayable/Modules/VendorInvoices';

// Financial Management - Accounts Receivable
import { modules as CustomerInvoicesModules } from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices';
import { modules as CreditManagementModules } from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement';
import { modules as DebtorAgingModules } from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging';

// Financial Management - General Ledger
import { modules as JournalEntriesModules } from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries';
import { modules as ChartOfAccountsModules } from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts';
import { modules as TrialBalanceModules } from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance';
import { modules as FiscalPeriodsModules } from './components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods';

// Financial Management - Bank Accounts
import { modules as ReconciliationStatementsModules } from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements';
import { modules as BankTransfersModules } from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers';
import { modules as ForeignCurrencyModules } from './components/Management/FinancialManagement/BankAccounts/Modules/ForeignCurrencyAccounts';

// Financial Management - Debts
import { modules as LoanAgreementModules } from './components/Management/FinancialManagement/Debts/Modules/LoanAgreements';
import { modules as InterestPaymentModules } from './components/Management/FinancialManagement/Debts/Modules/InterestPayments';
import { modules as DebtMaturityModules } from './components/Management/FinancialManagement/Debts/Modules/DebtMaturitySchedules';

// Operations & Asset Management - Product Catalog
import { modules as ProductDetailsModules } from './components/Management/OperationsAssetManagement/ProductCatalog/ProductDetails';
import { modules as ProductCategoryModules } from './components/Management/OperationsAssetManagement/ProductCatalog/ProductCategories';
import { modules as ProductAttributeModules } from './components/Management/OperationsAssetManagement/ProductCatalog/ProductAttributes';

// Operations & Asset Management - Product Lifecycle Management
import { modules as NPDModules } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/NewProductDevelopment';
import { modules as ProductUpdatesModules } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/ProductUpdates';
import { modules as ProductDiscontinuationModules } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/ProductDiscontinuation';

// Operations & Asset Management - Inventory
import { modules as StockLevelsModules } from './components/Management/OperationsAssetManagement/Inventory/StockLevels';
import { modules as ReorderPointsModules } from './components/Management/OperationsAssetManagement/Inventory/Modules/ReorderPoints';
import { modules as InventoryValuationModules } from './components/Management/OperationsAssetManagement/Inventory/Modules/InventoryValuation';
import { modules as InventoryAgingModules } from './components/Management/OperationsAssetManagement/Inventory/Modules/InventoryAging';

// Operations & Asset Management - Pricing
import { modules as PriceListModules } from './components/Management/OperationsAssetManagement/Pricing/Modules/PriceLists';

// Operations & Asset Management - Assets
import { modules as AssetDepreciationModules } from './components/Management/OperationsAssetManagement/Assets/Modules/AssetDepreciation';


export const allModules = [
    ...EquityInvestmentModules,
    ...FixedIncomeInvestmentModules,
    ...InvestmentReturnModules,

    ...TaxFilingsModules,
    ...TaxCreditsModules,
    ...WithholdingTaxesModules,
    ...TaxAuditsModules,
    ...VATGSTRecordsModules,

    ...CashFlowForecastsModules,
    ...LiquidityManagementModules,
    ...TreasuryPoliciesModules,

    ...BudgetAllocationsModules,
    ...VarianceAnalysisModules,
    ...ForecastingModules,

    ...CreditorsLedgerModules,
    ...PaymentTermsModules,
    ...VendorInvoicesModules,

    ...CustomerInvoicesModules,
    ...CreditManagementModules,
    ...DebtorAgingModules,

    ...JournalEntriesModules,
    ...ChartOfAccountsModules,
    ...TrialBalanceModules,
    ...FiscalPeriodsModules,

    ...ReconciliationStatementsModules,
    ...BankTransfersModules,
    ...ForeignCurrencyModules,

    ...LoanAgreementModules,
    ...InterestPaymentModules,
    ...DebtMaturityModules,

    ...ProductDetailsModules,
    ...ProductCategoryModules,
    ...ProductAttributeModules,

    ...NPDModules,
    ...ProductUpdatesModules,
    ...ProductDiscontinuationModules,

    ...StockLevelsModules,
    ...ReorderPointsModules,
    ...InventoryValuationModules,
    ...InventoryAgingModules,

    ...PriceListModules,

    ...AssetDepreciationModules,
];
