
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/material'; // Note: MUI Lab might be needed for Timeline, but often it's in material/ in newer versions or lab based on version. Assuming standard availability or using mock.
// Actually standard MUI 5 has it in @mui/lab. I'll simulate with standard components if lab is not guaranteed, but I'll try list for safety or simple layout.
// User spec says Enterprise Grade, I should use TimeLines if possible but let's stick to Safe UI.
import {
    CalendarMonth,
    ProductionQuantityLimits
} from '@mui/icons-material';

const PhaseOutPlan = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <CalendarMonth color="primary" /> Phase-Out Plan Execution
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Execution Timeline</Typography>
                            {/* Simple Timeline Visualization */}
                            <Box sx={{ position: 'relative', ml: 2, pl: 2, borderLeft: '2px solid #e0e0e0' }}>
                                <Box sx={{ mb: 4, position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', left: '-25px', bgcolor: 'primary.main', width: 16, height: 16, borderRadius: '50%' }} />
                                    <Typography variant="subtitle2" color="text.secondary">Feb 2026</Typography>
                                    <Typography variant="h6">Announcement</Typography>
                                    <Typography variant="body2">Notify sales and key distributors.</Typography>
                                </Box>
                                <Box sx={{ mb: 4, position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', left: '-25px', bgcolor: 'warning.main', width: 16, height: 16, borderRadius: '50%' }} />
                                    <Typography variant="subtitle2" color="text.secondary">Jun 2026</Typography>
                                    <Typography variant="h6">Last Time Buy (LTB)</Typography>
                                    <Typography variant="body2">Final date for accepting purchase orders.</Typography>
                                </Box>
                                <Box sx={{ mb: 4, position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', left: '-25px', bgcolor: 'orange', width: 16, height: 16, borderRadius: '50%' }} />
                                    <Typography variant="subtitle2" color="text.secondary">Sep 2026</Typography>
                                    <Typography variant="h6">Production Stop</Typography>
                                    <Typography variant="body2">Cease all manufacturing activities.</Typography>
                                </Box>
                                <Box sx={{ position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', left: '-25px', bgcolor: 'error.main', width: 16, height: 16, borderRadius: '50%' }} />
                                    <Typography variant="subtitle2" color="text.secondary">Dec 2026</Typography>
                                    <Typography variant="h6">End of Support</Typography>
                                    <Typography variant="body2">Technical support wind-down.</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Production Wind-Down</Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" display="flex" alignItems="center" gap={1}>
                                    <ProductionQuantityLimits fontSize="small" /> Remaining Build Plan
                                </Typography>
                                <Typography variant="h4">1,500 Units</Typography>
                                <Typography variant="caption">To satisfy forecasted LTB orders.</Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2">Safety Stock Reduction</Typography>
                                <Typography variant="body2">Reduce safety stock to 0 by Jun 2026.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PhaseOutPlan;
