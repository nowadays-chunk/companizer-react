
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TreeView,
    TreeItem,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@mui/material';
import {
    AccountTree,
    ExpandMore,
    ChevronRight,
    Folder,
    FolderOpen,
    Edit,
    Add,
    ArrowUpward,
    ArrowDownward
} from '@mui/icons-material';

// Creating a custom SimpleTreeItem component since TreeView/TreeItem might need specific imports depending on MUI version
// Simulating the structure for visual representation
const CategoryNode = ({ label, nodeId, children }) => (
    <Box sx={{ ml: 2, mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 0.5, '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' } }}>
            {children ? <FolderOpen color="primary" fontSize="small" /> : <Folder color="action" fontSize="small" />}
            <Typography variant="body1">{label}</Typography>
        </Box>
        {children && <Box sx={{ borderLeft: '1px solid #eee' }}>{children}</Box>}
    </Box>
);

const CategoryHierarchy = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountTree color="primary" /> Hierarchy & Relationships
                </Typography>
                <Button variant="contained" startIcon={<Add />}>Add Child Category</Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', minHeight: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Structure Tree</Typography>
                            <Box sx={{ mt: 2 }}>
                                <CategoryNode label="All Products" nodeId="1">
                                    <CategoryNode label="Electronics" nodeId="2">
                                        <CategoryNode label="Computers" nodeId="3">
                                            <CategoryNode label="Laptops" nodeId="4" />
                                            <CategoryNode label="Desktops" nodeId="5" />
                                        </CategoryNode>
                                        <CategoryNode label="Mobile Phones" nodeId="6" />
                                    </CategoryNode>
                                    <CategoryNode label="Furniture" nodeId="7">
                                        <CategoryNode label="Office" nodeId="8" />
                                    </CategoryNode>
                                </CategoryNode>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Parent Relationship</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Current Category" defaultValue="Laptops" disabled />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Parent Category" defaultValue="Computers" helperText="Change to move this category" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" gutterBottom>Siblings</Typography>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button variant="outlined" size="small">Desktops</Button>
                                        <Button variant="outlined" size="small">Accessories</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Cross-Category Visibility</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                Map this category to other secondary paths or aliases.
                            </Typography>
                            <List dense>
                                <ListItem secondaryAction={<IconButton edge="end"><Edit /></IconButton>}>
                                    <ListItemIcon><Folder color="secondary" /></ListItemIcon>
                                    <ListItemText primary="Back to School > Tech Essentials" secondary="Secondary Mapping" />
                                </ListItem>
                                <ListItem secondaryAction={<IconButton edge="end"><Edit /></IconButton>}>
                                    <ListItemIcon><Folder color="secondary" /></ListItemIcon>
                                    <ListItemText primary="Holiday Gifts > For Geeks" secondary="Seasonal Mapping" />
                                </ListItem>
                                <ListItem onClick={() => { }} sx={{ cursor: 'pointer', color: 'primary.main' }}>
                                    <ListItemIcon><Add color="primary" /></ListItemIcon>
                                    <ListItemText primary="Add Mapping" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryHierarchy;
