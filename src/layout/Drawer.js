// src/layout/Drawer.jsx (DashboardDrawer)
import React, { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
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

export default function DashboardDrawer({ open, onToggleDrawer, isMobile }) {
  const [openItems, setOpenItems] = useState({});
  const { t } = useTranslation();

  const handleClick = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const showExpanded = isMobile || open;

  const drawerContent = (
    <>
      {/* Drawer header with logo (Companizer) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 65,
          background: '#FFFFFF', // White Header
          borderBottom: '1px solid #000000', // Black Border
          px: showExpanded ? 2 : 1,
        }}
      >

        {/* LEFT — 84% width when open */}
        {showExpanded && (
          <Box sx={{ flexBasis: '84%', maxWidth: '84%' }}>
            <ListItemButton
              component={Link}
              to="/summary"
              disableGutters
              sx={{
                height: '100%',
                borderRadius: 0, // Sharp
                px: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 28, color: '#000000' }}>
                <span style={{ fontSize: 22 }}>🔥</span>
              </ListItemIcon>
            </ListItemButton>
          </Box>
        )}

        {/* COLLAPSED STATE */}
        {!showExpanded && (
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
                borderRadius: '0px', // Sharp
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, color: '#000000' }}>
                <span style={{ fontSize: 22 }}>🔥</span>
              </ListItemIcon>
            </ListItemButton>
          </Box>
        )}

      </Box>

      {/* Navigation area */}
      <StyledFireNav>
        {/* Collapsed: icons-only list */}
        {!showExpanded && (
          <FireNav component="nav" disablePadding>
            {drawerItems.map(({ key, label, children }) => {
              const TopIcon = moduleToIconMap[key];
              let targetPath = '#';
              if (
                Array.isArray(children) &&
                children.length === 1 &&
                !children[0].children
              ) {
                const leafKey = children[0].key;
                targetPath = keyToLinkMap[leafKey] || '#';
              }

              const ButtonComponent = targetPath !== '#' ? Link : 'button';

              return (
                <React.Fragment key={key}>
                  <Tooltip title={t(label)} placement="right">
                    <ListItemButton
                      component={ButtonComponent}
                      {...(ButtonComponent === Link ? { to: targetPath } : {})}
                      sx={{
                        justifyContent: 'center',
                        py: 1.5,
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: 'center',
                          color: '#000000'
                        }}
                      >
                        {TopIcon ? <TopIcon /> : <ChevronRightIcon />}
                      </ListItemIcon>
                    </ListItemButton>
                  </Tooltip>
                  {/* Divider after major category */}
                  <Box sx={{ height: '1px', bgcolor: '#000000', width: '100%' }} />
                </React.Fragment>
              );
            })}
          </FireNav>
        )}

        {/* Expanded: full nested structure with labels */}
        {showExpanded && (
          <FireNav component="nav" disablePadding sx={{ pt: 0 }}>
            {drawerItems.map(
              ({ key, label, description, children }) => {
                const TopIcon = moduleToIconMap[key];

                return (
                  <React.Fragment key={key}>
                    <ListItemButton onClick={() => handleClick(key)} sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
                      <ListItemIcon sx={{ color: '#000000' }}>
                        {TopIcon ? <TopIcon /> : <ChevronRightIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={t(label)}
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: 'medium',
                          lineHeight: '20px',
                          color: '#000000'
                        }}
                      />
                      {children ? (
                        openItems[key] ? <ExpandLess sx={{ color: '#000000' }} /> : <ExpandMore sx={{ color: '#000000' }} />
                      ) : null}
                    </ListItemButton>

                    {/* FULL WIDTH DIVIDER */}
                    <Box sx={{ height: '1px', bgcolor: '#000000', width: '100%' }} />

                    {children && (
                      <Collapse
                        in={openItems[key]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding sx={{ bgcolor: '#FAFAFA' }}>
                          {children.map(
                            ({
                              key: subKey,
                              label: subLabel,
                              children: subChildren,
                            }) => (
                              <React.Fragment key={subKey}>
                                <ListItemButton
                                  onClick={() => handleClick(subKey)}
                                  sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}
                                >
                                  <ListItemText
                                    sx={{ pl: 4 }}
                                    primary={`• ${t(subLabel)}`}
                                    primaryTypographyProps={{ color: '#000000' }}
                                  />
                                  {subChildren ? (
                                    openItems[subKey] ? (
                                      <ExpandLess sx={{ color: '#000000' }} />
                                    ) : (
                                      <ExpandMore sx={{ color: '#000000' }} />
                                    )
                                  ) : (
                                    <ChevronRightIcon sx={{ color: '#000000' }} />
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
                                            <ListItemButton sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
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
                                                  primaryTypographyProps={{ color: '#444' }}
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
    </>
  );

  if (isMobile) {
    return (
      <MuiDrawer
        variant="temporary"
        open={open}
        onClose={onToggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: expandedDrawerWidth,
            bgcolor: '#FFFFFF',
            color: '#000000',
            borderRight: '1px solid #000000',
          },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    );
  }

  return (
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
          bgcolor: '#FFFFFF', // Always White
          color: '#000000',     // Always Black
          borderRight: '1px solid #000000', // Always Black Border
        }}
      >
        {drawerContent}
      </Paper>
    </Box>
  );
}
