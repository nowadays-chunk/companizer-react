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
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

import { registerOrganization } from "../../utils/authHelpers";

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
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vault Insight
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
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
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Organization Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              />
            </Grid>
          </Grid>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">Pricing</Typography>
            <Typography>Base Price: €{basePrice}</Typography>
            <Typography>Price per User: €{userPrice}</Typography>
            <Typography>Price per Store: €{storePrice}</Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
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
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? "Processing..." : "Register"}
          </Button>
        </form>
      </Paper>

      <ConfirmationModal
        open={confirmationOpen}
        onClose={handleConfirm}
        onConfirm={handleConfirm}
      />
    </Container>
  );
};

export default OrganizationRegistration;
