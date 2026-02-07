
import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar,
    Button,
    CircularProgress,
    Alert
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
} from 'recharts';
import {
    TrendingUp,
    Category,
    Timeline,
} from '@mui/icons-material';
import analysisRegistry from '../analysisRegistry';
import { helpersWrapper } from '../utils/clientQueries';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// Helper to format currency
const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const GenericAnalyticsDashboard = (props) => {
    const { entity } = useParams();

    // Determine configuration and data source
    // Priority: Props -> analysisRegistry based on param

    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const config = useMemo(() => {
        if (props.fieldsConfig && props.collectionName) {
            return {
                fieldsConfig: props.fieldsConfig,
                collectionName: props.collectionName,
                title: props.title,
                modules: props.modules || []
            };
        }
        if (entity && analysisRegistry[entity]) {
            return analysisRegistry[entity];
        }
        return null;
    }, [props, entity]);

    const helpers = useMemo(() => {
        if (config && config.collectionName) {
            return helpersWrapper(config.collectionName);
        }
        return null;
    }, [config]);

    useEffect(() => {
        // If data is passed via props, use it (handled in derived state/render), no fetch needed usually.
        // But here we want to support fetching if data is NOT passed.

        if (props.data) {
            setFetchedData(props.data);
            return;
        }

        if (!config || !helpers) {
            return;
        }

        let isMounted = true;
        setLoading(true);
        setError(null);

        helpers.fetchItems()
            .then(items => {
                if (isMounted) {
                    setFetchedData(items || []);
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error("Error loading analysis data:", err);
                if (isMounted) {
                    setError("Failed to load data.");
                    setLoading(false);
                }
            });

        return () => { isMounted = false; };
    }, [helpers, config, props.data]);

    const data = fetchedData;
    const { fieldsConfig, collectionName } = config || {};

    // All hooks must be called unconditionally, before any early returns
    // 1. KPIs (numeric aggregations)
    const kpis = useMemo(() => {
        if (!data.length || !fieldsConfig) return [];

        const numericFields = Object.keys(fieldsConfig).filter(
            key => fieldsConfig[key].type === 'number' && !key.includes('id') && key !== 'unit_price'
        );

        // Always include unit_price separately if present, or as a main KPI if it's the only one
        if (fieldsConfig.unit_price) numericFields.push('unit_price');

        return numericFields.map(field => {
            const sum = data.reduce((acc, item) => acc + (Number(item[field]) || 0), 0);
            const avg = sum / data.length;
            return {
                key: field,
                label: fieldsConfig[field].label,
                sum,
                avg,
                min: Math.min(...data.map(i => Number(i[field]) || 0)),
                max: Math.max(...data.map(i => Number(i[field]) || 0))
            };
        });
    }, [data, fieldsConfig]);

    // 2. Distributions (Pie Charts) for categorical fields (Selects)
    const distributions = useMemo(() => {
        if (!data.length || !fieldsConfig) return [];

        const categoricalFields = Object.keys(fieldsConfig).filter(
            key => fieldsConfig[key].type === 'select'
        );

        return categoricalFields.map(field => {
            const counts = data.reduce((acc, item) => {
                const val = item[field] || 'Unknown';
                acc[val] = (acc[val] || 0) + 1;
                return acc;
            }, {});

            return {
                key: field,
                label: fieldsConfig[field].label,
                data: Object.keys(counts).map(k => ({ name: k, value: counts[k] }))
            };
        });
    }, [data, fieldsConfig]);

    // 3. Trends (Line Charts) based on Date fields
    const trends = useMemo(() => {
        if (!data.length || !fieldsConfig) return { label: '', data: [] };

        const dateField = Object.keys(fieldsConfig).find(
            key => fieldsConfig[key].type === 'date' || fieldsConfig[key].type === 'datetime'
        ) || 'created_at';

        // Group by month/year
        const timeGrouped = data.reduce((acc, item) => {
            let d = item[dateField];
            if (!d && item.created_at) d = item.created_at;
            if (!d) return acc;

            const dateObj = new Date(d);
            const key = dateObj.toISOString().slice(0, 7); // YYYY-MM
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});

        const sortedData = Object.keys(timeGrouped).sort().map(key => ({
            date: key,
            count: timeGrouped[key]
        }));

        return {
            label: `Trend over time (${fieldsConfig[dateField]?.label || 'Date'})`,
            data: sortedData
        };
    }, [data, fieldsConfig]);

    // 4. Insights Generation (Simple Rules)
    const insights = useMemo(() => {
        if (!data.length) return ["No data available to generate insights."];

        const generated = [];
        generated.push(`Total ${data.length} records analyzed.`);

        kpis.forEach(kpi => {
            generated.push(`Total ${kpi.label}: ${kpi.key.includes('price') || kpi.key.includes('amount') ? formatCurrency(kpi.sum) : kpi.sum.toLocaleString()}`);
        });

        distributions.forEach(dist => {
            const top = dist.data.sort((a, b) => b.value - a.value)[0];
            if (top) generated.push(`Most common ${dist.label}: ${top.name} (${top.value} occurrences)`);
        });

        return generated;
    }, [data, kpis, distributions]);

    // Early returns after all hooks have been called
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box p={3}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    if (!config) {
        return (
            <Box p={3}>
                <Alert severity="warning">No configuration found for analytics.</Alert>
            </Box>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Box p={3}>
                <Typography variant="h6" color="textSecondary">No data available for analysis.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Box display="flex" alignItems="center" mb={4}>
                <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}><Timeline /></Avatar>
                    Analytics: {collectionName}
                </Typography>
            </Box>

            {/* KPI Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Total Records</Typography>
                            <Typography variant="h4">{data.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {kpis.slice(0, 3).map((kpi, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>{kpi.label} (Sum)</Typography>
                                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                                    {kpi.key.includes('price') || kpi.key.includes('cost') || kpi.key.includes('budget')
                                        ? formatCurrency(kpi.sum)
                                        : kpi.sum.toLocaleString()}
                                </Typography>
                                <Typography variant="caption" display="block">
                                    Avg: {kpi.key.includes('price') ? formatCurrency(kpi.avg) : kpi.avg.toFixed(2)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                {/* Trends Chart */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                        <Typography variant="h6" gutterBottom>{trends.label}</Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trends.data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                {/* Insights Panel */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: 400, overflow: 'auto', bgcolor: '#fff3e0' }}>
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                            <TrendingUp /> Key Insights
                        </Typography>
                        <List>
                            {insights.map((text, i) => (
                                <React.Fragment key={i}>
                                    <ListItem>
                                        <ListItemIcon><Category fontSize="small" /></ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                    <Divider component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Distribution Charts */}
                {distributions.map((dist, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Paper sx={{ p: 2, height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>{dist.label} Distribution</Typography>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dist.data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {dist.data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                ))}

                {/* Bar Charts for Numeric Aggregates by Category (if feasible) */}
                {distributions.length > 0 && kpis.length > 0 && (
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, height: 400 }}>
                            <Typography variant="h6" gutterBottom>
                                {kpis[0].label} by {distributions[0].label}
                            </Typography>
                            {/* We need to aggregate comparison data here, but for now let's just show a simple bar chart of the first distribution counts as a placeholder for complex cross-analysis */}
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={distributions[0].data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#82ca9d" name="Count" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                )}

            </Grid>
        </Box>
    );
};

export default GenericAnalyticsDashboard;
