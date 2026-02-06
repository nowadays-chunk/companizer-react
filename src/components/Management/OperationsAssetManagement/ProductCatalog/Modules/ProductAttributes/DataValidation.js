
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    InputAdornment
} from '@mui/material';
import {
    FactCheck,
    Add,
    Delete,
    Warning
} from '@mui/icons-material';

const DataValidation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <FactCheck color="primary" /> Data Types & Validation Rules
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Input Constraints</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="number" label="Min Value" defaultValue="0" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="number" label="Max Value" defaultValue="100" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Decimal Precision" type="number" defaultValue="2" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Regex Pattern"
                                        placeholder="e.g. ^[A-Z]{3}-[0-9]{3}$"
                                        helperText="For advanced string validation"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Conditional Validation</Typography>
                            <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 1, mb: 2 }}>
                                <Typography variant="subtitle2" color="warning.main" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Warning fontSize="small" /> Rule #1
                                </Typography>
                                <Typography variant="body2">
                                    Required IF <strong>Product Type</strong> equals "Physical"
                                </Typography>
                            </Box>
                            <Button startIcon={<Add />}>Add Condition</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">Allowed Values (Selection List)</Typography>
                                <Button size="small" startIcon={<Add />}>Add Option</Button>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Define the list of valid options users can choose from.
                            </Typography>

                            <List dense sx={{ bgcolor: 'background.default', borderRadius: 1 }}>
                                <ListItem secondaryAction={<IconButton edge="end"><Delete fontSize="small" /></IconButton>}>
                                    <ListItemText primary="13 inch" secondary="Code: 13-IN" />
                                </ListItem>
                                <ListItem secondaryAction={<IconButton edge="end"><Delete fontSize="small" /></IconButton>}>
                                    <ListItemText primary="15 inch" secondary="Code: 15-IN" />
                                </ListItem>
                                <ListItem secondaryAction={<IconButton edge="end"><Delete fontSize="small" /></IconButton>}>
                                    <ListItemText primary="17 inch" secondary="Code: 17-IN" />
                                </ListItem>
                            </List>

                            <Box sx={{ mt: 3 }}>
                                <FormControlLabel control={<Checkbox />} label="Allow multiple selections" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DataValidation;
