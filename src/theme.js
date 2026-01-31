import { createTheme, alpha } from '@mui/material/styles';

// --- PALETTES ---
// PURIFIED / SHARP / MATTE
// No shiny gradients. High contrast.

const PRIMARY_LIGHT = {
    main: '#111111', // Almost black
    light: '#333333',
    dark: '#000000',
    contrastText: '#FFFFFF',
};

const PRIMARY_DARK = {
    main: '#FFFFFF', // Pure white for contrast against dark
    light: '#F0F0F0',
    dark: '#E0E0E0',
    contrastText: '#000000',
};

const SECONDARY = {
    main: '#555555', // Neutral Grey
    light: '#777777',
    dark: '#333333',
    contrastText: '#FFFFFF',
};

const SUCCESS = {
    main: '#10B981', // Emerald - Matte
    light: '#34D399',
    dark: '#059669',
    contrastText: '#FFFFFF',
};

const ERROR = {
    main: '#EF4444', // Matte Red
    light: '#F87171',
    dark: '#B91C1C',
    contrastText: '#FFFFFF',
};

const GREY = {
    0: '#FFFFFF',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
};

// --- TYPOGRAPHY ---
const FONT_FAMILY = '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif';

const getTheme = (mode) => {
    const isDark = mode === 'dark';

    // Backgrounds
    const bgDefault = isDark ? '#0A0A0A' : '#FAFAFA'; // Very dark grey (almost black) vs Off-white
    const bgPaper = isDark ? '#141414' : '#FFFFFF';   // Slightly lighter dark vs Pure white

    // Text
    const textPrimary = isDark ? '#EDEDED' : '#121212';
    const textSecondary = isDark ? '#A1A1A1' : '#666666';

    const primaryPalette = isDark ? PRIMARY_DARK : PRIMARY_LIGHT;

    return createTheme({
        palette: {
            mode,
            primary: primaryPalette,
            secondary: SECONDARY,
            success: SUCCESS,
            error: ERROR,
            grey: GREY,
            background: {
                default: bgDefault,
                paper: bgPaper,
                neutral: isDark ? '#1F1F1F' : '#F0F0F0',
            },
            text: {
                primary: textPrimary,
                secondary: textSecondary,
            },
            divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            action: {
                hover: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                selected: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }
        },
        typography: {
            fontFamily: FONT_FAMILY,
            h1: { fontWeight: 800, fontSize: '2.5rem', letterSpacing: '-0.02em' },
            h2: { fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.01em' },
            h3: { fontWeight: 700, fontSize: '1.75rem', letterSpacing: '-0.01em' },
            h4: { fontWeight: 600, fontSize: '1.5rem', letterSpacing: '0em' },
            h5: { fontWeight: 600, fontSize: '1.25rem', letterSpacing: '0.01em' },
            h6: { fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }, // Stylized headers
            subtitle1: { fontSize: '1rem', fontWeight: 500 },
            subtitle2: { fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: textSecondary }, // Labels
            body1: { fontSize: '0.95rem', lineHeight: 1.6 },
            body2: { fontSize: '0.875rem', lineHeight: 1.5 },
            button: { textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' },
        },
        shape: {
            borderRadius: 0, // SHARP
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: bgDefault,
                        color: textPrimary,
                        scrollbarWidth: 'thin',
                        '&::-webkit-scrollbar': { width: '6px', height: '6px' },
                        '&::-webkit-scrollbar-track': { background: 'transparent' },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: isDark ? '#333' : '#CCC',
                            borderRadius: '0px', // Sharp scrollbar
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: isDark ? '#555' : '#999',
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        transition: 'box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out',
                    },
                    elevation1: {
                        boxShadow: isDark ? '0 1px 2px rgba(0,0,0,0.5)' : '0 1px 3px rgba(0,0,0,0.05)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                    },
                    elevation2: {
                        boxShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.08)',
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        backgroundColor: bgPaper,
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                        boxShadow: 'none', // Flat default
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: isDark
                                ? '0 8px 16px rgba(0,0,0,0.4)'
                                : '0 12px 24px rgba(0,0,0,0.05)',
                            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 0, // Sharp
                        padding: '10px 24px',
                        transition: 'all 0.2s ease',
                        boxShadow: 'none',
                        '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: 'none', // No shadow on hover, just color change/lift
                        },
                        '&:active': {
                            transform: 'translateY(1px)',
                        }
                    },
                    contained: {
                        backgroundColor: isDark ? '#FFFFFF' : '#111111',
                        color: isDark ? '#000000' : '#FFFFFF',
                        '&:hover': {
                            backgroundColor: isDark ? '#E0E0E0' : '#333333',
                        }
                    },
                    outlined: {
                        borderWidth: '1px',
                        borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
                        '&:hover': {
                            borderWidth: '1px',
                            borderColor: isDark ? '#FFFFFF' : '#000000',
                            backgroundColor: 'transparent',
                        }
                    }
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 0,
                            transition: 'all 0.2s ease',
                            '& fieldset': {
                                borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                            },
                            '&:hover fieldset': {
                                borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                            },
                            '&.Mui-focused fieldset': {
                                borderWidth: '1px', // Keep it thin, elegant
                                borderColor: isDark ? '#FFFFFF' : '#000000',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            color: textSecondary,
                            '&.Mui-focused': {
                                color: isDark ? '#FFFFFF' : '#000000',
                            }
                        }
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: '16px 24px',
                        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                        fontFamily: FONT_FAMILY,
                    },
                    head: {
                        backgroundColor: isDark ? '#141414' : '#FAFAFA',
                        color: textSecondary,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        borderBottom: `2px solid ${isDark ? '#333' : '#E0E0E0'}`,
                    },
                    body: {
                        fontSize: '0.875rem',
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.7rem',
                        height: '24px',
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: bgPaper,
                        color: textPrimary,
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                        boxShadow: 'none',
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#FFFFFF', // Always White
                        color: '#000000', // Always Black text
                        borderRight: '1px solid #000000', // Always Black border
                    }
                }
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: '#000000', // Always Black icons
                    }
                }
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: isDark ? '#fff' : '#000',
                        color: isDark ? '#000' : '#fff',
                        borderRadius: 0,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                        padding: '8px 12px',
                    },
                    arrow: {
                        color: isDark ? '#fff' : '#000',
                    }
                }
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        borderRadius: 0,
                        boxShadow: isDark ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: `1px solid ${isDark ? '#333' : '#E5E5E5'}`,
                    }
                }
            }
        },
    });
};

export default getTheme;
