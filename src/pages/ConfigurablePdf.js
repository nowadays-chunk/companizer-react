import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import { collectionName as logsCollectionName } from '../components/Management/manager_action_logs';
import { collectionName as commentsCollectionName } from '../components/Management/entity_comments_history';
import { AccessTime, Person, CheckCircleOutline, InsertComment, ArrowForward } from '@mui/icons-material';
import { getConfig } from '../components/Management/configRegistry';

// --- HELPERS ---
const pathify = (urlParam) => {
    if (!urlParam) return '';
    return urlParam
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
};

const formatDate = (val) => {
    if (!val) return '—';
    try {
        return new Date(val).toLocaleString(undefined, {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    } catch {
        return val;
    }
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ff7675', '#74b9ff'];

// --- STYLES ---
const styles = {
    // A4 Container
    a4Page: {
        width: '210mm',
        height: '297mm',
        padding: '20mm', // Standard Margin
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)', // Screen shadow
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden', // Strict constraint
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
    },
    headerStrip: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '8px',
        background: 'linear-gradient(90deg, #1976d2 0%, #64b5f6 100%)',
    },
    sectionTitle: {
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#2c3e50',
        marginBottom: '16px',
        borderBottom: '2px solid #eee',
        paddingBottom: '8px',
        marginTop: '10px'
    },
    label: {
        fontSize: '0.7rem',
        fontWeight: 700,
        color: '#7f8c8d',
        textTransform: 'uppercase',
        marginBottom: '2px'
    },
    value: {
        fontSize: '0.9rem',
        fontWeight: 500,
        color: '#2c3e50',
    },
    card: {
        padding: '15px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        marginBottom: '15px',
    },
    stepContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
    }
};

const ConfigurablePdf = () => {
    const { main, sub, entity, id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [logs, setLogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [details, setDetails] = useState([]);
    const [detailConfig, setDetailConfig] = useState(null);
    const [stats, setStats] = useState([]);

    // Helpers
    const collectionName = entity;
    const queryHelpers = useMemo(() => helpersWrapper(collectionName), [collectionName]);
    const logsHelpers = useMemo(() => helpersWrapper(logsCollectionName), []);
    const commentsHelpers = useMemo(() => helpersWrapper(commentsCollectionName), []);

    // Load Data
    useEffect(() => {
        const loadAll = async () => {
            try {
                // 1. Load Config logic
                const componentName = pathify(entity);
                let loadedConfig = getConfig(componentName);

                // Fallback / Try finding it if name mismatch (e.g. subfolder prefix)
                if (!loadedConfig) {
                    // Try standard import just in case registry is outdated
                    try {
                        const holdingFolder = pathify(main);
                        const subFolder = pathify(sub);
                        const configModule = await import(`../components/Management/${holdingFolder}/${subFolder}/${componentName}`);
                        loadedConfig = configModule?.default || configModule;
                    } catch (e) { console.warn("Fallback import failed", e); }
                }
                setConfig(loadedConfig);

                // 2. Load Item Data
                const item = await queryHelpers.fetchItemById(id);
                setData(item);

                // 3. Load Logs (History)
                const allLogs = await logsHelpers.fetchItems();
                const entityLogs = allLogs
                    .filter(l => l.entity_id === id && l.entity_type === collectionName)
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setLogs(entityLogs);

                // 4. Load Comments
                const allComments = await commentsHelpers.fetchItems();
                const entityComments = allComments
                    .filter(c => c.entity_id === id && c.entity_type === collectionName)
                    .sort((a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt));
                setComments(entityComments);

                // 5. Load Details
                try {
                    const detailName = `${componentName}Details`;
                    // Try registry first
                    let dConfig = getConfig(detailName);

                    if (!dConfig) {
                        // Fallback import
                        const holdingFolder = pathify(main);
                        const subFolder = pathify(sub);
                        const detailModule = await import(`../components/Management/${holdingFolder}/${subFolder}/Details/${detailName}`);
                        dConfig = detailModule.default || detailModule;
                    }
                    setDetailConfig(dConfig);

                    if (dConfig) {
                        const detailEntityName = dConfig.collectionName || dConfig.entityName || `${entity}_details`;
                        const detailWrapper = helpersWrapper(detailEntityName);
                        const allDetails = await detailWrapper.fetchItems();
                        const relevantDetails = allDetails.filter(d => d.parent_id === id);

                        const enrichedDetails = await Promise.all(relevantDetails.map(async (det) => {
                            const detComments = allComments
                                .filter(c => c.entity_id === det.id && c.entity_type === detailEntityName)
                                .sort((a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt));
                            return { ...det, comments: detComments };
                        }));

                        setDetails(enrichedDetails);
                        generateDetailStats(enrichedDetails, dConfig.fieldsConfig);
                    }
                } catch (err) {
                    console.log("No details found or error loading details", err);
                }

                setLoading(false);

                // Print
                setTimeout(() => window.print(), 1500);

            } catch (err) {
                console.error("Error loading PDF data", err);
                setLoading(false);
            }
        };

        loadAll();
    }, [id, main, sub, entity, queryHelpers, logsHelpers, commentsHelpers]);

    const generateDetailStats = (rows, fieldsConfig) => {
        const generated = [];
        if (!fieldsConfig) return;
        Object.keys(fieldsConfig).forEach(field => {
            const fieldConfig = fieldsConfig[field];
            if (fieldConfig.options || ['status', 'type', 'category', 'priority'].some(k => field.includes(k))) {
                const counts = {};
                rows.forEach(r => {
                    const val = r[field] || 'Unknown';
                    counts[val] = (counts[val] || 0) + 1;
                });
                const data = Object.keys(counts).map(k => ({ name: k, value: counts[k] }));
                if (data.length > 0) generated.push({ title: fieldConfig.label || field, data: data, type: 'pie' });
            }
        });
        const numericFields = Object.keys(fieldsConfig).filter(k => fieldsConfig[k].type === 'number');
        if (numericFields.length > 0) {
            const sums = numericFields.map(f => {
                const sum = rows.reduce((acc, curr) => acc + (Number(curr[f]) || 0), 0);
                return { name: fieldsConfig[f].label, value: sum };
            });
            if (sums.some(s => s.value > 0)) generated.push({ title: 'Financial Aggregate', data: sums, type: 'bar' });
        }
        setStats(generated);
    };

    if (loading) return <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Generating Report...</Box>;
    if (!data) return <Typography p={4} color="error">Error: Data could not be loaded.</Typography>;

    // Step Logic
    const steps = config?.stepsConfig?.steps || [];
    const currentStepIndex = steps.findIndex(s => s.name === data.processing_step) || 0;

    return (
        <Box sx={{
            bgcolor: '#525659', // Dark background for screen view to pop page
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
            '@media print': {
                padding: 0,
                bgcolor: 'white',
                '& .a4-page': {
                    margin: 0,
                    boxShadow: 'none',
                    breakAfter: 'page',
                    pageBreakAfter: 'always'
                }
            }
        }}>
            <style>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    body { margin: 0; }
                }
                .a4-page {
                    page-break-after: always;
                    break-after: page;
                }
            `}</style>

            {/* ================================================================================= */}
            {/* PAGE 1: HEADER, STEPS, DATA */}
            {/* ================================================================================= */}
            <Box className="a4-page" sx={styles.a4Page}>
                <Box sx={styles.headerStrip} />

                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={4}>
                    <Box>
                        <Box display="flex" alignItems="center" gap={2} mb={1}>
                            <Typography variant="h4" sx={{ fontWeight: 900, color: '#1565c0' }}>
                                {config?.pageTitle || entity}
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" color="textSecondary">ID: {id}</Typography>
                    </Box>
                    <Box textAlign="right">
                        <Typography variant="caption" display="block" color="textSecondary">
                            CONFIDENTIAL REPORT<br />{new Date().toLocaleDateString()}
                        </Typography>
                    </Box>
                </Box>

                {/* Workflow Status Strip */}
                {steps.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                        <Typography style={styles.sectionTitle}>Process Status</Typography>
                        <Box sx={{ display: 'flex', gap: 1, overflow: 'hidden' }}>
                            {steps.map((step, idx) => {
                                const isCompleted = idx <= currentStepIndex;
                                const isCurrent = idx === currentStepIndex;
                                return (
                                    <Box key={idx} sx={{
                                        flex: 1,
                                        p: 1,
                                        bgcolor: isCurrent ? '#1976d2' : (isCompleted ? '#e3f2fd' : '#f5f5f5'),
                                        color: isCurrent ? 'white' : (isCompleted ? '#1976d2' : '#aaa'),
                                        borderRadius: 1,
                                        textAlign: 'center',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        border: isCurrent ? 'none' : '1px solid #eee'
                                    }}>
                                        {step.label || step.name}
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                )}

                <Box sx={styles.card}>
                    <Typography style={styles.sectionTitle}>Entity Data</Typography>
                    <Grid container spacing={2}>
                        {config?.fieldsConfig && Object.keys(config.fieldsConfig).map(key => {
                            if (key === 'created_at' || key === 'updated_at' || key === 'processing_step') return null;
                            const field = config.fieldsConfig[key];
                            return (
                                <Grid item xs={6} md={4} key={key}>
                                    <Box mb={1}>
                                        <Typography style={styles.label}>{field.label}</Typography>
                                        <Typography style={styles.value}>
                                            {field.type === 'date' || field.type.includes('time') ? formatDate(data[key]) : (data[key] || '—')}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>

                <Box mt="auto">
                    <Typography variant="caption" color="textSecondary" align="center" display="block">
                        Page 1 of Report • Companizer System
                    </Typography>
                </Box>
            </Box>

            {/* ================================================================================= */}
            {/* PAGE 2: WORKFLOW HISTORY & COMMENTS */}
            {/* ================================================================================= */}
            <Box className="a4-page" sx={styles.a4Page}>
                <Box sx={styles.headerStrip} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#2c3e50' }}>Activity Record</Typography>

                <Grid container spacing={4} sx={{ height: '100%', overflow: 'hidden' }}>
                    {/* Left: Comments */}
                    <Grid item xs={7} sx={{ height: '90%', display: 'flex', flexDirection: 'column' }}>
                        <Typography style={styles.sectionTitle}>Comments</Typography>
                        <Box sx={{ flex: 1, overflow: 'hidden' }}>
                            {/* Note: In print, overflow hidden cuts content. This ensures "one page only". */}
                            {comments.length === 0 ? <Typography color="textSecondary">No comments.</Typography> : (
                                comments.map((c, i) => (
                                    <Box key={i} mb={2} display="flex" gap={2} sx={{ breakInside: 'avoid' }}>
                                        <Avatar sx={{ bgcolor: '#e1f5fe', color: '#0288d1', width: 24, height: 24, mt: 0.5 }}>
                                            <InsertComment style={{ fontSize: 14 }} />
                                        </Avatar>
                                        <Box flex={1}>
                                            <Box sx={{ bgcolor: '#f8f9fa', borderRadius: '4px', p: 1.5, border: '1px solid #eee' }}>
                                                <Typography variant="body2" sx={{ color: '#444', fontSize: '0.85rem' }}>{c.comment_text || c.text}</Typography>
                                            </Box>
                                            <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                                                {c.author_name || 'User'} • {formatDate(c.created_at)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))
                            )}
                        </Box>
                    </Grid>

                    {/* Right: Workflow Log */}
                    <Grid item xs={5} sx={{ height: '90%', display: 'flex', flexDirection: 'column' }}>
                        <Typography style={styles.sectionTitle}>Workflow Log</Typography>
                        <Box sx={{ flex: 1, overflow: 'hidden', position: 'relative', pl: 2, borderLeft: '2px solid #e0e0e0' }}>
                            {logs.length === 0 ? <Typography color="textSecondary">No history.</Typography> : (
                                logs.map((l, i) => (
                                    <Box key={i} mb={3} sx={{ position: 'relative', breakInside: 'avoid' }}>
                                        <Box sx={{
                                            position: 'absolute', left: -21, top: 2, width: 8, height: 8,
                                            borderRadius: '50%', bgcolor: '#555', border: '2px solid white'
                                        }} />
                                        <Typography variant="caption" display="block" sx={{ color: '#999', fontSize: '0.7rem' }}>
                                            {formatDate(l.created_at)}
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.85rem' }}>{l.action_type}</Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.75rem' }}>{l.details}</Typography>
                                    </Box>
                                ))
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ================================================================================= */}
            {/* DETAILS PAGES */}
            {/* One Page Per Detail */}
            {/* ================================================================================= */}
            {details.map((item, idx) => (
                <Box key={idx} className="a4-page" sx={styles.a4Page}>
                    <Box sx={{ ...styles.headerStrip, background: 'linear-gradient(90deg, #6c5ce7 0%, #a29bfe 100%)' }} />

                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#6c5ce7' }}>
                            Detail Record #{idx + 1}
                        </Typography>
                    </Box>

                    <Box sx={styles.card}>
                        <Grid container spacing={2}>
                            {detailConfig?.fieldsConfig && Object.keys(detailConfig.fieldsConfig).map(key => {
                                const field = detailConfig.fieldsConfig[key];
                                return (
                                    <Grid item xs={6} key={key}>
                                        <Box margin={0.5}>
                                            <Typography style={{ ...styles.label, color: '#b2bec3' }}>{field.label}</Typography>
                                            <Typography style={styles.value}>{item[key] || '—'}</Typography>
                                        </Box>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box mt={2} flex={1} overflow="hidden">
                        <Typography style={{ ...styles.sectionTitle, color: '#6c5ce7', borderColor: '#e1d5f5' }}>Notes</Typography>
                        {item.comments && item.comments.length > 0 ? (
                            item.comments.map((c, ci) => (
                                <Box key={ci} mb={2} p={1.5} sx={{ bgcolor: '#fdfdff', borderLeft: '3px solid #6c5ce7', breakInside: 'avoid' }}>
                                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', fontSize: '0.85rem' }}>"{c.comment_text || c.text}"</Typography>
                                    <Box mt={0.5} display="flex" gap={1} alignItems="center">
                                        <Typography variant="caption" color="textSecondary">{c.author_name} • {formatDate(c.created_at)}</Typography>
                                    </Box>
                                </Box>
                            ))
                        ) : <Typography color="textSecondary" fontSize="0.8rem">No specific notes.</Typography>}
                    </Box>
                </Box>
            ))}

            {/* ================================================================================= */}
            {/* STATISTICS PAGE */}
            {/* ================================================================================= */}
            {stats.length > 0 && (
                <Box className="a4-page" sx={styles.a4Page}>
                    <Box sx={styles.headerStrip} />
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: 'center', color: '#2c3e50' }}>Analytics Dashboard</Typography>

                    <Grid container spacing={4} justifyContent="center" sx={{ flex: 1 }}>
                        {stats.map((stat, i) => (
                            <Grid item xs={12} key={i}>
                                <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 2, height: '250px' }}>
                                    <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
                                        {stat.title}
                                    </Typography>
                                    <ResponsiveContainer width="100%" height="80%">
                                        {stat.type === 'bar' ? (
                                            <BarChart data={stat.data}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                                                <YAxis tick={{ fontSize: 10 }} />
                                                <RechartsTooltip />
                                                <Bar dataKey="value" fill="#6c5ce7" barSize={40} />
                                            </BarChart>
                                        ) : (
                                            <PieChart>
                                                <Pie
                                                    data={stat.data}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={40}
                                                    outerRadius={70}
                                                    dataKey="value"
                                                    label
                                                >
                                                    {stat.data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Legend wrapperStyle={{ fontSize: '10px' }} />
                                            </PieChart>
                                        )}
                                    </ResponsiveContainer>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* ================================================================================= */}
            {/* RGPD PAGE */}
            {/* ================================================================================= */}
            <Box className="a4-page" sx={{ ...styles.a4Page, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    border: '4px solid #333',
                    padding: '40px',
                    maxWidth: '80%',
                    textAlign: 'center',
                }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, letterSpacing: '0.2em', mb: 4 }}>OFFICIAL DOCUMENT</Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1rem', lineHeight: 1.8 }}>
                        This document contains confidential information regulated by the <strong>General Data Protection Regulation (GDPR)</strong>.
                    </Typography>

                    <Typography variant="body2" color="textSecondary" paragraph>
                        Unauthorized access or reproduction is prohibited.
                    </Typography>

                    <Box mt={6} display="flex" justifyContent="center" gap={8} textAlign="left">
                        <Box>
                            <Box sx={{ width: 200, borderBottom: '2px solid black', mb: 1, height: 50 }} />
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>AUTHORIZED SIGNATURE</Typography>
                        </Box>
                        <Box>
                            <Box sx={{ width: 120, borderBottom: '2px solid black', mb: 1, height: 50 }} />
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>DATE</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default ConfigurablePdf;
