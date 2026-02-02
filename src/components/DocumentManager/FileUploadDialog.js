import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    LinearProgress,
    Alert,
    Typography,
    Paper
} from '@mui/material';
import { CloudUpload, AttachFile } from '@mui/icons-material';
import api from '../../utils/apiClient';

const FILE_CATEGORIES = [
    'invoice',
    'contract',
    'report',
    'receipt',
    'certificate',
    'image',
    'other'
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const FileUploadDialog = ({ open, onClose, entityType, entityId, onSuccess }) => {
    const [files, setFiles] = useState([]);
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [dragOver, setDragOver] = useState(false);

    const handleFileSelect = (event) => {
        const selectedFiles = Array.from(event.target.files);
        validateAndSetFiles(selectedFiles);
    };

    const validateAndSetFiles = (fileList) => {
        const validFiles = [];
        const errors = [];

        fileList.forEach(file => {
            if (file.size > MAX_FILE_SIZE) {
                errors.push(`${file.name}: File too large (max 10MB)`);
            } else {
                validFiles.push(file);
            }
        });

        if (errors.length > 0) {
            setError(errors.join(', '));
        } else {
            setError(null);
        }

        setFiles(prev => [...prev, ...validFiles]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragOver(false);
        const droppedFiles = Array.from(event.dataTransfer.files);
        validateAndSetFiles(droppedFiles);
    };

    const handleRemoveFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            setError('Please select at least one file');
            return;
        }

        setUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            files.forEach(file => {
                formData.append('files', file);
            });
            formData.append('entityType', entityType);
            formData.append('entityId', entityId);
            formData.append('category', category);
            formData.append('tags', JSON.stringify(tags));
            formData.append('description', description);

            await api.post('/documents/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form
            setFiles([]);
            setCategory('');
            setTags([]);
            setDescription('');

            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            console.error('Upload failed:', err);
            setError(err.response?.data?.message || 'Failed to upload files');
        } finally {
            setUploading(false);
        }
    };

    const handleClose = () => {
        if (!uploading) {
            setFiles([]);
            setCategory('');
            setTags([]);
            setDescription('');
            setError(null);
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Upload Documents</DialogTitle>

            <DialogContent>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {/* Drag and Drop Zone */}
                <Paper
                    variant="outlined"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    sx={{
                        p: 3,
                        mb: 2,
                        border: dragOver ? '2px dashed #1976d2' : '2px dashed #ccc',
                        bgcolor: dragOver ? 'action.hover' : 'background.paper',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    onClick={() => document.getElementById('file-input').click()}
                >
                    <CloudUpload sx={{ fontSize: 48, color: 'action.active', mb: 1 }} />
                    <Typography variant="body1" gutterBottom>
                        Drag and drop files here, or click to select
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Maximum file size: 10MB
                    </Typography>
                    <input
                        id="file-input"
                        type="file"
                        multiple
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />
                </Paper>

                {/* Selected Files */}
                {files.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Selected Files ({files.length}):
                        </Typography>
                        {files.map((file, index) => (
                            <Chip
                                key={index}
                                icon={<AttachFile />}
                                label={`${file.name} (${(file.size / 1024).toFixed(2)} KB)`}
                                onDelete={() => handleRemoveFile(index)}
                                sx={{ m: 0.5 }}
                            />
                        ))}
                    </Box>
                )}

                {/* Category */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        label="Category"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {FILE_CATEGORIES.map(cat => (
                            <MenuItem key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Tags */}
                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <TextField
                            size="small"
                            label="Add Tag"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddTag();
                                }
                            }}
                            fullWidth
                        />
                        <Button onClick={handleAddTag} variant="outlined">
                            Add
                        </Button>
                    </Box>
                    {tags.length > 0 && (
                        <Box>
                            {tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    onDelete={() => handleDeleteTag(tag)}
                                    size="small"
                                    sx={{ m: 0.5 }}
                                />
                            ))}
                        </Box>
                    )}
                </Box>

                {/* Description */}
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {uploading && (
                    <Box sx={{ mt: 2 }}>
                        <LinearProgress />
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                            Uploading files...
                        </Typography>
                    </Box>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} disabled={uploading}>
                    Cancel
                </Button>
                <Button
                    onClick={handleUpload}
                    variant="contained"
                    disabled={uploading || files.length === 0}
                    startIcon={<CloudUpload />}
                >
                    Upload
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FileUploadDialog;
