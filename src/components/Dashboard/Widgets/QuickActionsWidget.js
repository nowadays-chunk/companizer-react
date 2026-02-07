import React from 'react';
import { Button, Grid } from '@mui/material';
import { Assessment, People, AttachMoney, Inventory } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import DashboardWidget from '../DashboardWidget';

const QuickActionsWidget = ({ id, config, onRemove }) => {
    const navigate = useNavigate();

    const defaultActions = [
        { label: 'New Invoice', icon: <AttachMoney />, path: '/financial-management/accounts-payable/vendor-invoices/create' },
        { label: 'New Employee', icon: <People />, path: '/hr-management/employee-records/employees-list/create' },
        { label: 'View Reports', icon: <Assessment />, path: '/summary' },
        { label: 'Manage Inventory', icon: <Inventory />, path: '/operations-asset-management/inventory/stock-levels' },
    ];

    const actions = config.actions || defaultActions;

    return (
        <DashboardWidget
            id={id}
            title={config.title || 'Quick Actions'}
            onRemove={onRemove}
        >
            <Grid container spacing={2}>
                {actions.map((action, index) => (
                    <Grid item xs={6} key={index}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={action.icon}
                            onClick={() => navigate(action.path)}
                            sx={{
                                py: 2,
                                flexDirection: 'column',
                                gap: 1,
                                height: '100%'
                            }}
                        >
                            {action.label}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </DashboardWidget>
    );
};

export default QuickActionsWidget;
