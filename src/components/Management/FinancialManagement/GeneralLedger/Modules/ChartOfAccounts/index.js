import AccountHierarchy from './AccountHierarchy';
import SegmentConfiguration from './SegmentConfiguration';
import AccountTemplates from './AccountTemplates';
import PostingControls from './PostingControls';
import StatementMapping from './StatementMapping';
import SubledgerIntegration from './SubledgerIntegration';
import CoAAdmin from './CoAAdmin';
import CoAReports from './CoAReports';
import AccountDetails from './AccountDetails';
import AccountAudit from './AccountAudit';
import IntercompanySettings from './IntercompanySettings';

export const modules = [
    // GENERAL MODULES (shown in Management Table toolbar)
    {
        id: 'account_hierarchy',
        name: 'Account Hierarchy',
        type: 'General',
        path: '/apps/chart-of-accounts/hierarchy',
        icon: 'AccountTree',
        description: 'Manage parent/child account structure, groupings, and versioning',
        component: AccountHierarchy,
        requiresSelection: false
    },
    {
        id: 'segment_configuration',
        name: 'Segment Configuration',
        type: 'General',
        path: '/apps/chart-of-accounts/segments',
        icon: 'Settings',
        description: 'Configure multi-segment account structure and validation rules',
        component: SegmentConfiguration,
        requiresSelection: false
    },
    {
        id: 'account_templates',
        name: 'Account Templates',
        type: 'General',
        path: '/apps/chart-of-accounts/templates',
        icon: 'Description',
        description: 'Manage account templates, mass creation, and bulk operations',
        component: AccountTemplates,
        requiresSelection: false
    },
    {
        id: 'posting_controls',
        name: 'Posting Controls',
        type: 'General',
        path: '/apps/chart-of-accounts/posting-controls',
        icon: 'Lock',
        description: 'Manage posting permissions, account blocks, and approval requirements',
        component: PostingControls,
        requiresSelection: false
    },
    {
        id: 'statement_mapping',
        name: 'Statement Mapping',
        type: 'General',
        path: '/apps/chart-of-accounts/statements',
        icon: 'Map',
        description: 'Map accounts to Balance Sheet, P&L, and Cash Flow statements',
        component: StatementMapping,
        requiresSelection: false
    },
    {
        id: 'subledger_integration',
        name: 'Subledger Integration',
        type: 'General',
        path: '/apps/chart-of-accounts/subledgers',
        icon: 'Link',
        description: 'Configure default account assignments and rule-based derivation',
        component: SubledgerIntegration,
        requiresSelection: false
    },
    {
        id: 'coa_admin',
        name: 'Admin Console',
        type: 'General',
        path: '/apps/chart-of-accounts/admin',
        icon: 'AdminPanelSettings',
        description: 'Global CoA templates, entity rules, and workflow configuration',
        component: CoAAdmin,
        requiresSelection: false
    },
    {
        id: 'coa_reports',
        name: 'Reports & Analytics',
        type: 'General',
        path: '/apps/chart-of-accounts/reports',
        icon: 'Assessment',
        description: 'Generate reports, analyze account usage, and export data',
        component: CoAReports,
        requiresSelection: false
    },

    // SPECIFIC MODULES (shown in detail view)
    {
        id: 'account_details',
        name: 'Account Details',
        type: 'Specific',
        path: '/apps/chart-of-accounts/:id/details',
        icon: 'Edit',
        description: 'Edit multilingual descriptions, tax settings, and account configuration',
        component: AccountDetails,
        requiresSelection: true
    },
    {
        id: 'account_audit',
        name: 'Account History',
        type: 'Specific',
        path: '/apps/chart-of-accounts/:id/audit',
        icon: 'History',
        description: 'Full audit trail with field-level change history and approval workflow',
        component: AccountAudit,
        requiresSelection: true
    },
    {
        id: 'intercompany_settings',
        name: 'Intercompany Settings',
        type: 'Specific',
        path: '/apps/chart-of-accounts/:id/intercompany',
        icon: 'Business',
        description: 'Configure intercompany flags, elimination mappings, and consolidation',
        component: IntercompanySettings,
        requiresSelection: true
    }
];

export default modules;
