import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import {
    Container, Paper, CircularProgress, Typography, Box, Button, AppBar, Toolbar,
    IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Fab,
    Chip, TextField, InputAdornment
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import markdownRoutes from '../data/markdownRoutes';

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
        paddingTop: '80px',
    },
    articleBox: {
        backgroundColor: cardBg,
        border: border,
        borderRadius: '0px', // No border radius as requested
        padding: '40px',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
        // boxShadow: `0 0 20px rgba(0, 243, 255, 0.1)`, // Removed
        borderColor: '#333',
        transition: 'all 0.3s ease-in-out',
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#333',
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    tocDrawer: {
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: cardBg,
            borderRight: border,
            borderRadius: '0px',
            paddingTop: '80px',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '6px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#333',
                borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#555',
            },
        },
    },
    tocItem: {
        borderLeft: '2px solid transparent',
        transition: 'all 0.2s ease',
        '&:hover': {
            borderLeftColor: neonBlue,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
        '&.active': {
            borderLeftColor: neonBlue,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& .MuiListItemText-primary': {
                color: neonBlue,
                fontWeight: 'bold',
            },
        },
    },
    markdownContent: {
        '& h1, & h2, & h3, & h4, & h5, & h6': {
            color: '#fff',
            marginTop: '1.5em',
            marginBottom: '0.5em',
            fontWeight: 'bold',
            scrollMarginTop: '100px',
            position: 'relative',
            '&:hover .heading-link': {
                opacity: 1,
            },
        },
        '& h1': {
            fontSize: '2.5rem',
            borderBottom: `2px solid ${neonBlue}`,
            paddingBottom: '10px',
            marginBottom: '1em',
        },
        '& h2': {
            fontSize: '2rem',
            color: '#fff',
            borderBottom: '1px solid #333',
            paddingBottom: '8px',
        },
        '& h3': {
            fontSize: '1.5rem',
            color: '#fff',
        },
        '& p': {
            lineHeight: 1.8,
            fontSize: '1.1rem',
            color: '#ccc',
            marginBottom: '1em',
        },
        '& a': {
            color: neonBlue,
            textDecoration: 'none',
            transition: '0.3s',
            borderBottom: `1px solid ${neonBlue}40`,
            '&:hover': {
                color: '#fff',
                borderBottom: `1px solid ${neonBlue}`,
            },
        },
        '& ul, & ol': {
            paddingLeft: '2em',
            marginBottom: '1em',
            color: '#ccc',
        },
        '& li': {
            marginBottom: '0.5em',
            lineHeight: 1.6,
        },
        '& code': {
            backgroundColor: '#1a1a1a',
            padding: '3px 8px',
            borderRadius: '4px',
            fontFamily: '"Fira Code", "Consolas", monospace',
            color: '#ccc', // Changed from neonRed
            fontSize: '0.9em',
            border: '1px solid #333',
        },
        '& pre': {
            backgroundColor: '#0d0d0d',
            padding: '20px',
            borderRadius: '8px',
            overflowX: 'auto',
            border: `1px solid #333`,
            position: 'relative',
            marginBottom: '1.5em',
            '& code': {
                backgroundColor: 'transparent',
                color: '#f8f8f2',
                padding: 0,
                border: 'none',
                fontSize: '0.95em',
            },
        },
        '& .code-block-wrapper': {
            position: 'relative',
            marginBottom: '1.5em',
        },
        '& .copy-button': {
            position: 'absolute',
            top: '10px',
            right: '10px',
            opacity: 0,
            transition: 'opacity 0.2s',
        },
        '& .code-block-wrapper:hover .copy-button': {
            opacity: 1,
        },
        '& blockquote': {
            borderLeft: `4px solid ${neonBlue}`,
            paddingLeft: '1.5em',
            marginLeft: 0,
            color: '#aaa',
            fontStyle: 'italic',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1em 1.5em',
            borderRadius: '0 4px 4px 0',
        },
        '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            margin: '2em 0',
            backgroundColor: '#0d0d0d',
            border: '1px solid #333',
            borderRadius: '8px',
            overflow: 'hidden',
        },
        '& th, & td': {
            border: `1px solid #333`,
            padding: '12px 16px',
            textAlign: 'left',
        },
        '& th': {
            backgroundColor: '#1a1a1a',
            color: '#fff',
            fontWeight: 'bold',
            borderBottom: `2px solid ${neonBlue}`,
        },
        '& tbody tr': {
            transition: 'background-color 0.2s',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
        },
        '& img': {
            maxWidth: '100%',
            borderRadius: '8px',
            border: '1px solid #333',
            marginTop: '1em',
            marginBottom: '1em',
        },
        '& hr': {
            border: 'none',
            borderTop: '1px solid #333',
            margin: '2em 0',
        },
    },
    navButton: {
        color: '#fff',
        borderColor: '#333',
        '&:hover': {
            borderColor: '#fff',
            color: '#fff',
        },
    },
};

// Configure marked with custom renderer
const renderer = new marked.Renderer();

renderer.heading = function ({ text, depth, raw }) {
    const id = raw.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${depth} id="${id}">${text}<a class="heading-link" href="#${id}" style="opacity: 0; margin-left: 10px; font-size: 0.7em; color: ${neonBlue}; text-decoration: none; transition: opacity 0.2s;">#</a></h${depth}>`;
};

marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: false,
});

const MarkdownViewer = ({ fileName }) => {
    const { file } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const targetFile = fileName || file;

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [activeSection, setActiveSection] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [tocOpen, setTocOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const contentRef = useRef(null);
    const observerRef = useRef(null);

    // Extract headings from markdown
    const extractHeadings = (markdownText) => {
        const headingRegex = /^(#{1,6})\s+(.+)$/gm;
        const extracted = [];
        let match;

        while ((match = headingRegex.exec(markdownText)) !== null) {
            const level = match[1].length;
            const text = match[2];
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            extracted.push({ level, text, id });
        }

        return extracted;
    };

    useEffect(() => {
        if (!targetFile) return;

        let url = targetFile;

        if (targetFile.startsWith('/')) {
            url = `${process.env.PUBLIC_URL}${targetFile}`;
        } else {
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
                setHeadings(extractHeadings(text));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [targetFile]);

    // Scroll to hash on mount and hash change
    useEffect(() => {
        if (location.hash && !loading) {
            setTimeout(() => {
                const id = location.hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location.hash, loading]);

    // Intersection Observer for scroll spy
    useEffect(() => {
        if (loading || !contentRef.current) return;

        const headingElements = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        observerRef.current = new IntersectionObserver(observerCallback, {
            rootMargin: '-100px 0px -80% 0px',
            threshold: 0,
        });

        headingElements.forEach((heading) => {
            observerRef.current.observe(heading);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loading, content]);

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add copy buttons to code blocks and trigger syntax highlighting
    useEffect(() => {
        if (!contentRef.current) return;

        // Trigger syntax highlighting
        Prism.highlightAll();

        const codeBlocks = contentRef.current.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-button';
            copyBtn.innerHTML = '📋 Copy';
            copyBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #333; // Dark grey
                color: #fff;
                border: none;
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                opacity: 0;
                transition: opacity 0.2s, background 0.2s;
            `;

            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent);
                copyBtn.innerHTML = '✓ Copied!';
                copyBtn.style.background = '#000';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Copy';
                    copyBtn.style.background = '#333';
                }, 2000);
            });

            copyBtn.addEventListener('mouseenter', () => {
                copyBtn.style.background = '#555';
            });

            copyBtn.addEventListener('mouseleave', () => {
                if (copyBtn.innerHTML === '📋 Copy') {
                    copyBtn.style.background = neonBlue;
                }
            });

            const pre = block.parentElement;
            pre.parentElement.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
            wrapper.appendChild(copyBtn);

            wrapper.addEventListener('mouseenter', () => {
                copyBtn.style.opacity = '1';
            });

            wrapper.addEventListener('mouseleave', () => {
                copyBtn.style.opacity = '0';
            });
        });
    }, [content]);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTocClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navigate(`#${id}`, { replace: true });
        }
    };

    const filteredHeadings = searchTerm
        ? headings.filter(h => h.text.toLowerCase().includes(searchTerm.toLowerCase()))
        : headings;

    const renderTocItems = () => {
        return filteredHeadings.map((heading) => {
            const paddingLeft = 2 + (heading.level - 1) * 1.5;
            const fontSize = heading.level === 1 ? '0.95rem' : heading.level === 2 ? '0.9rem' : '0.85rem';
            const fontWeight = heading.level === 1 ? 'bold' : 'normal';
            const color = heading.level > 2 ? '#999' : undefined;

            return (
                <ListItem key={heading.id} disablePadding>
                    <ListItemButton
                        onClick={() => handleTocClick(heading.id)}
                        className={activeSection === heading.id ? 'active' : ''}
                        sx={{
                            ...styles.tocItem,
                            pl: paddingLeft,
                            '&.active': {
                                borderLeftColor: neonBlue,
                                backgroundColor: 'rgba(0, 243, 255, 0.1)',
                                '& .MuiListItemText-primary': {
                                    color: neonBlue,
                                    fontWeight: 'bold',
                                },
                            },
                        }}
                    >
                        <ListItemText
                            primary={heading.text}
                            primaryTypographyProps={{
                                variant: heading.level === 1 ? 'subtitle1' : 'body2',
                                fontWeight,
                                fontSize,
                                color: '#ffffff' // Force white color
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            );
        });
    };

    return (
        <Box sx={styles.root}>
            {/* Navigation Bar */}
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #222', zIndex: 1300 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton
                                onClick={() => setTocOpen(!tocOpen)}
                                sx={{ color: neonBlue, display: { xs: 'block', md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <IconButton component={Link} to="/" sx={{ color: neonBlue }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ width: 40, height: 40, borderRadius: '8px', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
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

            {/* Table of Contents Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    ...styles.tocDrawer,
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': styles.tocDrawer['& .MuiDrawer-paper'],
                }}
                open
            >
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ color: neonBlue, mb: 2, fontWeight: 'bold' }}>
                        Documentation
                    </Typography>
                    <List component="nav">
                        {markdownRoutes.map((route) => (
                            <ListItem key={route.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={route.path}
                                    selected={location.pathname === route.path}
                                    sx={{
                                        borderRadius: '4px',
                                        mb: 1,
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderLeft: `3px solid ${neonBlue}`,
                                            '& .MuiListItemIcon-root': {
                                                color: neonBlue,
                                            },
                                            '& .MuiListItemText-primary': {
                                                color: neonBlue,
                                                fontWeight: 'bold',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        },
                                    }}
                                >
                                    <ListItemText primary={route.title || route.path} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <hr style={{ borderColor: '#333', margin: '20px 0' }} />
                    <Typography variant="h6" sx={{ color: neonBlue, mb: 2, fontWeight: 'bold' }}>
                        Table of Contents
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#666' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                color: '#fff',
                                backgroundColor: '#0d0d0d',
                                '& fieldset': {
                                    borderColor: '#333',
                                },
                                '&:hover fieldset': {
                                    borderColor: neonBlue,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: neonBlue,
                                },
                            },
                        }}
                    />
                    <List sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 400px)' }}>
                        {renderTocItems()}
                    </List>
                </Box>
            </Drawer>

            {/* Mobile TOC Drawer */}
            <Drawer
                variant="temporary"
                open={tocOpen}
                onClose={() => setTocOpen(false)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        ...styles.tocDrawer['& .MuiDrawer-paper'],
                        paddingTop: '64px',
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ color: neonBlue, mb: 2, fontWeight: 'bold' }}>
                        Documentation
                    </Typography>
                    <List component="nav">
                        {markdownRoutes.map((route) => (
                            <ListItem key={route.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={route.path}
                                    selected={location.pathname === route.path}
                                    onClick={() => setTocOpen(false)}
                                    sx={{
                                        borderRadius: '4px',
                                        mb: 1,
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(0, 243, 255, 0.1)',
                                            borderLeft: `3px solid ${neonBlue}`,
                                            '& .MuiListItemIcon-root': {
                                                color: neonBlue,
                                            },
                                            '& .MuiListItemText-primary': {
                                                color: neonBlue,
                                                fontWeight: 'bold',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 243, 255, 0.05)',
                                        },
                                    }}
                                >
                                    <ListItemText primary={route.title || route.path} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <hr style={{ borderColor: '#333', margin: '20px 0' }} />
                    <Typography variant="h6" sx={{ color: neonBlue, mb: 2, fontWeight: 'bold' }}>
                        Table of Contents
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#666' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                color: '#fff',
                                backgroundColor: '#0d0d0d',
                                '& fieldset': {
                                    borderColor: '#333',
                                },
                                '&:hover fieldset': {
                                    borderColor: neonBlue,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: neonBlue,
                                },
                            },
                        }}
                    />
                    <List>
                        {renderTocItems()}
                    </List>
                </Box>
            </Drawer>

            <Box sx={{ ml: { xs: 0, md: '280px' } }}>
                <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
                    {loading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                            <CircularProgress sx={{ color: neonBlue }} />
                        </Box>
                    ) : error ? (
                        <Paper sx={{ ...styles.articleBox, borderColor: neonRed, textAlign: 'center' }}>
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
                        <>
                            {/* Document Metadata */}
                            <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip
                                    label="Documentation"
                                    size="small"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        color: neonBlue,
                                        border: `1px solid ${neonBlue}`
                                    }}
                                />
                                <Chip
                                    label="CRM & ERP System"
                                    size="small"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        color: '#aaa',
                                        border: `1px solid #333`
                                    }}
                                />
                                <Chip
                                    label={`${headings.length} Sections`}
                                    size="small"
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        color: '#fff',
                                        border: '1px solid #333'
                                    }}
                                />
                            </Box>

                            <Paper sx={styles.articleBox}>
                                <Box
                                    ref={contentRef}
                                    className="markdown-body"
                                    sx={styles.markdownContent}
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                            </Paper>
                        </>
                    )}
                </Container>
            </Box>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <Fab
                    size="small"
                    onClick={handleScrollTop}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        backgroundColor: '#fff',
                        color: '#000',
                        '&:hover': {
                            backgroundColor: '#ccc',
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            )}
        </Box>
    );
};

export default MarkdownViewer;
