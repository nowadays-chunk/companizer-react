import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Switch,
    FormControlLabel,
    Slider,
    TextField,
    Button,
    Divider,
    Paper,
    useTheme
} from '@mui/material';

const MatchingRulesEngine = () => {
    const theme = useTheme();

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Matching Rules Engine"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom color="primary">Auto-Match Criteria</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Match on Exact Amount" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Match on Date (within tolerance)" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Match on Reference / Cheque #" />
                                <FormControlLabel control={<Switch />} label="Fuzzy Description Matching" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom color="primary">Tolerances</Typography>
                            <Box sx={{ p: 2, border: `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
                                <Typography id="date-tolerance" gutterBottom>Date Tolerance (Days)</Typography>
                                <Slider
                                    defaultValue={3}
                                    step={1}
                                    marks
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="auto"
                                />
                                <Divider sx={{ my: 2 }} />
                                <Typography gutterBottom>Amount Tolerance ($)</Typography>
                                <TextField size="small" fullWidth type="number" defaultValue="0.05" />
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, bgcolor: theme.palette.action.selected }}>
                                <Typography variant="h6" gutterBottom>Machine Learning</Typography>
                                <Typography variant="body2" paragraph>
                                    Enable the system to learn from manual matches to suggest future auto-matches.
                                </Typography>
                                <Button variant="contained" color="secondary">Enable Smart Learning</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MatchingRulesEngine;
