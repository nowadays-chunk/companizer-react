import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    IconButton,
    Chip,
    Alert,
    CircularProgress,
    Grid,
    Tooltip
} from '@mui/material';
import {
    CloudUpload,
    Download,
    Delete,
    Description,
    PictureAsPdf,
    Image as ImageIcon,
    InsertDriveFile,
    Refresh
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import FileUploadDialog from './FileUploadDialog';
import api from '../../utils/apiClient';

const DocumentManager = ({ entityType, entityId }) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (entityType && entityId) {
            fetchDocuments();
        }
    }, [entityType, entityId]);

    const fetchDocuments = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get('/documents', {
                params: { entityType, entityId }
            });
            setDocuments(data || []);
        } catch (err) {
            console.error('Failed to fetch documents:', err);
            setError('Failed to load documents');
        } finally {
            setLoading(false);
        }
    };

    const handleUploadSuccess = () => {
        setUploadDialogOpen(false);
        fetchDocuments();
    };

    const handleDownload = async (document) => {
        try {
            const response = await api.get(`/documents/download/${document.path}`, {
                responseType: 'blob'
            });

            // Determine MIME type (use from document data if available, otherwise fallback)
            const mimeType = document.mime_type || response.headers['content-type'] || 'application/octet-stream';

            // Create blob with explicit type
            const blob = new Blob([response.data], { type: mimeType });
            const url = window.URL.createObjectURL(blob);

            // Determine filename (fallback to path basename if original_filename is missing)
            const filename = document.fileName || document.path.split('/').pop() || 'download';

            const link = window.document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            window.document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Download failed:', err);
            alert('Failed to download file');
        }
    };

    const handleDelete = async (documentId) => {
        if (!window.confirm('Are you sure you want to delete this document?')) {
            return;
        }

        try {
            await api.delete(`/documents/${documentId}`);
            fetchDocuments();
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Failed to delete document');
        }
    };

    const getFileIcon = (mimeType) => {
        if (!mimeType) return <InsertDriveFile />;

        if (mimeType.startsWith('image/')) return <ImageIcon />;
        if (mimeType === 'application/pdf') return <PictureAsPdf />;
        if (mimeType.includes('word') || mimeType.includes('document')) return <Description />;
        return <InsertDriveFile />;
    };

    const formatFileSize = (bytes) => {
        if (!bytes) return 'N/A';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };

    const columns = [
        {
            field: 'fileName',
            headerName: 'File Name',
            flex: 1,
            minWidth: 200,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflow: 'hidden', width: '100%' }}>
                    {getFileIcon(params.row.mime_type)}
                    <Typography variant="body2" sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {params.value}
                    </Typography>
                </Box>
            )
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 120,
            renderCell: (params) => params.value ? (
                <Chip label={params.value} size="small" />
            ) : null
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value || ''}>
                    <Typography variant="body2" sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {params.value}
                    </Typography>
                </Tooltip>
            )
        },
        {
            field: 'createdAt',
            headerName: 'Created Date',
            width: 180,
            valueFormatter: (value) => value ? format(new Date(value), 'yyyy/MM/dd HH:mm:ss') : ''
        },
        {
            field: 'mimeType',
            headerName: 'MIME Type',
            width: 150
        },
        {
            field: 'size',
            headerName: 'Size',
            width: 100,
            valueFormatter: (value) => formatFileSize(value)
        },
        {
            field: 'tags',
            headerName: 'Tags',
            width: 200,
            renderCell: (params) => {
                let tags = params.value;
                if (typeof tags === 'string') {
                    try {
                        tags = JSON.parse(tags);
                    } catch (e) {
                        tags = [];
                    }
                }
                if (!Array.isArray(tags) || tags.length === 0) return null;

                return (
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {tags.map((tag, index) => (
                            <Chip key={index} label={tag} size="small" variant="outlined" />
                        ))}
                    </Box>
                );
            }
        },
        {
            field: 'uploadedBy',
            headerName: 'Uploaded By',
            width: 150,
            renderCell: (params) => `User ${params.value || 'Unknown'}`
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <Box>
                    <Tooltip title="Download">
                        <IconButton
                            size="small"
                            onClick={() => handleDownload(params.row)}
                            color="primary"
                        >
                            <Download fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton
                            size="small"
                            onClick={() => handleDelete(params.row.id)}
                            color="error"
                        >
                            <Delete fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
            sortable: false,
            filterable: false
        }
    ];

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">
                        Documents
                    </Typography>
                    <Box>
                        <Button
                            startIcon={<Refresh />}
                            onClick={fetchDocuments}
                            disabled={loading}
                            sx={{ mr: 1 }}
                        >
                            Refresh
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<CloudUpload />}
                            onClick={() => setUploadDialogOpen(true)}
                        >
                            Upload
                        </Button>
                    </Box>
                </Box>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : documents.length === 0 ? (
                    <Alert severity="info">
                        No documents uploaded yet. Click "Upload" to add files.
                    </Alert>
                ) : (
                    <DataGrid
                        rows={documents}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10, 25, 50]}
                        autoHeight
                        getRowHeight={() => 'auto'}
                        disableSelectionOnClick
                        sx={{ mt: 2 }}
                    />
                )}

                <FileUploadDialog
                    open={uploadDialogOpen}
                    onClose={() => setUploadDialogOpen(false)}
                    entityType={entityType}
                    entityId={entityId}
                    onSuccess={handleUploadSuccess}
                />
            </CardContent>
        </Card>
    );
};

export default DocumentManager;
