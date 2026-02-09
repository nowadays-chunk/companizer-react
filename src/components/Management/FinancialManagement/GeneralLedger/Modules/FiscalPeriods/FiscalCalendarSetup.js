import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    MenuItem,
    Button,
    Typography,
    useTheme,
    Divider
} from '@mui/material';

import { fieldsConfig, collectionName, entityName } from './Modules/General/FiscalCalendarSetupConfig';

const FiscalCalendarSetup = () => {
    const theme = useTheme();
    const [calendars, setCalendars] = useState([]);
    const [template, setTemplate] = useState('standard');
    const [yearName, setYearName] = useState('');

    const handleCreateYear = (event) => {
        event.preventDefault();
        console.log("Generating fiscal year for template:", template);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    title="Fiscal Calendar Setup"
                    titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                />
                <Divider />
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>Create New Fiscal Year</Typography>
                    <Box component="form" onSubmit={handleCreateYear}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Fiscal Year Name"
                                    placeholder="e.g. FY2026"
                                    value={yearName}
                                    onChange={(e) => setYearName(e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Template"
                                    value={template}
                                    onChange={(e) => setTemplate(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="standard">Standard Monthly (Calendar)</MenuItem>
                                    <MenuItem value="445">Retail 4-4-5</MenuItem>
                                    <MenuItem value="454">Retail 4-5-4</MenuItem>
                                    <MenuItem value="544">Retail 5-4-4</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    Generate Periods
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Existing Calendars</Typography>
                <Card>
                    <CardContent>
                        {calendars.length === 0 ? (
                            <Typography color="textSecondary">No fiscal calendars defined.</Typography>
                        ) : (
                            <ul>{/* List calendars here */}</ul>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default FiscalCalendarSetup;
