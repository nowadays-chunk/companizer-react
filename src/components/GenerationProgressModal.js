import React, { useEffect, useRef } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ConsoleBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#1e1e1e',
    color: '#00ff00',
    fontFamily: 'monospace',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    height: '300px',
    overflowY: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: '1px solid #333'
}));

const GenerationProgressModal = ({ open, onClose, isFinished, progressLog }) => {
    const logEndRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (logEndRef.current) {
            logEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [progressLog]);

    return (
        <Dialog open={open} maxWidth="md" fullWidth disableEscapeKeyDown>
            <DialogTitle>Generating Random Data</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Please wait while the system generates random transactions for your configured entities...
                </Typography>

                {!isFinished && <LinearProgress sx={{ mt: 2 }} color="secondary" />}

                <ConsoleBox>
                    {progressLog.map((log, index) => (
                        <div key={index}>
                            {`> ${log}`}
                        </div>
                    ))}
                    {isFinished && <div style={{ color: '#00ccff' }}>{`> Process Completed Successfully.`}</div>}
                    <div ref={logEndRef} />
                </ConsoleBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={!isFinished} variant="contained" color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default GenerationProgressModal;
