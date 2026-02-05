import React, { useEffect, useState, useMemo } from 'react';
import { Box, CircularProgress, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GenericAnalyticsDashboard from '../../../../components/Analytics/GenericAnalyticsDashboard';
import { fieldsConfig, collectionName, modules } from '../../../../components/Management/FinancialManagement/Taxation/TaxCredits';
import { helpersWrapper } from '../../../../utils/firebaseCrudHelpers';

const TaxCreditsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const generalModules = modules.filter(m => m.type === 'General');

  return (
    <Box>
      <Box sx={{ mb: 4, p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          Tax Credits Management
        </Typography>
        <Grid container spacing={2}>
          {generalModules.map((module) => {
            const Icon = module.icon;
            return (
              <Grid item xs={12} sm={6} md={3} lg={2} key={module.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'action.hover',
                      transform: 'translateY(-2px)'
                    }
                  }}
                  onClick={() => navigate(module.path)}
                >
                  <Box sx={{ color: 'primary.main', mb: 1 }}>
                    {Icon && <Icon fontSize="large" />}
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {module.name}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <GenericAnalyticsDashboard
        data={data}
        fieldsConfig={fieldsConfig}
        collectionName={collectionName}
      />
    </Box>
  );
};

export default TaxCreditsPage;
