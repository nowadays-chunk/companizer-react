
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

/**
 * A generic internal editor for JSON array rules (Discounts, Installments).
 * @param {Array} value - Current value (array of objects)
 * @param {Function} onChange - Callback (newValue)
 * @param {string} type - 'discount' | 'installment'
 */
const TermRuleEditor = ({ value, onChange, type }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (Array.isArray(value)) {
            setRows(value);
        } else {
            setRows([]);
        }
    }, [value]);

    const handleAdd = () => {
        const newRow = type === 'discount'
            ? { days: 10, percent: 2 }
            : { percent: 50, days_offset: 0 };
        const newRows = [...rows, newRow];
        setRows(newRows);
        onChange(newRows);
    };

    const handleDelete = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
        onChange(newRows);
    };

    const handleChange = (index, field, val) => {
        const newRows = [...rows];
        newRows[index] = { ...newRows[index], [field]: parseFloat(val) || 0 };
        setRows(newRows);
        onChange(newRows);
    };

    return (
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
                {type === 'discount' ? 'Early Payment Discounts' : 'Installment Schedule'}
            </Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        {type === 'discount' ? (
                            <>
                                <TableCell>Within Days</TableCell>
                                <TableCell>Discount %</TableCell>
                            </>
                        ) : (
                            <>
                                <TableCell>% of Total</TableCell>
                                <TableCell>Days Offset</TableCell>
                            </>
                        )}
                        <TableCell width={50}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {type === 'discount' ? (
                                <>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            type="number"
                                            value={row.days}
                                            onChange={(e) => handleChange(index, 'days', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            type="number"
                                            value={row.percent}
                                            onChange={(e) => handleChange(index, 'percent', e.target.value)}
                                        />
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            type="number"
                                            value={row.percent}
                                            onChange={(e) => handleChange(index, 'percent', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            type="number"
                                            value={row.days_offset}
                                            onChange={(e) => handleChange(index, 'days_offset', e.target.value)}
                                        />
                                    </TableCell>
                                </>
                            )}
                            <TableCell>
                                <IconButton size="small" onClick={() => handleDelete(index)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    {rows.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                <Typography variant="caption" color="textSecondary">
                                    No rules defined.
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Button startIcon={<AddIcon />} size="small" onClick={handleAdd} sx={{ mt: 1 }}>
                Add Rule
            </Button>
        </Paper>
    );
};

export default TermRuleEditor;
