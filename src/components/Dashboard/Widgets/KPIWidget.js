import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import DashboardWidget from '../DashboardWidget';
import { helpersWrapper } from '../../../utils/firebaseCrudHelpers';

const KPIWidget = ({ id, config, onRemove }) => {
    const [value, setValue] = useState(0);
    const [trend, setTrend] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!config.entity || !config.field) {
                setError('Invalid configuration');
                setLoading(false);
                return;
            }

            try {
                const helper = helpersWrapper(config.entity);
                const data = await helper.fetchItems();

                let calculatedValue = 0;

                switch (config.metric) {
                    case 'sum':
                        calculatedValue = data.reduce((acc, item) => acc + (parseFloat(item[config.field]) || 0), 0);
                        break;
                    case 'average':
                        calculatedValue = data.reduce((acc, item) => acc + (parseFloat(item[config.field]) || 0), 0) / data.length;
                        break;
                    case 'count':
                        calculatedValue = data.length;
                        break;
                    case 'max':
                        calculatedValue = Math.max(...data.map(item => parseFloat(item[config.field]) || 0));
                        break;
                    case 'min':
                        calculatedValue = Math.min(...data.map(item => parseFloat(item[config.field]) || 0));
                        break;
                    default:
                        calculatedValue = data.length;
                }

                setValue(calculatedValue);
                setTrend(5.2); // Placeholder - would calculate from historical data
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();

        // Auto-refresh if interval is set
        if (config.refreshInterval) {
            const interval = setInterval(fetchData, config.refreshInterval);
            return () => clearInterval(interval);
        }
    }, [config]);

    const formatValue = (val) => {
        if (config.format === 'currency') {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
        }
        return val.toLocaleString();
    };

    return (
        <DashboardWidget
            id={id}
            title={config.title || 'KPI'}
            onRemove={onRemove}
            loading={loading}
            error={error}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {formatValue(value)}
                </Typography>

                {trend !== 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', color: trend > 0 ? 'success.main' : 'error.main' }}>
                        {trend > 0 ? <TrendingUp /> : <TrendingDown />}
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                            {Math.abs(trend)}% vs last period
                        </Typography>
                    </Box>
                )}

                <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    {config.subtitle || ''}
                </Typography>
            </Box>
        </DashboardWidget>
    );
};

export default KPIWidget;
