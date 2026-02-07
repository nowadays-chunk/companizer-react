import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import {
    Container, Paper, CircularProgress, Typography, Box, Button, AppBar, Toolbar, IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// --- STYLES & ANIMATIONS ---
const neonBlue = '#00f3ff';
const neonRed = '#ff0055';
const darkBg = '#050505';
const cardBg = '#0a0a0a';
const border = '1px solid #222';

const styles = {
    root: {
        backgroundColor: darkBg,
        minHeight: '100vh',
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        overflowX: 'hidden',
        paddingTop: '80px', // Space for AppBar
    },
    bentoBox: {
        backgroundColor: cardBg,
        border: border,
        borderRadius: '16px',
        padding: '24px',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `0 0 20px rgba(0, 243, 255, 0.1)`,
        borderColor: '#333',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            borderColor: neonBlue,
            boxShadow: `0 0 20px rgba(0, 243, 255, 0.2)`,
        },
    },
    markdownContent: {
        '& h1, & h2, & h3, & h4, & h5, & h6': {
            color: '#fff',
            marginTop: '1.5em',
            marginBottom: '0.5em',
            fontWeight: 'bold',
        },
        '& h1': {
            fontSize: '2.5rem',
            borderBottom: '1px solid #333',
            paddingBottom: '10px',
        },
        '& h2': {
            fontSize: '2rem',
            color: '#fff',
        },
        '& p': {
            lineHeight: 1.8,
            fontSize: '1.1rem',
            color: '#ccc',
            marginBottom: '1em',
        },
        '& a': {
            color: '#fff',
            textDecoration: 'none',
            transition: '0.3s',
            borderBottom: '1px solid #444',
            '&:hover': {
                color: '#aaa',
                borderBottom: '1px solid #fff',
            },
        },
        '& ul, & ol': {
            paddingLeft: '2em',
            marginBottom: '1em',
            color: '#ccc',
        },
        '& li': {
            marginBottom: '0.5em',
        },
        '& code': {
            backgroundColor: '#1a1a1a',
            padding: '2px 6px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            color: '#ff79c6',
        },
        '& pre': {
            backgroundColor: '#1a1a1a',
            padding: '1em',
            borderRadius: '8px',
            overflowX: 'auto',
            border: `1px solid #333`,
            '& code': {
                backgroundColor: 'transparent',
                color: '#f8f8f2',
                padding: 0,
            }
        },
        '& blockquote': {
            borderLeft: '4px solid #333',
            paddingLeft: '1em',
            marginLeft: 0,
            color: '#aaa',
            fontStyle: 'italic',
        },
        '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            margin: '2em 0',
        },
        '& th, & td': {
            border: `1px solid #333`,
            padding: '12px',
            textAlign: 'left',
        },
        '& th': {
            backgroundColor: '#1a1a1a',
            color: '#fff',
            fontWeight: 'bold',
        }
    },
    navButton: {
        color: '#fff',
        borderColor: '#333',
        '&:hover': {
            borderColor: neonBlue,
            color: neonBlue,
            boxShadow: `0 0 10px ${neonBlue}`,
        },
    },
};

const MarkdownViewer = ({ fileName }) => {
    const { file } = useParams();
    const targetFile = fileName || file;
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!targetFile) return;

        // If targetFile doesn't have extension, add .md
        // Also handle the case where targetFile comes from route with /markdowns prefix
        let url = targetFile;

        // If it starts with /, use process.env.PUBLIC_URL
        if (targetFile.startsWith('/')) {
            url = `${process.env.PUBLIC_URL}${targetFile}`;
        } else {
            // Fallback for just filenames
            url = targetFile.endsWith('.md')
                ? `${process.env.PUBLIC_URL}/markdowns/${targetFile}`
                : `${process.env.PUBLIC_URL}/markdowns/${targetFile}.md`;
        }

        setLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load documentation file');
                }
                return response.text();
            })
            .then((text) => {
                const html = DOMPurify.sanitize(marked.parse(text));
                setContent(html);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [targetFile]);

    // Inject styles for markdown content
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
             .markdown-body {
                 font-family: 'Roboto', sans-serif;
             }
         `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <Box sx={styles.root}>
            {/* Navigation Bar */}
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #222' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton component={Link} to="/" sx={{ color: neonBlue }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ width: 40, height: 40, borderRadius: '8px', background: `linear-gradient(45deg, ${neonBlue}, ${neonRed})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                DOC
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
                                DOCUMENTATION
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button component={Link} to="/" variant="outlined" sx={styles.navButton}>
                                Back to Home
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                        <CircularProgress sx={{ color: neonBlue }} />
                    </Box>
                ) : error ? (
                    <Paper sx={{ ...styles.bentoBox, borderColor: neonRed, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: neonRed, mb: 2 }}>
                            Error Loading Documentation
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#aaa' }}>
                            {error}
                        </Typography>
                        <Button component={Link} to="/" sx={{ mt: 3, color: '#fff', borderColor: '#333' }} variant="outlined">
                            Return Home
                        </Button>
                    </Paper>
                ) : (
                    <Paper sx={styles.bentoBox}>
                        <Box
                            className="markdown-body"
                            sx={styles.markdownContent}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </Paper>
                )}
            </Container>
        </Box>
    );
};

export default MarkdownViewer;
