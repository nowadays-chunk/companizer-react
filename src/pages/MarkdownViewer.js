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
    Chip, TextField, InputAdornment, Breadcrumbs, Link as MuiLink, Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';

import markdownRoutes from '../data/markdownRoutes';

// --- STYLES & ANIMATIONS ---
const neonBlue = '#000000';
const neonRed = '#d32f2f';
const darkBg = '#f8f9fa';   // Slightly off-white background for the page
const cardBg = '#ffffff';
const border = '1px solid #e0e0e0';

const scrollbarStyles = {
    '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#bdbdbd',
        borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#9e9e9e',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#bdbdbd transparent',
};

const styles = {
    root: {
        backgroundColor: darkBg,
        height: '100vh',
        color: '#000',
        fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    contentWrapper: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingTop: '30px',
        marginTop: '64px',
        paddingBottom: '60px',
        ...scrollbarStyles,
    },
    articleBox: {
        backgroundColor: cardBg,
        border: border,
        borderRadius: '16px', // Rounded corners
        padding: '60px', // More padding
        minHeight: '80vh',
        position: 'relative',
        color: '#333',
        borderColor: '#e0e0e0',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Subtle shadow
    },
    tocDrawer: {
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            borderRight: border,
            borderRadius: '0px',
            paddingTop: '80px',
            overflowY: 'auto',
            ...scrollbarStyles,
        },
    },
    tocItem: {
        borderLeft: '3px solid transparent',
        marginBottom: '2px',
        marginTop: '2px',
        '&:hover': {
            borderLeftColor: '#999',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
        '&.active': {
            borderLeftColor: '#000',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            '& .MuiListItemText-primary': {
                color: '#000',
                fontWeight: '700',
            },
        },
    },
    markdownContent: {
        fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
        color: '#333',
        fontSize: '1.05rem',
        '& *': {
            color: 'inherit',
        },
        '& h1, & h2, & h3, & h4, & h5, & h6': {
            color: '#000000 !important',
            marginTop: '1.5em',
            marginBottom: '0.75em',
            fontWeight: 'bold',
            scrollMarginTop: '100px',
            position: 'relative',
            '&:hover .heading-link': {
                opacity: 1,
            },
        },
        '& h1': {
            fontSize: '2.75rem',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            paddingBottom: '15px',
            marginBottom: '1.2em',
            borderBottom: 'none', // Removed standard border
        },
        '& h2': {
            fontSize: '2rem',
            letterSpacing: '-0.5px',
            paddingBottom: '10px',
            borderBottom: '1px solid #eee',
        },
        '& h3': {
            fontSize: '1.5rem',
        },
        '& p': {
            lineHeight: 1.8,
            marginBottom: '1.2em',
            color: '#444',
        },
        '& a': {
            color: '#0066cc',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        '& ul, & ol': {
            paddingLeft: '1.5em',
            marginBottom: '1.5em',
        },
        '& li': {
            marginBottom: '0.5em',
            lineHeight: 1.7,
        },
        // Callouts / Blockquotes
        '& blockquote': {
            borderLeft: `4px solid #2196f3`,
            backgroundColor: '#e3f2fd',
            padding: '16px 20px',
            margin: '2em 0',
            borderRadius: '8px',
            color: '#0d47a1',
            fontStyle: 'normal',
            position: 'relative',
            '& p': {
                margin: 0,
                color: '#0d47a1',
            },
        },
        // Tables
        '& table': {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            margin: '2em 0',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
        },
        '& th': {
            backgroundColor: '#f5f5f5',
            color: '#000',
            fontWeight: 'bold',
            padding: '14px 16px',
            textAlign: 'left',
            borderBottom: '1px solid #e0e0e0',
        },
        '& td': {
            padding: '14px 16px',
            borderBottom: '1px solid #f0f0f0',
            color: '#444',
        },
        '& tr:last-child td': {
            borderBottom: 'none',
        },
        '& tr:hover td': {
            backgroundColor: '#fafafa',
        },
        '& img': {
            maxWidth: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            marginTop: '1.5em',
            marginBottom: '1.5em',
        },
    },
};

// Configure marked with custom renderer
const renderer = new marked.Renderer();

renderer.heading = function ({ text, depth, raw }) {
    const id = raw.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${depth} id="${id}">${text}<a class="heading-link" href="#${id}" style="opacity: 0; margin-left: 10px; font-size: 0.7em; color: #000; text-decoration: none; transition: opacity 0.2s;">#</a></h${depth}>`;
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
    const contentWrapperRef = useRef(null);

    // Current Route Info
    const currentRouteIndex = markdownRoutes.findIndex(r => r.path === location.pathname) !== -1
        ? markdownRoutes.findIndex(r => r.path === location.pathname)
        : markdownRoutes.findIndex(r => r.fileName.includes(targetFile));

    const currentRoute = currentRouteIndex !== -1 ? markdownRoutes[currentRouteIndex] : { title: 'Presentation' };
    const prevPage = currentRouteIndex > 0 ? markdownRoutes[currentRouteIndex - 1] : null;
    const nextPage = currentRouteIndex !== -1 && currentRouteIndex < markdownRoutes.length - 1 ? markdownRoutes[currentRouteIndex + 1] : null;

    // Extract headings from markdown
    const extractHeadings = (markdownText) => {
        const headingRegex = /^(#{1,6})\s+(.+)$/gm;
        const extracted = [];
        let match;

        while ((match = headingRegex.exec(markdownText)) !== null) {
            const level = match[1].length;
            let text = match[2];
            text = text
                .replace(/(\*\*|__)(.*?)\1/g, '$2')
                .replace(/(\*|_)(.*?)\1/g, '$2')
                .replace(/(`)(.*?)\1/g, '$2')
                .replace(/\[(.*?)\]\(.*?\)/g, '$1');

            const id = match[2].toLowerCase().replace(/[^\w]+/g, '-');
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
                if (!response.ok) throw new Error('Failed to load documentation file');
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

    // ScrollSpy
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
            root: contentWrapperRef.current,
            rootMargin: '-100px 0px -80% 0px',
            threshold: 0,
        });
        headingElements.forEach((heading) => observerRef.current.observe(heading));
        return () => observerRef.current && observerRef.current.disconnect();
    }, [loading, content]);

    // Scroll Top Button Visibility
    useEffect(() => {
        const handleScroll = () => {
            if (contentWrapperRef.current) {
                setShowScrollTop(contentWrapperRef.current.scrollTop > 300);
            }
        };
        const wrapper = contentWrapperRef.current;
        if (wrapper) wrapper.addEventListener('scroll', handleScroll);
        return () => wrapper && wrapper.removeEventListener('scroll', handleScroll);
    }, [loading]);

    // Code Block Enhancement (Mac Window Style)
    useEffect(() => {
        if (!contentRef.current) return;
        Prism.highlightAll();

        const codeBlocks = contentRef.current.querySelectorAll('pre');
        codeBlocks.forEach((pre) => {
            // Check if already processed to avoid duplication
            if (pre.parentElement.classList.contains('code-window')) return;

            // Create Window Wrapper
            const windowWrapper = document.createElement('div');
            windowWrapper.className = 'code-window';
            windowWrapper.style.cssText = `
                background-color: #282a36; /* Dracula bg */
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                margin-bottom: 2em;
                overflow: hidden;
            `;

            // Create Header
            const header = document.createElement('div');
            header.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 15px;
                background-color: #1a1b22;
                border-bottom: 1px solid #333;
            `;

            const dots = document.createElement('div');
            dots.style.display = 'flex';
            dots.style.gap = '8px';
            ['#ff5f56', '#ffbd2e', '#27c93f'].forEach(color => {
                const dot = document.createElement('div');
                dot.style.cssText = `width: 12px; height: 12px; border-radius: 50%; background-color: ${color};`;
                dots.appendChild(dot);
            });

            const lang = document.createElement('span');
            lang.textContent = pre.querySelector('code')?.className.replace('language-', '') || 'Code';
            lang.style.cssText = `color: #888; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 1px;`;

            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy';
            copyBtn.style.cssText = `
                background: transparent; border: 1px solid #444; color: #aaa; 
                padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 11px;
                transition: all 0.2s;
            `;
            copyBtn.addEventListener('hover', () => { copyBtn.style.borderColor = '#fff'; copyBtn.style.color = '#fff'; });
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(pre.textContent);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 2000);
            });

            header.appendChild(dots);
            header.appendChild(lang);
            header.appendChild(copyBtn);

            // Wrap
            pre.parentNode.insertBefore(windowWrapper, pre);
            windowWrapper.appendChild(header);

            // Adjust pre styles
            pre.style.margin = '0';
            pre.style.borderRadius = '0 0 8px 8px';
            pre.style.border = 'none';
            windowWrapper.appendChild(pre);
        });
    }, [content]);

    const handleScrollTop = () => {
        if (contentWrapperRef.current) {
            contentWrapperRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleTocClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navigate(`#${id}`, { replace: true });
        }
    };

    const renderTocItems = () => {
        const items = searchTerm ? headings.filter(h => h.text.toLowerCase().includes(searchTerm.toLowerCase())) : headings;
        return items.map((heading) => (
            <ListItem key={heading.id} disablePadding>
                <ListItemButton
                    onClick={() => handleTocClick(heading.id)}
                    className={activeSection === heading.id ? 'active' : ''}
                    sx={{ ...styles.tocItem, pl: 2 + (heading.level - 1) * 2 }}
                >
                    <ListItemText
                        primary={heading.text}
                        primaryTypographyProps={{
                            variant: 'body2',
                            fontSize: heading.level === 1 ? '0.9rem' : '0.85rem',
                            color: '#555',
                            fontWeight: heading.level === 1 ? 600 : 400
                        }}
                    />
                </ListItemButton>
            </ListItem>
        ));
    };

    return (
        <Box sx={styles.root}>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e0e0e0', zIndex: 1300 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton onClick={() => setTocOpen(!tocOpen)} sx={{ color: '#000', display: { xs: 'block', md: 'none' } }}>
                                <MenuIcon />
                            </IconButton>
                            <IconButton component={Link} to="/" sx={{ color: '#000' }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Box sx={{ width: 40, height: 40, borderRadius: '8px', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                DOC
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '0.5px', color: '#000' }}>
                                PRESENTATION
                            </Typography>
                        </Box>
                        <Button component={Link} to="/" variant="outlined" sx={{ color: '#000', borderColor: '#e0e0e0', '&:hover': { borderColor: '#000', bgcolor: 'transparent' } }}>
                            Back to Home
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="permanent"
                open
                sx={{
                    ...styles.tocDrawer,
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <Box sx={{ p: 3 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ color: '#aaa', fontSize: 20 }} /></InputAdornment>),
                        }}
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                backgroundColor: '#f9f9f9',
                                '& fieldset': { border: '1px solid #eee' },
                                '&:hover fieldset': { borderColor: '#ccc' },
                                '&.Mui-focused fieldset': { borderColor: '#000' },
                            },
                        }}
                    />
                    <Typography variant="overline" sx={{ color: '#999', fontWeight: 'bold', display: 'block', mb: 1 }}>
                        On this page
                    </Typography>
                    <List>{renderTocItems()}</List>
                </Box>
            </Drawer>

            {/* Mobile TOC Drawer */}
            <Drawer
                variant="temporary"
                open={tocOpen}
                onClose={() => setTocOpen(false)}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <Box sx={{ p: 3, width: 280 }}>
                    <List>{renderTocItems()}</List>
                </Box>
            </Drawer>

            <Box ref={contentWrapperRef} sx={{ ...styles.contentWrapper, ml: { xs: 0, md: '280px' } }}>
                <Container maxWidth="lg">
                    {loading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                            <CircularProgress sx={{ color: '#000' }} />
                        </Box>
                    ) : error ? (
                        <Paper sx={{ ...styles.articleBox, borderColor: neonRed, textAlign: 'center' }}>
                            <Typography variant="h5" color="error">Error Loading content</Typography>
                            <Typography>{error}</Typography>
                        </Paper>
                    ) : (
                        <>
                            {/* Breadcrumbs */}
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 4 }}>
                                <MuiLink component={Link} to="/" underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Home
                                </MuiLink>
                                <MuiLink component={Link} to="/presentation" underline="hover" color="inherit">
                                    Presentation
                                </MuiLink>
                                <Typography color="text.primary" fontWeight="bold">{currentRoute.title}</Typography>
                            </Breadcrumbs>

                            <Paper sx={styles.articleBox}>
                                <Box ref={contentRef} className="markdown-body" sx={styles.markdownContent} dangerouslySetInnerHTML={{ __html: content }} />

                                <Divider sx={{ my: 6 }} />

                                {/* Next / Prev Navigation */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                    {prevPage ? (
                                        <Button
                                            component={Link}
                                            to={prevPage.path}
                                            startIcon={<ArrowBackIosNewIcon />}
                                            sx={{
                                                textTransform: 'none',
                                                justifyContent: 'flex-start',
                                                textAlign: 'left',
                                                p: 2,
                                                borderRadius: '12px',
                                                border: '1px solid #e0e0e0',
                                                width: '48%',
                                                color: '#000',
                                                '&:hover': { bgcolor: '#f9f9f9', borderColor: '#ccc' }
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="caption" display="block" color="text.secondary">Previous</Typography>
                                                <Typography variant="subtitle1" fontWeight="bold">{prevPage.title}</Typography>
                                            </Box>
                                        </Button>
                                    ) : <Box />}

                                    {nextPage ? (
                                        <Button
                                            component={Link}
                                            to={nextPage.path}
                                            endIcon={<ArrowForwardIosIcon />}
                                            sx={{
                                                textTransform: 'none',
                                                justifyContent: 'flex-end',
                                                textAlign: 'right',
                                                p: 2,
                                                borderRadius: '12px',
                                                border: '1px solid #e0e0e0',
                                                width: '48%',
                                                color: '#000',
                                                '&:hover': { bgcolor: '#f9f9f9', borderColor: '#ccc' }
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="caption" display="block" color="text.secondary">Next</Typography>
                                                <Typography variant="subtitle1" fontWeight="bold">{nextPage.title}</Typography>
                                            </Box>
                                        </Button>
                                    ) : <Box />}
                                </Box>
                            </Paper>
                        </>
                    )}
                </Container>
            </Box>

            {showScrollTop && (
                <Fab size="medium" onClick={handleScrollTop} sx={{ position: 'fixed', bottom: 32, right: 32, bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}>
                    <KeyboardArrowUpIcon />
                </Fab>
            )}
        </Box>
    );
};

export default MarkdownViewer;
