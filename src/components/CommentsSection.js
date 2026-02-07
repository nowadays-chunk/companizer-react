import React, { useState, useEffect, useMemo } from 'react';
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Box,
    TextField,
    IconButton
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useTranslation } from '../contexts/TranslationProvider';
import { helpersWrapper } from '../utils/clientQueries';
import { collectionName as commentsCollectionName } from './Management/entity_comments_history';

// Reusing the SectionHeader style if possible, or defining locally
const SectionHeader = ({ title }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.05em', mr: 2 }}>
            {title}
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
    </Box>
);

const CommentsSection = ({ entityId, entityType }) => {
    const { t } = useTranslation();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    // Initialize helper strictly for this component
    const commentsHelpers = useMemo(() => helpersWrapper(commentsCollectionName), []);

    const fetchComments = async () => {
        if (!entityId || !entityType) return;
        try {
            // In a real optimized app, we would query *by* entity_id, but current pattern fetches all and filters
            // We'll stick to the existing pattern to minimize backend disruption
            const allComments = await commentsHelpers.fetchItems();
            const relevant = allComments.filter(c => c.entity_id === entityId && c.entity_type === entityType);
            setComments(relevant);
        } catch (err) {
            console.error("Error loading comments", err);
        }
    };

    useEffect(() => {
        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entityId, entityType]);

    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        try {
            await commentsHelpers.addItem({
                entity_type: entityType,
                entity_id: entityId,
                comment_text: newComment,
                author_name: 'Current User', // Placeholder as per original code
            });
            setNewComment('');
            await fetchComments(); // Refresh list
        } catch (e) {
            console.error("Failed to add comment", e);
        }
    };

    return (
        <Card>
            <CardContent sx={{ p: 4 }}>
                <SectionHeader title={t("Comments")} />

                <List disablePadding sx={{ maxHeight: 300, overflow: 'auto', mb: 2 }}>
                    {comments.map((c, i) => (
                        <React.Fragment key={i}>
                            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ width: 32, height: 32, borderRadius: 0 }}>
                                        {c.author_name?.[0] || '?'}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{c.author_name}</Typography>}
                                    secondary={
                                        <>
                                            <Typography variant="body2" color="text.primary" sx={{ my: 0.5 }}>{c.comment_text}</Typography>
                                            <Typography variant="caption" display="block" color="text.secondary">
                                                {c.created_at ? new Date(c.created_at).toLocaleString() : 'Just now'}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                        </React.Fragment>
                    ))}
                    {comments.length === 0 && (
                        <Typography variant="caption" color="textSecondary">
                            {t("No comments yet.")}
                        </Typography>
                    )}
                </List>

                <Box display="flex" gap={1}>
                    <TextField
                        fullWidth
                        multiline
                        rows={2}
                        placeholder={t("Write a comment...")}
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'background.default' } }}
                    />
                    <IconButton
                        color="primary"
                        onClick={handleAddComment}
                        sx={{ alignSelf: 'flex-end', borderRadius: 0, border: '1px solid', borderColor: 'primary.main', p: 1 }}
                    >
                        <Send />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CommentsSection;
