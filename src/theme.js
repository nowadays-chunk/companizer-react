import { createTheme, alpha } from '@mui/material/styles';

// --- PALETTES ---
const PRIMARY = {
    main: '#2563EB', // Vibrant Blue
    light: '#60A5FA',
    dark: '#1E40AF',
    contrastText: '#fff',
};

const SECONDARY = {
    main: '#7C3AED', // Soft Purple
    light: '#A78BFA',
    dark: '#5B21B6',
    contrastText: '#fff',
};

const SUCCESS = {
    main: '#059669', // Emerald
    light: '#34D399',
    dark: '#064E3B',
};

const ERROR = {
    main: '#DC2626', // Red
    light: '#F87171',
    dark: '#991B1B',
};

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F3F4F6',
    300: '#E5E7EB',
    400: '#D1D5DB',
    500: '#9CA3AF',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
};

// --- TYPOGRAPHY ---
const FONT_FAMILY = '"Inter", "Roboto", "Helvetica", "Arial", sans-serif';

const getTheme = (mode) => {
    const isDark = mode === 'dark';

    return createTheme({
        palette: {
            mode,
            primary: PRIMARY,
            secondary: SECONDARY,
            success: SUCCESS,
            error: ERROR,
            grey: GREY,
            background: {
                default: isDark ? '#0B0F19' : '#F3F4F6',
                paper: isDark ? '#111827' : '#FFFFFF',
                neutral: isDark ? '#1F2937' : '#F9FAFB',
            },
            text: {
                primary: isDark ? '#F9FAFB' : '#111827',
                secondary: isDark ? '#9CA3AF' : '#6B7280',
            },
            divider: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)',
        },
        typography: {
            fontFamily: FONT_FAMILY,
            h1: { fontWeight: 700, fontSize: '2.5rem' },
            h2: { fontWeight: 700, fontSize: '2rem' },
            h3: { fontWeight: 600, fontSize: '1.75rem' },
            h4: { fontWeight: 600, fontSize: '1.5rem', letterSpacing: '-0.02em' },
            h5: { fontWeight: 600, fontSize: '1.25rem' },
            h6: { fontWeight: 600, fontSize: '1rem' },
            subtitle1: { fontSize: '1.1rem', fontWeight: 500 },
            subtitle2: { fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' },
            body1: { fontSize: '0.95rem', lineHeight: 1.5 },
            body2: { fontSize: '0.875rem', lineHeight: 1.43 },
            button: { textTransform: 'none', fontWeight: 600 },
        },
        shape: {
            borderRadius: 10,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: isDark ? '#0B0F19' : '#F3F4F6',
                        scrollbarWidth: 'thin',
                        '&::-webkit-scrollbar': { width: '8px', height: '8px' },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: isDark ? '#374151' : '#D1D5DB',
                            borderRadius: '4px',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none', // Remove elevation overlay in dark mode
                        backgroundColor: isDark ? '#161e31' : '#FFFFFF', // Slightly lighter than paper for contrast
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}`,
                        boxShadow: isDark
                            ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                            : '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                        borderRadius: 12,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        padding: '6px 16px', // Dense padding
                    },
                    containedPrimary: {
                        background: `linear-gradient(135deg, ${PRIMARY.main} 0%, ${PRIMARY.dark} 100%)`,
                        boxShadow: `0 4px 12px ${alpha(PRIMARY.main, 0.4)}`,
                        '&:hover': {
                            boxShadow: `0 6px 16px ${alpha(PRIMARY.main, 0.6)}`,
                        },
                    },
                    containedSecondary: {
                        background: `linear-gradient(135deg, ${SECONDARY.main} 0%, ${SECONDARY.dark} 100%)`,
                        boxShadow: `0 4px 12px ${alpha(SECONDARY.main, 0.4)}`,
                    },
                    outlined: {
                        borderWidth: '1.5px',
                        '&:hover': { borderWidth: '1.5px' },
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: '6px 16px', // DENSE Table
                        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(243, 244, 246, 1)'}`,
                    },
                    head: {
                        backgroundColor: isDark ? '#1F2937' : '#F9FAFB',
                        color: isDark ? '#F3F4F6' : '#6B7280',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: '0.05em',
                    },
                    body: {
                        fontSize: '0.875rem',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: isDark ? alpha(PRIMARY.main, 0.08) : alpha(PRIMARY.main, 0.04),
                        },
                        '&.Mui-selected': {
                            backgroundColor: isDark ? alpha(PRIMARY.main, 0.16) : alpha(PRIMARY.main, 0.08),
                            '&:hover': {
                                backgroundColor: isDark ? alpha(PRIMARY.main, 0.24) : alpha(PRIMARY.main, 0.12),
                            },
                        },
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    size: 'small', // Default to small/dense
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 8,
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDark ? alpha('#000', 0.2) : '#fff',
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        backgroundColor: isDark ? '#111827' : '#FFFFFF',
                        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
                        boxShadow: 'none',
                        color: isDark ? '#fff' : '#1F2937',
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: isDark ? '#111827' : '#FFFFFF',
                        borderRight: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'}`,
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: isDark ? '#F3F4F6' : '#1F2937',
                        color: isDark ? '#1F2937' : '#F3F4F6',
                        fontSize: '0.75rem',
                        borderRadius: 4,
                    }
                }
            }
        },
    });
};

export default getTheme;
