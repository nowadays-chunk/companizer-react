import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Container, Alert } from '@mui/material';
import GenericAnalyticsDashboard from './GenericAnalyticsDashboard';
import { helpersWrapper } from '../utils/clientQueries';
import analysisRegistry from '../analysisRegistry';

const Analytics = (props) => {
    const params = useParams();
    const entity = params.component;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get config from registry based on URL parameter
    const config = analysisRegistry[entity];

    const helpers = useMemo(() => {
        if (config) {
            return helpersWrapper(config.collectionName);
        }
        return null;
    }, [config]);

    useEffect(() => {
        if (!config || !helpers) {
            setLoading(false);
            return;
        }

        let isMounted = true;
        setLoading(true);
        setError(null);

        helpers.fetchItems()
            .then(items => {
                if (isMounted) {
                    setData(items || []);
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error("Error loading analysis data:", err);
                if (isMounted) {
                    setError("Failed to load data.");
                    setLoading(false);
                }
            });

        return () => { isMounted = false; };
    }, [helpers, config]);

    if (!config) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="error">
                    Analytics configuration not found for entity: <strong>{entity}</strong>
                </Alert>
            </Container>
        );
    }

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography color="error" variant="h6">{error}</Typography>
            </Container>
        );
    }

    return (
        <GenericAnalyticsDashboard
            data={data}
            fieldsConfig={config.fieldsConfig}
            collectionName={config.collectionName}
            title={config.title}
        />
    );
};

export default Analytics;
