import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Chip, Avatar } from '@mui/material';

const stages = [
    { name: 'Qualification', color: 'info.light', items: [{ title: 'Acme Corp Deal', value: '$50k', owner: 'JD' }, { title: 'Globex Inquiry', value: '$12k', owner: 'AS' }] },
    { name: 'Proposal', color: 'warning.light', items: [{ title: 'Stark Ind Contract', value: '$1.2M', owner: 'TS' }] },
    { name: 'Negotiation', color: 'secondary.light', items: [{ title: 'Wayne Ent Partnership', value: '$850k', owner: 'BW' }, { title: 'Cyberdyne Systems', value: '$220k', owner: 'SC' }] },
    { name: 'Closed Won', color: 'success.light', items: [{ title: 'Umbrella Corp', value: '$45k', owner: 'AW' }] }
];

const PipelineKanban = () => {
    return (
        <Box sx={{ p: 2, overflowX: 'auto' }}>
            <Typography variant="h6" gutterBottom>Sales Pipeline</Typography>
            <Grid container spacing={2} wrap="nowrap" sx={{ minWidth: 800 }}>
                {stages.map((stage) => (
                    <Grid item xs={3} key={stage.name}>
                        <Box sx={{ bgcolor: '#f4f5f7', p: 2, borderRadius: 2, minHeight: 400 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, textTransform: 'uppercase', color: 'text.secondary' }}>
                                {stage.name}
                            </Typography>
                            {stage.items.map((item, index) => (
                                <Card key={index} sx={{ mb: 2, cursor: 'grab' }}>
                                    <CardContent sx={{ p: '16px !important' }}>
                                        <Typography variant="body2" fontWeight="bold" gutterBottom>{item.title}</Typography>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Chip label={item.value} size="small" color={stage.name === 'Closed Won' ? 'success' : 'primary'} variant="outlined" />
                                            <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>{item.owner}</Avatar>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PipelineKanban;
