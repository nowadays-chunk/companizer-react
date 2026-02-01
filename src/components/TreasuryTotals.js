import React from 'react';
import { Box, Typography, IconButton, Tooltip, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const TreasuryTotals = ({ rows = [], columns = [] }) => {
    // Calculate totals for numeric columns (excluding 'year')
    // Calculate totals for numeric columns (excluding 'year')
    const calculateTotals = (rows, type) => {
        return columns.reduce((acc, col) => {
            if (col.type === 'number' && col.field !== 'year') {
                acc[col.field] = rows.reduce((sum, row) => {
                    const val = row[col.field] || 0;
                    // Filter based on row's invoiceType
                    if (type === 'Asset' && row.invoiceType !== 'Asset') return sum;
                    if (type === 'Liability' && row.invoiceType !== 'Liability') return sum;
                    // For 'Net', include all
                    return sum + val;
                }, 0);
            } else {
                acc[col.field] = '';
            }
            return acc;
        }, {});
    };

    const assetTotals = calculateTotals(rows, 'Asset');
    const liabilityTotals = calculateTotals(rows, 'Liability');
    const netTotals = calculateTotals(rows, 'Net');

    // Set row labels (assuming first column is the label column)
    if (columns.length > 0) {
        assetTotals[columns[0].field] = 'Total Assets';
        liabilityTotals[columns[0].field] = 'Total Liabilities';
        netTotals[columns[0].field] = 'Net Total';
    }

    const handleCopyRow = (data, label) => {
        const headers = columns.map(c => c.headerName).join(',');
        const values = columns.map(c => {
            const val = data[c.field];
            return typeof val === 'number' ? val.toFixed(2) : val;
        }).join(',');
        const csv = `${headers}\n${values}`;
        navigator.clipboard.writeText(csv);
    };

    const handleCopyCell = (value) => {
        navigator.clipboard.writeText(value);
    };

    const renderRow = (data, label, color, copyTooltip) => (
        <Box sx={{ display: 'flex', minWidth: 'min-content', borderBottom: '1px solid #ddd' }}>
            {columns.map((col, index) => {
                const value = data[col.field];
                let displayValue = value;
                const isNumber = col.type === 'number' && typeof value === 'number' && col.field !== 'year';

                if (isNumber) {
                    if (col.valueFormatter) {
                        displayValue = col.valueFormatter(value);
                    } else {
                        displayValue = value.toLocaleString();
                    }
                }

                return (
                    <Box key={col.field} sx={{
                        width: col.width,
                        minWidth: col.width,
                        p: 1,
                        borderRight: '1px solid #eee',
                        fontWeight: 'bold',
                        color: color || 'inherit',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: '#f9f9f9'
                    }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            {displayValue}
                        </Typography>
                        {/* Add copy row button to the first cell of the row only */}
                        {index === 0 && (
                            <Tooltip title={copyTooltip}>
                                <IconButton onClick={() => handleCopyRow(data, label)} size="small" sx={{ ml: 1 }}>
                                    <ContentCopyIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                );
            })}
        </Box>
    );

    return (
        <Paper elevation={3} sx={{ mt: 2, p: 2, overflowX: 'auto' }}>
            <Box sx={{ mb: 1 }}>
                <Typography variant="h6">Summary Totals</Typography>
            </Box>

            {/* Header / Column alignment is handled by fixed widths matching DataGrid */}

            {renderRow(assetTotals, 'Total Assets', 'success.main', 'Copy Assets Row')}
            {renderRow(liabilityTotals, 'Total Liabilities', 'error.main', 'Copy Liabilities Row')}
            {renderRow(netTotals, 'Net Total', 'text.primary', 'Copy Net Row')}
        </Paper>
    );
};

export default TreasuryTotals;
