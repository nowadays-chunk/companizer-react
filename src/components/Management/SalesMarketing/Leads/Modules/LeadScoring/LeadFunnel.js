import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {
    FunnelChart,
    Funnel,
    LabelList,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const data = [
    {
        "value": 100,
        "name": "Leads",
        "fill": "#8884d8"
    },
    {
        "value": 80,
        "name": "Qualified",
        "fill": "#83a6ed"
    },
    {
        "value": 50,
        "name": "Proposal",
        "fill": "#8dd1e1"
    },
    {
        "value": 40,
        "name": "Negotiation",
        "fill": "#82ca9d"
    },
    {
        "value": 26,
        "name": "Closed",
        "fill": "#a4de6c"
    }
];

const LeadFunnel = () => {
    return (
        <Box sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>Lead Conversion Funnel</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                    <Tooltip />
                    <Funnel
                        dataKey="value"
                        data={data}
                        isAnimationActive
                    >
                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                    </Funnel>
                </FunnelChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default LeadFunnel;
