import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    Chip,
    Divider
} from '@mui/material';
import {
    CloudUpload,
    PictureAsPdf,
    Description,
    Image,
    Delete,
    Download,
    FilterList
} from '@mui/icons-material';
import { faker } from '@faker-js/faker';

const generateMockDocuments = (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        name: faker.system.fileName(),
        type: faker.helpers.arrayElement(['pdf', 'docx', 'png']),
        category: faker.helpers.arrayElement(['Evidence', 'Filing', 'Invoice', 'Correspondence']),
        date: faker.date.recent().toLocaleDateString(),
        size: `${faker.number.int({ min: 100, max: 5000 })} KB`
    }));
};

const AuditDocumentManagement = () => {
    const [documents, setDocuments] = useState(generateMockDocuments(8));
    const [filter, setFilter] = useState('All');

    const handleDelete = (id) => {
        setDocuments(documents.filter(doc => doc.id !== id));
    };

    const getIcon = (type) => {
        switch (type) {
            case 'pdf': return <PictureAsPdf />;
            case 'png': return <Image />;
            default: return <Description />;
        }
    };

    const categories = ['All', 'Evidence', 'Filing', 'Invoice', 'Correspondence'];

    const filteredDocs = filter === 'All' ? documents : documents.filter(d => d.category === filter);

    return (
        <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                    Audit Document Management
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<CloudUpload />}
                    component="label"
                >
                    Upload Document
                    <input hidden accept="*/*" multiple type="file" />
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Categories</Typography>
                        <List component="nav">
                            {categories.map((cat) => (
                                <ListItem
                                    button
                                    key={cat}
                                    selected={filter === cat}
                                    onClick={() => setFilter(cat)}
                                >
                                    <ListItemText primary={cat} />
                                    <Chip
                                        label={cat === 'All' ? documents.length : documents.filter(d => d.category === cat).length}
                                        size="small"
                                        color={filter === cat ? "primary" : "default"}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
                            <Typography variant="h6">{filter} Documents</Typography>
                            <IconButton><FilterList /></IconButton>
                        </Box>
                        <Divider sx={{ mb: 2 }} />

                        <List>
                            {filteredDocs.map((doc) => (
                                <React.Fragment key={doc.id}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: doc.type === 'pdf' ? '#ffcdd2' : '#e1f5fe', color: '#444' }}>
                                                {getIcon(doc.type)}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={doc.name}
                                            secondary={`${doc.date} • ${doc.size} • ${doc.category}`}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="download" sx={{ mr: 1 }}>
                                                <Download />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(doc.id)}>
                                                <Delete color="action" />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))}
                            {filteredDocs.length === 0 && (
                                <Box sx={{ p: 3, textAlign: 'center' }}>
                                    <Typography color="textSecondary">No documents found in this category.</Typography>
                                </Box>
                            )}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuditDocumentManagement;
