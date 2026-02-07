import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const neonBlue = '#00f3ff';
const neonRed = '#ff0055';
const darkBg = '#050505';

const LoginDialog = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setError('');
    try {
      const isSuccess = await login(email, password);
      if (isSuccess) {
        onClose();
        navigate('/summary'); // Or dashboard
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  const textFieldSx = {
    my: 2,
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#333' },
      '&:hover fieldset': { borderColor: neonBlue },
      '&.Mui-focused fieldset': { borderColor: neonBlue, boxShadow: `0 0 10px ${neonBlue}` },
    },
    '& .MuiInputLabel-root': { color: '#aaa' },
    '& .MuiInputLabel-root.Mui-focused': { color: neonBlue },
    '& .MuiInputBase-input': { color: '#fff' },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: darkBg,
          border: `1px solid ${neonBlue}`,
          boxShadow: `0 0 20px rgba(0, 243, 255, 0.2)`,
          color: '#fff',
          minWidth: '350px'
        }
      }}
    >
      <DialogTitle sx={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
        Login
      </DialogTitle>
      <DialogContent>
        {error && (
          <Typography variant="body2" color={neonRed} sx={{ textAlign: 'center', mb: 1 }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={textFieldSx}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={textFieldSx}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button onClick={onClose} sx={{ color: '#aaa', '&:hover': { color: '#fff' } }}>Cancel</Button>
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{
            backgroundColor: neonBlue,
            color: '#000',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#fff', boxShadow: `0 0 15px ${neonBlue}` }
          }}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
