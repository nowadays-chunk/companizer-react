import React, { useState, useEffect } from 'react';
import {
    Container,
    Paper,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
    Alert
} from '@mui/material';
import { configRegistry } from '../components/Management/configRegistry';
import WorkflowRulesEditor from '../components/WorkflowRulesEditor';
import { useAuthorization } from '../hooks/useAuthorization';
import { useNavigate } from 'react-router-dom';

const AdminConsole = () => {
    const [selectedEntity, setSelectedEntity] = useState('');
    const [entityList, setEntityList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currentUser, hasRole } = useAuthorization();
    const navigate = useNavigate();

    // Check authorization
    useEffect(() => {
        if (!currentUser || !hasRole('admin')) {
            navigate('/');
        }
    }, [currentUser, hasRole, navigate]);

    // Build entity list from configRegistry
    useEffect(() => {
        const entities = Object.keys(configRegistry).map(key => ({
            key,
            name: configRegistry[key].entityName || key,
            collectionName: configRegistry[key].collectionName || key
        })).sort((a, b) => a.name.localeCompare(b.name));

        setEntityList(entities);
    }, []);

    const handleEntityChange = (event) => {
        setSelectedEntity(event.target.value);
    };

    if (!currentUser || !hasRole('admin')) {
        return null;
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                    Admin Console - Workflow Rules Manager
                </Typography>

                <Alert severity="info" sx={{ mb: 3 }}>
                    Select an entity to view and manage its workflow rules configuration.
                </Alert>

                {/* Entity Selector */}
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel id="entity-select-label">Select Entity</InputLabel>
                    <Select
                        labelId="entity-select-label"
                        id="entity-select"
                        value={selectedEntity}
                        label="Select Entity"
                        onChange={handleEntityChange}
                    >
                        <MenuItem value="">
                            <em>-- Select an entity --</em>
                        </MenuItem>
                        {entityList.map((entity) => (
                            <MenuItem key={entity.key} value={entity.collectionName}>
                                {entity.name} ({entity.collectionName})
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Workflow Rules Editor */}
                {selectedEntity && (
                    <WorkflowRulesEditor
                        entityName={selectedEntity}
                    />
                )}

                {!selectedEntity && (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" color="text.secondary">
                            Select an entity to manage its workflow rules
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default AdminConsole;
