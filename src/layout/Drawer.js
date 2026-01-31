// src/layout/Drawer.jsx (DashboardDrawer)
import React, { useState } from 'react';
import {
  styled,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import { drawerItems } from './drawerItems';
import { keyToLinkMap } from './keyToLinkMap';
import { moduleToIconMap } from './moduleToIconMap';
import { useTranslation } from '../contexts/TranslationProvider';

const expandedDrawerWidth = 300;
const collapsedDrawerWidth = 70; // icons + padding

const FireNav = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
}));

// fills all remaining space below header, no extra margin/gap
const StyledFireNav = styled('div')({
  flex: 1,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
  },
});

export default function DashboardDrawer({ open, onToggleDrawer }) {
  const [openItems, setOpenItems] = useState({});
  const { t } = useTranslation(); // Use translation hook

  const handleClick = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Paper
          elevation={0}
          sx={{
            width: open ? expandedDrawerWidth : collapsedDrawerWidth,
            borderRadius: '0px',
            zIndex: 10,
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
          }}
        >

          {/* Drawer header with logo (Companizer) */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 65,
              background: 'rgb(5, 30, 52)',
              borderBottom: '1px solid #1f2933',
              px: open ? 2 : 1,
            }}
          >

            {/* LEFT — 84% width when open */}
            {open && (
              <Box sx={{ flexBasis: '84%', maxWidth: '84%' }}>
                <ListItemButton
                  component={Link}
                  to="/summary"
                  disableGutters
                  sx={{
                    height: '100%',
                    borderRadius: 1,
                    px: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <span style={{ fontSize: 22 }}>🔥</span>
                  </ListItemIcon>

                  <ListItemText
                    primary="Companizer"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    sx={{
                      '& .MuiTypography-root': {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      },
                    }}
                  />
                </ListItemButton>
              </Box>
            )}

            {/* RIGHT — 16% (icon aligned right) */}
            {open && (
              <Box
                sx={{
                  flexBasis: '16%',
                  maxWidth: '16%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* EMPTY — you said external toggle exists */}
                </Box>
              </Box>
            )}

            {/* COLLAPSED STATE — CENTER FIRE ICON */}
            {!open && (
              <Box
                sx={{
                  flexBasis: '100%',
                  maxWidth: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ListItemButton
                  component={Link}
                  to="/summary"
                  disableGutters
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.12)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <span style={{ fontSize: 22 }}>🔥</span>
                  </ListItemIcon>
                </ListItemButton>
              </Box>
            )}

          </Box>

          {/* Navigation area - right under header, no extra gap */}
          <StyledFireNav>
            {/* Collapsed: icons-only list */}
            {!open && (
              <FireNav component="nav" disablePadding>
                {drawerItems.map(({ key, label, children }) => {
                  const TopIcon = moduleToIconMap[key];

                  // If this top item has exactly ONE leaf child, clicking the icon goes directly there.
                  let targetPath = '#';
                  if (
                    Array.isArray(children) &&
                    children.length === 1 &&
                    !children[0].children
                  ) {
                    const leafKey = children[0].key;
                    targetPath = keyToLinkMap[leafKey] || '#';
                  }

                  const ButtonComponent =
                    targetPath !== '#' ? Link : 'button';

                  return (
                    <Tooltip key={key} title={t(label)} placement="right">
                      <ListItemButton
                        component={ButtonComponent}
                        {...(ButtonComponent === Link ? { to: targetPath } : {})}
                        sx={{
                          justifyContent: 'center',
                          py: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: 'center',
                          }}
                        >
                          {TopIcon ? <TopIcon /> : <ChevronRightIcon />}
                        </ListItemIcon>
                      </ListItemButton>
                    </Tooltip>
                  );
                })}
              </FireNav>
            )}

            {/* Expanded: full nested structure with labels */}
            {open && (
              <FireNav component="nav" disablePadding sx={{ pt: 0 }}>
                {drawerItems.map(
                  ({ key, label, description, children }) => {
                    const TopIcon = moduleToIconMap[key];

                    return (
                      <React.Fragment key={key}>
                        <ListItemButton onClick={() => handleClick(key)}>
                          <ListItemIcon>
                            {TopIcon ? <TopIcon /> : <ChevronRightIcon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={t(label)}
                            primaryTypographyProps={{
                              fontSize: 15,
                              fontWeight: 'medium',
                              lineHeight: '20px',
                            }}
                          />
                          {children ? (
                            openItems[key] ? <ExpandLess /> : <ExpandMore />
                          ) : null}
                        </ListItemButton>

                        {children && (
                          <Collapse
                            in={openItems[key]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {children.map(
                                ({
                                  key: subKey,
                                  label: subLabel,
                                  children: subChildren,
                                }) => (
                                  <React.Fragment key={subKey}>
                                    <ListItemButton
                                      onClick={() => handleClick(subKey)}
                                    >
                                      <ListItemText
                                        sx={{ pl: 4 }}
                                        primary={`• ${t(subLabel)}`}
                                      />
                                      {subChildren ? (
                                        openItems[subKey] ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        )
                                      ) : (
                                        <ChevronRightIcon />
                                      )}
                                    </ListItemButton>

                                    {subChildren && (
                                      <Collapse
                                        in={openItems[subKey]}
                                        timeout="auto"
                                        unmountOnExit
                                      >
                                        <List
                                          component="div"
                                          disablePadding
                                        >
                                          {subChildren.map(
                                            ({
                                              key: subSubKey,
                                              label: subSubLabel,
                                              description: subDesc,
                                            }) => (
                                              <Link
                                                to={
                                                  keyToLinkMap[subSubKey] ||
                                                  '#'
                                                }
                                                key={subSubKey}
                                                style={{
                                                  textDecoration: 'none',
                                                  color: 'inherit',
                                                }}
                                              >
                                                <ListItemButton>
                                                  <Tooltip
                                                    title={
                                                      t(subDesc ||
                                                        description ||
                                                        '')
                                                    }
                                                    placement="right"
                                                  >
                                                    <ListItemText
                                                      sx={{ pl: 6 }}
                                                      primary={`• ${t(subSubLabel)}`}
                                                    />
                                                  </Tooltip>
                                                </ListItemButton>
                                              </Link>
                                            )
                                          )}
                                        </List>
                                      </Collapse>
                                    )}
                                  </React.Fragment>
                                )
                              )}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    );
                  }
                )}
              </FireNav>
            )}
          </StyledFireNav>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
