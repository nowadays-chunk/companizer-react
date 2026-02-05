import React from 'react';
import { Box, Typography, Paper, Grid, Tooltip } from '@mui/material';

const UXVisualization = () => {
    // Mock Data for Heatmap: Months x buckets
    const heatmapData = [
        { month: 'Nov 23', amounts: [10, 50, 20] },
        { month: 'Dec 23', amounts: [80, 20, 10] },
        { month: 'Jan 24', amounts: [30, 30, 40] },
        { month: 'Feb 24', amounts: [20, 10, 70] },
    ];

    const getColor = (val) => {
        if (val > 60) return '#ef5350'; // Red
        if (val > 30) return '#ff9800'; // Orange
        return '#66bb6a'; // Green
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Data Visualization & maturity Heatmaps</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Maturity Concentration Heatmap (USD Millions)</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: 80 }} />
                                <Box sx={{ flex: 1, textAlign: 'center' }}><Typography variant="caption">Term Loans</Typography></Box>
                                <Box sx={{ flex: 1, textAlign: 'center' }}><Typography variant="caption">Bonds</Typography></Box>
                                <Box sx={{ flex: 1, textAlign: 'center' }}><Typography variant="caption">Revolvers</Typography></Box>
                            </Box>
                            {heatmapData.map((row) => (
                                <Box key={row.month} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ width: 80 }}><Typography variant="subtitle2">{row.month}</Typography></Box>
                                    {row.amounts.map((amt, i) => (
                                        <Tooltip title={`$${amt}M Due`} key={i}>
                                            <Box sx={{
                                                flex: 1,
                                                bgcolor: getColor(amt),
                                                height: 40,
                                                m: 0.5,
                                                borderRadius: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                cursor: 'pointer',
                                                transition: 'opacity 0.2s',
                                                '&:hover': { opacity: 0.8 }
                                            }}>
                                                {amt}
                                            </Box>
                                        </Tooltip>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Interactive Maturity Ladder</Typography>
                        <Box sx={{ position: 'relative', height: 100, borderBottom: '2px solid #ccc', mt: 4, mb: 2 }}>
                            {[10, 40, 70, 90].map((pos, i) => (
                                <Box key={i} sx={{
                                    position: 'absolute',
                                    left: `${pos}%`,
                                    bottom: -6,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main', mb: 1 }} />
                                    <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>Payment #{i + 1}</Typography>
                                    <Typography variant="caption" color="textSecondary">Nov {15 + i}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Typography variant="caption" color="textSecondary" align="center" display="block">Scroll to view 2024 - 2028 timeline</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
export default UXVisualization;
