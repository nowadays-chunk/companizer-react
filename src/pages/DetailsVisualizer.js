import React, { useEffect, useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from '@mui/material';
import { helpersWrapper } from '../utils/clientQueries';

const DetailsVisualizer = ({ parentId, detailConfig, detailEntityName, fkFieldName }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryHelpers = useMemo(
    () => helpersWrapper(detailEntityName),
    [detailEntityName]
  );

  const { fetchDocumentsByFieldValue } = queryHelpers;

  useEffect(() => {
    const fetchDetails = async () => {
      if (!parentId || !detailEntityName || !fkFieldName) return;

      try {
        setLoading(true);
        // Use the passed Foreign Key Field Name to find related records
        const data = await fetchDocumentsByFieldValue(fkFieldName, parentId);
        setItems(data || []);
      } catch (err) {
        console.error("Error fetching details:", err);
        setError("Could not load details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [parentId, detailEntityName, detailConfig, fkFieldName, fetchDocumentsByFieldValue]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!items || items.length === 0) return <Typography variant="body2" sx={{ mt: 2 }}>No details found.</Typography>;

  const headers = Object.keys(detailConfig.fieldsConfig).filter(k => !['created_at', 'updated_at'].includes(k));

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        {detailConfig.entityName || 'Details'}
      </Typography>
      <TableContainer component={Paper} elevation={2}>
        <Table size="small">
          <TableHead sx={{ bgcolor: 'action.hover' }}>
            <TableRow>
              {headers.map((key) => (
                <TableCell key={key} sx={{ fontWeight: 'bold' }}>
                  {detailConfig.fieldsConfig[key]?.label || key}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, idx) => (
              <TableRow key={item.id || idx} hover>
                {headers.map((key) => {
                  const val = item[key];
                  const field = detailConfig.fieldsConfig[key];
                  let displayVal = val;

                  if (typeof val === 'boolean') displayVal = val ? 'Yes' : 'No';
                  else if (typeof val === 'object' && val !== null) displayVal = JSON.stringify(val);
                  else if (field?.type === 'select' && Array.isArray(field.options)) {
                    const opt = field.options.find(o => o.id === val);
                    if (opt) displayVal = opt.label;
                  }

                  return (
                    <TableCell key={key}>
                      {displayVal}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailsVisualizer;
