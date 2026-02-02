# Companizer CRM - Complete System Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Technical Stack](#technical-stack)
3. [Authentication & Security](#authentication--security)
4. [Application Structure](#application-structure)
5. [Main Routes](#main-routes)
6. [Core Pages & Functionalities](#core-pages--functionalities)
7. [Navigation Menu Structure](#navigation-menu-structure)
8. [Entity Management System](#entity-management-system)
9. [Workflow System](#workflow-system)
10. [Features & Capabilities](#features--capabilities)

---

## System Overview

**Companizer** is a comprehensive Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) system built with React. It provides end-to-end business management capabilities across financial operations, human resources, inventory, sales, projects, and more.

### Key Characteristics
- **Multi-tenant architecture** with organization-based access control
- **Role-Based Access Control (RBAC)** for granular permissions
- **Dynamic entity management** with configurable workflows
- **Real-time data visualization** and reporting
- **Multi-language support** (English, French, Arabic)
- **Dark/Light theme** toggling

---

## Technical Stack

### Frontend
- **React 18+** - UI framework
- **Material-UI (MUI) v5** - Component library and design system
- **React Router v6** - Client-side routing
- **HashRouter** - Routing strategy
- **Recharts** - Data visualization
- **date-fns** - Date manipulation
- **react-grid-layout** - Dashboard widgets

### Backend Integration
- **Axios** - HTTP client for API communication
- **REST API** - Backend communication
- **LocalStorage** - Client-side auth token storage

### State Management
- **React Context API** - Global state (Auth, Translation)
- **React Hooks** - Component-level state

### Additional Libraries
- **MUI DataGrid** - Advanced table/grid views
- **MUI Icons** - Icon set
- **Custom PDF generation** - Configurable PDF exports

---

## Authentication & Security

### Authentication Flow
1. **Login/Registration**: Users authenticate via `/` (HomePage)
2. **Token Storage**: JWT tokens stored in `localStorage`
3. **User Data**: User profile stored as JSON in `localStorage.userData`
4. **Session Persistence**: Auto-login on page refresh via token validation
5. **Protected Routes**: All internal routes wrapped in `<ProtectedRoute>`

### Access Control
- **Organization-based**: Users belong to organizations
- **Role-based**: Users have roles with specific permissions
- **Authorization matrix**: User-Resource-Action permissions
- **RBAC Pages**: Organizations, Users, Authorizations management

### Security Features
- Protected route component validates authentication
- Token-based API authentication
- Organization isolation
- Permission-based UI rendering

---

## Application Structure

```
src/
├── components/
│   ├── Authentication/        # Login, registration components
│   ├── Management/           # Entity management (100+ entities)
│   │   ├── Base/            # BaseManagementComponent, BaseTable, etc.
│   │   ├── [Module]/        # Business domain folders
│   │   │   ├── [Entity]/    # Individual entity folders
│   │   │   │   ├── Config/  # Entity configuration files
│   │   │   │   └── Details/ # Detail/nested entities
│   ├── RBAC/                # Organizations, Users, Authorizations
│   ├── Partials/            # ProtectedRoute, shared components
│   ├── Versioning/          # Version history components
│   ├── Dashboard/           # Dashboard widgets
│   └── [Various]/           # Comments, Timeline, etc.
├── contexts/
│   ├── AuthContext.js       # Authentication state
│   └── TranslationProvider.js # I18n context
├── hooks/
│   ├── useAuthorization.js  # RBAC hooks
│   ├── useDashboard.js      # Dashboard state
│   └── useVersioning.js     # Entity versioning
├── layout/
│   ├── Dashboard.js         # Main layout wrapper
│   ├── drawerItems.js       # Navigation menu structure
│   └── keyToLinkMap.js      # Route mapping
├── pages/                   # Main application pages
├── utils/
│   ├── apiClient.js         # Axios instance
│   └── firebaseCrudHelpers.js # CRUD API helpers
└── App.js                   # Root component & routing
```

---

## Main Routes

### Public Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with login/registration |

### Core Application Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | PersonalizedDashboard | Customizable dashboard with widgets |
|`/summary` | Treasury | Financial summary and treasury management |
| `/summary/configuration` | SummaryConfiguration | Configure treasury display settings |
| `/bilan-comptable` | BilanComptable | Accounting balance sheet view |
| `/admin/console` | AdminConsole | System administration panel |

### RBAC Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/management/organizations` | OrganizationsPage | List all organizations |
| `/management/organizations/view/:id` | Visualizer (view mode) | View organization details |
| `/management/organizations/edit/:id` | Visualizer (edit mode) | Edit organization |
| `/management/organizations/create` | Visualizer (create mode) | Create new organization |
| `/management/users` | UsersPage | List all users |
| `/management/users/view/:id` | Visualizer | View user details |
| `/management/users/edit/:id` | Visualizer | Edit user |
| `/management/users/create` | Visualizer | Create new user |
| `/management/users/authorizations` | AuthorizationsPage | Manage user permissions |
| `/management/users/authorizations/view/:id` | Visualizer | View authorization |
| `/management/users/authorizations/edit/:id` | Visualizer | Edit authorization |
| `/management/users/authorizations/create` | Visualizer | Create authorization |

### Dynamic Entity Routes
| Route Pattern | Component | Description |
|---------------|-----------|-------------|
| `/:module/:subModule/:component` | Management | Generic entity grid view |
| `/:module/:subModule/:component/view/:id` | Visualizer (view) | View entity record |
| `/:module/:subModule/:component/edit/:id` | Visualizer (edit) | Edit entity record |
| `/:module/:subModule/:component/create` | Visualizer (create) | Create entity record |
| `/:module/:subModule/:targetEntity/configuration` | WorkflowRulesManager | Entity workflow configuration |
| `/:module/:subModule/:component/configuration/view/:id` | Visualizer | View workflow rule |
| `/:module/:subModule/:component/configuration/edit/:id` | Visualizer | Edit workflow rule |
| `/:module/:subModule/:component/configuration/create` | Visualizer | Create workflow rule |

---

## Core Pages & Functionalities

### 1. **PersonalizedDashboard** (`/dashboard`)
**Purpose**: User-specific customizable dashboard

**Features**:
- Drag-and-drop widget layout
- Resizable widgets
- Widget types:
  - KPI cards (with trend indicators)
  - Charts (Line, Bar, Pie)
  - Recent activity feed
  - Quick action buttons
- Save/load configuration per user
- Reset to default layout
- Auto-refresh data
- Add/remove widgets via FAB menu

**Buttons**:
- `Save Layout` - Persist current dashboard configuration
- `Reset to Default` - Restore original widget layout
- `+` FAB - Add new widget
- Individual widget `×` - Remove widget

---

### 2. **Treasury** (`/summary`)
**Purpose**: Financial data aggregation and treasury management

**Features**:
- Multi-entity financial summary
- Month/Year aggregation of amounts
- Total assets calculation
- Total liabilities calculation (displayed with minus sign)
- Net total computation (assets - liabilities)
- DataGrid with expandable rows
- Copy to clipboard for totals
- Dynamic data loading from all financial entities
- Configurable entity selection

**Buttons**:
- `Copy` (on totals) - Copy financial totals to clipboard
- Row expand/collapse - Show/hide entity details

---

### 3. **SummaryConfiguration** (`/summary/configuration`)
**Purpose**: Configure which entities appear in Treasury summary

**Features**:
- Registry of all financial entities
- Toggle entities as assets or liabilities
- Enable/disable entities in summary
- Real-time configuration updates
- Visual category indicators

**Buttons**:
- `Toggle Asset/Liability` - Change entity classification
- `Enable/Disable` - Show/hide in summary
- `Save Configuration` - Persist changes

---

### 4. **BilanComptable** (`/bilan-comptable`)
**Purpose**: Accounting balance sheet generation

**Features**:
- Assets vs. Liabilities view
- Period selection
- PDF export
- Configurable account categories
- Balance verification

**Buttons**:
- `Generate PDF` - Export balance sheet
- `Select Period` - Choose date range
- `Refresh` - Reload data

---

### 5. **Management** (Dynamic Entity Pages)
**Purpose**: Generic entity list view with full CRUD operations

**Features**:
- MUI DataGrid with sorting, filtering, pagination
- Column visibility toggle
- Density control (compact/standard/comfortable)
- Export to CSV
- Row selection
- Quick search
- Inline actions per row
- Create new entity
- Bulk operations
- Custom column formatting
- Conditional cell styling

**Toolbar Buttons**:
- `Create` - Navigate to create new entity
- `Filter` - Show/hide filter panel
- `Columns` - Toggle column visibility
- `Export` - Download as CSV
- `Refresh` - Reload data
- `Density` - Change row height

**Row Action Buttons**:
- `View` (👁️) - Open entity in view mode
- `Edit` (✏️) - Open entity in edit mode
- `Delete` (🗑️) - Delete entity (with confirmation)
- `...` - Additional context menu actions

---

### 6. **UnitVisualizer** (Entity Detail View)
**Purpose**: Universal entity detail viewer/editor

**Features**:
- Three modes: View, Edit, Create
- Dynamic form generation from entity config
- Field type support:
  - Text, number, email, tel, url
  - Date, datetime-local, time
  - Select (single/multiple)
  - Checkbox, radio
  - Textarea
  - File upload
  - Related entity pickers
- Field validation
- Required field indicators
- Breadcrumb navigation
- Tab navigation (for complex entities)
- Related/nested entities display
- Comments section
- Action timeline/audit log
- Workflow action buttons (dynamic based on current step)
- Version history (if versioning enabled)

**Standard Buttons**:
- `Save` - Persist changes
- `Cancel` - Discard changes and return
- `Delete` - Remove entity (edit mode only)
- `Edit` - Switch to edit mode (view mode only)
- `Back` - Return to list view

**Dynamic Workflow Buttons** (examples):
- `Approve` - Move to approved state
- `Reject` - Move to rejected state
- `Send for Review` - Transition to review step
- `Mark as Paid` - Update payment status
- `Archive` - Move to archived state
- Custom actions defined per entity

**Additional Features**:
- `View History` - Show version timeline (if versioned)
- `Add Comment` - Post comment on entity
- `Upload Documents` - Attach files

---

### 7. **WorkflowRulesManager** (`/:module/:subModule/:entity/configuration`)
**Purpose**: Configure workflow rules for entities

**Features**:
- Define workflow steps/states
- Configure transitions between steps
- Set action labels and icons
- Define validation rules
- Email notifications on transitions
- Conditional logic
- Role-based step access

**Buttons**:
- `Add Step` - Create new workflow step
- `Add Transition` - Define state change
- `Save Workflow` - Persist configuration
- `Preview` - Test workflow logic
- `Delete Rule` - Remove workflow step

---

### 8. **OrganizationsPage** (`/management/organizations`)
**Purpose**: Manage organizations in multi-tenant system

**Features**:
- List all organizations
- Create/edit/delete organizations
- Assign users to organizations
- Organization-level settings
- Subscription management

**Buttons**:
- `Create Organization`
- `Edit` (per row)
- `Delete` (per row)
- `View Users`

---

### 9. **UsersPage** (`/management/users`)
**Purpose**: User management and administration

**Features**:
- List all users in system/organization
- Create/edit/delete users
- Assign roles
- Reset passwords
- Enable/disable accounts
- View user activity

**Buttons**:
- `Create User`
- `Edit` (per row)
- `Delete` (per row)
- `Reset Password`
- `View Authorizations`

---

### 10. **AuthorizationsPage** (`/management/users/authorizations`)
**Purpose**: RBAC permission management

**Features**:
- User-Resource-Action permission matrix
- Assign permissions by role or user
- Resource-level access control
- Action-based permissions (CRUD)
- Permission inheritance

**Buttons**:
- `Grant Permission`
- `Revoke Permission`
- `Bulk Assign`
- `Export Permissions`

---

### 11. **AdminConsole** (`/admin/console`)
**Purpose**: System administration panel

**Features**:
- System configuration
- View logs
- Database management
- Cache control
- Background job monitoring
- System health dashboard

**Buttons**:
- `Clear Cache`
- `Run Maintenance`
- `View Logs`
- `Export Configuration`

---

### 12. **TaskManager** (`/tasks`) *(Planned - See Future Features)*
**Purpose**: Internal task management

**Features** (Planned):
- Task assignment
- Task tracking by status
- SLA monitoring
- Email notifications
- Priority levels
- Due date management

---

## Navigation Menu Structure

The application uses a hierarchical navigation system defined in `drawerItems.js`:

### Top-Level Modules

#### 1. **Dashboard**
- Personalized dashboard with customizable widgets

#### 2. **Financial Management** 💰
Comprehensive financial operations management:

**Accounts Payable**:
- Vendor Invoices
- Payment Terms
- Creditors Ledger

**Accounts Receivable**:
- Customer Invoices
- Credit Management
- Debtor Aging

**General Ledger**:
- Journal Entries
- Chart of Accounts
- Trial Balance
- Fiscal Periods

**Bank Accounts**:
- Reconciliation Statements
- Bank Transfers
- Foreign Currency Accounts

**Debts**:
- Loan Agreements
- Interest Payments
- Debt Maturity Schedules

**Investments**:
- Equity Investments
- Fixed-Income Investments
- Investment Returns

**Taxation**:
- Tax Filings
- Tax Credits
- Withholding Taxes
- Tax Audits
- VAT/GST Records

**Budget**:
- Budget Allocations
- Variance Analysis
- Forecasting

**Treasury Management**:
- Cash Flow Forecasts
- Liquidity Management
- Treasury Policies

---

#### 3. **Operations and Asset Management** 📦
Manages company operations and physical assets:

**Product Catalog**:
- Product Details
- Product Categories
- Product Attributes

**Pricing Management**:
- Price Lists
- Discounts
- Promotions

**Product Lifecycle Management**:
- New Product Development
- Product Updates
- Product Discontinuation

**Inventory**:
- Stock Levels
- Reorder Points
- Inventory Valuation
- Inventory Aging

**Assets**:
- Asset Depreciation
- Asset Disposal
- Asset Tracking

**Maintenance**:
- Preventive Maintenance Schedules
- Maintenance Logs
- Work Orders

**Supply Chain**:
- Supplier Performance
- Order Fulfillment
- Logistics Routes

**Warehouses**:
- Warehouse Layouts
- Inventory Locations
- Pick, Pack, and Ship

**Quality Control**:
- Inspection Records
- Quality Standards
- Non-Conformance Reports
- Corrective Actions

---

#### 4. **Human Resources Management** 👥
Employee management and HR operations:

**Employee Records**:
- Employees List
- Emergency Contacts
- Employment History

**Work Contracts**:
- Contract Types
- Contract Renewals
- Contract Terminations

**Payroll**:
- Salary Structure
- Payslips
- Overtime Management
- Bonuses and Incentives

**Recruitment**:
- Job Descriptions
- Applicant Tracking
- Interview Scheduling
- Offer Letters

**Training**:
- Training Programs
- Training Records
- Certifications

**Performance Reviews**:
- Review Schedules
- Performance Metrics
- Promotion Recommendations

**Attendance**:
- Leave Balances
- Timesheet Approvals
- Shift Schedules

**Health & Safety**:
- Safety Training
- Incident Reports
- Compliance Audits

---

#### 5. **Compliance and Legal** ⚖️
Legal compliance and risk management:

**Contracts**:
- Contract Templates
- Contract Obligations
- Contract Renewal Reminders

**Regulatory Compliance**:
- Compliance Audits
- Compliance Reporting
- Regulatory Updates

**Insurance**:
- Insurance Policies
- Claims Management
- Policy Renewals

**Intellectual Property**:
- Patent Filings
- Trademark Registrations
- Licensing Agreements

**Disputes**:
- Legal Proceedings
- Settlement Agreements
- Arbitration Records

---

#### 6. **Sales and Marketing** 📊
Customer relationships and revenue generation:

**Clients/Customers**:
- Customer Segmentation
- Customer History
- Customer Satisfaction

**Leads**:
- Lead Scoring
- Lead Nurturing
- Lead Conversion Rates

**Opportunities**:
- Opportunity Stages
- Forecasting
- Win/Loss Analysis

**Orders**:
- Order Details
- Order Fulfillment
- Backorders

**Contracts Agreements (Sales)**:
- SLAs
- Service Agreements
- Renewals

**Campaigns**:
- Campaign Planning
- Campaign Execution
- Campaign Analytics

**Channel Management**:
- Partner Programs
- Distributor Management
- Channel Performance

---

#### 7. **Projects Management** 🗂️
Project planning, execution, and tracking:

**Projects**:
- Project Overview
- Project Charters
- Project Budgets

**Tasks**:
- Task Assignments
- Task Dependencies
- Task Status Tracking

**Milestones**:
- Milestone Definitions
- Milestone Tracking
- Milestone Achievements

**Resources**:
- Resource Allocation
- Resource Utilization
- Resource Costs

**Timesheets**:
- Time Entries
- Timesheet Approvals
- Billable Hours

**Issues Risks (Projects)**:
- Risk Identification
- Risk Mitigation Plans
- Issue Tracking

---

#### 8. **Analysis & Insights** 🔍
Additional business intelligence modules:

**Customer Support**:
- Feedback (Surveys, Reviews, NPS, Analysis)
- Service Contracts (SLAs, Warranties, Support Tiers)
- Ticketing System (Tickets, Escalations, Resolutions

)

**Corporate Communication**:
- Internal Communication (Announcements, Newsletters, Portals)
- External Communication (Press Releases, Media Relations, Statements)
- Crisis Management (Response Plans, Communication Logs, After-Action Reports)

**Corporate Social Responsibility**:
- Sustainability Initiatives (Green Initiatives, Impact Reports, Sustainable Sourcing)
- Community Outreach (Philanthropic Activities, Employee Volunteering, Community Investment)

**Crisis & Risk Management**:
- Risk Assessments (Identification, Scoring, Response Planning)
- Business Continuity (BCPs, Disaster Recovery, Impact Analysis)
- Crisis Management (Crisis Teams, Scenarios, Emergency Communication)

---

#### 9. **Settings** ⚙️
System configuration and preferences:

**User Settings**:
- Profile Management
- Password Change
- Notification Preferences

**System Settings**:
- General Configuration
- Email Templates
- Workflow Settings

**Organizations** (RBAC):
- Organization Management
- Users Management
- Authorizations/Permissions

---

## Entity Management System

### BaseManagementComponent
The core entity management framework handles all entities uniformly:

**Features**:
1. **Dynamic Configuration**: Entities defined via `fieldsConfig` and `stepsConfig`
2. **CRUD Operations**: Create, Read, Update, Delete via REST API
3. **Grid View**: MUI DataGrid with advanced features
4. **Form Generation**: Auto-generate forms from field definitions
5. **Validation**: Client-side and server-side validation
6. **Relationships**: Foreign key pickers and nested entities
7. **Search & Filter**: Global search + column-specific filters
8. **Export**: CSV export functionality
9. **Audit Trail**: Action logs and timeline
10. **Comments**: Entity-level discussions

### Entity Configuration
Each entity has a configuration file defining:

```javascript
{
  collectionName: 'entity_table_name',
  entityLabel: 'Display Name',
  fieldsConfig: [
    {
      name: 'field_name',
      label: 'Field Label',
      type: 'text|number|select|date|...',
      required: true|false,
      defaultValue: '',
      relatedEntity: 'other_entity', // for FK
      options: [...], // for select
      validation: {...}
    }
  ],
  stepsConfig: [
    {
      name: 'pending',
      label: 'Pending',
      description: 'Awaiting review',
      actions: [...]
    }
  ]
}
```

### Supported Field Types
- **Text inputs**: text, email, tel, url, search
- **Numbers**: number, integer, decimal, currency
- **Dates**: date, datetime-local, time, month, week
- **Selects**: select (single), multiselect
- **Booleans**: checkbox, switch, radio
- **Rich content**: textarea, wysiwyg
- **Files**: file, image
- **Relationships**: foreign-key, many-to-many
- **Special**: color, range, hidden

---

## Workflow System

### Purpose
Automate business processes with configurable state machines.

### Components
1. **entity_workflow_rules**: Database table storing workflow definitions
2. **WorkflowRulesManager**: UI for configuring workflows
3. **stepsConfig**: Entity-level step definitions
4. **Action Buttons**: Dynamic buttons in UnitVisualizer based on current step

### Workflow Definition
```javascript
{
  target_entity: 'vendor_invoices',
  current_step: 'pending',
  next_step: 'approved',
  action_label: 'Approve Invoice',
  action_icon: 'CheckCircle',
  validation_rules: {...},
  email_notification: true,
  notification_template: 'invoice_approved'
}
```

### Workflow Features
- **State Transitions**: Define allowed state changes
- **Validation**: Enforce rules before transitions
- **Notifications**: Email alerts on state changes
- **Role-Based**: Restrict actions by user role
- **Audit**: Log all state transitions
- **Icons**: Visual indicators for actions
- **Conditional Logic**: Dynamic action visibility

### Example Workflow: Invoice Processing
1. **Draft** → (Submit) → **Pending Review**
2. **Pending Review** → (Approve) → **Approved**
3. **Pending Review** → (Reject) → **Rejected**
4. **Approved** → (Mark Paid) → **Paid**
5. **Rejected** → (Revise) → **Draft**

---

## Features & Capabilities

### 1. **Versioning System** (NEW)
**Purpose**: Track all changes to entity records

**Features**:
- Automatic version creation on update
- Complete version history
- Version comparison (diff view)
- Restore previous versions
- Soft delete for versioned entities
- User attribution
- Timeline view

**Usage**:
- Enable `is_versioned = true` on entity row
- All updates create new version
- Access via `Version History` button in UnitVisualizer

**Database Fields**:
- `version_number` - Incrementing version counter
- `version_date` - Timestamp of version creation
- `version_author_id` - User who made the change
- `is_current_version` - Boolean flag for latest version
- `is_versioned` - Enable/disable versioning per row
- `original_row_id` - Link to first version

---

### 2. **Internationalization (i18n)**
**Languages Supported**:
- English (en)
- French (fr)
- Arabic (ar)

**Translation Scope**:
- UI labels and buttons
- Navigation menu items
- Field labels
- Error messages
- Workflow action names
- Entity names

**Language Switcher**:
- Available in app header
- Persists across sessions
- RTL support for Arabic

---

### 3. **Theme System**
**Modes**:
- Light mode (default)
- Dark mode

**Features**:
- Custom color palette
- Material Design 3 principles
- Persistent preference (localStorage)
- Toggle in app header
- Consistent across all pages

**Theme Customization**:
- Primary color: Blue
- Secondary color: Orange
- Error color: Red
- Typography: Roboto

---

### 4. **Comments System**
**Purpose**: Entity-level discussions

**Features**:
- Add comments to any entity
- User attribution
- Timestamps
- Edit/delete own comments
- Nested replies (optional)
- Rich text formatting
- Mentions/notifications

**Location**: CommentsSection component in UnitVisualizer

---

### 5. **Action Timeline**
**Purpose**: Audit trail of entity changes

**Features**:
- Chronological log of actions
- User attribution
- Timestamp
- Action type (create, update, delete, workflow transition)
- Changed fields
- Old vs new values

**Data Source**: manager_action_logs table

---

### 6. **Dashboard Widgets**
**Widget Types**:

1. **KPI Widget**:
   - Numeric value display
   - Trend indicator (↑↓)
   - Percentage change
   - Color-coded (green=good, red=bad)

2. **Chart Widget**:
   - Line charts (trends over time)
   - Bar charts (comparisons)
   - Pie charts (distributions)
   - Customizable data source

3. **Recent Activity**:
   - Latest entity changes
   - Quick links to entities
   - User attribution

4. **Quick Actions**:
   - Shortcut buttons
   - Create common entities
   - Navigate to frequent pages

**Widget Management**:
- Drag to rearrange
- Resize via corner drag
- Add via FAB menu
- Remove via widget `×`
- Save layout per user
- Auto-refresh data

---

### 7. **Data Export**
**Formats Supported**:
- CSV (from DataGrid)
- PDF (custom reports via ConfigurablePdf)
- Excel (via backend API)

**Export Scope**:
- Current view (filtered)
- All data
- Selected rows
- Custom range

**Buttons**:
- `Export` in grid toolbar
- `Download PDF` in report pages

---

### 8. **Advanced Grid Features**
Powered by MUI DataGrid:

- **Sorting**: Multi-column sort
- **Filtering**: Column filters + global search
- **Pagination**: Configurable page size
- **Column Management**:
  - Show/hide columns
  - Reorder columns
  - Resize columns
  - Pin columns
- **Row Selection**: Single/multiple select
- **Density**: Compact/standard/comfortable
- **Export**: CSV download
- **Inline Editing** (where enabled)
- **Cell Rendering**: Custom formatters
- **Row Actions**: View/Edit/Delete per row

---

### 9. **Dynamic Breadcrumbs**
**Purpose**: Navigation context

**Features**:
- Auto-generated from route
- Clickable links
- Current page highlight
- Module > Submodule > Entity structure

**Example**: 
`Financial Management > Accounts Payable > Vendor Invoices > Edit Invoice #123`

---

### 10. **Form Validation**
**Rules**:
- Required fields
- Email format
- Phone format
- URL format
- Number ranges
- Date ranges
- Custom regex patterns
- Unique constraints
- Conditional validation

**Visual Feedback**:
- Red border on invalid fields
- Helper text with error message
- Disabled submit until valid
- Real-time validation

---

### 11. **Notification System** (Planned)
See Future Features #3.1

---

### 12. **Task Management** (Planned)
See Future Features #3.2

---

### 13. **Row Versioning** (Implemented)
See Versioning System above

---

## Future Features

Comprehensive future enhancements are documented in [`future_features.md`](file:///c:/Users/DELL/.gemini/antigravity/brain/36afbf9c-3317-4ad2-9ee2-a1d5cc1c89b8/future_features.md):

### 1. Report Builder System
- Annual/monthly/daily reports
- Cross-entity data aggregation
- PDF/Excel/CSV export
- Scheduled report generation

### 2. Personalized Dashboard
- ✅ **IMPLEMENTED**

### 3. Internal Task Management
- Notification bar with real-time updates
- Email notifications
- Task assignment via email/user ID
- SLA tracking
- Task status workflow
- Integration with entity validation

### 4. Entity Row Versioning
- ✅ **IMPLEMENTED**

### 5. Document Manager
- File storage per entity
- Version control for documents
- Document categorization
- Preview and download

---

## Key Components Reference

### Common Buttons Across System

**Global (in app header)**:
- `☰` - Toggle navigation drawer
- `🌐` - Language switcher
- `🌙/☀️` - Dark/light mode toggle
- `👤` - User profile menu
- `🔔` - Notifications (future)

**Data Grids**:
- `+ Create` - New entity
- `Filter` - Toggle filters
- `Columns` - Column visibility
- `Export` - Download CSV
- `Refresh` - Reload data
- `Density` - Row height
- `👁️` - View (per row)
- `✏️` - Edit (per row)
- `🗑️` - Delete (per row)

**Entity Forms** (UnitVisualizer):
- `Save` - Persist changes
- `Cancel` - Discard & return
- `Delete` - Remove entity
- `Edit` - Switch mode
- `Back` - Return to list
- Workflow actions (dynamic)
- `Version History` - View versions (if enabled)
- `Add Comment` - Post comment

**Configuration Pages**:
- `Save Configuration` - Persist settings
- `Reset` - Restore defaults
- `Apply` - Apply changes
- `Preview` - Test before save

---

## Entity Count

The system manages **100+** distinct entities across:
- 9 major business modules
- 40+ sub-categories
- Multiple detail/nested entities per main entity

---

## Technical Notes

### API Endpoints
All entity CRUD follows REST conventions:
- `GET /api/subcollections/:entity` - List
- `POST /api/subcollections/:entity` - Create
- `GET /api/subcollections/:entity/:id` - Read
- `PUT /api/subcollections/:entity/:id` - Update
- `DELETE /api/subcollections/:entity/:id` - Delete

Additional endpoints:
- `GET /api/subcollections/:entity/search` - Filter by field
- `GET /api/subcollections/:entity/search-array` - Filter by array field

### Database Tables
Core tables:
- `organizations` - Tenant data
- `users` - User accounts
- `authorizations` - RBAC permissions
- `entity_workflow_rules` - Workflow definitions
- `entity_comments_history` - Comments
- `manager_action_logs` - Audit logs
- `dashboard_configurations` - Dashboard layouts
- `notifications` - Notification queue (future)
- `tasks` - Task management (future)
- 100+ entity tables

### State Management
- **AuthContext**: Current user, login/logout
- **TranslationProvider**: Current language, translation function
- **Local component state**: Forms, filters, selections

### Performance Optimizations
- Code splitting via React.lazy
- Memoized components
- Virtualized grids for large datasets
- Debounced search inputs
- Cached API responses (where applicable)

---

## Glossary

- **CRUD**: Create, Read, Update, Delete
- **RBAC**: Role-Based Access Control
- **SLA**: Service Level Agreement
- **KPI**: Key Performance Indicator
- **FAB**: Floating Action Button
- **ERP**: Enterprise Resource Planning
- **CRM**: Customer Relationship Management
- **FK**: Foreign Key
- **MUI**: Material-UI
- **i18n**: Internationalization
- **RTL**: Right-to-Left (text direction)

---

## Support & Maintenance

### Log Files
- Manager action logs: `manager_action_logs` table
- Browser console: Press F12 in browser
- Network requests: Browser Developer Tools > Network tab

### Common Issues
1. **Login fails**: Check token in localStorage
2. **Data not loading**: Check network tab for API errors
3. **Permissions denied**: Verify user authorizations
4. **Workflow button missing**: Check stepsConfig and current step

### Development
- Start dev server: `npm start`
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`

---

**Document Version**: 1.0  
**Last Updated**: February 2, 2026  
**Maintained By**: Development Team

---

*This documentation covers the complete Companizer CRM system as implemented. For future feature details, refer to future_features.md.*
