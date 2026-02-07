import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import GenericAnalyticsDashboard from './GenericAnalyticsDashboard';
import analysisRegistry from '../analysisRegistry';
import { helpersWrapper } from '../utils/clientQueries';

/**
 * Unified Analysis Component
 * 
 * This component replaces all individual analysis modules by using URL parameters
 * to determine which analysis to display. It fetches the configuration from the
 * analysisRegistry and renders the GenericAnalyticsDashboard.
 * 
 * Route: /analysis/:entity
 * Example: /analysis/CustomerSurveys, /analysis/AfterActionReports
 */
const Analysis = () => {
    const { entity } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get configuration from analysisRegistry
    const config = useMemo(() => {
        if (entity && analysisRegistry[entity]) {
            return analysisRegistry[entity];
        }
        return null;
    }, [entity]);

    // Create helpers for fetching data
    const helpers = useMemo(() => {
        if (config && config.collectionName) {
            return helpersWrapper(config.collectionName);
        }
        return null;
    }, [config]);

    // Fetch data on mount or when helpers change
    useEffect(() => {
        if (!helpers) {
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
    }, [helpers]);

    // Loading state
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    // Error state
    if (error) {
        return <Typography color="error" variant="h6" p={3}>{error}</Typography>;
    }

    // No configuration found
    if (!config) {
        return (
            <Box p={3}>
                <Typography color="error" variant="h6">
                    No analysis configuration found for entity: {entity}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                    Please check the analysisRegistry to ensure this entity is configured.
                </Typography>
            </Box>
        );
    }

    // Render the analytics dashboard
    return (
        <GenericAnalyticsDashboard
            data={data}
            fieldsConfig={config.fieldsConfig}
            collectionName={config.collectionName}
        />
    );
};

export default Analysis;
