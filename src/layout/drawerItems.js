
import WorkIcon from '@mui/icons-material/Work';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SecurityIcon from '@mui/icons-material/Security';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const drawerItems = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: <DashboardIcon />,
        description: "Personalized dashboard with customizable widgets."
    },
    {
        key: "financial-management",
        label: "Financial Management",
        icon: <MonetizationOnIcon />,
        description: "Manages the company’s financial operations.",
        children: [
            {
                key: "accounts-payable",
                label: "Accounts Payable",
                description: "Manages the company's obligations to pay off short-term debt to its creditors or suppliers.",
                children: [
                    { key: "vendor-invoices", label: "Vendor Invoices", description: "Records of bills received from suppliers for goods or services provided." },
                    { key: "payment-terms", label: "Payment Terms", description: "Conditions agreed upon with suppliers regarding when payments are due." },
                    { key: "creditors-ledger", label: "Creditors Ledger", description: "A subsidiary ledger that records the amounts owed to each creditor." }
                ]
            },
            {
                key: "accounts-receivable",
                label: "Accounts Receivable",
                description: "Tracks money owed to the company by its customers for goods or services delivered.",
                children: [
                    { key: "customer-invoices", label: "Customer Invoices", description: "Bills issued to customers requesting payment for products or services." },
                    { key: "credit-management", label: "Credit Management", description: "Processes involved in controlling and managing credit offered to customers." },
                    { key: "debtor-aging", label: "Debtor Aging", description: "An analysis of outstanding receivables, categorized by the length of time they have been outstanding." }
                ]
            },
            {
                key: "general-ledger",
                label: "General Ledger",
                description: "The master set of accounts that summarize all transactions occurring within the company.",
                children: [
                    { key: "journal-entries", label: "Journal Entries", description: "Records of financial transactions in the accounting system." },
                    { key: "chart-of-accounts", label: "Chart of Accounts", description: "A listing of all the accounts in the general ledger, organized by category." },
                    { key: "trial-balance", label: "Trial Balance", description: "A report that lists the balances of all ledger accounts to ensure they match and are correct." },
                    { key: "fiscal-periods", label: "Fiscal Periods", description: "Specific time frames (such as months, quarters, or years) used for accounting purposes." }
                ]
            },
            {
                key: "bank-accounts",
                label: "Bank Accounts",
                description: "Tracks the various accounts held by the company at financial institutions.",
                children: [
                    { key: "reconciliation-statements", label: "Reconciliation Statements", description: "Documents comparing bank statements with the company's ledger to ensure accuracy." },
                    { key: "bank-transfers", label: "Bank Transfers", description: "Records of the movement of funds between the company's bank accounts." },
                    { key: "foreign-currency-accounts", label: "Foreign Currency Accounts", description: "Accounts held in currencies other than the company's primary currency." }
                ]
            },
            {
                key: "debts",
                label: "Debts",
                description: "Manages all the company's financial obligations, including loans and bonds.",
                children: [
                    { key: "loan-agreements", label: "Loan Agreements", description: "Legal documents outlining the terms under which a loan is borrowed." },
                    { key: "interest-payments", label: "Interest Payments", description: "Schedules and records of interest paid on loans." },
                    { key: "debt-maturity-schedules", label: "Debt Maturity Schedules", description: "Timelines showing when the company’s debt obligations are due." }
                ]
            },
            {
                key: "investments",
                label: "Investments",
                description: "Manages the company’s financial investments in various assets.",
                children: [
                    { key: "equity-investments", label: "Equity Investments", description: "Shares held in other companies or organizations." },
                    { key: "fixed-income-investments", label: "Fixed-Income Investments", description: "Investments that pay a fixed rate of return, such as bonds." },
                    { key: "investment-returns", label: "Investment Returns", description: "The gains or losses realized from investment activities." }
                ]
            },
            {
                key: "taxation",
                label: "Taxation",
                description: "Handles the company’s tax-related activities, including compliance and filings.",
                children: [
                    { key: "tax-filings", label: "Tax Filings", description: "Documentation and records submitted to tax authorities to report income, deductions, and taxes owed." },
                    { key: "tax-credits", label: "Tax Credits", description: "Deductions from total tax liabilities granted under certain conditions." },
                    { key: "withholding-taxes", label: "Withholding Taxes", description: "Taxes that are withheld from payments made to employees or contractors." },
                    { key: "tax-audits", label: "Tax Audits", description: "Reviews conducted by tax authorities to ensure accurate tax reporting." },
                    { key: "vat-gst-records", label: "VAT/GST Records", description: "Documentation related to value-added tax or goods and services tax." }
                ]
            },
            {
                key: "budget",
                label: "Budget",
                description: "Plans and monitors the company’s financial expenditures and revenues.",
                children: [
                    { key: "budget-allocations", label: "Budget Allocations", description: "Distribution of the company’s resources among various departments or projects." },
                    { key: "variance-analysis", label: "Variance Analysis", description: "The process of comparing budgeted amounts to actual results to identify discrepancies." },
                    { key: "forecasting", label: "Forecasting", description: "Predicting future financial performance based on historical data and trends." }
                ]
            },
            {
                key: "treasury-management",
                label: "Treasury Management",
                description: "Manages the company’s cash flow, investments, and financial risks.",
                children: [
                    { key: "cash-flow-forecasts", label: "Cash Flow Forecasts", description: "Predictions of future cash inflows and outflows." },
                    { key: "liquidity-management", label: "Liquidity Management", description: "Ensures the company has enough cash to meet its short-term obligations." },
                    { key: "treasury-policies", label: "Treasury Policies", description: "Guidelines for managing the company’s financial resources and risks." }
                ]
            }
        ]
    },
    {
        key: "operations-asset-management",
        label: "Operations and Asset Management",
        icon: <InventoryIcon />,
        description: "Manages company operations and assets.",
        children: [
            {
                key: "product-catalog",
                label: "Product Catalog",
                description: "Maintains the list of products offered by the company.",
                children: [
                    { key: "product-details", label: "Product Details", description: "Information about each product, including name, description, and category." },
                    { key: "product-categories", label: "Product Categories", description: "Classification of products into different categories." },
                    { key: "product-attributes", label: "Product Attributes", description: "Additional attributes like color, size, weight, etc., associated with products." }
                ]
            },
            {
                key: "pricing-management",
                label: "Pricing Management",
                description: "Handles product pricing strategies and updates.",
                children: [
                    { key: "price-lists", label: "Price Lists", description: "List of prices for all products." },
                    { key: "discounts", label: "Discounts", description: "Special pricing or discounts applied to products." },
                    { key: "promotions", label: "Promotions", description: "Temporary promotional pricing strategies." }
                ]
            },
            {
                key: "product-lifecycle-management",
                label: "Product Lifecycle Management",
                description: "Oversees the lifecycle of products from development to discontinuation.",
                children: [
                    { key: "new-product-development", label: "New Product Development", description: "Processes involved in bringing a new product to market." },
                    { key: "product-updates", label: "Product Updates", description: "Managing updates and improvements to existing products." },
                    { key: "product-discontinuation", label: "Product Discontinuation", description: "Processes for phasing out products no longer offered by the company." }
                ]
            },
            {
                key: "inventory",
                label: "Inventory",
                description: "Tracks the quantity and value of items that the company holds for sale or production.",
                children: [
                    { key: "stock-levels", label: "Stock Levels", description: "The amount of each inventory item currently held by the company." },
                    { key: "reorder-points", label: "Reorder Points", description: "The inventory level at which new stock must be ordered to avoid running out." },
                    { key: "inventory-valuation", label: "Inventory Valuation", description: "The monetary value of the inventory based on costing methods like FIFO, LIFO, etc." },
                    { key: "inventory-aging", label: "Inventory Aging", description: "An analysis of how long items have been held in inventory without being sold or used." }
                ]
            },
            {
                key: "assets",
                label: "Assets",
                description: "Manages the company’s physical and intangible assets, like equipment and patents.",
                children: [
                    { key: "asset-depreciation", label: "Asset Depreciation", description: "The process of allocating the cost of a tangible asset over its useful life." },
                    { key: "asset-disposal", label: "Asset Disposal", description: "The process of selling, discarding, or otherwise getting rid of company assets." },
                    { key: "asset-tracking", label: "Asset Tracking", description: "Keeping records of the location, usage, and condition of company assets." }
                ]
            },
            {
                key: "maintenance",
                label: "Maintenance",
                description: "Ensures that company assets and equipment are kept in working order.",
                children: [
                    { key: "preventive-maintenance-schedules", label: "Preventive Maintenance Schedules", description: "Timetables for routine maintenance tasks to prevent equipment failure." },
                    { key: "maintenance-logs", label: "Maintenance Logs", description: "Records of all maintenance activities performed on assets." },
                    { key: "work-orders", label: "Work Orders", description: "Instructions issued for maintenance tasks to be carried out." }
                ]
            },
            {
                key: "supply-chain",
                label: "Supply Chain",
                description: "Oversees the flow of goods and services from suppliers to customers.",
                children: [
                    { key: "supplier-performance", label: "Supplier Performance", description: "Evaluates how well suppliers meet the company's requirements." },
                    { key: "order-fulfillment", label: "Order Fulfillment", description: "The complete process from order receipt to delivery to the customer." },
                    { key: "logistics-routes", label: "Logistics Routes", description: "Planned paths for the transportation of goods." }
                ]
            },
            {
                key: "warehouses",
                label: "Warehouses",
                description: "Manages storage facilities where inventory is held before distribution.",
                children: [
                    { key: "warehouse-layouts", label: "Warehouse Layouts", description: "The arrangement of inventory within the warehouse for optimal efficiency." },
                    { key: "inventory-locations", label: "Inventory Locations", description: "Specific places within the warehouse where items are stored." },
                    { key: "pick-pack-ship", label: "Pick, Pack, and Ship", description: "Processes involved in selecting, packaging, and shipping inventory to customers." }
                ]
            },
            {
                key: "quality-control",
                label: "Quality Control",
                description: "Ensures products and services meet certain standards before reaching the customer.",
                children: [
                    { key: "inspection-records", label: "Inspection Records", description: "Documentation of product inspections to ensure quality." },
                    { key: "quality-standards", label: "Quality Standards", description: "Established criteria that products or services must meet." },
                    { key: "non-conformance-reports", label: "Non-Conformance Reports", description: "Reports detailing instances where products or processes failed to meet quality standards." },
                    { key: "corrective-actions", label: "Corrective Actions", description: "Steps taken to fix issues identified during quality inspections." }
                ]
            }
        ]
    },
    {
        key: "hr-management",
        label: "Human Resources Management",
        icon: <PeopleAltIcon />,
        description: "Manages employee-related functions and activities.",
        children: [
            {
                key: "employee-records",
                label: "Employee Records",
                description: "Stores detailed information about each employee.",
                children: [
                    { key: "employees-list", label: "Employees List", description: "Basic data like name, address, and contact details." },
                    { key: "emergency-contacts", label: "Emergency Contacts", description: "People to be notified in case of an emergency involving the employee." },
                    { key: "employment-history", label: "Employment History", description: "The record of an employee’s past job roles and experience." }
                ]
            },
            {
                key: "work-contracts",
                label: "Work Contracts",
                description: "Tracks agreements between the company and its employees.",
                children: [
                    { key: "contract-types", label: "Contract Types", description: "Different forms of employment contracts, such as full-time, part-time, or temporary." },
                    { key: "contract-renewals", label: "Contract Renewals", description: "Processes for extending the duration of an employee’s contract." },
                    { key: "contract-terminations", label: "Contract Terminations", description: "Procedures for ending an employee’s contract, either voluntarily or involuntarily." }
                ]
            },
            {
                key: "payroll",
                label: "Payroll",
                description: "Manages the process of paying employees for their work.",
                children: [
                    { key: "salary-structure", label: "Salary Structure", description: "The breakdown of employee compensation, including base pay and bonuses." },
                    { key: "payslips", label: "Payslips", description: "Documents provided to employees detailing their earnings and deductions." },
                    { key: "overtime-management", label: "Overtime Management", description: "Tracking and compensating employees for hours worked beyond their standard schedule." },
                    { key: "bonuses-incentives", label: "Bonuses and Incentives", description: "Additional pay or rewards given to employees based on performance." }
                ]
            },
            {
                key: "recruitment",
                label: "Recruitment",
                description: "Oversees the process of attracting and hiring new employees.",
                children: [
                    { key: "job-descriptions", label: "Job Descriptions", description: "Detailed descriptions of the duties and responsibilities of each role." },
                    { key: "applicant-tracking", label: "Applicant Tracking", description: "Systems for managing job applications and the recruitment process." },
                    { key: "interview-scheduling", label: "Interview Scheduling", description: "Organizing times and locations for candidate interviews." },
                    { key: "offer-letters", label: "Offer Letters", description: "Formal job offers extended to successful candidates." }
                ]
            },
            {
                key: "training",
                label: "Training",
                description: "Manages employee development through education and skill-building programs.",
                children: [
                    { key: "training-programs", label: "Training Programs", description: "Structured courses designed to improve employee skills and knowledge." },
                    { key: "training-records", label: "Training Records", description: "Documentation of training sessions attended by employees." },
                    { key: "certifications", label: "Certifications", description: "Official recognitions of an employee's expertise in a particular area." }
                ]
            },
            {
                key: "performance-reviews",
                label: "Performance Reviews",
                description: "Evaluates employees’ job performance and provides feedback.",
                children: [
                    { key: "review-schedules", label: "Review Schedules", description: "Timelines for conducting regular performance evaluations." },
                    { key: "performance-metrics", label: "Performance Metrics", description: "Criteria used to assess employee performance." },
                    { key: "promotion-recommendations", label: "Promotion Recommendations", description: "Suggestions for advancing employees to higher roles based on performance." }
                ]
            },
            {
                key: "attendance",
                label: "Attendance",
                description: "Tracks employee presence and time at work.",
                children: [
                    { key: "leave-balances", label: "Leave Balances", description: "The amount of vacation, sick leave, or other time off that an employee has available." },
                    { key: "timesheet-approvals", label: "Timesheet Approvals", description: "The process of verifying and authorizing recorded work hours." },
                    { key: "shift-schedules", label: "Shift Schedules", description: "Plans that assign employees to specific work hours or shifts." }
                ]
            },
            {
                key: "health-safety",
                label: "Health & Safety",
                description: "Ensures a safe working environment and compliance with safety regulations.",
                children: [
                    { key: "safety-training", label: "Safety Training", description: "Programs designed to educate employees on workplace safety practices." },
                    { key: "incident-reports", label: "Incident Reports", description: "Documentation of accidents, injuries, or unsafe conditions." },
                    { key: "compliance-audits", label: "Compliance Audits", description: "Inspections to ensure adherence to health and safety regulations." }
                ]
            }
        ]
    },
    {
        key: "compliance-legal",
        label: "Compliance and Legal",
        icon: <SecurityIcon />,
        description: "Ensures the company adheres to legal and regulatory requirements.",
        children: [
            {
                key: "contracts",
                label: "Contracts",
                description: "Manages all legal agreements with clients, suppliers, and partners.",
                children: [
                    { key: "contract-templates", label: "Contract Templates", description: "Predefined formats used to quickly create standard contracts." },
                    { key: "contract-obligations", label: "Contract Obligations", description: "Specific duties and responsibilities outlined in contracts." },
                    { key: "contract-renewal-reminders", label: "Contract Renewal Reminders", description: "Alerts for when a contract is approaching its expiration date." }
                ]
            },
            {
                key: "regulatory-compliance",
                label: "Regulatory Compliance",
                description: "Ensures that the company follows all laws and regulations.",
                children: [
                    { key: "compliance-audits", label: "Compliance Audits", description: "Reviews conducted to verify adherence to legal and regulatory standards." },
                    { key: "compliance-reporting", label: "Compliance Reporting", description: "Documentation submitted to regulatory bodies to demonstrate compliance." },
                    { key: "regulatory-updates", label: "Regulatory Updates", description: "Information on changes in laws or regulations that may affect the company." }
                ]
            },
            {
                key: "insurance",
                label: "Insurance",
                description: "Manages policies that protect the company against various risks.",
                children: [
                    { key: "insurance-policies", label: "Insurance Policies", description: "Documents outlining the terms of coverage provided by insurance companies." },
                    { key: "claims-management", label: "Claims Management", description: "The process of submitting and handling claims with insurers." },
                    { key: "policy-renewals", label: "Policy Renewals", description: "Procedures for extending the duration of an insurance policy." }
                ]
            },
            {
                key: "intellectual-property",
                label: "Intellectual Property",
                description: "Protects the company’s creations and inventions.",
                children: [
                    { key: "patent-filings", label: "Patent Filings", description: "Applications submitted to obtain patents for inventions." },
                    { key: "trademark-registrations", label: "Trademark Registrations", description: "Processes for securing legal protection for brand names, logos, and symbols." },
                    { key: "licensing-agreements", label: "Licensing Agreements", description: "Contracts that grant others permission to use the company’s intellectual property." }
                ]
            },
            {
                key: "disputes",
                label: "Disputes",
                description: "Manages legal conflicts involving the company.",
                children: [
                    { key: "legal-proceedings", label: "Legal Proceedings", description: "Formal legal actions taken in court to resolve disputes." },
                    { key: "settlement-agreements", label: "Settlement Agreements", description: "Contracts that resolve disputes without further legal action." },
                    { key: "arbitration-records", label: "Arbitration Records", description: "Documentation of arbitration proceedings used to resolve conflicts outside of court." }
                ]
            }
        ]
    },
    {
        key: "sales-marketing",
        label: "Sales and Marketing",
        icon: <InsightsIcon />,
        description: "Manages the company's sales and marketing activities.",
        children: [
            {
                key: "clients-customers",
                label: "Clients/Customers",
                description: "Manages relationships with individuals or organizations that purchase from the company.",
                children: [
                    { key: "customer-segmentation", label: "Customer Segmentation", description: "Categorizing customers into groups based on similar characteristics." },
                    { key: "customer-history", label: "Customer History", description: "A record of past interactions, purchases, and communications with customers." },
                    { key: "customer-satisfaction", label: "Customer Satisfaction", description: "Metrics and feedback regarding how well the company meets customer needs." }
                ]
            },
            {
                key: "leads",
                label: "Leads",
                description: "Tracks potential customers who have shown interest in the company’s products or services.",
                children: [
                    { key: "lead-scoring", label: "Lead Scoring", description: "A system to prioritize leads based on their likelihood to convert into customers." },
                    { key: "lead-nurturing", label: "Lead Nurturing", description: "Strategies to build relationships with leads through targeted communication." },
                    { key: "lead-conversion-rates", label: "Lead Conversion Rates", description: "The percentage of leads that turn into paying customers." }
                ]
            },
            {
                key: "opportunities",
                label: "Opportunities",
                description: "Tracks sales prospects and potential deals that the company is working on.",
                children: [
                    { key: "opportunity-stages", label: "Opportunity Stages", description: "The different phases a sales opportunity goes through from initial contact to closing." },
                    { key: "sales-forecasting", label: "Sales Forecasting", description: "Predicting future sales based on current opportunities and market trends." },
                    { key: "win-loss-analysis", label: "Win/Loss Analysis", description: "An assessment of why certain sales opportunities were won or lost." }
                ]
            },
            {
                key: "campaigns",
                label: "Campaigns",
                description: "Manages marketing initiatives designed to promote products or services.",
                children: [
                    { key: "campaign-planning", label: "Campaign Planning", description: "The process of organizing and preparing a marketing campaign." },
                    { key: "campaign-performance", label: "Campaign Performance", description: "Metrics that evaluate the success of marketing efforts." },
                    { key: "roi-analysis", label: "ROI Analysis", description: "Calculating the return on investment for marketing campaigns." }
                ]
            },
            {
                key: "pricing",
                label: "Pricing",
                description: "Determines the value at which products or services will be sold.",
                children: [
                    { key: "price-lists", label: "Price Lists", description: "Catalogs of prices for products or services offered by the company." },
                    { key: "discount-structures", label: "Discount Structures", description: "Pricing strategies that include discounts for certain customers or order volumes." },
                    { key: "promotional-pricing", label: "Promotional Pricing", description: "Temporary pricing strategies designed to increase sales during promotions." }
                ]
            },
            {
                key: "sales-orders",
                label: "Sales Orders",
                description: "Manages the process of taking and fulfilling customer orders.",
                children: [
                    { key: "order-processing", label: "Order Processing", description: "The steps involved in verifying, approving, and executing customer orders." },
                    { key: "order-status", label: "Order Status", description: "Updates on the current stage of a customer’s order, from receipt to delivery." },
                    { key: "backorders", label: "Backorders", description: "Orders that cannot be fulfilled immediately due to stock shortages." }
                ]
            },
            {
                key: "invoices",
                label: "Invoices",
                description: "Bills sent to customers detailing the amount owed for goods or services.",
                children: [
                    { key: "invoice-templates", label: "Invoice Templates", description: "Predefined formats for creating standard invoices." },
                    { key: "payment-tracking", label: "Payment Tracking", description: "Monitoring the status of payments received against issued invoices." },
                    { key: "recurring-invoices", label: "Recurring Invoices", description: "Invoices that are issued regularly, such as for subscription services." }
                ]
            }
        ]
    },
    {
        key: "project-task-management",
        label: "Project and Task Management",
        icon: <WorkIcon />,
        description: "Manages projects and tasks within the company.",
        children: [
            {
                key: "my-tasks",
                label: "My Tasks",
                description: "View and manage tasks assigned to you."
            },
            {
                key: "projects",
                label: "Projects",
                description: "Manages temporary efforts with specific objectives, timelines, and resources.",
                children: [
                    { key: "project-scope", label: "Project Scope", description: "The overall objectives, deliverables, and boundaries of a project." },
                    { key: "resource-allocation", label: "Resource Allocation", description: "Assigning available resources (such as staff and equipment) to project tasks." },
                    { key: "project-phases", label: "Project Phases", description: "The stages of project completion, from initiation to closure." }
                ]
            },
            {
                key: "tasks",
                label: "Tasks",
                description: "Tracks individual activities within a project that need to be completed.",
                children: [
                    { key: "task-dependencies", label: "Task Dependencies", description: "Relationships between tasks where one must be completed before another can begin." },
                    { key: "task-assignments", label: "Task Assignments", description: "The process of assigning specific tasks to team members." },
                    { key: "task-deadlines", label: "Task Deadlines", description: "The dates by which tasks must be completed." }
                ]
            },
            {
                key: "milestones",
                label: "Milestones",
                description: "Key points in a project that signify the completion of major goals.",
                children: [
                    { key: "milestone-completion", label: "Milestone Completion", description: "Tracking when a project milestone has been successfully achieved." },
                    { key: "milestone-reporting", label: "Milestone Reporting", description: "Documentation and communication of progress towards milestones." },
                    { key: "milestone-dependencies", label: "Milestone Dependencies", description: "Relationships between milestones that affect project timelines." }
                ]
            },
            {
                key: "timesheets",
                label: "Timesheets",
                description: "Records of the time employees spend working on tasks or projects.",
                children: [
                    { key: "time-tracking", label: "Time Tracking", description: "Monitoring the amount of time spent on specific tasks or projects." },
                    { key: "timesheet-approvals", label: "Timesheet Approvals", description: "The process of reviewing and approving recorded work hours." },
                    { key: "billable-hours", label: "Billable Hours", description: "Hours that can be charged to a client for work performed." }
                ]
            }
        ]
    },
    {
        key: "governance-strategy",
        label: "Governance and Strategy",
        icon: <SettingsIcon />,
        description: "Oversees company governance and strategic planning.",
        children: [
            {
                key: "business-plans",
                label: "Business Plans",
                description: "Documents outlining the company’s strategic goals and plans to achieve them.",
                children: [
                    { key: "strategic-goals", label: "Strategic Goals", description: "Long-term objectives that guide the company’s direction." },
                    { key: "swot-analysis", label: "SWOT Analysis", description: "Assessment of strengths, weaknesses, opportunities, and threats." },
                    { key: "market-analysis", label: "Market Analysis", description: "Research on market conditions, customer demographics, and competition." }
                ]
            },
            {
                key: "corporate-governance",
                label: "Corporate Governance",
                description: "Systems and processes to ensure the company is managed effectively and ethically.",
                children: [
                    { key: "board-resolutions", label: "Board Resolutions", description: "Formal decisions made by the company’s board of directors." },
                    { key: "compliance-policies", label: "Compliance Policies", description: "Guidelines to ensure the company follows legal and ethical standards." },
                    { key: "internal-audits", label: "Internal Audits", description: "Reviews conducted to ensure the company’s operations adhere to policies and regulations." }
                ]
            },
            {
                key: "risk-management",
                label: "Risk Management",
                description: "Identifies, assesses, and mitigates risks that could impact the company.",
                children: [
                    { key: "risk-assessments-governance", label: "Risk Assessments", description: "Evaluations of potential risks and their impacts on the business." },
                    { key: "risk-mitigation-plans", label: "Risk Mitigation Plans", description: "Strategies to reduce or eliminate risks." },
                    { key: "incident-reporting", label: "Incident Reporting", description: "Documentation of events that could affect the company negatively." }
                ]
            },
            {
                key: "audit-trails",
                label: "Audit Trails",
                description: "Records of changes and transactions in systems to ensure accountability.",
                children: [
                    { key: "change-logs", label: "Change Logs", description: "Documentation of modifications made to data, systems, or procedures." },
                    { key: "user-activity-tracking", label: "User Activity Tracking", description: "Monitoring actions performed by users within the company’s systems." },
                    { key: "compliance-audits", label: "Compliance Audits", description: "Reviews to ensure adherence to regulatory and policy requirements." }
                ]
            },
            {
                key: "kpis-analytics",
                label: "KPIs/Analytics",
                description: "Metrics and data analysis used to measure and improve business performance.",
                children: [
                    { key: "performance-dashboards", label: "Performance Dashboards", description: "Visual displays of key performance indicators (KPIs)." },
                    { key: "benchmarking", label: "Benchmarking", description: "Comparing company performance against industry standards or competitors." },
                    { key: "predictive-analytics", label: "Predictive Analytics", description: "Using data to forecast future trends and outcomes." }
                ]
            }
        ]
    },
    {
        key: "logistics-supply-chain",
        label: "Logistics and Supply Chain",
        icon: <StorefrontIcon />,
        description: "Manages logistics and supply chain activities.",
        children: [
            {
                key: "shipping",
                label: "Shipping",
                description: "Manages the transportation of goods from the company to its customers.",
                children: [
                    { key: "shipment-tracking", label: "Shipment Tracking", description: "Monitoring the location and status of shipments." },
                    { key: "freight-management", label: "Freight Management", description: "Coordinating the movement of goods by land, sea, or air." },
                    { key: "customs-documentation", label: "Customs Documentation", description: "Preparing and managing paperwork required for international shipments." }
                ]
            },
            {
                key: "order-management",
                label: "Order Management",
                description: "Oversees the process of fulfilling customer orders.",
                children: [
                    { key: "order-processing", label: "Order Processing", description: "The series of steps from receiving an order to delivering the product." },
                    { key: "order-tracking", label: "Order Tracking", description: "Monitoring the progress of an order through its lifecycle." },
                    { key: "order-fulfillment", label: "Order Fulfillment", description: "Completing and delivering an order to the customer." }
                ]
            },
            {
                key: "logistics-partners",
                label: "Logistics Partners",
                description: "Manages relationships with third-party providers of transportation and warehousing services.",
                children: [
                    { key: "partner-agreements", label: "Partner Agreements", description: "Contracts outlining the terms of service with logistics providers." },
                    { key: "performance-metrics", label: "Performance Metrics", description: "Key indicators used to evaluate logistics partner performance." },
                    { key: "cost-analysis", label: "Cost Analysis", description: "Assessing the costs associated with logistics services." }
                ]
            },
            {
                key: "procurement",
                label: "Procurement",
                description: "Manages the process of acquiring goods and services needed by the company.",
                children: [
                    { key: "purchase-requisitions", label: "Purchase Requisitions", description: "Requests made within the company to buy goods or services." },
                    { key: "purchase-orders", label: "Purchase Orders", description: "Formal orders issued to suppliers to request goods or services." },
                    { key: "supplier-bids", label: "Supplier Bids", description: "Offers made by suppliers in response to a company’s request for proposals." }
                ]
            },
            {
                key: "supplier-contracts",
                label: "Supplier Contracts",
                description: "Tracks agreements with suppliers regarding the provision of goods and services.",
                children: [
                    { key: "contract-negotiations", label: "Contract Negotiations", description: "The process of discussing terms with suppliers before finalizing a contract." },
                    { key: "supplier-performance-evaluation", label: "Supplier Performance Evaluation", description: "Assessing how well suppliers meet contractual obligations." },
                    { key: "contract-compliance", label: "Contract Compliance", description: "Ensuring that suppliers adhere to the terms of their contracts." }
                ]
            }
        ]
    },
    {
        key: "real-estate-property-management",
        label: "Real Estate and Property Management",
        icon: <WorkIcon />,
        description: "Manages the company's physical properties and real estate.",
        children: [
            {
                key: "buildings",
                label: "Buildings",
                description: "Manages the company’s physical properties, including offices, factories, and warehouses.",
                children: [
                    { key: "property-details", label: "Property Details", description: "Information about each property, such as location, size, and usage." },
                    { key: "rental-agreements", label: "Rental Agreements", description: "Contracts for leasing company-owned property to tenants." },
                    { key: "property-taxes", label: "Property Taxes", description: "Taxes levied on the company’s real estate holdings." }
                ]
            },
            {
                key: "facilities-management",
                label: "Facilities Management",
                description: "Ensures the efficient operation and maintenance of the company’s facilities.",
                children: [
                    { key: "facility-maintenance", label: "Facility Maintenance", description: "Routine upkeep and repairs of company buildings and equipment." },
                    { key: "facility-booking", label: "Facility Booking", description: "Scheduling the use of shared spaces, such as meeting rooms." },
                    { key: "utility-management", label: "Utility Management", description: "Tracking and controlling the consumption of utilities like electricity, water, and gas." }
                ]
            },
            {
                key: "leases",
                label: "Leases",
                description: "Manages leasing agreements for properties the company rents from others.",
                children: [
                    { key: "lease-terms", label: "Lease Terms", description: "Conditions under which a lease is granted, such as duration and rent." },
                    { key: "lease-renewals", label: "Lease Renewals", description: "The process of extending the lease agreement for an additional term." },
                    { key: "tenant-records", label: "Tenant Records", description: "Documentation of tenants occupying company-owned properties." }
                ]
            }
        ]
    },
    {
        key: "information-technology",
        label: "Information Technology",
        icon: <WorkIcon />,
        description: "Manages the company's technology resources, including hardware and software.",
        children: [
            {
                key: "it-assets",
                label: "IT Assets",
                description: "Manages the company’s technology resources, including hardware and software.",
                children: [
                    { key: "asset-lifecycle", label: "Asset Lifecycle", description: "The stages an IT asset goes through, from acquisition to disposal." },
                    { key: "software-licenses", label: "Software Licenses", description: "Agreements that allow the company to use software legally." },
                    { key: "hardware-inventory", label: "Hardware Inventory", description: "Records of physical IT equipment owned by the company." }
                ]
            },
            {
                key: "data-security",
                label: "Data Security",
                description: "Ensures that the company’s data is protected against unauthorized access and breaches.",
                children: [
                    { key: "access-controls", label: "Access Controls", description: "Security measures that restrict who can access certain data or systems." },
                    { key: "data-encryption", label: "Data Encryption", description: "The process of converting data into a secure format that cannot be easily accessed by unauthorized users." },
                    { key: "security-audits", label: "Security Audits", description: "Reviews to assess the effectiveness of the company’s data security measures." }
                ]
            },
            {
                key: "network-management",
                label: "Network Management",
                description: "Manages the company’s network infrastructure, including connectivity and security.",
                children: [
                    { key: "network-topology", label: "Network Topology", description: "The arrangement of elements (such as routers and switches) within the network." },
                    { key: "bandwidth-monitoring", label: "Bandwidth Monitoring", description: "Tracking the amount of data being transferred over the network." },
                    { key: "firewall-configurations", label: "Firewall Configurations", description: "Settings that control the flow of network traffic to protect against threats." }
                ]
            },
            {
                key: "software-management",
                label: "Software Management",
                description: "Oversees the development, deployment, and maintenance of software used by the company.",
                children: [
                    { key: "version-control", label: "Version Control", description: "Systems that manage changes to software code and documents." },
                    { key: "bug-tracking", label: "Bug Tracking", description: "Monitoring and managing software defects that need to be fixed." },
                    { key: "software-development-lifecycle", label: "Software Development Lifecycle (SDLC)", description: "The process of planning, creating, testing, and deploying software." }
                ]
            }
        ]
    },
    {
        key: "customer-support",
        label: "Customer Support",
        icon: <WorkIcon />,
        description: "Manages customer service requests and issues reported by customers.",
        children: [
            {
                key: "support-tickets",
                label: "Support Tickets",
                description: "Manages customer service requests and issues reported by customers.",
                children: [
                    { key: "ticket-prioritization", label: "Ticket Prioritization", description: "Ranking support tickets based on their urgency and impact." },
                    { key: "service-level-agreements", label: "Service Level Agreements (SLAs)", description: "Contracts that define the level of service expected from the company." },
                    { key: "resolution-time-tracking", label: "Resolution Time Tracking", description: "Monitoring the time taken to resolve customer support tickets." }
                ]
            },
            {
                key: "service-contracts",
                label: "Service Contracts",
                description: "Manages agreements with customers that define the terms of service and support.",
                children: [
                    { key: "support-entitlements", label: "Support Entitlements", description: "Specific services or support levels that customers are entitled to under their contracts." },
                    { key: "contractual-obligations", label: "Contractual Obligations", description: "The duties the company must fulfill according to the service contract." },
                    { key: "service-renewals", label: "Service Renewals", description: "The process of extending service contracts for additional periods." }
                ]
            },
            {
                key: "feedback",
                label: "Feedback",
                description: "Collects and analyzes customer feedback to improve products and services.",
                children: [
                    { key: "customer-surveys", label: "Customer Surveys", description: "Questionnaires designed to gather feedback from customers." },
                    { key: "feedback-analysis", label: "Feedback Analysis", description: "The process of examining customer feedback to identify trends and areas for improvement." },
                    { key: "net-promoter-score", label: "Net Promoter Score (NPS)", description: "A metric that measures customer loyalty by asking how likely they are to recommend the company." }
                ]
            }
        ]
    },
    {
        key: "environmental-social-governance",
        label: "Environmental and Social Governance (ESG)",
        icon: <WorkIcon />,
        description: "Manages the company's environmental and social responsibilities.",
        children: [
            {
                key: "sustainability-reports",
                label: "Sustainability Reports",
                description: "Tracks the company’s environmental impact and sustainability initiatives.",
                children: [
                    { key: "carbon-footprint-tracking", label: "Carbon Footprint Tracking", description: "Measuring the company’s greenhouse gas emissions." },
                    { key: "energy-consumption", label: "Energy Consumption", description: "Monitoring the use of energy resources within the company." },
                    { key: "waste-management", label: "Waste Management", description: "The process of reducing, reusing, and disposing of waste materials." }
                ]
            },
            {
                key: "community-engagement",
                label: "Community Engagement",
                description: "Manages the company’s involvement in social and community initiatives.",
                children: [
                    { key: "corporate-social-responsibility", label: "Corporate Social Responsibility (CSR) Programs", description: "Initiatives that contribute to societal goals, such as volunteering and charity work." },
                    { key: "volunteer-initiatives", label: "Volunteer Initiatives", description: "Programs that encourage employees to participate in community service." },
                    { key: "ngo-partnerships", label: "Partnerships with NGOs", description: "Collaborations with non-governmental organizations to support community causes." }
                ]
            },
            {
                key: "energy-management",
                label: "Energy Management",
                description: "Oversees the efficient use of energy within the company and reduces environmental impact.",
                children: [
                    { key: "energy-audits", label: "Energy Audits", description: "Evaluations of energy consumption and opportunities for improvement." },
                    { key: "renewable-energy-initiatives", label: "Renewable Energy Initiatives", description: "Projects that involve using or investing in renewable energy sources." },
                    { key: "energy-savings-tracking", label: "Energy Savings Tracking", description: "Monitoring and reporting on energy conservation efforts." }
                ]
            }
        ]
    },
    {
        key: "intellectual-human-capital",
        label: "Intellectual and Human Capital",
        icon: <WorkIcon />,
        description: "Manages the company's knowledge and employee development.",
        children: [
            {
                key: "knowledge-base",
                label: "Knowledge Base",
                description: "A repository of information and documentation for employees to reference.",
                children: [
                    { key: "documentation-management", label: "Documentation Management", description: "Systems for organizing and storing important documents." },
                    { key: "sops", label: "Standard Operating Procedures (SOPs)", description: "Detailed instructions for routine tasks to ensure consistency and efficiency." },
                    { key: "best-practices", label: "Best Practices", description: "Established methods and techniques that lead to the most efficient outcomes." }
                ]
            },
            {
                key: "r-d-projects",
                label: "R&D Projects",
                description: "Manages research and development initiatives aimed at innovation and product development.",
                children: [
                    { key: "research-proposals", label: "Research Proposals", description: "Documents outlining proposed research projects and their goals." },
                    { key: "project-milestones", label: "Project Milestones", description: "Key achievements or stages in the development of R&D projects." },
                    { key: "research-outputs", label: "Research Outputs", description: "The results or findings of research activities." }
                ]
            },
            {
                key: "innovation-management",
                label: "Innovation Management",
                description: "Tracks and nurtures new ideas and innovations within the company.",
                children: [
                    { key: "idea-submission", label: "Idea Submission", description: "Systems for employees to propose new ideas or innovations." },
                    { key: "innovation-pipeline", label: "Innovation Pipeline", description: "The process from idea generation to the implementation of new innovations." },
                    { key: "patent-management", label: "Patent Management", description: "Tracking the status and renewal of patents owned by the company." }
                ]
            }
        ]
    },
    {
        key: "external-relationships",
        label: "External Relationships",
        icon: <WorkIcon />,
        description: "Manages relationships with external partners, vendors, and stakeholders.",
        children: [
            {
                key: "partners",
                label: "Partners",
                description: "Manages relationships with business partners and alliances.",
                children: [
                    { key: "partner-collaboration", label: "Partner Collaboration", description: "Working jointly with partners on projects, products, or services." },
                    { key: "joint-ventures", label: "Joint Ventures", description: "Business arrangements where two or more parties agree to pool resources for a specific project." },
                    { key: "revenue-sharing-agreements", label: "Revenue Sharing Agreements", description: "Contracts that define how revenue will be divided among partners." }
                ]
            },
            {
                key: "vendor-management",
                label: "Vendor Management",
                description: "Oversees the company’s interactions and contracts with suppliers.",
                children: [
                    { key: "vendors-list", label: "Vendors List", description: "The list and information about the vendors the manager adds to keep trace and to link to other entities." },
                    { key: "vendor-assessments", label: "Vendor Assessments", description: "Evaluations of suppliers based on criteria like quality, reliability, and cost." },
                    { key: "vendor-onboarding", label: "Vendor Onboarding", description: "The process of integrating new suppliers into the company’s systems." },
                    { key: "vendor-scorecards", label: "Vendor Scorecards", description: "Tools for measuring and tracking supplier performance." }
                ]
            },
            {
                key: "stakeholder-management",
                label: "Stakeholder Management",
                description: "Manages communications and relationships with individuals or groups who have an interest in the company.",
                children: [
                    { key: "stakeholder-communication", label: "Stakeholder Communication", description: "Strategies for keeping stakeholders informed and engaged." },
                    { key: "stakeholder-feedback", label: "Stakeholder Feedback", description: "Collecting and analyzing input from stakeholders to guide company decisions." },
                    { key: "stakeholder-analysis", label: "Stakeholder Analysis", description: "Identifying and prioritizing stakeholders based on their influence and interest." }
                ]
            }
        ]
    },
    {
        key: "legal-compliance",
        label: "Legal and Compliance",
        icon: <WorkIcon />,
        description: "Manages the company's legal matters and ensures compliance with regulations.",
        children: [
            {
                key: "legal-cases",
                label: "Legal Cases",
                description: "Manages ongoing or potential legal disputes involving the company.",
                children: [
                    { key: "case-management", label: "Case Management", description: "Organizing and tracking all aspects of a legal case." },
                    { key: "court-appearances", label: "Court Appearances", description: "Scheduling and documentation of court sessions related to legal cases." },
                    { key: "legal-briefs", label: "Legal Briefs", description: "Documents that outline the legal arguments and supporting information for a case." }
                ]
            },
            {
                key: "intellectual-property",
                label: "Intellectual Property (IP)",
                description: "Protects the company’s innovations and creative works from unauthorized use.",
                children: [
                    { key: "ip-monitoring", label: "IP Monitoring", description: "Tracking the use of the company’s intellectual property to prevent infringement." },
                    { key: "ip-licensing", label: "IP Licensing", description: "Agreements that allow others to use the company’s intellectual property in exchange for compensation." },
                    { key: "ip-litigation", label: "IP Litigation", description: "Legal actions taken to protect the company’s intellectual property rights." }
                ]
            },
            {
                key: "compliance-obligations",
                label: "Compliance Obligations",
                description: "Ensures that the company meets all legal and regulatory requirements.",
                children: [
                    { key: "obligation-tracking", label: "Obligation Tracking", description: "Monitoring and managing the company’s legal responsibilities." },
                    { key: "penalties-management", label: "Penalties Management", description: "Tracking and addressing any fines or penalties the company incurs." },
                    { key: "compliance-deadlines", label: "Compliance Deadlines", description: "Important dates by which the company must meet regulatory requirements." }
                ]
            }
        ]
    },
    {
        key: "corporate-communication",
        label: "Corporate Communication",
        icon: <WorkIcon />,
        description: "Manages the company's internal and external communication strategies.",
        children: [
            {
                key: "internal-communication",
                label: "Internal Communication",
                description: "Manages the flow of information within the company.",
                children: [
                    { key: "announcements", label: "Announcements", description: "Official notifications sent to employees about important company news or changes." },
                    { key: "newsletters", label: "Newsletters", description: "Regular updates provided to employees to keep them informed about company activities." },
                    { key: "employee-portals", label: "Employee Portals", description: "Online platforms where employees can access company information and resources." }
                ]
            },
            {
                key: "external-communication",
                label: "External Communication",
                description: "Manages how the company communicates with external audiences.",
                children: [
                    { key: "press-releases", label: "Press Releases", description: "Official statements issued to the media to announce important news or developments." },
                    { key: "media-relations", label: "Media Relations", description: "Interactions with journalists and media outlets to shape the company’s public image." },
                    { key: "public-statements", label: "Public Statements", description: "Official communications from the company to the public or specific audiences." }
                ]
            },
            {
                key: "crisis-management",
                label: "Crisis Management",
                description: "Plans and coordinates the company’s response to emergencies or negative events.",
                children: [
                    { key: "crisis-response-plans", label: "Crisis Response Plans", description: "Detailed strategies for managing and mitigating the effects of a crisis." },
                    { key: "crisis-communication-logs", label: "Crisis Communication Logs", description: "Records of communications made during a crisis to ensure transparency and accuracy." },
                    { key: "after-action-reports", label: "After-Action Reports", description: "Evaluations conducted after a crisis to assess the response and identify lessons learned." }
                ]
            }
        ]
    },
    {
        key: "training-development",
        label: "Training and Development",
        icon: <WorkIcon />,
        description: "Manages employee training and development programs.",
        children: [
            {
                key: "learning-management",
                label: "Learning Management",
                description: "Organizes and tracks the company’s training and education programs.",
                children: [
                    { key: "course-catalog", label: "Course Catalog", description: "A list of available training courses and educational resources." },
                    { key: "learning-paths", label: "Learning Paths", description: "Structured sequences of courses designed to develop specific skills or knowledge." },
                    { key: "certification-tracking", label: "Certification Tracking", description: "Monitoring employee progress in obtaining and maintaining professional certifications." }
                ]
            },
            {
                key: "skill-development",
                label: "Skill Development",
                description: "Helps employees improve their abilities and advance in their careers.",
                children: [
                    { key: "skill-assessments", label: "Skill Assessments", description: "Evaluations of employee competencies to identify strengths and areas for improvement." },
                    { key: "training-needs-analysis", label: "Training Needs Analysis", description: "Identifying the skills and knowledge gaps that training programs should address." },
                    { key: "development-plans", label: "Development Plans", description: "Personalized plans for employee growth and career advancement." }
                ]
            },
            {
                key: "leadership-programs",
                label: "Leadership Programs",
                description: "Develops the company’s future leaders through targeted training and mentorship.",
                children: [
                    { key: "mentorship-programs", label: "Mentorship Programs", description: "Pairing less experienced employees with seasoned mentors for guidance and advice." },
                    { key: "leadership-workshops", label: "Leadership Workshops", description: "Training sessions focused on developing leadership skills." },
                    { key: "executive-training", label: "Executive Training", description: "Specialized programs designed to prepare senior managers and executives for higher responsibilities." }
                ]
            }
        ]
    },
    {
        key: "corporate-social-responsibility",
        label: "Corporate Social Responsibility (CSR)",
        icon: <WorkIcon />,
        description: "Manages the company's social responsibility and sustainability initiatives.",
        children: [
            {
                key: "sustainability-initiatives",
                label: "Sustainability Initiatives",
                description: "Programs and actions aimed at reducing the company’s environmental impact.",
                children: [
                    { key: "green-initiatives", label: "Green Initiatives", description: "Efforts to adopt environmentally friendly practices, such as reducing waste or using renewable energy." },
                    { key: "sustainable-sourcing", label: "Sustainable Sourcing", description: "Ensuring that the materials and products the company buys are sourced in an environmentally and socially responsible manner." },
                    { key: "impact-reports", label: "Impact Reports", description: "Documents that detail the effects of the company’s sustainability and social responsibility efforts." }
                ]
            },
            {
                key: "community-outreach",
                label: "Community Outreach",
                description: "Engages with the local community and contributes to social causes.",
                children: [
                    { key: "philanthropic-activities", label: "Philanthropic Activities", description: "Donations and charitable actions taken by the company to support community causes." },
                    { key: "community-investment", label: "Community Investment", description: "Long-term investments in local projects or initiatives that benefit the community." },
                    { key: "employee-volunteering", label: "Employee Volunteering", description: "Encouraging and organizing opportunities for employees to volunteer in the community." }
                ]
            }
        ]
    },
    {
        key: "mergers-acquisitions",
        label: "Mergers and Acquisitions (M&A)",
        icon: <WorkIcon />,
        description: "Manages the company's mergers, acquisitions, and corporate restructuring activities.",
        children: [
            {
                key: "m-a-strategy",
                label: "M&A Strategy",
                description: "Plans and executes mergers, acquisitions, and other corporate restructuring activities.",
                children: [
                    { key: "target-identification", label: "Target Identification", description: "The process of finding potential companies for acquisition or merger." },
                    { key: "due-diligence", label: "Due Diligence", description: "The thorough investigation of a target company’s financial, legal, and operational status before finalizing a deal." },
                    { key: "integration-plans", label: "Integration Plans", description: "Strategies for combining the operations, cultures, and systems of merging companies." }
                ]
            },
            {
                key: "post-merger-integration",
                label: "Post-Merger Integration",
                description: "Ensures a smooth transition after a merger or acquisition.",
                children: [
                    { key: "cultural-integration", label: "Cultural Integration", description: "The process of aligning the cultures of the merging companies to create a cohesive working environment." },
                    { key: "systems-integration", label: "Systems Integration", description: "The process of combining the IT and operational systems of the merging companies." },
                    { key: "synergy-tracking", label: "Synergy Tracking", description: "Monitoring and measuring the financial and operational benefits realized from the merger or acquisition." }
                ]
            }
        ]
    },
    {
        key: "crisis-risk-management",
        label: "Crisis and Risk Management",
        icon: <WorkIcon />,
        description: "Manages the company's crisis response and risk management strategies.",
        children: [
            {
                key: "risk-assessments",
                label: "Risk Assessments",
                description: "Identifies and evaluates potential risks that could affect the company.",
                children: [
                    { key: "risk-identification", label: "Risk Identification", description: "The process of pinpointing potential risks to the company." },
                    { key: "risk-scoring", label: "Risk Scoring", description: "Assigning a value to risks based on their likelihood and impact." },
                    { key: "risk-response-planning", label: "Risk Response Planning", description: "Developing strategies to mitigate, transfer, or accept risks." }
                ]
            },
            {
                key: "crisis-management",
                label: "Crisis Management",
                description: "Prepares the company to respond effectively to unexpected emergencies.",
                children: [
                    { key: "crisis-scenarios", label: "Crisis Scenarios", description: "Hypothetical situations used to prepare for potential crises." },
                    { key: "crisis-response-teams", label: "Crisis Response Teams", description: "Groups of employees designated to handle specific aspects of a crisis." },
                    { key: "emergency-communication", label: "Emergency Communication", description: "Systems and protocols for quickly disseminating information during a crisis." }
                ]
            },
            {
                key: "business-continuity",
                label: "Business Continuity",
                description: "Ensures that the company can continue operating during and after a crisis.",
                children: [
                    { key: "business-continuity-plans", label: "Business Continuity Plans", description: "Strategies that outline how the company will continue critical operations during a disruption." },
                    { key: "disaster-recovery-plans", label: "Disaster Recovery Plans", description: "Detailed procedures for restoring IT systems and operations after a disaster." },
                    { key: "business-impact-analysis", label: "Business Impact Analysis", description: "An assessment of the potential effects of various disruptions on business operations." }
                ]
            }
        ]
    },
    {
        key: "admin",
        label: "Admin",
        icon: <SettingsIcon />,
        description: "Administrative tools and system configuration.",
        children: [
            {
                key: "console",
                label: "Console",
                description: "Manage workflow rules and entity configurations."
            },
            {
                key: "export",
                label: "Data Export",
                description: "Export entity data in multiple formats (CSV, Excel, JSON, SQL)."
            }
        ]
    }
];