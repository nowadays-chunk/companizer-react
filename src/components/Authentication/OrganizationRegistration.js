import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Alert,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import { useAuth } from "../../contexts/AuthContext"; // Use AuthContext

const neonBlue = '#00f3ff';
const darkBg = '#050505';

const OrganizationRegistration = () => {
  const [orgName, setOrgName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [numUsers, setNumUsers] = useState(1);
  const [numStores, setNumStores] = useState(1);
  const [error, setError] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { registerOrganization } = useAuth(); // Use context method

  const userPrice = 50;
  const storePrice = 100;
  const basePrice = 500;
  const totalPrice = basePrice + numUsers * userPrice + numStores * storePrice;

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await registerOrganization({
        orgName,
        firstName,
        lastName,
        email,
        password,
        domain,
        numUsers,
        numStores,
        totalPrice,
      });

      setConfirmationOpen(true);
    } catch (err) {
      console.error("Error registering organization:", err);
      setError(
        err.response?.data?.message ||
        "An error occurred during registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    setConfirmationOpen(false);
    navigate("/summary"); // Go to dashboard after confirm
  };

  const textFieldSx = {
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
    <Box sx={{ backgroundColor: darkBg, minHeight: '100vh', color: '#fff', pb: 10 }}>
      <Container maxWidth="sm">
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5,5,5,0.9)', borderBottom: '1px solid #333' }}>
          <Toolbar>
            <Button component={Link} to="/" sx={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Vault Insight
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mt: 5,
            backgroundColor: '#0a0a0a',
            border: `1px solid ${neonBlue}`,
            boxShadow: `0 0 30px rgba(0, 243, 255, 0.1)`,
            color: '#fff'
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
            Register Organization
          </Typography>
          <form onSubmit={handleRegister}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Organization Name"
                variant="outlined"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Box>
            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  sx={textFieldSx}
                />
              </Grid>
            </Grid>

            <Box sx={{ mb: 3, mt: 3 }}>
              <TextField
                fullWidth
                label="Organization Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Custom Domain"
                variant="outlined"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
                sx={textFieldSx}
                helperText='e.g. "mycompany" (creates mycompany.vaultinsight.com)'
                FormHelperTextProps={{ sx: { color: '#666' } }}
              />
            </Box>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Number of Users"
                  type="number"
                  variant="outlined"
                  value={numUsers}
                  onChange={(e) =>
                    setNumUsers(Math.max(1, parseInt(e.target.value, 10) || 1))
                  }
                  inputProps={{ min: 1 }}
                  required
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Number of Stores"
                  type="number"
                  variant="outlined"
                  value={numStores}
                  onChange={(e) =>
                    setNumStores(Math.max(1, parseInt(e.target.value, 10) || 1))
                  }
                  inputProps={{ min: 1 }}
                  required
                  sx={textFieldSx}
                />
              </Grid>
            </Grid>
            <Box sx={{ mb: 3, p: 2, border: '1px solid #333', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: neonBlue }}>Pricing</Typography>
              <Typography sx={{ color: '#aaa' }}>Base Price: €{basePrice}</Typography>
              <Typography sx={{ color: '#aaa' }}>Price per User: €{userPrice}</Typography>
              <Typography sx={{ color: '#aaa' }}>Price per Store: €{storePrice}</Typography>
              <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                Total Price: <strong>€{totalPrice}</strong>
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                backgroundColor: neonBlue,
                color: '#000',
                fontWeight: 'bold',
                padding: '12px',
                '&:hover': { backgroundColor: '#fff', boxShadow: `0 0 20px ${neonBlue}` }
              }}
            >
              {loading ? "Processing..." : "Register & Pay"}
            </Button>
          </form>
        </Paper>

        <ConfirmationModal
          open={confirmationOpen}
          onClose={handleConfirm}
          onConfirm={handleConfirm}
        />
      </Container>
    </Box>
  );
};

export default OrganizationRegistration;
