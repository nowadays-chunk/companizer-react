import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ShowChart } from '@mui/icons-material';

const ProfitabilityVariance = () => {
    const [region, setRegion] = useState('Global');

    const getData = (reg) => {
        switch (reg) {
            case 'NA': return { gross: 26.5, op: 14.2, net: 9.5, grossVar: '+0.8%', opVar: '+1.9%', netVar: 'Exceeding' };
            case 'EMEA': return { gross: 22.1, op: 10.5, net: 6.8, grossVar: '-3.6%', opVar: '-1.8%', netVar: 'Need Action' };
            default: return { gross: 24.5, op: 12.8, net: 8.2, grossVar: '-1.2%', opVar: '+0.5%', netVar: 'On Track' };
        }
    };

    const stats = getData(region);

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ShowChart color="primary" /> Profitability Variance
                </Typography>
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Region</InputLabel>
                    <Select value={region} label="Region" onChange={(e) => setRegion(e.target.value)}>
                        <MenuItem value="Global">Global</MenuItem>
                        <MenuItem value="NA">North America</MenuItem>
                        <MenuItem value="EMEA">EMEA</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Gross Margin</Typography>
                            <Typography variant="h3">{stats.gross}%</Typography>
                            <Typography variant="body2" color={stats.gross >= 24 ? 'success.main' : 'error.main'}>
                                {stats.grossVar} vs Budget
                            </Typography>
                            <LinearProgress variant="determinate" value={stats.gross * 3} color={stats.gross >= 24 ? 'success' : 'warning'} sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Operating Margin (EBIT)</Typography>
                            <Typography variant="h3">{stats.op}%</Typography>
                            <Typography variant="body2" color="success.main">
                                {stats.opVar} vs Budget
                            </Typography>
                            <LinearProgress variant="determinate" value={stats.op * 4} color="success" sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>Net Profit Margin</Typography>
                            <Typography variant="h3">{stats.net}%</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {stats.netVar}
                            </Typography>
                            <LinearProgress variant="determinate" value={stats.net * 5} color="primary" sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfitabilityVariance;
