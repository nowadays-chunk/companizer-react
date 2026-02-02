import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Container, Paper, CircularProgress, Typography, Box } from '@mui/material';

const MarkdownViewer = ({ fileName }) => {
  const { file } = useParams();
  const targetFile = fileName || file;
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!targetFile) return;

    // If targetFile doesn't have extension, add .md
    const url = targetFile.endsWith('.md') 
      ? `${process.env.PUBLIC_URL}/${targetFile}`
      : `${process.env.PUBLIC_URL}/${targetFile}.md`;

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

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" m={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography color="error" variant="h6">
          Error loading documentation: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <div 
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </Paper>
    </Container>
  );
};

export default MarkdownViewer;
