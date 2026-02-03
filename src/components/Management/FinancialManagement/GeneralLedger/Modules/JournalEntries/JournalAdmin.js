import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const JournalAdmin = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Journal Admin Console</Typography>
            <Paper sx={{ p: 3 }}>
                <Typography>Configuration of journal sources, approval matrices, and rules.</Typography>
                {/* Placeholder for Admin Settings */}
            </Paper>
        </Box>
    );
};

export default JournalAdmin;
