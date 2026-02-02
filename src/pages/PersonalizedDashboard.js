import React, { useState } from 'react';
import { Container, Box, Button, Typography, Fab, Menu, MenuItem, Alert } from '@mui/material';
import { Add, Save, Refresh } from '@mui/icons-material';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import useDashboard from '../hooks/useDashboard';
import { useAuthorization } from '../hooks/useAuthorization';

// Import widgets
import KPIWidget from '../components/Dashboard/Widgets/KPIWidget';
import ChartWidget from '../components/Dashboard/Widgets/ChartWidget';
import RecentActivityWidget from '../components/Dashboard/Widgets/RecentActivityWidget';
import QuickActionsWidget from '../components/Dashboard/Widgets/QuickActionsWidget';

const PersonalizedDashboard = () => {
    const { currentUser } = useAuthorization();
    const {
        layout,
        setLayout,
        widgets,
        loading,
        saving,
        saveDashboard,
        addWidget,
        removeWidget,
        resetToDefaults
    } = useDashboard(currentUser?.id);

    const [anchorEl, setAnchorEl] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleAddWidgetClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAddWidget = (type) => {
        let widgetConfig = {};

        switch (type) {
            case 'kpi':
                widgetConfig = {
                    type: 'kpi',
                    config: {
                        title: 'New KPI',
                        entity: 'customer_invoices',
                        field: 'total_price',
                        metric: 'sum',
                        format: 'currency'
                    }
                };
                break;
            case 'chart':
                widgetConfig = {
                    type: 'chart',
                    config: {
                        title: 'New Chart',
                        entity: 'customer_invoices',
                        chartType: 'line',
                        dateField: 'created_at',
                        valueField: 'total_price',
                        valueLabel: 'Revenue'
                    }
                };
                break;
            case 'recent-activity':
                widgetConfig = {
                    type: 'recent-activity',
                    config: {
                        title: 'Recent Activity',
                        limit: 10
                    }
                };
                break;
            case 'quick-actions':
                widgetConfig = {
                    type: 'quick-actions',
                    config: {
                        title: 'Quick Actions'
                    }
                };
                break;
            default:
                return;
        }

        addWidget(widgetConfig);
        setAnchorEl(null);
    };

    const handleSave = async () => {
        try {
            await saveDashboard();
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (error) {
            console.error('Failed to save dashboard', error);
        }
    };

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    const renderWidget = (widget) => {
        switch (widget.type) {
            case 'kpi':
                return <KPIWidget key={widget.id} id={widget.id} config={widget.config} onRemove={removeWidget} />;
            case 'chart':
                return <ChartWidget key={widget.id} id={widget.id} config={widget.config} onRemove={removeWidget} />;
            case 'recent-activity':
                return <RecentActivityWidget key={widget.id} id={widget.id} config={widget.config} onRemove={removeWidget} />;
            case 'quick-actions':
                return <QuickActionsWidget key={widget.id} id={widget.id} config={widget.config} onRemove={removeWidget} />;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography>Loading dashboard...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    My Dashboard
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<Refresh />}
                        onClick={resetToDefaults}
                    >
                        Reset
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Save />}
                        onClick={handleSave}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Save Layout'}
                    </Button>
                </Box>
            </Box>

            {saveSuccess && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    Dashboard saved successfully!
                </Alert>
            )}

            {/* Grid Layout */}
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={100}
                width={1200}
                onLayoutChange={handleLayoutChange}
                draggableHandle=".drag-handle"
            >
                {widgets.map((widget) => (
                    <div key={widget.id} className="drag-handle">
                        {renderWidget(widget)}
                    </div>
                ))}
            </GridLayout>

            {/* Add Widget FAB */}
            <Fab
                color="primary"
                aria-label="add widget"
                sx={{ position: 'fixed', bottom: 32, right: 32 }}
                onClick={handleAddWidgetClick}
            >
                <Add />
            </Fab>

            {/* Add Widget Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => handleAddWidget('kpi')}>KPI Card</MenuItem>
                <MenuItem onClick={() => handleAddWidget('chart')}>Chart</MenuItem>
                <MenuItem onClick={() => handleAddWidget('recent-activity')}>Recent Activity</MenuItem>
                <MenuItem onClick={() => handleAddWidget('quick-actions')}>Quick Actions</MenuItem>
            </Menu>
        </Container>
    );
};

export default PersonalizedDashboard;
