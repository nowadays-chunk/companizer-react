import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function BaseModal({ open, onClose, onSubmit, initialData, fieldConfig }) {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <DialogContent>
        {Object.keys(fieldConfig).map((key) => (
          <TextField
            key={key}
            label={fieldConfig[key].label}
            value={formData[key] || ''}
            onChange={(e) => handleChange(key, e.target.value)}
            fullWidth
            margin="normal"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
    