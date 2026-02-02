import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardWidget from '../DashboardWidget';
import { helpersWrapper } from '../../../utils/firebaseCrudHelpers';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const ChartWidget = ({ id, config, onRemove }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!config.entity) {
                setError('No entity configured');
                setLoading(false);
                return;
            }

            try {
                const helper = helpersWrapper(config.entity);
                const rawData = await helper.fetchItems();

                // Process data based on chart type
                if (config.chartType === 'pie') {
                    // Aggregate by category
                    const aggregated = rawData.reduce((acc, item) => {
                        const key = item[config.categoryField] || 'Other';
                        acc[key] = (acc[key] || 0) + 1;
                        return acc;
                    }, {});

                    setData(Object.entries(aggregated).map(([name, value]) => ({ name, value })));
                } else {
                    // For line/bar charts, use monthly aggregation
                    const monthlyData = rawData.reduce((acc, item) => {
                        if (item[config.dateField]) {
                            const date = new Date(item[config.dateField]);
                            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

                            if (!acc[monthKey]) {
                                acc[monthKey] = { month: monthKey, value: 0 };
                            }
                            acc[monthKey].value += parseFloat(item[config.valueField]) || 1;
                        }
                        return acc;
                    }, {});

                    setData(Object.values(monthlyData).sort((a, b) => a.month.localeCompare(b.month)));
                }

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [config]);

    const renderChart = () => {
        switch (config.chartType) {
            case 'line':
                return (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" name={config.valueLabel || 'Value'} />
                        </LineChart>
                    </ResponsiveContainer>
                );

            case 'bar':
                return (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" name={config.valueLabel || 'Value'} />
                        </BarChart>
                    </ResponsiveContainer>
                );

            case 'pie':
                return (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                );

            default:
                return <Box>Unsupported chart type</Box>;
        }
    };

    return (
        <DashboardWidget
            id={id}
            title={config.title || 'Chart'}
            onRemove={onRemove}
            loading={loading}
            error={error}
        >
            <Box sx={{ width: '100%', height: 250 }}>
                {data.length > 0 ? renderChart() : <Box>No data available</Box>}
            </Box>
        </DashboardWidget>
    );
};

export default ChartWidget;
