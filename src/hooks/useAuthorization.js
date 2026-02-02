import { useAuth } from '../contexts/AuthContext';

// Role hierarchy - higher index = more permissions
const ROLE_HIERARCHY = [
    'viewer',
    'user',
    'auditor',
    'sales_manager',
    'hr_manager',
    'accountant',
    'manager',
    'admin',
    'super_admin'
];

export const useAuthorization = () => {
    const { currentUser, userAuthorizations } = useAuth();

    /**
     * Check if user has required role or higher
     */
    const hasRole = (requiredRole) => {
        if (!currentUser || !requiredRole) return false;

        const userRoleIndex = ROLE_HIERARCHY.indexOf(currentUser.role?.toLowerCase());
        const requiredRoleIndex = ROLE_HIERARCHY.indexOf(requiredRole?.toLowerCase());

        return userRoleIndex >= requiredRoleIndex;
    };

    /**
     * Check if user can perform action on entity
     */
    const canPerformAction = (action, entityType = null, entityRowId = null, processingStep = null) => {
        if (!currentUser) return false;

        // Super admin can do everything
        if (currentUser.role === 'super_admin') return true;

        // Check role-based permission
        // (This would be defined in actionsConfig with authorized_role)

        // Check specific authorizations
        const relevantAuths = userAuthorizations.filter(auth => {
            // Check if authorization is active
            if (!auth.is_active) return false;

            // Check time bounds
            const now = new Date();
            if (auth.authorization_end_date && new Date(auth.authorization_end_date) < now) {
                return false;
            }

            // Check entity type match
            if (auth.entity_type && entityType && auth.entity_type !== entityType) {
                return false;
            }

            // Check specific row match
            if (auth.entity_row_id && entityRowId && auth.entity_row_id !== entityRowId) {
                return false;
            }

            // Check workflow step restriction
            if (auth.entity_row_processing_step && processingStep) {
                // Auth is invalid if current step matches or is past the restriction
                if (processingStep === auth.entity_row_processing_step) {
                    return false;
                }
            }

            // Check if action is in authorized_actions
            if (auth.authorized_actions) {
                try {
                    const actions = typeof auth.authorized_actions === 'string'
                        ? JSON.parse(auth.authorized_actions)
                        : auth.authorized_actions;

                    if (Array.isArray(actions) && !actions.includes(action)) {
                        return false;
                    }
                } catch (e) {
                    console.error('Error parsing authorized_actions:', e);
                    return false;
                }
            }

            return true;
        });

        return relevantAuths.length > 0;
    };

    /**
     * Check if user can access page
     */
    const canAccessPage = (pagePath) => {
        if (!currentUser) return false;
        if (currentUser.role === 'super_admin') return true;

        const pageAuth = userAuthorizations.find(auth =>
            auth.is_active &&
            auth.authorized_page === pagePath
        );

        return !!pageAuth;
    };

    /**
     * Get filtered actions based on user permissions
     */
    /**
     * Get filtered actions based on user permissions
     */
    const getAuthorizedActions = (actionsConfig, entityType = null, entityRowId = null, processingStep = null) => {
        if (!actionsConfig) return {};

        const authorized = {};

        Object.entries(actionsConfig).forEach(([actionKey, actionConfig]) => {
            const requiredRole = actionConfig.authorized_role;

            // Check if role requirement is met (or if no role is required)
            const roleSatisfied = requiredRole ? hasRole(requiredRole) : true;

            // Check specific authorizations (can override role restrictions or provide granular access)
            // We only check this if entity context is provided
            const specificAuthSatisfied = (entityType || entityRowId)
                ? canPerformAction(actionKey, entityType, entityRowId, processingStep)
                : false;

            // Allow if EITHER:
            // 1. Role requirement is met (standard RBAC)
            // 2. Specific authorization exists (Granular/Exception access)
            //
            // Note: If an action has no authorized_role, roleSatisfied is true, so it defaults to allowed.
            // Restricting access would require adding a role or implementing a 'deny' list logic.
            if (roleSatisfied || specificAuthSatisfied) {
                authorized[actionKey] = actionConfig;
            }
        });

        return authorized;
    };

    return {
        currentUser,
        hasRole,
        canPerformAction,
        canAccessPage,
        getAuthorizedActions
    };
};
