import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, Container, Grid, Paper, Stack,
  List, ListItem, ListItemIcon, ListItemText, Link as MuiLink,
  Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Slider, Switch, TextField, InputAdornment, FormControlLabel
} from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import GavelIcon from '@mui/icons-material/Gavel';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginDialog from '../components/Authentication/LoginDialog';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import InsightIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import ExtensionIcon from '@mui/icons-material/Extension';
import DomainIcon from '@mui/icons-material/Domain';

// --- STYLES & ANIMATIONS ---
const neonBlue = '#ffffff';
const neonRed = '#888888';
const darkBg = '#000000';
const cardBg = '#0a0a0a';
const border = '1px solid #333';

const styles = {
  root: {
    backgroundColor: darkBg,
    minHeight: '100vh',
    color: '#fff',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    overflowX: 'hidden',
  },
  neonTextBlue: {
    color: '#fff',
  },
  neonTextRed: {
    color: '#fff',
  },
  bentoBox: {
    backgroundColor: cardBg,
    border: border,
    borderRadius: '16px',
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#fff',
    },
    '&:hover .icon-blue': {
      color: '#fff',
    },
    '&:hover .icon-red': {
      color: '#fff',
    }
  },
  heroTitle: {
    fontWeight: 800,
    letterSpacing: '-2px',
    background: `linear-gradient(90deg, #fff 0%, #aaa 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  navButton: {
    color: '#fff',
    borderColor: '#333',
    '&:hover': {
      borderColor: '#fff',
      color: '#fff',
    },
  },
  actionButton: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: '30px',
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: '#ddd',
      color: 'black',
    },
  },
  docLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#aaa',
    transition: 'color 0.3s',
    marginTop: 'auto',
    '&:hover': {
      color: neonRed,
    }
  },
  marketingSection: {
    padding: '80px 0',
    position: 'relative',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '40px',
    transition: 'all 0.4s ease',
    height: '100%',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.05)',
      borderColor: '#fff',
      transform: 'scale(1.02)',
    }
  },
  pricingCard: {
    background: 'rgba(20, 20, 20, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid #333',
    borderRadius: '24px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'all 0.3s ease',
    position: 'relative',
    '&:hover': {
      borderColor: '#fff',
      transform: 'translateY(-10px)',
      boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
    }
  },
  priceTag: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#fff',
    mb: 1
  },
  ratesTable: {
    background: 'rgba(10, 10, 10, 0.8)',
    borderRadius: '16px',
    border: '1px solid #333',
    overflow: 'hidden'
  }
};

const FeatureBox = ({ title, icon, description, delay, accent = 'blue' }) => (
  <Paper
    elevation={0}
    sx={{
      ...styles.bentoBox,
      animation: `fadeInUp 0.6s ease-out ${delay}s backwards`,
      '&:hover': {
        ...styles.bentoBox['&:hover'],
        borderColor: '#fff',
        // boxShadow: `0 0 20px rgba(255, 255, 255, 0.1)`, // Removed glow
      },
    }}
  >
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 40, color: '#444', transition: '0.3s' }, className: `icon-${accent}` })}
        <ArrowForwardIcon sx={{ color: '#333', transform: 'rotate(-45deg)' }} />
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  </Paper>
);

const MarketingFeature = ({ title, description, icon, align = 'left' }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: align === 'left' ? 'row' : 'row-reverse' },
    alignItems: 'center',
    gap: 6,
    mb: 8
  }}>
    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
      <Box sx={{
        display: 'inline-flex',
        p: 1.5,
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.1)',
        mb: 2,
        color: '#fff'
      }}>
        {icon}
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Box>
    <Box sx={{ flex: 1, width: '100%' }}>
      <Paper sx={{
        ...styles.glassCard,
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract Visuals for Features */}
        {align === 'left' ? (
          <Box sx={{ position: 'relative', width: '80%', height: '200px' }}>
            {/* Mock Marketing Graph */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '20%', height: '40%', bgcolor: '#333', borderRadius: '4px' }} />
            <Box sx={{ position: 'absolute', bottom: 0, left: '25%', width: '20%', height: '60%', bgcolor: '#555', borderRadius: '4px' }} />
            <Box sx={{ position: 'absolute', bottom: 0, left: '50%', width: '20%', height: '30%', bgcolor: '#444', borderRadius: '4px' }} />
            <Box sx={{ position: 'absolute', bottom: 0, left: '75%', width: '20%', height: '85%', bgcolor: '#fff', borderRadius: '4px', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }} />
            <TrendingUpIcon sx={{ position: 'absolute', top: -20, right: 0, color: '#fff', fontSize: 40 }} />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '80%' }}>
            {/* Mock UI Elements */}
            <Box sx={{ height: 40, bgcolor: '#222', borderRadius: '8px', display: 'flex', alignItems: 'center', px: 2 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#444', mr: 1 }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#444', mr: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1, height: 100, bgcolor: '#1a1a1a', borderRadius: '8px', border: '1px solid #333' }} />
              <Box sx={{ flex: 2, height: 100, bgcolor: '#0f0f0f', borderRadius: '8px', border: '1px solid #333', p: 2 }}>
                <Box sx={{ width: '60%', height: 8, bgcolor: '#333', borderRadius: 4, mb: 1 }} />
                <Box sx={{ width: '40%', height: 8, bgcolor: '#333', borderRadius: 4 }} />
              </Box>
            </Box>
            <TouchAppIcon sx={{ position: 'absolute', bottom: 20, right: 20, color: '#fff', fontSize: 30, opacity: 0.8 }} />
          </Box>
        )}
      </Paper>
    </Box>
  </Box>
);

const CostCalculator = ({ users, setUsers, orgs, setOrgs, modules, setModules, cloudCost, selfHostedCost, isCloudCheaper }) => {
  return (
    <Paper sx={{ ...styles.glassCard, p: 3, height: '100%', background: 'linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
        Estimate Your Investment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
            <Typography sx={{ color: '#aaa', fontSize: '0.85rem', width: '140px' }}>Total Users</Typography>
            <Slider
              value={users}
              min={1}
              max={200}
              onChange={(e, val) => setUsers(val)}
              sx={{ color: '#fff', flex: 1 }}
              size="small"
            />
            <TextField
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              type="number"
              size="small"
              sx={{ width: 60, input: { color: '#fff', textAlign: 'center', fontSize: '0.9rem', padding: '4px' }, border: '1px solid #333', borderRadius: 1 }}
              InputProps={{ disableUnderline: true }}
              variant="standard"
            />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
            <Typography sx={{ color: '#aaa', fontSize: '0.85rem', width: '140px' }}>Organizations</Typography>
            <Slider
              value={orgs}
              min={1}
              max={20}
              onChange={(e, val) => setOrgs(val)}
              sx={{ color: '#fff', flex: 1 }}
              size="small"
            />
            <TextField
              value={orgs}
              onChange={(e) => setOrgs(Number(e.target.value))}
              type="number"
              size="small"
              sx={{ width: 60, input: { color: '#fff', textAlign: 'center', fontSize: '0.9rem', padding: '4px' }, border: '1px solid #333', borderRadius: 1 }}
              InputProps={{ disableUnderline: true }}
              variant="standard"
            />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography sx={{ color: '#aaa', fontSize: '0.85rem', width: '140px' }}>Premium Modules</Typography>
            <Slider
              value={modules}
              min={0}
              max={10}
              onChange={(e, val) => setModules(val)}
              sx={{ color: '#fff', flex: 1 }}
              size="small"
            />
            <TextField
              value={modules}
              onChange={(e) => setModules(Number(e.target.value))}
              type="number"
              size="small"
              sx={{ width: 60, input: { color: '#fff', textAlign: 'center', fontSize: '0.9rem', padding: '4px' }, border: '1px solid #333', borderRadius: 1 }}
              InputProps={{ disableUnderline: true }}
              variant="standard"
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, height: '100%', mt: 1 }}>
            <Paper sx={{
              flex: 1,
              p: 1.5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: isCloudCheaper ? 'rgba(255,255,255,0.05)' : 'transparent',
              border: isCloudCheaper ? '1px solid #fff' : '1px solid #333',
              borderRadius: '12px',
              transition: 'all 0.3s'
            }}>
              <Typography variant="caption" sx={{ color: '#aaa', mb: 0.5, textTransform: 'uppercase' }}>StartUp Cloud</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: isCloudCheaper ? '#fff' : '#666' }}>
                ${cloudCost.toLocaleString()}
              </Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>/ month</Typography>
            </Paper>

            <Paper sx={{
              flex: 1,
              p: 1.5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: !isCloudCheaper ? 'rgba(255,255,255,0.05)' : 'transparent',
              border: !isCloudCheaper ? '1px solid #fff' : '1px solid #333',
              borderRadius: '12px',
              transition: 'all 0.3s'
            }}>
              <Typography variant="caption" sx={{ color: '#aaa', mb: 0.5, textTransform: 'uppercase' }}>Self-Hosted</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: !isCloudCheaper ? '#fff' : '#666' }}>
                ${selfHostedCost.toLocaleString()}
              </Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>/ month</Typography>
              {/* <Chip label="Best Value" size="small" sx={{ mt: 1, height: 20, fontSize: '0.65rem', opacity: !isCloudCheaper ? 1 : 0, transition: '0.3s', bgcolor: '#fff', color: '#000', fontWeight: 'bold' }} /> */}
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Paper >
  );
};

const PricingCard = ({ title, price, period, features, icon, popular = false, linkTo }) => (
  <Box sx={{
    ...styles.pricingCard,
    padding: '20px', // Compact padding
    '&:hover': {
      ...styles.pricingCard['&:hover'],
      ...styles.bentoBox['&:hover'], // Apply card lift effect
      boxShadow: `0 0 20px rgba(255, 255, 255, 0.1)`, // Add glow
    }
  }}>
    {popular && (
      <Chip
        label="MOST POPULAR"
        size="small"
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          bgcolor: '#fff',
          color: '#000',
          fontWeight: 'bold',
          height: 20,
          fontSize: '0.65rem'
        }}
      />
    )}
    <Box sx={{ mb: 2 }}>
      {React.cloneElement(icon, { sx: { fontSize: 32, color: '#888', mb: 1.5 } })}
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', mb: 0.5 }}>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography sx={{ ...styles.priceTag, fontSize: '2rem' }}>{price}</Typography>
        {period && <Typography variant="caption" sx={{ color: '#888', ml: 1 }}>{period}</Typography>}
      </Box>
    </Box>
    <Box sx={{ flex: 1 }}>
      <List disablePadding>
        {features.map((feature, index) => (
          <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <CheckCircleIcon sx={{ color: '#fff', fontSize: 16 }} />
            </ListItemIcon>
            <ListItemText primary={feature} primaryTypographyProps={{ color: '#aaa', variant: 'caption', fontSize: '0.8rem' }} />
          </ListItem>
        ))}
      </List>
    </Box>
    <Button
      component={Link}
      to={linkTo}
      variant="outlined"
      sx={{ ...styles.navButton, mt: 3, py: 1, borderRadius: '8px', width: '100%', fontSize: '0.85rem' }}
    >
      Choose Plan
    </Button>
  </Box>
);

const RateRow = ({ icon, label, price, unit }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
    <TableCell component="th" scope="row" sx={{ borderBottom: '1px solid #333', py: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ p: 0.5, borderRadius: '6px', bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex' }}>
          {React.cloneElement(icon, { fontSize: "small" })}
        </Box>
        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>{label}</Typography>
      </Box>
    </TableCell>
    <TableCell align="right" sx={{ borderBottom: '1px solid #333', color: '#fff', fontSize: '1rem', fontWeight: 'bold', py: 1 }}>{price}</TableCell>
    <TableCell align="right" sx={{ borderBottom: '1px solid #333', color: '#888', fontSize: '0.8rem', py: 1 }}>{unit}</TableCell>
  </TableRow>
);

const HomePage = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  // State lifted from CostCalculator
  const [users, setUsers] = useState(10);
  const [orgs, setOrgs] = useState(1);
  const [modules, setModules] = useState(0);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  // Calculate Costs
  const cloudCost = (29 * users) + (49 * Math.max(0, orgs - 1)) + (99 * modules);

  // Self-Hosted: Base $499 (includes 20 users, 2 orgs)
  const selfHostedBase = 499;
  const selfHostedUsersCost = Math.max(0, users - 20) * 5;
  const selfHostedOrgsCost = Math.max(0, orgs - 2) * 49;
  const selfHostedModulesCost = 99 * modules;
  const selfHostedCost = selfHostedBase + selfHostedUsersCost + selfHostedOrgsCost + selfHostedModulesCost;

  const isCloudCheaper = cloudCost < selfHostedCost;

  // Animation Keyframes injection
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <Box sx={styles.root}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #222' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Logo Placeholder */}
              <Box sx={{ width: 40, height: 40, borderRadius: '8px', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                VI
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>
                TAILORED BRIDGE
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button onClick={handleLoginOpen} variant="outlined" sx={styles.navButton}>
                Log In
              </Button>
              <Button component={Link} to="/registration" variant="contained" sx={{ ...styles.actionButton, background: '#fff', color: '#000', border: 'none', '&:hover': { background: '#ccc' } }}>
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      <Container maxWidth="xl" sx={{ pt: 8, pb: 12 }}>

        {/* HERO SECTION */}
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '60vh', mb: 8 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <Chip label="v2.0 RELEASE" sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: `1px solid #fff`, mb: 3, fontWeight: 'bold' }} />
              <Typography variant="h1" sx={{ ...styles.heroTitle, fontSize: { xs: '3rem', md: '5rem' } }}>
                Enterprise <br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>Intelligence.</span>
              </Typography>
              <Typography variant="h5" sx={{ color: '#888', maxWidth: '600px', mb: 5, lineHeight: 1.6 }}>
                The comprehensive ERP & CRM solution for modern businesses.
                Manage Finance, HR, Operations, and more in a unified,
                <span style={{ color: '#fff', fontWeight: 'bold' }}> secure</span> environment.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button component={Link} to="/registration" size="large" sx={styles.actionButton}>
                  Start Free Trial
                </Button>
                <Button
                  component={Link}
                  to="/presentation"
                  startIcon={<ArticleIcon />}
                  sx={{ color: '#fff', '&:hover': { color: neonRed } }}
                >
                  View Presentation
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            {/* Abstract Visual Representation */}
            <Box sx={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <Box sx={{
                position: 'absolute', width: '80%', height: '80%',
                border: `2px solid #fff`,
                borderRadius: '50%',
              }} />
              <Box sx={{
                position: 'absolute', width: '60%', height: '60%',
                border: `2px solid #888`,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                animation: 'float 4s ease-in-out infinite reverse',
              }} />
              <Paper sx={{
                p: 3,
                background: 'rgba(20,20,20,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #333',
                borderRadius: '16px',
                maxWidth: '300px',
                zIndex: 2
              }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <SecurityIcon sx={{ color: '#fff' }} />
                  <Typography variant="h6">Security First</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  AES-256 Encryption <br />
                  RBAC Architecture <br />
                  Audit Logging
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* --- NEW MARKETING & UX SECTION --- */}
        <Box sx={styles.marketingSection}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 6, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Why Tailored Bridge ?
          </Typography>

          <MarketingFeature
            title="Precision Marketing"
            description="Orchestrate multi-channel campaigns with AI-driven insights. Turn anonymous traffic into loyal customers with our advanced lead scoring and behavior analytics engine. Visualize every touchpoint in real-time."
            icon={<AdsClickIcon fontSize="large" />}
            align="left"
          />

          <MarketingFeature
            title="Designed for Humans"
            description="A zero-latency interface that adapts to your workflow, not the other way around. Dark mode native, fully accessible, and crafted for maximum productivity. Experience software that feels like an extension of your mind."
            icon={<AutoAwesomeIcon fontSize="large" />}
            align="right"
          />
        </Box>
        {/* --- END NEW SECTION --- */}

        {/* BENTO GRID LAYOUT */}
        <Typography variant="h6" sx={{ color: '#fff', mb: 2, textTransform: 'uppercase', letterSpacing: '3px' }}>
          System Modules
        </Typography>
        <Grid container spacing={3}>

          {/* Financial Management - Large Box */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ ...styles.bentoBox, minHeight: '300px', background: `linear-gradient(135deg, ${cardBg} 0%, #111 100%)` }}>
              <Box>
                <Chip label="Core Module" size="small" sx={{ bgcolor: '#fff', color: '#000', fontWeight: 'bold', mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                  Financial Management
                </Typography>
                <Typography variant="body1" sx={{ color: '#aaa', maxWidth: '70%', mb: 4 }}>
                  Complete control over AP, AR, General Ledger, Banking, and Taxation.
                  Automated reconciliation and real-time cash flow forecasting.
                </Typography>
                <Grid container spacing={2}>
                  {['Accounts Payable', 'Accounts Receivable', 'General Ledger', 'Taxation', 'Treasury'].map((item) => (
                    <Grid item key={item}>
                      <Chip label={item} variant="outlined" sx={{ color: '#fff', borderColor: '#444' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <AccountBalanceIcon sx={{ position: 'absolute', right: -20, bottom: -20, fontSize: 300, opacity: 0.05, transform: 'rotate(-15deg)' }} />
            </Paper>
          </Grid>

          {/* Operations - Tall Box */}
          <Grid item xs={12} md={4}>
            <FeatureBox
              title="Operations"
              icon={<SpeedIcon />}
              description="Streamline supply chain, inventory, and asset management with precision tracking."
              delay={0.1}
              accent="red"
            />
          </Grid>

          {/* HR - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Human Resources"
              icon={<GroupIcon />}
              description="Manage employee lifecycle, payroll, recruitment, and performance reviews in one place."
              delay={0.2}
              accent="blue"
            />
          </Grid>

          {/* Compliance - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Legal & Compliance"
              icon={<GavelIcon />}
              description="Stay compliant with automated regulatory checks, contract management, and audit trails."
              delay={0.3}
              accent="red"
            />
          </Grid>

          {/* Analytics - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Analytics & Insights"
              icon={<TrendingUpIcon />}
              description="Turn data into actionable insights with customizable dashboards and BI tools."
              delay={0.4}
              accent="blue"
            />
          </Grid>

          {/* Sales & Projects - Wide Box */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ ...styles.bentoBox, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Growth & Execution
                </Typography>
                <List>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon><CampaignIcon sx={{ color: '#aaa' }} /></ListItemIcon>
                    <ListItemText primary="Sales & Marketing: Lead scoring, campaigns, and opportunity tracking." primaryTypographyProps={{ color: '#aaa' }} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><AssignmentIcon sx={{ color: '#fff' }} /></ListItemIcon>
                    <ListItemText primary="Projects: Task tracking, resource allocation, and milestone management." primaryTypographyProps={{ color: '#aaa' }} />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' }, p: 3, border: '1px dashed #333', borderRadius: '12px' }}>
                <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  +45%
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>Efficiency Boost</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Documentation Callout */}
          <Grid item xs={12} md={4}>
            <Paper
              component={Link}
              to="/presentation"
              target="_blank"
              sx={{
                ...styles.bentoBox,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid #333',
                background: '#000',
                '&:hover': {
                  borderColor: '#fff',
                  // boxShadow: '0 0 30px rgba(255,255,255,0.1)' // Removed glow
                }
              }}
            >
              <ArticleIcon sx={{ fontSize: 60, color: '#fff', mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
                Read the Docs
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                Deep dive into system architecture and module details.
              </Typography>
            </Paper>
          </Grid>

        </Grid>

        {/* --- PRICING & PLANS SECTION --- */}
        <Box sx={{ mt: 15, mb: 10 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2, color: '#fff' }}>
            Flexible Licensing
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#888', mb: 8, maxWidth: '700px', mx: 'auto' }}>
            Choose the deployment model that fits your security and operational needs. Scale seamlessly from startup to enterprise.
          </Typography>

          <Grid container spacing={4} alignItems="stretch" justifyContent="center">
            {/* Cloud (SaaS) */}
            <Grid item xs={12} md={4} lg={3}>
              <PricingCard
                title="StartUp Cloud"
                price={`$${cloudCost.toLocaleString()}`}
                period="/mo (est.)"
                icon={<CloudIcon />}
                popular={isCloudCheaper}
                linkTo="/offer-startup-cloud"
                features={[
                  "Fully Managed Infrastructure",
                  "Automatic Updates",
                  "1 Organization Included",
                  "Standard Support",
                  "99.9% Uptime SLA"
                ]}
              />
            </Grid>

            {/* Self-Hosted */}
            <Grid item xs={12} md={4} lg={3}>
              <PricingCard
                title="Self-Hosted"
                price={`$${selfHostedCost.toLocaleString()}`}
                period="/mo (est.)"
                icon={<StorageIcon />}
                linkTo="/offer-self-hosted"
                popular={!isCloudCheaper}
                features={[
                  "Deploy on On-Premise / Any Cloud",
                  "Full Data Sovereignty",
                  "Includes 20 Users",
                  "2 Organizations Included",
                  "Priority Support",
                  "Custom Backups"
                ]}
              />
            </Grid>

            {/* Hybrid */}
            <Grid item xs={12} md={4} lg={3}>
              <PricingCard
                title="Hybrid / Enterprise"
                price="Custom"
                period=""
                icon={<BusinessIcon />}
                linkTo="/offer-hybrid-enterprise"
                features={[
                  "Mixed Deployment Options",
                  "Unlimited Organizations",
                  "Dedicated Success Manager",
                  "Custom Integrations",
                  "Advanced Security Audit",
                  "White Labeling"
                ]}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 10 }} alignItems="stretch" justifyContent="center">
            <Grid item xs={12} md={4}>
              <CostCalculator
                users={users} setUsers={setUsers}
                orgs={orgs} setOrgs={setOrgs}
                modules={modules} setModules={setModules}
                cloudCost={cloudCost}
                selfHostedCost={selfHostedCost}
                isCloudCheaper={isCloudCheaper}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ height: '100%' }}>
                <TableContainer component={Paper} sx={{ ...styles.ratesTable, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ p: 1, bgcolor: '#000', borderBottom: '1px solid #333' }}>
                    <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                      Build Your Plan
                    </Typography>
                  </Box>
                  <Table aria-label="simple table" size="small" sx={{ flex: 1 }}>
                    <TableHead sx={{ bgcolor: cardBg }}>
                      <TableRow sx={{ bgcolor: cardBg }}>
                        <TableCell sx={{ bgcolor: cardBg, color: '#fff', fontWeight: 'bold', borderBottom: '1px solid #333', fontSize: '0.85rem', py: 1 }}>ITEM</TableCell>
                        <TableCell align="right" sx={{ bgcolor: cardBg, color: '#fff', fontWeight: 'bold', borderBottom: '1px solid #333', fontSize: '0.85rem', py: 1 }}>COST</TableCell>
                        <TableCell align="right" sx={{ bgcolor: cardBg, color: '#fff', fontWeight: 'bold', borderBottom: '1px solid #333', fontSize: '0.85rem', py: 1 }}>UNIT</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <RateRow
                        icon={<PersonIcon fontSize="small" />}
                        label="Additional User"
                        price="$10.00"
                        unit="per user / month"
                      />
                      <RateRow
                        icon={<DomainIcon fontSize="small" />}
                        label="Additional Organization"
                        price="$49.00"
                        unit="per org / month"
                      />
                      <RateRow
                        icon={<ExtensionIcon fontSize="small" />}
                        label="Premium Modules"
                        price="$99.00"
                        unit="per module / month"
                      />
                      <RateRow
                        icon={<StorageIcon fontSize="small" />}
                        label="Self-Hosted Seat (Over 20)"
                        price="$5.00"
                        unit="per user / month"
                      />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* --- END PRICING SECTION --- */}

        {/* FOOTER */}
        <Box sx={{ mt: 15, borderTop: '1px solid #222', pt: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
                TAILORED BRIDGE
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', maxWidth: '400px' }}>
                Empowering enterprises with next-generation resource planning and management tools. Built for scale, security, and speed.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>Platform</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Login</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Registration</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Documentation</MuiLink>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>Legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Privacy Policy</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Terms of Service</MuiLink>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ color: '#444', mt: 8, textAlign: 'center' }}>
            © {new Date().getFullYear()} Tailored Bridge. All rights reserved.
          </Typography>
        </Box>

      </Container>

      <LoginDialog open={loginOpen} onClose={handleLoginClose} />
    </Box>
  );
};

export default HomePage;

