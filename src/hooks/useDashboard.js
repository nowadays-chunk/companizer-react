import { useState, useEffect, useCallback, useMemo } from 'react';
import { helpersWrapper } from '../utils/clientQueries';

const useDashboard = (userId) => {
    const [layout, setLayout] = useState([]);
    const [widgets, setWidgets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const dashboardHelper = useMemo(() => helpersWrapper('dashboard_configurations'), []);

    // Load dashboard configuration
    useEffect(() => {
        if (!userId) return;

        const loadDashboard = async () => {
            setLoading(true);
            try {
                const configs = await dashboardHelper.fetchItems();
                const userConfig = configs.find(c => c.user_id === userId);

                if (userConfig) {
                    setLayout(JSON.parse(userConfig.layout || '[]'));
                    setWidgets(JSON.parse(userConfig.widgets || '[]'));
                } else {
                    // Load default layout for user role
                    loadDefaultLayout();
                }
            } catch (error) {
                console.error('Failed to load dashboard:', error);
                loadDefaultLayout();
            } finally {
                setLoading(false);
            }
        };

        loadDashboard();
    }, [userId, dashboardHelper]);

    const loadDefaultLayout = () => {
        // Default layout with sample widgets
        const defaultWidgets = [
            {
                id: 'widget-1',
                type: 'kpi',
                config: {
                    title: 'Total Revenue',
                    entity: 'customer_invoices',
                    metric: 'sum',
                    field: 'total_price'
                }
            },
            {
                id: 'widget-2',
                type: 'recent-activity',
                config: {
                    title: 'Recent Activity',
                    limit: 10
                }
            }
        ];

        const defaultLayout = [
            { i: 'widget-1', x: 0, y: 0, w: 3, h: 2 },
            { i: 'widget-2', x: 3, y: 0, w: 6, h: 4 }
        ];

        setWidgets(defaultWidgets);
        setLayout(defaultLayout);
    };

    // Save dashboard configuration
    const saveDashboard = useCallback(async () => {
        if (!userId) return;

        setSaving(true);
        try {
            const configs = await dashboardHelper.fetchItems();
            const userConfig = configs.find(c => c.user_id === userId);

            const data = {
                user_id: userId,
                layout: JSON.stringify(layout),
                widgets: JSON.stringify(widgets)
            };

            if (userConfig) {
                await dashboardHelper.updateItem(userConfig.id, data);
            } else {
                await dashboardHelper.addItem(data);
            }
        } catch (error) {
            console.error('Failed to save dashboard:', error);
            throw error;
        } finally {
            setSaving(false);
        }
    }, [userId, layout, widgets, dashboardHelper]);

    // Add widget
    const addWidget = useCallback((widget) => {
        const newWidget = {
            ...widget,
            id: `widget-${Date.now()}`
        };

        setWidgets(prev => [...prev, newWidget]);

        // Add to layout
        const newLayoutItem = {
            i: newWidget.id,
            x: 0,
            y: Infinity, // Put at bottom
            w: 3,
            h: 2
        };

        setLayout(prev => [...prev, newLayoutItem]);
    }, []);

    // Remove widget
    const removeWidget = useCallback((widgetId) => {
        setWidgets(prev => prev.filter(w => w.id !== widgetId));
        setLayout(prev => prev.filter(l => l.i !== widgetId));
    }, []);

    // Update widget config
    const updateWidget = useCallback((widgetId, config) => {
        setWidgets(prev => prev.map(w =>
            w.id === widgetId ? { ...w, config: { ...w.config, ...config } } : w
        ));
    }, []);

    // Reset to defaults
    const resetToDefaults = useCallback(() => {
        loadDefaultLayout();
    }, []);

    return {
        layout,
        setLayout,
        widgets,
        loading,
        saving,
        saveDashboard,
        addWidget,
        removeWidget,
        updateWidget,
        resetToDefaults
    };
};

export default useDashboard;
