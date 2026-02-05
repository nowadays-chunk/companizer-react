import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, LinearProgress, Chip } from '@mui/material';
import { Policy, AttachFile, CheckCircle, Warning } from '@mui/icons-material';

const ComplianceReporting = () => {
    const [checklist, setChecklist] = useState([
        { id: 1, text: 'Proof of Payment (Tax)', checked: true, required: true },
        { id: 2, text: 'Supplier Invoices', checked: true, required: true },
        { id: 3, text: 'R&D Project Description', checked: false, required: true },
        { id: 4, text: 'Bank Statement Verification', checked: false, required: false },
    ]);

    const handleToggle = (id) => {
        const newChecklist = checklist.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setChecklist(newChecklist);
    };

    const totalRequired = checklist.filter(i => i.required).length;
    const completedRequired = checklist.filter(i => i.required && i.checked).length;
    const progress = Math.round((completedRequired / totalRequired) * 100);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="600">Compliance Checklist</Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <Policy color={progress === 100 ? "success" : "primary"} sx={{ mr: 1 }} />
                    <Box flexGrow={1} mr={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">Documentation Readiness</Typography>
                            <Typography variant="h6" color={progress === 100 ? "success.main" : "text.primary"}>{progress}%</Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            color={progress === 100 ? "success" : "primary"}
                            sx={{ mt: 1, height: 8, borderRadius: 5 }}
                        />
                    </Box>
                </Box>

                <List>
                    {checklist.map((item) => (
                        <ListItem
                            key={item.id}
                            secondaryAction={<IconButton><AttachFile /></IconButton>}
                            disablePadding
                            sx={{ mb: 1, bgcolor: item.checked ? 'action.selected' : 'transparent', borderRadius: 1 }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={item.checked}
                                    onChange={() => handleToggle(item.id)}
                                    color="primary"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Box display="flex" alignItems="center">
                                        {item.text}
                                        {item.required && <Chip label="Required" size="small" color="error" variant="outlined" sx={{ ml: 1, height: 20, fontSize: '0.65rem' }} />}
                                    </Box>
                                }
                                secondary={item.checked ? 'Uploaded & Verified' : 'Pending upload'}
                            />
                        </ListItem>
                    ))}
                </List>

                {progress === 100 && (
                    <Box mt={2} p={2} bgcolor="success.light" color="white" borderRadius={1} display="flex" alignItems="center">
                        <CheckCircle sx={{ mr: 1 }} />
                        <Typography variant="subtitle2">All required documentation is complete. Ready for submission.</Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default ComplianceReporting;
