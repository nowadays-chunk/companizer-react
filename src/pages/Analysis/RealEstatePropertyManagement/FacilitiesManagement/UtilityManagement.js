import React, { useEffect, useState, useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import GenericAnalyticsDashboard from '../../../../components/Analytics/GenericAnalyticsDashboard';
import { fieldsConfig, collectionName } from '../../../../components/Management/RealEstatePropertyManagement/FacilitiesManagement/UtilityManagement';
import { helpersWrapper } from '../../../../utils/firebaseCrudHelpers';

const UtilityManagementAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const helpers = useMemo(() => helpersWrapper(collectionName), []);

  useEffect(() => {
    let isMounted = true;
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

  if (loading) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
        </Box>
    );
  }

  if (error) {
     return <Typography color="error" variant="h6" p={3}>{error}</Typography>;
  }

  return (
    <GenericAnalyticsDashboard 
        data={data} 
        fieldsConfig={fieldsConfig} 
        collectionName={collectionName} 
    />
  );
};

export default UtilityManagementAnalytics;
