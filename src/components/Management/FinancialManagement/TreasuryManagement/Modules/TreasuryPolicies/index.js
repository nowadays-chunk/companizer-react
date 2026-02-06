import PolicyManager from './PolicyManager';
import PolicyDashboard from './PolicyDashboard';
import PolicyLibrary from './PolicyLibrary';
import ComplianceMonitor from './ComplianceMonitor';
import LimitManagement from './LimitManagement';
import ExceptionWorkflows from './ExceptionWorkflows';
import PolicyAuditLog from './PolicyAuditLog';

export const modules = [
    {
        id: 'policy-dashboard',
        name: 'Governance Dashboard',
        description: 'Executive view of compliance and risks',
        icon: 'Dashboard',
        component: PolicyDashboard,
        group: 'Governance',
        type: 'General',
        path: '/financial-management/treasury-management/treasury-policies/dashboard',
        label: 'Dashboard',
        requiresSelection: false
    },
    {
        id: 'policy-manager',
        name: 'Policy Manager (Old)',
        description: 'Legacy policy management view',
        icon: 'Policy',
        component: PolicyManager,
        group: 'Governance',
        type: 'Specific',
        path: '/financial-management/treasury-management/treasury-policies/manager',
        label: 'Manager',
        requiresSelection: false
    },
    {
        id: 'policy-library',
        name: 'Document Library',
        description: 'Repository of all active and drafted policies',
        icon: 'LibraryBooks',
        component: PolicyLibrary,
        group: 'Governance',
        type: 'General',
        path: '/financial-management/treasury-management/treasury-policies/library',
        label: 'Library',
        requiresSelection: false
    },
    {
        id: 'compliance-monitor',
        name: 'Compliance Monitor',
        description: 'Real-time breach alerts and rule checks',
        icon: 'GppGood',
        component: ComplianceMonitor,
        group: 'Compliance',
        type: 'Specific',
        path: '/financial-management/treasury-management/treasury-policies/compliance',
        label: 'Compliance',
        requiresSelection: false
    },
    {
        id: 'limit-management',
        name: 'Risk Limits',
        description: 'Configure counterparty and FX exposure limits',
        icon: 'Tune',
        component: LimitManagement,
        group: 'Compliance',
        type: 'Specific',
        path: '/financial-management/treasury-management/treasury-policies/limits',
        label: 'Limits',
        requiresSelection: false
    },
    {
        id: 'exception-workflows',
        name: 'Waivers & Exceptions',
        description: 'Approve policy exceptions and waivers',
        icon: 'AssignmentTurnedIn',
        component: ExceptionWorkflows,
        group: 'Governance',
        type: 'Specific',
        path: '/financial-management/treasury-management/treasury-policies/exceptions',
        label: 'Exceptions',
        requiresSelection: false
    },
    {
        id: 'policy-audit',
        name: 'Audit Log',
        description: 'Immutable trail of policy changes',
        icon: 'History',
        component: PolicyAuditLog,
        group: 'Governance',
        type: 'Specific',
        path: '/financial-management/treasury-management/treasury-policies/audit',
        label: 'Audit',
        requiresSelection: false
    }
];
