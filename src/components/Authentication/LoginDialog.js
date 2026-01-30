import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { login } from '../../utils/authHelpers';
import { useNavigate } from 'react-router-dom';

const LoginDialog = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const isDone = await login(email, password);
      if (isDone) {
        navigate('/summary');
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleLogin} color="primary">Login</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
