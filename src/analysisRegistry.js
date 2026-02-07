
// Financial Management
import { fieldsConfig as EquityInvestmentsConfig, collectionName as EquityInvestmentsCollection } from './components/Management/FinancialManagement/Investments/EquityInvestments';
import { fieldsConfig as FixedIncomeInvestmentsConfig, collectionName as FixedIncomeInvestmentsCollection } from './components/Management/FinancialManagement/Investments/FixedIncomeInvestments';
import { fieldsConfig as InvestmentReturnsConfig, collectionName as InvestmentReturnsCollection } from './components/Management/FinancialManagement/Investments/InvestmentReturns';
import { fieldsConfig as TaxFilingsConfig, collectionName as TaxFilingsCollection } from './components/Management/FinancialManagement/Taxation/TaxFilings';
import { fieldsConfig as TaxCreditsConfig, collectionName as TaxCreditsCollection } from './components/Management/FinancialManagement/Taxation/TaxCredits';
import { fieldsConfig as WithholdingTaxesConfig, collectionName as WithholdingTaxesCollection } from './components/Management/FinancialManagement/Taxation/WithholdingTaxes';
import { fieldsConfig as TaxAuditsConfig, collectionName as TaxAuditsCollection } from './components/Management/FinancialManagement/Taxation/TaxAudits';
import { fieldsConfig as VatGstRecordsConfig, collectionName as VatGstRecordsCollection } from './components/Management/FinancialManagement/Taxation/VatGstRecords';
import { fieldsConfig as CashFlowForecastsConfig, collectionName as CashFlowForecastsCollection } from './components/Management/FinancialManagement/TreasuryManagement/CashFlowForecasts';
import { fieldsConfig as LiquidityManagementConfig, collectionName as LiquidityManagementCollection } from './components/Management/FinancialManagement/TreasuryManagement/LiquidityManagement';
import { fieldsConfig as TreasuryPoliciesConfig, collectionName as TreasuryPoliciesCollection } from './components/Management/FinancialManagement/TreasuryManagement/TreasuryPolicies';
import { fieldsConfig as BudgetAllocationsConfig, collectionName as BudgetAllocationsCollection } from './components/Management/FinancialManagement/Budget/BudgetAllocations';
import { fieldsConfig as VarianceAnalysisConfig, collectionName as VarianceAnalysisCollection } from './components/Management/FinancialManagement/Budget/VarianceAnalysis';
import { fieldsConfig as ForecastingConfig, collectionName as ForecastingCollection } from './components/Management/FinancialManagement/Budget/Forecasting';
import { fieldsConfig as CreditorsLedgerConfig, collectionName as CreditorsLedgerCollection } from './components/Management/FinancialManagement/AccountsPayable/CreditorsLedger';
import { fieldsConfig as PaymentTermsConfig, collectionName as PaymentTermsCollection } from './components/Management/FinancialManagement/AccountsPayable/PaymentTerms';
import { fieldsConfig as VendorInvoicesConfig, collectionName as VendorInvoicesCollection } from './components/Management/FinancialManagement/AccountsPayable/VendorInvoices';
import { fieldsConfig as CustomerInvoicesConfig, collectionName as CustomerInvoicesCollection } from './components/Management/FinancialManagement/AccountsReceivable/CustomerInvoices';
import { fieldsConfig as CreditManagementConfig, collectionName as CreditManagementCollection } from './components/Management/FinancialManagement/AccountsReceivable/CreditManagement';
import { fieldsConfig as DebtorAgingConfig, collectionName as DebtorAgingCollection } from './components/Management/FinancialManagement/AccountsReceivable/DebtorAging';
import { fieldsConfig as JournalEntriesConfig, collectionName as JournalEntriesCollection } from './components/Management/FinancialManagement/GeneralLedger/JournalEntries';
import { fieldsConfig as ChartOfAccountsConfig, collectionName as ChartOfAccountsCollection } from './components/Management/FinancialManagement/GeneralLedger/ChartOfAccounts';
import { fieldsConfig as TrialBalanceConfig, collectionName as TrialBalanceCollection } from './components/Management/FinancialManagement/GeneralLedger/TrialBalance';
import { fieldsConfig as FiscalPeriodsConfig, collectionName as FiscalPeriodsCollection } from './components/Management/FinancialManagement/GeneralLedger/FiscalPeriods';
import { fieldsConfig as ReconciliationStatementsConfig, collectionName as ReconciliationStatementsCollection } from './components/Management/FinancialManagement/BankAccounts/ReconciliationStatements';
import { fieldsConfig as BankTransfersConfig, collectionName as BankTransfersCollection } from './components/Management/FinancialManagement/BankAccounts/BankTransfers';
import { fieldsConfig as ForeignCurrencyAccountsConfig, collectionName as ForeignCurrencyAccountsCollection } from './components/Management/FinancialManagement/BankAccounts/ForeignCurrencyAccounts';
import { fieldsConfig as LoanAgreementsConfig, collectionName as LoanAgreementsCollection } from './components/Management/FinancialManagement/Debts/LoanAgreements';
import { fieldsConfig as InterestPaymentsConfig, collectionName as InterestPaymentsCollection } from './components/Management/FinancialManagement/Debts/InterestPayments';
import { fieldsConfig as DebtMaturitySchedulesConfig, collectionName as DebtMaturitySchedulesCollection } from './components/Management/FinancialManagement/Debts/DebtMaturitySchedules';

// Sales & Marketing
import { fieldsConfig as OrderStatusConfig, collectionName as OrderStatusCollection } from './components/Management/SalesMarketing/SalesOrders/OrderStatus';
import { fieldsConfig as BackordersConfig, collectionName as BackordersCollection } from './components/Management/SalesMarketing/SalesOrders/Backorders';
import { fieldsConfig as SMPriceListsConfig, collectionName as SMPriceListsCollection } from './components/Management/SalesMarketing/Pricing/SM_PriceLists';
import { fieldsConfig as PromotionalPricingConfig, collectionName as PromotionalPricingCollection } from './components/Management/SalesMarketing/Pricing/PromotionalPricing';
import { fieldsConfig as DiscountStructuresConfig, collectionName as DiscountStructuresCollection } from './components/Management/SalesMarketing/Pricing/DiscountStructures';
import { fieldsConfig as WinLossAnalysisConfig, collectionName as WinLossAnalysisCollection } from './components/Management/SalesMarketing/Opportunities/WinLossAnalysis';
import { fieldsConfig as SalesForecastingConfig, collectionName as SalesForecastingCollection } from './components/Management/SalesMarketing/Opportunities/SalesForecasting';
import { fieldsConfig as OpportunityStagesConfig, collectionName as OpportunityStagesCollection } from './components/Management/SalesMarketing/Opportunities/OpportunityStages';
import { fieldsConfig as LeadScoringConfig, collectionName as LeadScoringCollection } from './components/Management/SalesMarketing/Leads/LeadScoring';
import { fieldsConfig as LeadNurturingConfig, collectionName as LeadNurturingCollection } from './components/Management/SalesMarketing/Leads/LeadNurturing';
import { fieldsConfig as LeadConversionRatesConfig, collectionName as LeadConversionRatesCollection } from './components/Management/SalesMarketing/Leads/LeadConversionRates';
import { fieldsConfig as RecurringInvoicesConfig, collectionName as RecurringInvoicesCollection } from './components/Management/SalesMarketing/Invoices/RecurringInvoices';
import { fieldsConfig as PaymentTrackingConfig, collectionName as PaymentTrackingCollection } from './components/Management/SalesMarketing/Invoices/PaymentTracking';
import { fieldsConfig as InvoiceTemplatesConfig, collectionName as InvoiceTemplatesCollection } from './components/Management/SalesMarketing/Invoices/InvoiceTemplates';
import { fieldsConfig as CustomerSegmentationConfig, collectionName as CustomerSegmentationCollection } from './components/Management/SalesMarketing/ClientsCustomers/CustomerSegmentation';
import { fieldsConfig as CustomerSatisfactionConfig, collectionName as CustomerSatisfactionCollection } from './components/Management/SalesMarketing/ClientsCustomers/CustomerSatisfaction';
import { fieldsConfig as CustomerHistoryConfig, collectionName as CustomerHistoryCollection } from './components/Management/SalesMarketing/ClientsCustomers/CustomerHistory';
import { fieldsConfig as RoiAnalysisConfig, collectionName as RoiAnalysisCollection } from './components/Management/SalesMarketing/Campaigns/RoiAnalysis';
import { fieldsConfig as CampaignPlanningConfig, collectionName as CampaignPlanningCollection } from './components/Management/SalesMarketing/Campaigns/CampaignPlanning';
import { fieldsConfig as CampaignPerformanceConfig, collectionName as CampaignPerformanceCollection } from './components/Management/SalesMarketing/Campaigns/CampaignPerformance';

// Training & Development
import { fieldsConfig as TrainingNeedsAnalysisConfig, collectionName as TrainingNeedsAnalysisCollection } from './components/Management/TrainingDevelopment/SkillDevelopment/TrainingNeedsAnalysis';
import { fieldsConfig as SkillAssessmentsConfig, collectionName as SkillAssessmentsCollection } from './components/Management/TrainingDevelopment/SkillDevelopment/SkillAssessments';
import { fieldsConfig as DevelopmentPlansConfig, collectionName as DevelopmentPlansCollection } from './components/Management/TrainingDevelopment/SkillDevelopment/DevelopmentPlans';
import { fieldsConfig as LearningPathsConfig, collectionName as LearningPathsCollection } from './components/Management/TrainingDevelopment/LearningManagement/LearningPaths';
import { fieldsConfig as CourseCatalogConfig, collectionName as CourseCatalogCollection } from './components/Management/TrainingDevelopment/LearningManagement/CourseCatalog';
import { fieldsConfig as CertificationTrackingConfig, collectionName as CertificationTrackingCollection } from './components/Management/TrainingDevelopment/LearningManagement/CertificationTracking';
import { fieldsConfig as MentorshipProgramsConfig, collectionName as MentorshipProgramsCollection } from './components/Management/TrainingDevelopment/LeadershipPrograms/MentorshipPrograms';
import { fieldsConfig as LeadershipWorkshopsConfig, collectionName as LeadershipWorkshopsCollection } from './components/Management/TrainingDevelopment/LeadershipPrograms/LeadershipWorkshops';
import { fieldsConfig as ExecutiveTrainingConfig, collectionName as ExecutiveTrainingCollection } from './components/Management/TrainingDevelopment/LeadershipPrograms/ExecutiveTraining';

// Real Estate & Property Management
import { fieldsConfig as TenantRecordsConfig, collectionName as TenantRecordsCollection } from './components/Management/RealEstatePropertyManagement/Leases/TenantRecords';
import { fieldsConfig as LeaseTermsConfig, collectionName as LeaseTermsCollection } from './components/Management/RealEstatePropertyManagement/Leases/LeaseTerms';
import { fieldsConfig as LeaseRenewalsConfig, collectionName as LeaseRenewalsCollection } from './components/Management/RealEstatePropertyManagement/Leases/LeaseRenewals';
import { fieldsConfig as UtilityManagementConfig, collectionName as UtilityManagementCollection } from './components/Management/RealEstatePropertyManagement/FacilitiesManagement/UtilityManagement';
import { fieldsConfig as FacilityMaintenanceConfig, collectionName as FacilityMaintenanceCollection } from './components/Management/RealEstatePropertyManagement/FacilitiesManagement/FacilityMaintenance';
import { fieldsConfig as FacilityBookingConfig, collectionName as FacilityBookingCollection } from './components/Management/RealEstatePropertyManagement/FacilitiesManagement/FacilityBooking';
import { fieldsConfig as RentalAgreementsConfig, collectionName as RentalAgreementsCollection } from './components/Management/RealEstatePropertyManagement/Buildings/RentalAgreements';
import { fieldsConfig as PropertyTaxesConfig, collectionName as PropertyTaxesCollection } from './components/Management/RealEstatePropertyManagement/Buildings/PropertyTaxes';

// Project & Task Management
import { fieldsConfig as TimeTrackingConfig, collectionName as TimeTrackingCollection } from './components/Management/ProjectTaskManagement/Timesheets/TimeTracking';
import { fieldsConfig as TimesheetApprovalsConfig, collectionName as TimesheetApprovalsCollection } from './components/Management/ProjectTaskManagement/Timesheets/TimesheetApprovals';
import { fieldsConfig as BillableHoursConfig, collectionName as BillableHoursCollection } from './components/Management/ProjectTaskManagement/Timesheets/BillableHours';
import { fieldsConfig as TaskDependenciesConfig, collectionName as TaskDependenciesCollection } from './components/Management/ProjectTaskManagement/Tasks/TaskDependencies';
import { fieldsConfig as TaskDeadlinesConfig, collectionName as TaskDeadlinesCollection } from './components/Management/ProjectTaskManagement/Tasks/TaskDeadlines';
import { fieldsConfig as TaskAssignmentsConfig, collectionName as TaskAssignmentsCollection } from './components/Management/ProjectTaskManagement/Tasks/TaskAssignments';
import { fieldsConfig as ResourceAllocationConfig, collectionName as ResourceAllocationCollection } from './components/Management/ProjectTaskManagement/Projects/ResourceAllocation';
import { fieldsConfig as ProjectScopeConfig, collectionName as ProjectScopeCollection } from './components/Management/ProjectTaskManagement/Projects/ProjectScope';
import { fieldsConfig as ProjectPhasesConfig, collectionName as ProjectPhasesCollection } from './components/Management/ProjectTaskManagement/Projects/ProjectPhases';
import { fieldsConfig as MilestoneReportingConfig, collectionName as MilestoneReportingCollection } from './components/Management/ProjectTaskManagement/Milestones/MilestoneReporting';
import { fieldsConfig as MilestoneDependenciesConfig, collectionName as MilestoneDependenciesCollection } from './components/Management/ProjectTaskManagement/Milestones/MilestoneDependencies';
import { fieldsConfig as MilestoneCompletionConfig, collectionName as MilestoneCompletionCollection } from './components/Management/ProjectTaskManagement/Milestones/MilestoneCompletion';

// Operations & Asset Management
import { fieldsConfig as WarehouseLayoutsConfig, collectionName as WarehouseLayoutsCollection } from './components/Management/OperationsAssetManagement/Warehouses/WarehouseLayouts';
import { fieldsConfig as PickPackShipConfig, collectionName as PickPackShipCollection } from './components/Management/OperationsAssetManagement/Warehouses/PickPackShip';
import { fieldsConfig as InventoryLocationsConfig, collectionName as InventoryLocationsCollection } from './components/Management/OperationsAssetManagement/Warehouses/InventoryLocations';
import { fieldsConfig as SupplierPerformanceConfig, collectionName as SupplierPerformanceCollection } from './components/Management/OperationsAssetManagement/SupplyChain/SupplierPerformance';
import { fieldsConfig as OpOrderFulfillmentConfig, collectionName as OpOrderFulfillmentCollection } from './components/Management/OperationsAssetManagement/SupplyChain/OrderFulfillment';
import { fieldsConfig as LogisticsRoutesConfig, collectionName as LogisticsRoutesCollection } from './components/Management/OperationsAssetManagement/SupplyChain/LogisticsRoutes';
import { fieldsConfig as QualityStandardsConfig, collectionName as QualityStandardsCollection } from './components/Management/OperationsAssetManagement/QualityControl/QualityStandards';
import { fieldsConfig as NonConformanceReportsConfig, collectionName as NonConformanceReportsCollection } from './components/Management/OperationsAssetManagement/QualityControl/NonConformanceReports';
import { fieldsConfig as InspectionRecordsConfig, collectionName as InspectionRecordsCollection } from './components/Management/OperationsAssetManagement/QualityControl/InspectionRecords';
import { fieldsConfig as CorrectiveActionsConfig, collectionName as CorrectiveActionsCollection } from './components/Management/OperationsAssetManagement/QualityControl/CorrectiveActions';
import { fieldsConfig as ProductUpdatesConfig, collectionName as ProductUpdatesCollection } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/ProductUpdates';
import { fieldsConfig as ProductDiscontinuationConfig, collectionName as ProductDiscontinuationCollection } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/ProductDiscontinuation';
import { fieldsConfig as NewProductDevelopmentConfig, collectionName as NewProductDevelopmentCollection } from './components/Management/OperationsAssetManagement/ProductLifecycleManagement/NewProductDevelopment';
import { fieldsConfig as ProductCategoriesConfig, collectionName as ProductCategoriesCollection } from './components/Management/OperationsAssetManagement/ProductCatalog/ProductCategories';
import { fieldsConfig as ProductAttributesConfig, collectionName as ProductAttributesCollection } from './components/Management/OperationsAssetManagement/ProductCatalog/ProductAttributes';
import { fieldsConfig as OpPromotionsConfig, collectionName as OpPromotionsCollection } from './components/Management/OperationsAssetManagement/Pricing/Promotions';
import { fieldsConfig as OpDiscountsConfig, collectionName as OpDiscountsCollection } from './components/Management/OperationsAssetManagement/Pricing/Discounts';
import { fieldsConfig as WorkOrdersConfig, collectionName as WorkOrdersCollection } from './components/Management/OperationsAssetManagement/Maintenance/WorkOrders';
import { fieldsConfig as PreventiveMaintenanceSchedulesConfig, collectionName as PreventiveMaintenanceSchedulesCollection } from './components/Management/OperationsAssetManagement/Maintenance/PreventiveMaintenanceSchedules';
import { fieldsConfig as MaintenanceLogsConfig, collectionName as MaintenanceLogsCollection } from './components/Management/OperationsAssetManagement/Maintenance/MaintenanceLogs';
import { fieldsConfig as StockLevelsConfig, collectionName as StockLevelsCollection } from './components/Management/OperationsAssetManagement/Inventory/StockLevels';
import { fieldsConfig as ReorderPointsConfig, collectionName as ReorderPointsCollection } from './components/Management/OperationsAssetManagement/Inventory/ReorderPoints';
import { fieldsConfig as InventoryValuationConfig, collectionName as InventoryValuationCollection } from './components/Management/OperationsAssetManagement/Inventory/InventoryValuation';
import { fieldsConfig as InventoryAgingConfig, collectionName as InventoryAgingCollection } from './components/Management/OperationsAssetManagement/Inventory/InventoryAging';
import { fieldsConfig as AssetTrackingConfig, collectionName as AssetTrackingCollection } from './components/Management/OperationsAssetManagement/Assets/AssetTracking';
import { fieldsConfig as AssetDisposalConfig, collectionName as AssetDisposalCollection } from './components/Management/OperationsAssetManagement/Assets/AssetDisposal';
import { fieldsConfig as AssetDepreciationConfig, collectionName as AssetDepreciationCollection } from './components/Management/OperationsAssetManagement/Assets/AssetDepreciation';

// HR Management
import { fieldsConfig as ContractTypesConfig, collectionName as ContractTypesCollection } from './components/Management/HrManagement/WorkContracts/ContractTypes';
import { fieldsConfig as ContractTerminationsConfig, collectionName as ContractTerminationsCollection } from './components/Management/HrManagement/WorkContracts/ContractTerminations';
import { fieldsConfig as ContractRenewalsConfig, collectionName as ContractRenewalsCollection } from './components/Management/HrManagement/WorkContracts/ContractRenewals';
import { fieldsConfig as TrainingRecordsConfig, collectionName as TrainingRecordsCollection } from './components/Management/HrManagement/Training/TrainingRecords';
import { fieldsConfig as TrainingProgramsConfig, collectionName as TrainingProgramsCollection } from './components/Management/HrManagement/Training/TrainingPrograms';
import { fieldsConfig as CertificationsConfig, collectionName as CertificationsCollection } from './components/Management/HrManagement/Training/Certifications';
import { fieldsConfig as OfferLettersConfig, collectionName as OfferLettersCollection } from './components/Management/HrManagement/Recruitment/OfferLetters';
import { fieldsConfig as JobDescriptionsConfig, collectionName as JobDescriptionsCollection } from './components/Management/HrManagement/Recruitment/JobDescriptions';
import { fieldsConfig as InterviewSchedulingConfig, collectionName as InterviewSchedulingCollection } from './components/Management/HrManagement/Recruitment/InterviewScheduling';
import { fieldsConfig as ApplicantTrackingConfig, collectionName as ApplicantTrackingCollection } from './components/Management/HrManagement/Recruitment/ApplicantTracking';
import { fieldsConfig as ReviewSchedulesConfig, collectionName as ReviewSchedulesCollection } from './components/Management/HrManagement/PerformanceReviews/ReviewSchedules';
import { fieldsConfig as PromotionRecommandationsConfig, collectionName as PromotionRecommandationsCollection } from './components/Management/HrManagement/PerformanceReviews/PromotionRecommandations';
import { fieldsConfig as PerformanceMetricsConfig, collectionName as PerformanceMetricsCollection } from './components/Management/HrManagement/PerformanceReviews/PerformanceMetrics';
import { fieldsConfig as SalaryStructureConfig, collectionName as SalaryStructureCollection } from './components/Management/HrManagement/Payroll/SalaryStructure';
import { fieldsConfig as PayslipsConfig, collectionName as PayslipsCollection } from './components/Management/HrManagement/Payroll/Payslips';
import { fieldsConfig as OvertimeManagementConfig, collectionName as OvertimeManagementCollection } from './components/Management/HrManagement/Payroll/OvertimeManagement';
import { fieldsConfig as BonusesIncentivesConfig, collectionName as BonusesIncentivesCollection } from './components/Management/HrManagement/Payroll/BonusesIncentives';
import { fieldsConfig as SafetyTrainingConfig, collectionName as SafetyTrainingCollection } from './components/Management/HrManagement/HealthSafety/SafetyTraining';
import { fieldsConfig as EmploymentHistoryConfig, collectionName as EmploymentHistoryCollection } from './components/Management/HrManagement/EmployeeRecords/EmploymentHistory';
import { fieldsConfig as EmployeesListConfig, collectionName as EmployeesListCollection } from './components/Management/HrManagement/EmployeeRecords/EmployeesList';
import { fieldsConfig as EmergencyContactsConfig, collectionName as EmergencyContactsCollection } from './components/Management/HrManagement/EmployeeRecords/EmergencyContacts';
import { fieldsConfig as HrTimesheetApprovalsConfig, collectionName as HrTimesheetApprovalsCollection } from './components/Management/HrManagement/Attendance/TimesheetApprovals';
import { fieldsConfig as ShiftSchedulesConfig, collectionName as ShiftSchedulesCollection } from './components/Management/HrManagement/Attendance/ShiftSchedules';
import { fieldsConfig as LeaveBalancesConfig, collectionName as LeaveBalancesCollection } from './components/Management/HrManagement/Attendance/LeaveBalances';

// Information Technology
import { fieldsConfig as VersionControlConfig, collectionName as VersionControlCollection } from './components/Management/InformationTechnology/SoftwareManagement/VersionControl';
import { fieldsConfig as SoftwareDevelopmentLifecycleConfig, collectionName as SoftwareDevelopmentLifecycleCollection } from './components/Management/InformationTechnology/SoftwareManagement/SoftwareDevelopmentLifecycle';
import { fieldsConfig as BugTrackingConfig, collectionName as BugTrackingCollection } from './components/Management/InformationTechnology/SoftwareManagement/BugTracking';
import { fieldsConfig as NetworkTopologyConfig, collectionName as NetworkTopologyCollection } from './components/Management/InformationTechnology/NetworkManagement/NetworkTopology';
import { fieldsConfig as FirewallConfigurationsConfig, collectionName as FirewallConfigurationsCollection } from './components/Management/InformationTechnology/NetworkManagement/FirewallConfigurations';
import { fieldsConfig as BandwidthMonitoringConfig, collectionName as BandwidthMonitoringCollection } from './components/Management/InformationTechnology/NetworkManagement/BandwidthMonitoring';
import { fieldsConfig as SoftwareLicensesConfig, collectionName as SoftwareLicensesCollection } from './components/Management/InformationTechnology/ItAssets/SoftwareLicenses';
import { fieldsConfig as HardwareInventoryConfig, collectionName as HardwareInventoryCollection } from './components/Management/InformationTechnology/ItAssets/HardwareInventory';
import { fieldsConfig as AssetLifecycleConfig, collectionName as AssetLifecycleCollection } from './components/Management/InformationTechnology/ItAssets/AssetLifecycle';
import { fieldsConfig as SecurityAuditsConfig, collectionName as SecurityAuditsCollection } from './components/Management/InformationTechnology/DataSecurity/SecurityAudits';
import { fieldsConfig as DataEncryptionConfig, collectionName as DataEncryptionCollection } from './components/Management/InformationTechnology/DataSecurity/DataEncryption';
import { fieldsConfig as AccessControlsConfig, collectionName as AccessControlsCollection } from './components/Management/InformationTechnology/DataSecurity/AccessControls';

// External Relationships
import { fieldsConfig as VendorsListConfig, collectionName as VendorsListCollection } from './components/Management/ExternalRelationships/VendorManagement/VendorsList';
import { fieldsConfig as VendorScorecardsConfig, collectionName as VendorScorecardsCollection } from './components/Management/ExternalRelationships/VendorManagement/VendorScorecards';
import { fieldsConfig as VendorOnboardingConfig, collectionName as VendorOnboardingCollection } from './components/Management/ExternalRelationships/VendorManagement/VendorOnboarding';
import { fieldsConfig as VendorAssessmentsConfig, collectionName as VendorAssessmentsCollection } from './components/Management/ExternalRelationships/VendorManagement/VendorAssessments';
import { fieldsConfig as StakeholderFeedbackConfig, collectionName as StakeholderFeedbackCollection } from './components/Management/ExternalRelationships/StakeholderManagement/StakeholderFeedback';
import { fieldsConfig as StakeholderCommunicationConfig, collectionName as StakeholderCommunicationCollection } from './components/Management/ExternalRelationships/StakeholderManagement/StakeholderCommunication';
import { fieldsConfig as StakeholderAnalysisConfig, collectionName as StakeholderAnalysisCollection } from './components/Management/ExternalRelationships/StakeholderManagement/StakeholderAnalysis';
import { fieldsConfig as RevenueSharingAgreementsConfig, collectionName as RevenueSharingAgreementsCollection } from './components/Management/ExternalRelationships/Partners/RevenueSharingAgreements';
import { fieldsConfig as PartnerCollaborationConfig, collectionName as PartnerCollaborationCollection } from './components/Management/ExternalRelationships/Partners/PartnerCollaboration';
import { fieldsConfig as JointVenturesConfig, collectionName as JointVenturesCollection } from './components/Management/ExternalRelationships/Partners/JointVentures';

// Customer Support
import { fieldsConfig as TicketResolutionConfig, collectionName as TicketResolutionCollection } from './components/Management/CustomerSupport/SupportTickets/TicketResolution';
import { fieldsConfig as TicketPrioritizationConfig, collectionName as TicketPrioritizationCollection } from './components/Management/CustomerSupport/SupportTickets/TicketPrioritization';
import { fieldsConfig as TicketEscalationConfig, collectionName as TicketEscalationCollection } from './components/Management/CustomerSupport/SupportTickets/TicketEscalation';
import { fieldsConfig as CsServiceLevelAgreementsConfig, collectionName as CsServiceLevelAgreementsCollection } from './components/Management/CustomerSupport/SupportTickets/ServiceLevelAgreements';
import { fieldsConfig as ResolutionTimeTrackingConfig, collectionName as ResolutionTimeTrackingCollection } from './components/Management/CustomerSupport/SupportTickets/ResolutionTimeTracking';
import { fieldsConfig as WarrantyManagementConfig, collectionName as WarrantyManagementCollection } from './components/Management/CustomerSupport/ServiceContracts/WarrantyManagement';
import { fieldsConfig as SupportEntitlementsConfig, collectionName as SupportEntitlementsCollection } from './components/Management/CustomerSupport/ServiceContracts/SupportEntitlements';
import { fieldsConfig as ServiceRenewalsConfig, collectionName as ServiceRenewalsCollection } from './components/Management/CustomerSupport/ServiceContracts/ServiceRenewals';
import { fieldsConfig as CsContractualObligationsConfig, collectionName as CsContractualObligationsCollection } from './components/Management/CustomerSupport/ServiceContracts/ContractualObligations';
import { fieldsConfig as ProductReviewsConfig, collectionName as ProductReviewsCollection } from './components/Management/CustomerSupport/Feedback/ProductReviews';
import { fieldsConfig as NetPromoterScoreConfig, collectionName as NetPromoterScoreCollection } from './components/Management/CustomerSupport/Feedback/NetPromoterScore';
import { fieldsConfig as FeedbackAnalysisConfig, collectionName as FeedbackAnalysisCollection } from './components/Management/CustomerSupport/Feedback/FeedbackAnalysis';
import { fieldsConfig as CustomerSurveysConfig, collectionName as CustomerSurveysCollection } from './components/Management/CustomerSupport/Feedback/CustomerSurveys';

// Compliance & Legal
import { fieldsConfig as ContractObligationsConfig, collectionName as ContractObligationsCollection } from './components/Management/ComplianceLegal/Contracts/ContractObligations';
import { fieldsConfig as ContractRenewalRemindersConfig, collectionName as ContractRenewalRemindersCollection } from './components/Management/ComplianceLegal/Contracts/ContractRenewalReminders';
import { fieldsConfig as ContractTemplatesConfig, collectionName as ContractTemplatesCollection } from './components/Management/ComplianceLegal/Contracts/ContractTemplates';
import { fieldsConfig as ArbitrationRecordsConfig, collectionName as ArbitrationRecordsCollection } from './components/Management/ComplianceLegal/Disputes/ArbitrationRecords';
import { fieldsConfig as LegalProceedingsConfig, collectionName as LegalProceedingsCollection } from './components/Management/ComplianceLegal/Disputes/LegalProceedings';
import { fieldsConfig as SettlementAgreementsConfig, collectionName as SettlementAgreementsCollection } from './components/Management/ComplianceLegal/Disputes/SettlementAgreements';
import { fieldsConfig as ClaimsManagementConfig, collectionName as ClaimsManagementCollection } from './components/Management/ComplianceLegal/Insurance/ClaimsManagement';
import { fieldsConfig as InsurancePoliciesConfig, collectionName as InsurancePoliciesCollection } from './components/Management/ComplianceLegal/Insurance/InsurancePolicies';
import { fieldsConfig as PolicyRenewalsConfig, collectionName as PolicyRenewalsCollection } from './components/Management/ComplianceLegal/Insurance/PolicyRenewals';
import { fieldsConfig as LicensingAgreementsConfig, collectionName as LicensingAgreementsCollection } from './components/Management/ComplianceLegal/IntellectualProperty/LicensingAgreements';
import { fieldsConfig as PatentFilingsConfig, collectionName as PatentFilingsCollection } from './components/Management/ComplianceLegal/IntellectualProperty/PatentFilings';
import { fieldsConfig as TrademarkRegistrationConfig, collectionName as TrademarkRegistrationCollection } from './components/Management/ComplianceLegal/IntellectualProperty/TrademarkRegistration';
import { fieldsConfig as ComplianceAuditsConfig, collectionName as ComplianceAuditsCollection } from './components/Management/ComplianceLegal/RegulatoryCompliance/ComplianceAudits';
import { fieldsConfig as ComplianceReportingConfig, collectionName as ComplianceReportingCollection } from './components/Management/ComplianceLegal/RegulatoryCompliance/ComplianceReporting';
import { fieldsConfig as RegulatoryUpdatesConfig, collectionName as RegulatoryUpdatesCollection } from './components/Management/ComplianceLegal/RegulatoryCompliance/RegulatoryUpdates';

// Corporate Communication
import { fieldsConfig as AfterActionReportsConfig, collectionName as AfterActionReportsCollection } from './components/Management/CorporateCommunication/CrisisManagement/AfterActionReports';
import { fieldsConfig as CrisisCommunicationLogsConfig, collectionName as CrisisCommunicationLogsCollection } from './components/Management/CorporateCommunication/CrisisManagement/CrisisCommunicationLogs';
import { fieldsConfig as CrisisResponsePlansConfig, collectionName as CrisisResponsePlansCollection } from './components/Management/CorporateCommunication/CrisisManagement/CrisisResponsePlans';
import { fieldsConfig as MediaRelationsConfig, collectionName as MediaRelationsCollection } from './components/Management/CorporateCommunication/ExternalCommunication/MediaRelations';
import { fieldsConfig as PressReleasesConfig, collectionName as PressReleasesCollection } from './components/Management/CorporateCommunication/ExternalCommunication/PressReleases';
import { fieldsConfig as PublicStatementsConfig, collectionName as PublicStatementsCollection } from './components/Management/CorporateCommunication/ExternalCommunication/PublicStatements';
import { fieldsConfig as AnnouncementsConfig, collectionName as AnnouncementsCollection } from './components/Management/CorporateCommunication/InternalCommunication/Announcements';
import { fieldsConfig as EmployeePortalsConfig, collectionName as EmployeePortalsCollection } from './components/Management/CorporateCommunication/InternalCommunication/EmployeePortals';
import { fieldsConfig as NewslettersConfig, collectionName as NewslettersCollection } from './components/Management/CorporateCommunication/InternalCommunication/Newsletters';

// Corporate Social Responsibility
import { fieldsConfig as CommunityInvestmentConfig, collectionName as CommunityInvestmentCollection } from './components/Management/CorporateSocialResponsibility/CommunityOutreach/CommunityInvestment';
import { fieldsConfig as EmployeeVolunteeringConfig, collectionName as EmployeeVolunteeringCollection } from './components/Management/CorporateSocialResponsibility/CommunityOutreach/EmployeeVolunteering';
import { fieldsConfig as PhilanthropicActivitiesConfig, collectionName as PhilanthropicActivitiesCollection } from './components/Management/CorporateSocialResponsibility/CommunityOutreach/PhilanthropicActivities';
import { fieldsConfig as GreenInitiativesConfig, collectionName as GreenInitiativesCollection } from './components/Management/CorporateSocialResponsibility/SustainabilityInitiatives/GreenInitiatives';
import { fieldsConfig as ImpactReportsConfig, collectionName as ImpactReportsCollection } from './components/Management/CorporateSocialResponsibility/SustainabilityInitiatives/ImpactReports';
import { fieldsConfig as SustainableSourcingConfig, collectionName as SustainableSourcingCollection } from './components/Management/CorporateSocialResponsibility/SustainabilityInitiatives/SustainableSourcing';

// Crisis & Risk Management
import { fieldsConfig as BusinessContinuityPlansConfig, collectionName as BusinessContinuityPlansCollection } from './components/Management/CrisisRiskManagement/BusinessContinuity/BusinessContinuityPlans';
import { fieldsConfig as BusinessImpactAnalysisConfig, collectionName as BusinessImpactAnalysisCollection } from './components/Management/CrisisRiskManagement/BusinessContinuity/BusinessImpactAnalysis';
import { fieldsConfig as DisasterRecoveryPlansConfig, collectionName as DisasterRecoveryPlansCollection } from './components/Management/CrisisRiskManagement/BusinessContinuity/DisasterRecoveryPlans';
import { fieldsConfig as CrisisResponseTeamsConfig, collectionName as CrisisResponseTeamsCollection } from './components/Management/CrisisRiskManagement/CrisisManagement/CrisisResponseTeams';
import { fieldsConfig as CrisisScenariosConfig, collectionName as CrisisScenariosCollection } from './components/Management/CrisisRiskManagement/CrisisManagement/CrisisScenarios';
import { fieldsConfig as EmergencyCommunicationConfig, collectionName as EmergencyCommunicationCollection } from './components/Management/CrisisRiskManagement/CrisisManagement/EmergencyCommunication';
import { fieldsConfig as RiskIdentificationConfig, collectionName as RiskIdentificationCollection } from './components/Management/CrisisRiskManagement/RiskAssessments/RiskIdentification';
import { fieldsConfig as RiskResponsePlanningConfig, collectionName as RiskResponsePlanningCollection } from './components/Management/CrisisRiskManagement/RiskAssessments/RiskResponsePlanning';
import { fieldsConfig as RiskScoringConfig, collectionName as RiskScoringCollection } from './components/Management/CrisisRiskManagement/RiskAssessments/RiskScoring';

// Environmental, Social & Governance
import { fieldsConfig as EsgCorporateSocialResponsibilityConfig, collectionName as EsgCorporateSocialResponsibilityCollection } from './components/Management/EnvironmentalSocialGovernance/CommunityEngagement/CorporateSocialResponsibility';
import { fieldsConfig as NgoPartnershipsConfig, collectionName as NgoPartnershipsCollection } from './components/Management/EnvironmentalSocialGovernance/CommunityEngagement/NgoPartnerships';
import { fieldsConfig as VolunteerInitiativesConfig, collectionName as VolunteerInitiativesCollection } from './components/Management/EnvironmentalSocialGovernance/CommunityEngagement/VolunteerInitiatives';
import { fieldsConfig as EnergyAuditsConfig, collectionName as EnergyAuditsCollection } from './components/Management/EnvironmentalSocialGovernance/EnergyManagement/EnergyAudits';
import { fieldsConfig as EnergySavingsTrackingConfig, collectionName as EnergySavingsTrackingCollection } from './components/Management/EnvironmentalSocialGovernance/EnergyManagement/EnergySavingsTracking';
import { fieldsConfig as RenewableEnergyInitiativesConfig, collectionName as RenewableEnergyInitiativesCollection } from './components/Management/EnvironmentalSocialGovernance/EnergyManagement/RenewableEnergyInitiatives';
import { fieldsConfig as CarbonFootprintTrackingConfig, collectionName as CarbonFootprintTrackingCollection } from './components/Management/EnvironmentalSocialGovernance/SustainabilityReports/CarbonFootprintTracking';
import { fieldsConfig as EnergyConsumptionConfig, collectionName as EnergyConsumptionCollection } from './components/Management/EnvironmentalSocialGovernance/SustainabilityReports/EnergyConsumption';
import { fieldsConfig as WasteManagementConfig, collectionName as WasteManagementCollection } from './components/Management/EnvironmentalSocialGovernance/SustainabilityReports/WasteManagement';

// Governance & Strategy
import { fieldsConfig as ChangeLogsConfig, collectionName as ChangeLogsCollection } from './components/Management/GovernanceStrategy/AuditTrails/ChangeLogs';
import { fieldsConfig as GovComplianceAuditsConfig, collectionName as GovComplianceAuditsCollection } from './components/Management/GovernanceStrategy/AuditTrails/ComplianceAudits';
import { fieldsConfig as UserActivityTrackingConfig, collectionName as UserActivityTrackingCollection } from './components/Management/GovernanceStrategy/AuditTrails/UserActivityTracking';
import { fieldsConfig as MarketAnalysisConfig, collectionName as MarketAnalysisCollection } from './components/Management/GovernanceStrategy/BusinessPlans/MarketAnalysis';
import { fieldsConfig as StrategicGoalsConfig, collectionName as StrategicGoalsCollection } from './components/Management/GovernanceStrategy/BusinessPlans/StrategicGoals';
import { fieldsConfig as SwotAnalysisConfig, collectionName as SwotAnalysisCollection } from './components/Management/GovernanceStrategy/BusinessPlans/SwotAnalysis';
import { fieldsConfig as BoardResolutionsConfig, collectionName as BoardResolutionsCollection } from './components/Management/GovernanceStrategy/CorporateGovernance/BoardResolutions';
import { fieldsConfig as CompliancePoliciesConfig, collectionName as CompliancePoliciesCollection } from './components/Management/GovernanceStrategy/CorporateGovernance/CompliancePolicies';
import { fieldsConfig as InternalAuditsConfig, collectionName as InternalAuditsCollection } from './components/Management/GovernanceStrategy/CorporateGovernance/InternalAudits';
import { fieldsConfig as BenchmarkingConfig, collectionName as BenchmarkingCollection } from './components/Management/GovernanceStrategy/KpisAnalytics/Benchmarking';
import { fieldsConfig as PerformanceDashboardsConfig, collectionName as PerformanceDashboardsCollection } from './components/Management/GovernanceStrategy/KpisAnalytics/PerformanceDashboards';
import { fieldsConfig as PredictiveAnalyticsConfig, collectionName as PredictiveAnalyticsCollection } from './components/Management/GovernanceStrategy/KpisAnalytics/PredictiveAnalytics';
import { fieldsConfig as IncidentReportingConfig, collectionName as IncidentReportingCollection } from './components/Management/GovernanceStrategy/RiskManagement/IncidentReporting';
import { fieldsConfig as RiskAssessmentsConfig, collectionName as RiskAssessmentsCollection } from './components/Management/GovernanceStrategy/RiskManagement/RiskAssessments';
import { fieldsConfig as RiskMitigationPlansConfig, collectionName as RiskMitigationPlansCollection } from './components/Management/GovernanceStrategy/RiskManagement/RiskMitigationPlans';

// Intellectual & Human Capital
import { fieldsConfig as IdeaSubmissionConfig, collectionName as IdeaSubmissionCollection } from './components/Management/IntellectualHumanCapital/InnovationManagement/IdeaSubmission';
import { fieldsConfig as InnovationPipelineConfig, collectionName as InnovationPipelineCollection } from './components/Management/IntellectualHumanCapital/InnovationManagement/InnovationPipeline';
import { fieldsConfig as PatentManagementConfig, collectionName as PatentManagementCollection } from './components/Management/IntellectualHumanCapital/InnovationManagement/PatentManagement';
import { fieldsConfig as BestPracticesConfig, collectionName as BestPracticesCollection } from './components/Management/IntellectualHumanCapital/KnowledgeBase/BestPractices';
import { fieldsConfig as DocumentationManagementConfig, collectionName as DocumentationManagementCollection } from './components/Management/IntellectualHumanCapital/KnowledgeBase/DocumentationManagement';
import { fieldsConfig as SopsConfig, collectionName as SopsCollection } from './components/Management/IntellectualHumanCapital/KnowledgeBase/Sops';
import { fieldsConfig as ProjectMilestonesConfig, collectionName as ProjectMilestonesCollection } from './components/Management/IntellectualHumanCapital/RDProjects/ProjectMilestones';
import { fieldsConfig as ResearchOutputsConfig, collectionName as ResearchOutputsCollection } from './components/Management/IntellectualHumanCapital/RDProjects/ResearchOutputs';
import { fieldsConfig as ResearchProposalsConfig, collectionName as ResearchProposalsCollection } from './components/Management/IntellectualHumanCapital/RDProjects/ResearchProposals';

// Legal Compliance
import { fieldsConfig as ComplianceDeadlinesConfig, collectionName as ComplianceDeadlinesCollection } from './components/Management/LegalCompliance/ComplianceObligations/ComplianceDeadlines';
import { fieldsConfig as ObligationTrackingConfig, collectionName as ObligationTrackingCollection } from './components/Management/LegalCompliance/ComplianceObligations/ObligationTracking';
import { fieldsConfig as PenaltiesManagementConfig, collectionName as PenaltiesManagementCollection } from './components/Management/LegalCompliance/ComplianceObligations/PenaltiesManagement';
import { fieldsConfig as IpLicensingConfig, collectionName as IpLicensingCollection } from './components/Management/LegalCompliance/IntellectualProperty/IpLicensing';
import { fieldsConfig as IpLitigationConfig, collectionName as IpLitigationCollection } from './components/Management/LegalCompliance/IntellectualProperty/IpLitigation';
import { fieldsConfig as IpMonitoringConfig, collectionName as IpMonitoringCollection } from './components/Management/LegalCompliance/IntellectualProperty/IpMonitoring';
import { fieldsConfig as CaseManagementConfig, collectionName as CaseManagementCollection } from './components/Management/LegalCompliance/LegalCases/CaseManagement';
import { fieldsConfig as CourtAppearancesConfig, collectionName as CourtAppearancesCollection } from './components/Management/LegalCompliance/LegalCases/CourtAppearances';
import { fieldsConfig as LegalBriefsConfig, collectionName as LegalBriefsCollection } from './components/Management/LegalCompliance/LegalCases/LegalBriefs';

// Logistics & Supply Chain
import { fieldsConfig as CostAnalysisConfig, collectionName as CostAnalysisCollection } from './components/Management/LogisticsSupplyChain/LogisticsPartners/CostAnalysis';
import { fieldsConfig as PartnerAgreementsConfig, collectionName as PartnerAgreementsCollection } from './components/Management/LogisticsSupplyChain/LogisticsPartners/PartnerAgreements';
import { fieldsConfig as LogisticsPerformanceMetricsConfig, collectionName as LogisticsPerformanceMetricsCollection } from './components/Management/LogisticsSupplyChain/LogisticsPartners/PerformanceMetrics';
import { fieldsConfig as LogisticsOrderFulfillmentConfig, collectionName as LogisticsOrderFulfillmentCollection } from './components/Management/LogisticsSupplyChain/OrderManagement/OrderFulfillment';
import { fieldsConfig as OrderProcessingConfig, collectionName as OrderProcessingCollection } from './components/Management/LogisticsSupplyChain/OrderManagement/OrderProcessing';
import { fieldsConfig as OrderTrackingConfig, collectionName as OrderTrackingCollection } from './components/Management/LogisticsSupplyChain/OrderManagement/OrderTracking';
import { fieldsConfig as PurchaseOrdersConfig, collectionName as PurchaseOrdersCollection } from './components/Management/LogisticsSupplyChain/Procurement/PurchaseOrders';
import { fieldsConfig as PurchaseRequisitionsConfig, collectionName as PurchaseRequisitionsCollection } from './components/Management/LogisticsSupplyChain/Procurement/PurchaseRequisitions';
import { fieldsConfig as SupplierBidsConfig, collectionName as SupplierBidsCollection } from './components/Management/LogisticsSupplyChain/Procurement/SupplierBids';
import { fieldsConfig as CustomsDocumentationConfig, collectionName as CustomsDocumentationCollection } from './components/Management/LogisticsSupplyChain/Shipping/CustomsDocumentation';
import { fieldsConfig as FreightManagementConfig, collectionName as FreightManagementCollection } from './components/Management/LogisticsSupplyChain/Shipping/FreightManagement';
import { fieldsConfig as ShipmentTrackingConfig, collectionName as ShipmentTrackingCollection } from './components/Management/LogisticsSupplyChain/Shipping/ShipmentTracking';
import { fieldsConfig as ContractComplianceConfig, collectionName as ContractComplianceCollection } from './components/Management/LogisticsSupplyChain/SupplierContracts/ContractCompliance';
import { fieldsConfig as ContractNegotiationsConfig, collectionName as ContractNegotiationsCollection } from './components/Management/LogisticsSupplyChain/SupplierContracts/ContractNegotiations';
import { fieldsConfig as SupplierPerformanceEvaluationConfig, collectionName as SupplierPerformanceEvaluationCollection } from './components/Management/LogisticsSupplyChain/SupplierContracts/SupplierPerformanceEvaluation';

// Mergers & Acquisitions
import { fieldsConfig as DueDiligenceConfig, collectionName as DueDiligenceCollection } from './components/Management/MergersAcquisitions/MAStrategy/DueDiligence';
import { fieldsConfig as IntegrationPlansConfig, collectionName as IntegrationPlansCollection } from './components/Management/MergersAcquisitions/MAStrategy/IntegrationPlans';
import { fieldsConfig as TargetIdentificationConfig, collectionName as TargetIdentificationCollection } from './components/Management/MergersAcquisitions/MAStrategy/TargetIdentification';
import { fieldsConfig as CulturalIntegrationConfig, collectionName as CulturalIntegrationCollection } from './components/Management/MergersAcquisitions/PostMergerIntegration/CulturalIntegration';
import { fieldsConfig as SynergyTrackingConfig, collectionName as SynergyTrackingCollection } from './components/Management/MergersAcquisitions/PostMergerIntegration/SynergyTracking';
import { fieldsConfig as SystemsIntegrationConfig, collectionName as SystemsIntegrationCollection } from './components/Management/MergersAcquisitions/PostMergerIntegration/SystemsIntegration';

// Map entity slugs (from URL) to their configuration
const analysisRegistry = {
    // Financial Management
    'equity-investments': { fieldsConfig: EquityInvestmentsConfig, collectionName: EquityInvestmentsCollection, title: 'Equity Investments' },
    'fixed-income-investments': { fieldsConfig: FixedIncomeInvestmentsConfig, collectionName: FixedIncomeInvestmentsCollection, title: 'Fixed Income Investments' },
    'investment-returns': { fieldsConfig: InvestmentReturnsConfig, collectionName: InvestmentReturnsCollection, title: 'Investment Returns' },
    'tax-filings': { fieldsConfig: TaxFilingsConfig, collectionName: TaxFilingsCollection, title: 'Tax Filings' },
    'tax-credits': { fieldsConfig: TaxCreditsConfig, collectionName: TaxCreditsCollection, title: 'Tax Credits' },
    'withholding-taxes': { fieldsConfig: WithholdingTaxesConfig, collectionName: WithholdingTaxesCollection, title: 'Withholding Taxes' },
    'tax-audits': { fieldsConfig: TaxAuditsConfig, collectionName: TaxAuditsCollection, title: 'Tax Audits' },
    'vat-gst-records': { fieldsConfig: VatGstRecordsConfig, collectionName: VatGstRecordsCollection, title: 'VAT/GST Records' },
    'cash-flow-forecasts': { fieldsConfig: CashFlowForecastsConfig, collectionName: CashFlowForecastsCollection, title: 'Cash Flow Forecasts' },
    'liquidity-management': { fieldsConfig: LiquidityManagementConfig, collectionName: LiquidityManagementCollection, title: 'Liquidity Management' },
    'treasury-policies': { fieldsConfig: TreasuryPoliciesConfig, collectionName: TreasuryPoliciesCollection, title: 'Treasury Policies' },
    'budget-allocations': { fieldsConfig: BudgetAllocationsConfig, collectionName: BudgetAllocationsCollection, title: 'Budget Allocations' },
    'variance-analysis': { fieldsConfig: VarianceAnalysisConfig, collectionName: VarianceAnalysisCollection, title: 'Variance Analysis' },
    'forecasting': { fieldsConfig: ForecastingConfig, collectionName: ForecastingCollection, title: 'Forecasting' },
    'creditors-ledger': { fieldsConfig: CreditorsLedgerConfig, collectionName: CreditorsLedgerCollection, title: 'Creditors Ledger' },
    'payment-terms': { fieldsConfig: PaymentTermsConfig, collectionName: PaymentTermsCollection, title: 'Payment Terms' },
    'vendor-invoices': { fieldsConfig: VendorInvoicesConfig, collectionName: VendorInvoicesCollection, title: 'Vendor Invoices' },
    'customer-invoices': { fieldsConfig: CustomerInvoicesConfig, collectionName: CustomerInvoicesCollection, title: 'Customer Invoices' },
    'credit-management': { fieldsConfig: CreditManagementConfig, collectionName: CreditManagementCollection, title: 'Credit Management' },
    'debtor-aging': { fieldsConfig: DebtorAgingConfig, collectionName: DebtorAgingCollection, title: 'Debtor Aging' },
    'journal-entries': { fieldsConfig: JournalEntriesConfig, collectionName: JournalEntriesCollection, title: 'Journal Entries' },
    'chart-of-accounts': { fieldsConfig: ChartOfAccountsConfig, collectionName: ChartOfAccountsCollection, title: 'Chart Of Accounts' },
    'trial-balance': { fieldsConfig: TrialBalanceConfig, collectionName: TrialBalanceCollection, title: 'Trial Balance' },
    'fiscal-periods': { fieldsConfig: FiscalPeriodsConfig, collectionName: FiscalPeriodsCollection, title: 'Fiscal Periods' },
    'reconciliation-statements': { fieldsConfig: ReconciliationStatementsConfig, collectionName: ReconciliationStatementsCollection, title: 'Reconciliation Statements' },
    'bank-transfers': { fieldsConfig: BankTransfersConfig, collectionName: BankTransfersCollection, title: 'Bank Transfers' },
    'foreign-currency-accounts': { fieldsConfig: ForeignCurrencyAccountsConfig, collectionName: ForeignCurrencyAccountsCollection, title: 'Foreign Currency Accounts' },
    'loan-agreements': { fieldsConfig: LoanAgreementsConfig, collectionName: LoanAgreementsCollection, title: 'Loan Agreements' },
    'interest-payments': { fieldsConfig: InterestPaymentsConfig, collectionName: InterestPaymentsCollection, title: 'Interest Payments' },
    'debt-maturity-schedules': { fieldsConfig: DebtMaturitySchedulesConfig, collectionName: DebtMaturitySchedulesCollection, title: 'Debt Maturity Schedules' },

    // Sales & Marketing
    'order-status': { fieldsConfig: OrderStatusConfig, collectionName: OrderStatusCollection, title: 'Order Status' },
    'backorders': { fieldsConfig: BackordersConfig, collectionName: BackordersCollection, title: 'Backorders' },
    'sm-price-lists': { fieldsConfig: SMPriceListsConfig, collectionName: SMPriceListsCollection, title: 'Price Lists' },
    'promotional-pricing': { fieldsConfig: PromotionalPricingConfig, collectionName: PromotionalPricingCollection, title: 'Promotional Pricing' },
    'discount-structures': { fieldsConfig: DiscountStructuresConfig, collectionName: DiscountStructuresCollection, title: 'Discount Structures' },
    'win-loss-analysis': { fieldsConfig: WinLossAnalysisConfig, collectionName: WinLossAnalysisCollection, title: 'Win Loss Analysis' },
    'sales-forecasting': { fieldsConfig: SalesForecastingConfig, collectionName: SalesForecastingCollection, title: 'Sales Forecasting' },
    'opportunity-stages': { fieldsConfig: OpportunityStagesConfig, collectionName: OpportunityStagesCollection, title: 'Opportunity Stages' },
    'lead-scoring': { fieldsConfig: LeadScoringConfig, collectionName: LeadScoringCollection, title: 'Lead Scoring' },
    'lead-nurturing': { fieldsConfig: LeadNurturingConfig, collectionName: LeadNurturingCollection, title: 'Lead Nurturing' },
    'lead-conversion-rates': { fieldsConfig: LeadConversionRatesConfig, collectionName: LeadConversionRatesCollection, title: 'Lead Conversion Rates' },
    'recurring-invoices': { fieldsConfig: RecurringInvoicesConfig, collectionName: RecurringInvoicesCollection, title: 'Recurring Invoices' },
    'payment-tracking': { fieldsConfig: PaymentTrackingConfig, collectionName: PaymentTrackingCollection, title: 'Payment Tracking' },
    'invoice-templates': { fieldsConfig: InvoiceTemplatesConfig, collectionName: InvoiceTemplatesCollection, title: 'Invoice Templates' },
    'customer-segmentation': { fieldsConfig: CustomerSegmentationConfig, collectionName: CustomerSegmentationCollection, title: 'Customer Segmentation' },
    'customer-satisfaction': { fieldsConfig: CustomerSatisfactionConfig, collectionName: CustomerSatisfactionCollection, title: 'Customer Satisfaction' },
    'customer-history': { fieldsConfig: CustomerHistoryConfig, collectionName: CustomerHistoryCollection, title: 'Customer History' },
    'roi-analysis': { fieldsConfig: RoiAnalysisConfig, collectionName: RoiAnalysisCollection, title: 'Roi Analysis' },
    'campaign-planning': { fieldsConfig: CampaignPlanningConfig, collectionName: CampaignPlanningCollection, title: 'Campaign Planning' },
    'campaign-performance': { fieldsConfig: CampaignPerformanceConfig, collectionName: CampaignPerformanceCollection, title: 'Campaign Performance' },

    // Training & Development
    'training-needs-analysis': { fieldsConfig: TrainingNeedsAnalysisConfig, collectionName: TrainingNeedsAnalysisCollection, title: 'Training Needs Analysis' },
    'skill-assessments': { fieldsConfig: SkillAssessmentsConfig, collectionName: SkillAssessmentsCollection, title: 'Skill Assessments' },
    'development-plans': { fieldsConfig: DevelopmentPlansConfig, collectionName: DevelopmentPlansCollection, title: 'Development Plans' },
    'learning-paths': { fieldsConfig: LearningPathsConfig, collectionName: LearningPathsCollection, title: 'Learning Paths' },
    'course-catalog': { fieldsConfig: CourseCatalogConfig, collectionName: CourseCatalogCollection, title: 'Course Catalog' },
    'certification-tracking': { fieldsConfig: CertificationTrackingConfig, collectionName: CertificationTrackingCollection, title: 'Certification Tracking' },
    'mentorship-programs': { fieldsConfig: MentorshipProgramsConfig, collectionName: MentorshipProgramsCollection, title: 'Mentorship Programs' },
    'leadership-workshops': { fieldsConfig: LeadershipWorkshopsConfig, collectionName: LeadershipWorkshopsCollection, title: 'Leadership Workshops' },
    'executive-training': { fieldsConfig: ExecutiveTrainingConfig, collectionName: ExecutiveTrainingCollection, title: 'Executive Training' },

    // Real Estate
    'tenant-records': { fieldsConfig: TenantRecordsConfig, collectionName: TenantRecordsCollection, title: 'Tenant Records' },
    'lease-terms': { fieldsConfig: LeaseTermsConfig, collectionName: LeaseTermsCollection, title: 'Lease Terms' },
    'lease-renewals': { fieldsConfig: LeaseRenewalsConfig, collectionName: LeaseRenewalsCollection, title: 'Lease Renewals' },
    'utility-management': { fieldsConfig: UtilityManagementConfig, collectionName: UtilityManagementCollection, title: 'Utility Management' },
    'facility-maintenance': { fieldsConfig: FacilityMaintenanceConfig, collectionName: FacilityMaintenanceCollection, title: 'Facility Maintenance' },
    'facility-booking': { fieldsConfig: FacilityBookingConfig, collectionName: FacilityBookingCollection, title: 'Facility Booking' },
    'rental-agreements': { fieldsConfig: RentalAgreementsConfig, collectionName: RentalAgreementsCollection, title: 'Rental Agreements' },
    'property-taxes': { fieldsConfig: PropertyTaxesConfig, collectionName: PropertyTaxesCollection, title: 'Property Taxes' },

    // Project & Task Management
    'time-tracking': { fieldsConfig: TimeTrackingConfig, collectionName: TimeTrackingCollection, title: 'Time Tracking' },
    'timesheet-approvals': { fieldsConfig: TimesheetApprovalsConfig, collectionName: TimesheetApprovalsCollection, title: 'Timesheet Approvals' },
    'billable-hours': { fieldsConfig: BillableHoursConfig, collectionName: BillableHoursCollection, title: 'Billable Hours' },
    'task-dependencies': { fieldsConfig: TaskDependenciesConfig, collectionName: TaskDependenciesCollection, title: 'Task Dependencies' },
    'task-deadlines': { fieldsConfig: TaskDeadlinesConfig, collectionName: TaskDeadlinesCollection, title: 'Task Deadlines' },
    'task-assignments': { fieldsConfig: TaskAssignmentsConfig, collectionName: TaskAssignmentsCollection, title: 'Task Assignments' },
    'resource-allocation': { fieldsConfig: ResourceAllocationConfig, collectionName: ResourceAllocationCollection, title: 'Resource Allocation' },
    'project-scope': { fieldsConfig: ProjectScopeConfig, collectionName: ProjectScopeCollection, title: 'Project Scope' },
    'project-phases': { fieldsConfig: ProjectPhasesConfig, collectionName: ProjectPhasesCollection, title: 'Project Phases' },
    'milestone-reporting': { fieldsConfig: MilestoneReportingConfig, collectionName: MilestoneReportingCollection, title: 'Milestone Reporting' },
    'milestone-dependencies': { fieldsConfig: MilestoneDependenciesConfig, collectionName: MilestoneDependenciesCollection, title: 'Milestone Dependencies' },
    'milestone-completion': { fieldsConfig: MilestoneCompletionConfig, collectionName: MilestoneCompletionCollection, title: 'Milestone Completion' },

    // Operations & Asset Management
    'warehouse-layouts': { fieldsConfig: WarehouseLayoutsConfig, collectionName: WarehouseLayoutsCollection, title: 'Warehouse Layouts' },
    'pick-pack-ship': { fieldsConfig: PickPackShipConfig, collectionName: PickPackShipCollection, title: 'Pick Pack Ship' },
    'inventory-locations': { fieldsConfig: InventoryLocationsConfig, collectionName: InventoryLocationsCollection, title: 'Inventory Locations' },
    'supplier-performance': { fieldsConfig: SupplierPerformanceConfig, collectionName: SupplierPerformanceCollection, title: 'Supplier Performance' },
    'operations-order-fulfillment': { fieldsConfig: OpOrderFulfillmentConfig, collectionName: OpOrderFulfillmentCollection, title: 'Order Fulfillment (Ops)' },
    'logistics-routes': { fieldsConfig: LogisticsRoutesConfig, collectionName: LogisticsRoutesCollection, title: 'Logistics Routes' },
    'quality-standards': { fieldsConfig: QualityStandardsConfig, collectionName: QualityStandardsCollection, title: 'Quality Standards' },
    'non-conformance-reports': { fieldsConfig: NonConformanceReportsConfig, collectionName: NonConformanceReportsCollection, title: 'Non Conformance Reports' },
    'inspection-records': { fieldsConfig: InspectionRecordsConfig, collectionName: InspectionRecordsCollection, title: 'Inspection Records' },
    'corrective-actions': { fieldsConfig: CorrectiveActionsConfig, collectionName: CorrectiveActionsCollection, title: 'Corrective Actions' },
    'product-updates': { fieldsConfig: ProductUpdatesConfig, collectionName: ProductUpdatesCollection, title: 'Product Updates' },
    'product-discontinuation': { fieldsConfig: ProductDiscontinuationConfig, collectionName: ProductDiscontinuationCollection, title: 'Product Discontinuation' },
    'new-product-development': { fieldsConfig: NewProductDevelopmentConfig, collectionName: NewProductDevelopmentCollection, title: 'New Product Development' },
    'product-categories': { fieldsConfig: ProductCategoriesConfig, collectionName: ProductCategoriesCollection, title: 'Product Categories' },
    'product-attributes': { fieldsConfig: ProductAttributesConfig, collectionName: ProductAttributesCollection, title: 'Product Attributes' },
    'operations-promotions': { fieldsConfig: OpPromotionsConfig, collectionName: OpPromotionsCollection, title: 'Promotions (Ops)' },
    'operations-discounts': { fieldsConfig: OpDiscountsConfig, collectionName: OpDiscountsCollection, title: 'Discounts (Ops)' },
    'work-orders': { fieldsConfig: WorkOrdersConfig, collectionName: WorkOrdersCollection, title: 'Work Orders' },
    'preventive-maintenance-schedules': { fieldsConfig: PreventiveMaintenanceSchedulesConfig, collectionName: PreventiveMaintenanceSchedulesCollection, title: 'Preventive Maintenance Schedules' },
    'maintenance-logs': { fieldsConfig: MaintenanceLogsConfig, collectionName: MaintenanceLogsCollection, title: 'Maintenance Logs' },
    'stock-levels': { fieldsConfig: StockLevelsConfig, collectionName: StockLevelsCollection, title: 'Stock Levels' },
    'reorder-points': { fieldsConfig: ReorderPointsConfig, collectionName: ReorderPointsCollection, title: 'Reorder Points' },
    'inventory-valuation': { fieldsConfig: InventoryValuationConfig, collectionName: InventoryValuationCollection, title: 'Inventory Valuation' },
    'inventory-aging': { fieldsConfig: InventoryAgingConfig, collectionName: InventoryAgingCollection, title: 'Inventory Aging' },
    'asset-tracking': { fieldsConfig: AssetTrackingConfig, collectionName: AssetTrackingCollection, title: 'Asset Tracking' },
    'asset-disposal': { fieldsConfig: AssetDisposalConfig, collectionName: AssetDisposalCollection, title: 'Asset Disposal' },
    'asset-depreciation': { fieldsConfig: AssetDepreciationConfig, collectionName: AssetDepreciationCollection, title: 'Asset Depreciation' },

    // HR Management
    'contract-types': { fieldsConfig: ContractTypesConfig, collectionName: ContractTypesCollection, title: 'Contract Types' },
    'contract-terminations': { fieldsConfig: ContractTerminationsConfig, collectionName: ContractTerminationsCollection, title: 'Contract Terminations' },
    'contract-renewals': { fieldsConfig: ContractRenewalsConfig, collectionName: ContractRenewalsCollection, title: 'Contract Renewals' },
    'training-records': { fieldsConfig: TrainingRecordsConfig, collectionName: TrainingRecordsCollection, title: 'Training Records' },
    'training-programs': { fieldsConfig: TrainingProgramsConfig, collectionName: TrainingProgramsCollection, title: 'Training Programs' },
    'certifications': { fieldsConfig: CertificationsConfig, collectionName: CertificationsCollection, title: 'Certifications' },
    'offer-letters': { fieldsConfig: OfferLettersConfig, collectionName: OfferLettersCollection, title: 'Offer Letters' },
    'job-descriptions': { fieldsConfig: JobDescriptionsConfig, collectionName: JobDescriptionsCollection, title: 'Job Descriptions' },
    'interview-scheduling': { fieldsConfig: InterviewSchedulingConfig, collectionName: InterviewSchedulingCollection, title: 'Interview Scheduling' },
    'applicant-tracking': { fieldsConfig: ApplicantTrackingConfig, collectionName: ApplicantTrackingCollection, title: 'Applicant Tracking' },
    'review-schedules': { fieldsConfig: ReviewSchedulesConfig, collectionName: ReviewSchedulesCollection, title: 'Review Schedules' },
    'promotion-recommandations': { fieldsConfig: PromotionRecommandationsConfig, collectionName: PromotionRecommandationsCollection, title: 'Promotion Recommandations' },
    'performance-metrics': { fieldsConfig: PerformanceMetricsConfig, collectionName: PerformanceMetricsCollection, title: 'Performance Metrics' },
    'salary-structure': { fieldsConfig: SalaryStructureConfig, collectionName: SalaryStructureCollection, title: 'Salary Structure' },
    'payslips': { fieldsConfig: PayslipsConfig, collectionName: PayslipsCollection, title: 'Payslips' },
    'overtime-management': { fieldsConfig: OvertimeManagementConfig, collectionName: OvertimeManagementCollection, title: 'Overtime Management' },
    'bonuses-incentives': { fieldsConfig: BonusesIncentivesConfig, collectionName: BonusesIncentivesCollection, title: 'Bonuses Incentives' },
    'safety-training': { fieldsConfig: SafetyTrainingConfig, collectionName: SafetyTrainingCollection, title: 'Safety Training' },
    'employment-history': { fieldsConfig: EmploymentHistoryConfig, collectionName: EmploymentHistoryCollection, title: 'Employment History' },
    'employees-list': { fieldsConfig: EmployeesListConfig, collectionName: EmployeesListCollection, title: 'Employees List' },
    'emergency-contacts': { fieldsConfig: EmergencyContactsConfig, collectionName: EmergencyContactsCollection, title: 'Emergency Contacts' },
    'hr-timesheet-approvals': { fieldsConfig: HrTimesheetApprovalsConfig, collectionName: HrTimesheetApprovalsCollection, title: 'Timesheet Approvals (HR)' },
    'shift-schedules': { fieldsConfig: ShiftSchedulesConfig, collectionName: ShiftSchedulesCollection, title: 'Shift Schedules' },
    'leave-balances': { fieldsConfig: LeaveBalancesConfig, collectionName: LeaveBalancesCollection, title: 'Leave Balances' },

    // Information Technology
    'version-control': { fieldsConfig: VersionControlConfig, collectionName: VersionControlCollection, title: 'Version Control' },
    'software-development-lifecycle': { fieldsConfig: SoftwareDevelopmentLifecycleConfig, collectionName: SoftwareDevelopmentLifecycleCollection, title: 'Software Development Lifecycle' },
    'bug-tracking': { fieldsConfig: BugTrackingConfig, collectionName: BugTrackingCollection, title: 'Bug Tracking' },
    'network-topology': { fieldsConfig: NetworkTopologyConfig, collectionName: NetworkTopologyCollection, title: 'Network Topology' },
    'firewall-configurations': { fieldsConfig: FirewallConfigurationsConfig, collectionName: FirewallConfigurationsCollection, title: 'Firewall Configurations' },
    'bandwidth-monitoring': { fieldsConfig: BandwidthMonitoringConfig, collectionName: BandwidthMonitoringCollection, title: 'Bandwidth Monitoring' },
    'software-licenses': { fieldsConfig: SoftwareLicensesConfig, collectionName: SoftwareLicensesCollection, title: 'Software Licenses' },
    'hardware-inventory': { fieldsConfig: HardwareInventoryConfig, collectionName: HardwareInventoryCollection, title: 'Hardware Inventory' },
    'asset-lifecycle': { fieldsConfig: AssetLifecycleConfig, collectionName: AssetLifecycleCollection, title: 'Asset Lifecycle' },
    'security-audits': { fieldsConfig: SecurityAuditsConfig, collectionName: SecurityAuditsCollection, title: 'Security Audits' },
    'data-encryption': { fieldsConfig: DataEncryptionConfig, collectionName: DataEncryptionCollection, title: 'Data Encryption' },
    'access-controls': { fieldsConfig: AccessControlsConfig, collectionName: AccessControlsCollection, title: 'Access Controls' },

    // External Relationships
    'vendors-list': { fieldsConfig: VendorsListConfig, collectionName: VendorsListCollection, title: 'Vendors List' },
    'vendor-scorecards': { fieldsConfig: VendorScorecardsConfig, collectionName: VendorScorecardsCollection, title: 'Vendor Scorecards' },
    'vendor-onboarding': { fieldsConfig: VendorOnboardingConfig, collectionName: VendorOnboardingCollection, title: 'Vendor Onboarding' },
    'vendor-assessments': { fieldsConfig: VendorAssessmentsConfig, collectionName: VendorAssessmentsCollection, title: 'Vendor Assessments' },
    'stakeholder-feedback': { fieldsConfig: StakeholderFeedbackConfig, collectionName: StakeholderFeedbackCollection, title: 'Stakeholder Feedback' },
    'stakeholder-communication': { fieldsConfig: StakeholderCommunicationConfig, collectionName: StakeholderCommunicationCollection, title: 'Stakeholder Communication' },
    'stakeholder-analysis': { fieldsConfig: StakeholderAnalysisConfig, collectionName: StakeholderAnalysisCollection, title: 'Stakeholder Analysis' },
    'revenue-sharing-agreements': { fieldsConfig: RevenueSharingAgreementsConfig, collectionName: RevenueSharingAgreementsCollection, title: 'Revenue Sharing Agreements' },
    'partner-collaboration': { fieldsConfig: PartnerCollaborationConfig, collectionName: PartnerCollaborationCollection, title: 'Partner Collaboration' },
    'joint-ventures': { fieldsConfig: JointVenturesConfig, collectionName: JointVenturesCollection, title: 'Joint Ventures' },

    // Customer Support
    'ticket-resolution': { fieldsConfig: TicketResolutionConfig, collectionName: TicketResolutionCollection, title: 'Ticket Resolution' },
    'ticket-prioritization': { fieldsConfig: TicketPrioritizationConfig, collectionName: TicketPrioritizationCollection, title: 'Ticket Prioritization' },
    'ticket-escalation': { fieldsConfig: TicketEscalationConfig, collectionName: TicketEscalationCollection, title: 'Ticket Escalation' },
    'cs-service-level-agreements': { fieldsConfig: CsServiceLevelAgreementsConfig, collectionName: CsServiceLevelAgreementsCollection, title: 'Service Level Agreements (CS)' },
    'resolution-time-tracking': { fieldsConfig: ResolutionTimeTrackingConfig, collectionName: ResolutionTimeTrackingCollection, title: 'Resolution Time Tracking' },
    'warranty-management': { fieldsConfig: WarrantyManagementConfig, collectionName: WarrantyManagementCollection, title: 'Warranty Management' },
    'support-entitlements': { fieldsConfig: SupportEntitlementsConfig, collectionName: SupportEntitlementsCollection, title: 'Support Entitlements' },
    'service-renewals': { fieldsConfig: ServiceRenewalsConfig, collectionName: ServiceRenewalsCollection, title: 'Service Renewals' },
    'cs-contractual-obligations': { fieldsConfig: CsContractualObligationsConfig, collectionName: CsContractualObligationsCollection, title: 'Contractual Obligations (CS)' },
    'product-reviews': { fieldsConfig: ProductReviewsConfig, collectionName: ProductReviewsCollection, title: 'Product Reviews' },
    'net-promoter-score': { fieldsConfig: NetPromoterScoreConfig, collectionName: NetPromoterScoreCollection, title: 'Net Promoter Score' },
    'feedback-analysis': { fieldsConfig: FeedbackAnalysisConfig, collectionName: FeedbackAnalysisCollection, title: 'Feedback Analysis' },
    'customer-surveys': { fieldsConfig: CustomerSurveysConfig, collectionName: CustomerSurveysCollection, title: 'Customer Surveys' },

    // Compliance & Legal
    'contract-obligations': { fieldsConfig: ContractObligationsConfig, collectionName: ContractObligationsCollection, title: 'Contract Obligations' },
    'contract-renewal-reminders': { fieldsConfig: ContractRenewalRemindersConfig, collectionName: ContractRenewalRemindersCollection, title: 'Contract Renewal Reminders' },
    'contract-templates': { fieldsConfig: ContractTemplatesConfig, collectionName: ContractTemplatesCollection, title: 'Contract Templates' },
    'arbitration-records': { fieldsConfig: ArbitrationRecordsConfig, collectionName: ArbitrationRecordsCollection, title: 'Arbitration Records' },
    'legal-proceedings': { fieldsConfig: LegalProceedingsConfig, collectionName: LegalProceedingsCollection, title: 'Legal Proceedings' },
    'settlement-agreements': { fieldsConfig: SettlementAgreementsConfig, collectionName: SettlementAgreementsCollection, title: 'Settlement Agreements' },
    'claims-management': { fieldsConfig: ClaimsManagementConfig, collectionName: ClaimsManagementCollection, title: 'Claims Management' },
    'insurance-policies': { fieldsConfig: InsurancePoliciesConfig, collectionName: InsurancePoliciesCollection, title: 'Insurance Policies' },
    'policy-renewals': { fieldsConfig: PolicyRenewalsConfig, collectionName: PolicyRenewalsCollection, title: 'Policy Renewals' },
    'licensing-agreements': { fieldsConfig: LicensingAgreementsConfig, collectionName: LicensingAgreementsCollection, title: 'Licensing Agreements' },
    'patent-filings': { fieldsConfig: PatentFilingsConfig, collectionName: PatentFilingsCollection, title: 'Patent Filings' },
    'trademark-registration': { fieldsConfig: TrademarkRegistrationConfig, collectionName: TrademarkRegistrationCollection, title: 'Trademark Registration' },
    'compliance-audits': { fieldsConfig: ComplianceAuditsConfig, collectionName: ComplianceAuditsCollection, title: 'Compliance Audits' },
    'compliance-reporting': { fieldsConfig: ComplianceReportingConfig, collectionName: ComplianceReportingCollection, title: 'Compliance Reporting' },
    'regulatory-updates': { fieldsConfig: RegulatoryUpdatesConfig, collectionName: RegulatoryUpdatesCollection, title: 'Regulatory Updates' },

    // Corporate Communication
    'after-action-reports': { fieldsConfig: AfterActionReportsConfig, collectionName: AfterActionReportsCollection, title: 'After Action Reports' },
    'crisis-communication-logs': { fieldsConfig: CrisisCommunicationLogsConfig, collectionName: CrisisCommunicationLogsCollection, title: 'Crisis Communication Logs' },
    'crisis-response-plans': { fieldsConfig: CrisisResponsePlansConfig, collectionName: CrisisResponsePlansCollection, title: 'Crisis Response Plans' },
    'media-relations': { fieldsConfig: MediaRelationsConfig, collectionName: MediaRelationsCollection, title: 'Media Relations' },
    'press-releases': { fieldsConfig: PressReleasesConfig, collectionName: PressReleasesCollection, title: 'Press Releases' },
    'public-statements': { fieldsConfig: PublicStatementsConfig, collectionName: PublicStatementsCollection, title: 'Public Statements' },
    'announcements': { fieldsConfig: AnnouncementsConfig, collectionName: AnnouncementsCollection, title: 'Announcements' },
    'employee-portals': { fieldsConfig: EmployeePortalsConfig, collectionName: EmployeePortalsCollection, title: 'Employee Portals' },
    'newsletters': { fieldsConfig: NewslettersConfig, collectionName: NewslettersCollection, title: 'Newsletters' },

    // Corporate Social Responsibility
    'community-investment': { fieldsConfig: CommunityInvestmentConfig, collectionName: CommunityInvestmentCollection, title: 'Community Investment' },
    'employee-volunteering': { fieldsConfig: EmployeeVolunteeringConfig, collectionName: EmployeeVolunteeringCollection, title: 'Employee Volunteering' },
    'philanthropic-activities': { fieldsConfig: PhilanthropicActivitiesConfig, collectionName: PhilanthropicActivitiesCollection, title: 'Philanthropic Activities' },
    'green-initiatives': { fieldsConfig: GreenInitiativesConfig, collectionName: GreenInitiativesCollection, title: 'Green Initiatives' },
    'impact-reports': { fieldsConfig: ImpactReportsConfig, collectionName: ImpactReportsCollection, title: 'Impact Reports' },
    'sustainable-sourcing': { fieldsConfig: SustainableSourcingConfig, collectionName: SustainableSourcingCollection, title: 'Sustainable Sourcing' },

    // Crisis & Risk Management
    'business-continuity-plans': { fieldsConfig: BusinessContinuityPlansConfig, collectionName: BusinessContinuityPlansCollection, title: 'Business Continuity Plans' },
    'business-impact-analysis': { fieldsConfig: BusinessImpactAnalysisConfig, collectionName: BusinessImpactAnalysisCollection, title: 'Business Impact Analysis' },
    'disaster-recovery-plans': { fieldsConfig: DisasterRecoveryPlansConfig, collectionName: DisasterRecoveryPlansCollection, title: 'Disaster Recovery Plans' },
    'crisis-response-teams': { fieldsConfig: CrisisResponseTeamsConfig, collectionName: CrisisResponseTeamsCollection, title: 'Crisis Response Teams' },
    'crisis-scenarios': { fieldsConfig: CrisisScenariosConfig, collectionName: CrisisScenariosCollection, title: 'Crisis Scenarios' },
    'emergency-communication': { fieldsConfig: EmergencyCommunicationConfig, collectionName: EmergencyCommunicationCollection, title: 'Emergency Communication' },
    'risk-identification': { fieldsConfig: RiskIdentificationConfig, collectionName: RiskIdentificationCollection, title: 'Risk Identification' },
    'risk-response-planning': { fieldsConfig: RiskResponsePlanningConfig, collectionName: RiskResponsePlanningCollection, title: 'Risk Response Planning' },
    'risk-scoring': { fieldsConfig: RiskScoringConfig, collectionName: RiskScoringCollection, title: 'Risk Scoring' },

    // Environmental, Social & Governance
    'esg-corporate-social-responsibility': { fieldsConfig: EsgCorporateSocialResponsibilityConfig, collectionName: EsgCorporateSocialResponsibilityCollection, title: 'Corporate Social Responsibility (ESG)' },
    'ngo-partnerships': { fieldsConfig: NgoPartnershipsConfig, collectionName: NgoPartnershipsCollection, title: 'Ngo Partnerships' },
    'volunteer-initiatives': { fieldsConfig: VolunteerInitiativesConfig, collectionName: VolunteerInitiativesCollection, title: 'Volunteer Initiatives' },
    'energy-audits': { fieldsConfig: EnergyAuditsConfig, collectionName: EnergyAuditsCollection, title: 'Energy Audits' },
    'energy-savings-tracking': { fieldsConfig: EnergySavingsTrackingConfig, collectionName: EnergySavingsTrackingCollection, title: 'Energy Savings Tracking' },
    'renewable-energy-initiatives': { fieldsConfig: RenewableEnergyInitiativesConfig, collectionName: RenewableEnergyInitiativesCollection, title: 'Renewable Energy Initiatives' },
    'carbon-footprint-tracking': { fieldsConfig: CarbonFootprintTrackingConfig, collectionName: CarbonFootprintTrackingCollection, title: 'Carbon Footprint Tracking' },
    'energy-consumption': { fieldsConfig: EnergyConsumptionConfig, collectionName: EnergyConsumptionCollection, title: 'Energy Consumption' },
    'waste-management': { fieldsConfig: WasteManagementConfig, collectionName: WasteManagementCollection, title: 'Waste Management' },

    // Governance & Strategy
    'change-logs': { fieldsConfig: ChangeLogsConfig, collectionName: ChangeLogsCollection, title: 'Change Logs' },
    'gov-compliance-audits': { fieldsConfig: GovComplianceAuditsConfig, collectionName: GovComplianceAuditsCollection, title: 'Compliance Audits (Gov)' },
    'user-activity-tracking': { fieldsConfig: UserActivityTrackingConfig, collectionName: UserActivityTrackingCollection, title: 'User Activity Tracking' },
    'market-analysis': { fieldsConfig: MarketAnalysisConfig, collectionName: MarketAnalysisCollection, title: 'Market Analysis' },
    'strategic-goals': { fieldsConfig: StrategicGoalsConfig, collectionName: StrategicGoalsCollection, title: 'Strategic Goals' },
    'swot-analysis': { fieldsConfig: SwotAnalysisConfig, collectionName: SwotAnalysisCollection, title: 'Swot Analysis' },
    'board-resolutions': { fieldsConfig: BoardResolutionsConfig, collectionName: BoardResolutionsCollection, title: 'Board Resolutions' },
    'compliance-policies': { fieldsConfig: CompliancePoliciesConfig, collectionName: CompliancePoliciesCollection, title: 'Compliance Policies' },
    'internal-audits': { fieldsConfig: InternalAuditsConfig, collectionName: InternalAuditsCollection, title: 'Internal Audits' },
    'benchmarking': { fieldsConfig: BenchmarkingConfig, collectionName: BenchmarkingCollection, title: 'Benchmarking' },
    'performance-dashboards': { fieldsConfig: PerformanceDashboardsConfig, collectionName: PerformanceDashboardsCollection, title: 'Performance Dashboards' },
    'predictive-analytics': { fieldsConfig: PredictiveAnalyticsConfig, collectionName: PredictiveAnalyticsCollection, title: 'Predictive Analytics' },
    'incident-reporting': { fieldsConfig: IncidentReportingConfig, collectionName: IncidentReportingCollection, title: 'Incident Reporting' },
    'risk-assessments': { fieldsConfig: RiskAssessmentsConfig, collectionName: RiskAssessmentsCollection, title: 'Risk Assessments' },
    'risk-mitigation-plans': { fieldsConfig: RiskMitigationPlansConfig, collectionName: RiskMitigationPlansCollection, title: 'Risk Mitigation Plans' },

    // Intellectual & Human Capital
    'idea-submission': { fieldsConfig: IdeaSubmissionConfig, collectionName: IdeaSubmissionCollection, title: 'Idea Submission' },
    'innovation-pipeline': { fieldsConfig: InnovationPipelineConfig, collectionName: InnovationPipelineCollection, title: 'Innovation Pipeline' },
    'patent-management': { fieldsConfig: PatentManagementConfig, collectionName: PatentManagementCollection, title: 'Patent Management' },
    'best-practices': { fieldsConfig: BestPracticesConfig, collectionName: BestPracticesCollection, title: 'Best Practices' },
    'documentation-management': { fieldsConfig: DocumentationManagementConfig, collectionName: DocumentationManagementCollection, title: 'Documentation Management' },
    'sops': { fieldsConfig: SopsConfig, collectionName: SopsCollection, title: 'Sops' },
    'project-milestones': { fieldsConfig: ProjectMilestonesConfig, collectionName: ProjectMilestonesCollection, title: 'Project Milestones' },
    'research-outputs': { fieldsConfig: ResearchOutputsConfig, collectionName: ResearchOutputsCollection, title: 'Research Outputs' },
    'research-proposals': { fieldsConfig: ResearchProposalsConfig, collectionName: ResearchProposalsCollection, title: 'Research Proposals' },

    // Legal Compliance
    'compliance-deadlines': { fieldsConfig: ComplianceDeadlinesConfig, collectionName: ComplianceDeadlinesCollection, title: 'Compliance Deadlines' },
    'obligation-tracking': { fieldsConfig: ObligationTrackingConfig, collectionName: ObligationTrackingCollection, title: 'Obligation Tracking' },
    'penalties-management': { fieldsConfig: PenaltiesManagementConfig, collectionName: PenaltiesManagementCollection, title: 'Penalties Management' },
    'ip-licensing': { fieldsConfig: IpLicensingConfig, collectionName: IpLicensingCollection, title: 'Ip Licensing' },
    'ip-litigation': { fieldsConfig: IpLitigationConfig, collectionName: IpLitigationCollection, title: 'Ip Litigation' },
    'ip-monitoring': { fieldsConfig: IpMonitoringConfig, collectionName: IpMonitoringCollection, title: 'Ip Monitoring' },
    'case-management': { fieldsConfig: CaseManagementConfig, collectionName: CaseManagementCollection, title: 'Case Management' },
    'court-appearances': { fieldsConfig: CourtAppearancesConfig, collectionName: CourtAppearancesCollection, title: 'Court Appearances' },
    'legal-briefs': { fieldsConfig: LegalBriefsConfig, collectionName: LegalBriefsCollection, title: 'Legal Briefs' },

    // Logistics & Supply Chain
    'cost-analysis': { fieldsConfig: CostAnalysisConfig, collectionName: CostAnalysisCollection, title: 'Cost Analysis' },
    'partner-agreements': { fieldsConfig: PartnerAgreementsConfig, collectionName: PartnerAgreementsCollection, title: 'Partner Agreements' },
    'logistics-performance-metrics': { fieldsConfig: LogisticsPerformanceMetricsConfig, collectionName: LogisticsPerformanceMetricsCollection, title: 'Performance Metrics (Logistics)' },
    'logistics-order-fulfillment': { fieldsConfig: LogisticsOrderFulfillmentConfig, collectionName: LogisticsOrderFulfillmentCollection, title: 'Order Fulfillment (Logistics)' },
    'order-processing': { fieldsConfig: OrderProcessingConfig, collectionName: OrderProcessingCollection, title: 'Order Processing' },
    'order-tracking': { fieldsConfig: OrderTrackingConfig, collectionName: OrderTrackingCollection, title: 'Order Tracking' },
    'purchase-orders': { fieldsConfig: PurchaseOrdersConfig, collectionName: PurchaseOrdersCollection, title: 'Purchase Orders' },
    'purchase-requisitions': { fieldsConfig: PurchaseRequisitionsConfig, collectionName: PurchaseRequisitionsCollection, title: 'Purchase Requisitions' },
    'supplier-bids': { fieldsConfig: SupplierBidsConfig, collectionName: SupplierBidsCollection, title: 'Supplier Bids' },
    'customs-documentation': { fieldsConfig: CustomsDocumentationConfig, collectionName: CustomsDocumentationCollection, title: 'Customs Documentation' },
    'freight-management': { fieldsConfig: FreightManagementConfig, collectionName: FreightManagementCollection, title: 'Freight Management' },
    'shipment-tracking': { fieldsConfig: ShipmentTrackingConfig, collectionName: ShipmentTrackingCollection, title: 'Shipment Tracking' },
    'contract-compliance': { fieldsConfig: ContractComplianceConfig, collectionName: ContractComplianceCollection, title: 'Contract Compliance' },
    'contract-negotiations': { fieldsConfig: ContractNegotiationsConfig, collectionName: ContractNegotiationsCollection, title: 'Contract Negotiations' },
    'supplier-performance-evaluation': { fieldsConfig: SupplierPerformanceEvaluationConfig, collectionName: SupplierPerformanceEvaluationCollection, title: 'Supplier Performance Evaluation' },

    // Mergers & Acquisitions
    'due-diligence': { fieldsConfig: DueDiligenceConfig, collectionName: DueDiligenceCollection, title: 'Due Diligence' },
    'integration-plans': { fieldsConfig: IntegrationPlansConfig, collectionName: IntegrationPlansCollection, title: 'Integration Plans' },
    'target-identification': { fieldsConfig: TargetIdentificationConfig, collectionName: TargetIdentificationCollection, title: 'Target Identification' },
    'cultural-integration': { fieldsConfig: CulturalIntegrationConfig, collectionName: CulturalIntegrationCollection, title: 'Cultural Integration' },
    'synergy-tracking': { fieldsConfig: SynergyTrackingConfig, collectionName: SynergyTrackingCollection, title: 'Synergy Tracking' },
    'systems-integration': { fieldsConfig: SystemsIntegrationConfig, collectionName: SystemsIntegrationCollection, title: 'Systems Integration' },
};

export default analysisRegistry;
