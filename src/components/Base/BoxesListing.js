import React, { useEffect, useRef, useCallback } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, CircularProgress, Chip, Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from '../../contexts/TranslationProvider';

export default function BoxesListing({
    items,
    fieldConfig,
    onViewItem,
    onEditItem,
    onLoadMore,
    hasMore,
    loading,
    onGenerateRandomRow,
    onDeleteItem,
    onAddItem
}) {
    const { t } = useTranslation();
    const observer = useRef();

    const lastItemRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                if (onLoadMore) {
                    onLoadMore();
                }
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore, onLoadMore]);

    // Helper to get field value safely
    const getFieldValue = (row, fieldKey) => {
        const config = fieldConfig[fieldKey];
        const value = row[fieldKey];

        if (config?.type === 'select' && config?.options) {
            // Try to find label for select options
            const option = config.options.find(opt => opt.id === value);
            return option ? option.label : value;
        }
        return value;
    };

    if (!items || items.length === 0) {
        if (loading) {
            return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>;
        }
        return (
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                    {onAddItem && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onAddItem}
                            startIcon={<AddIcon />}
                            sx={{ textTransform: 'none' }}
                        >
                            {t('Add Item')}
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onGenerateRandomRow}
                        sx={{ textTransform: 'none' }}
                    >
                        {t('Generate Random Row')}
                    </Button>
                </Box>
                <Typography align="center" sx={{ mt: 4, color: 'text.secondary' }}>{t('No items found')}</Typography>
            </Box>
        );
    }

    // Determine Title Field (Use first field)
    const fieldKeys = Object.keys(fieldConfig);
    const titleFieldKey = fieldKeys[0];
    const detailFields = fieldKeys.slice(1, 5); // Show next 4 fields

    return (
        <Box sx={{ p: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 1 }}>
                {onAddItem && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onAddItem}
                        startIcon={<AddIcon />}
                        sx={{ textTransform: 'none' }}
                    >
                        {t('Add Item')}
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onGenerateRandomRow}
                    sx={{ textTransform: 'none' }}
                >
                    {t('Generate Random Row')}
                </Button>
            </Box>
            <Grid container spacing={2}>
                {items.map((row, index) => {
                    const isLastElement = items.length === index + 1;
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            key={row.id || index}
                            ref={isLastElement ? lastItemRef : null}
                        >
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                                    {/* Title */}
                                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        {getFieldValue(row, titleFieldKey)}
                                    </Typography>

                                    {/* Details */}
                                    <Stack spacing={1}>
                                        {detailFields.map(key => (
                                            <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'medium', mr: 1 }}>
                                                    {fieldConfig[key]?.label}:
                                                </Typography>
                                                <Typography variant="body2" sx={{ textAlign: 'right', wordBreak: 'break-word' }}>
                                                    {String(getFieldValue(row, key))}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>

                                {/* Actions */}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, pt: 0 }}>
                                    <IconButton size="small" onClick={() => onViewItem(row.id)} color="primary">
                                        <VisibilityIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" onClick={() => onEditItem(row.id)} color="primary">
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" onClick={() => onDeleteItem(row.id)} color="error">
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <CircularProgress size={24} />
                </Box>
            )}
        </Box>
    );
}
