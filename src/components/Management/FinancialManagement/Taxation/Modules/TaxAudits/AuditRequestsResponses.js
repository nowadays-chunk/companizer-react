import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    Paper,
    Button
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';
import { Send, CheckCircle, Warning } from '@mui/icons-material';

const generateMockRequests = (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        requestId: `REQ-${faker.string.numeric(4)}`,
        description: faker.lorem.sentence(),
        receivedDate: faker.date.past().toLocaleDateString(),
        dueDate: faker.date.future().toLocaleDateString(),
        assignedTo: faker.person.fullName(),
        status: faker.helpers.arrayElement(['Open', 'In Progress', 'Submitted', 'Accepted', 'Rejected'])
    }));
};

const AuditRequestsResponses = () => {
    const [requests, setRequests] = useState(generateMockRequests(12));

    const handleStatusChange = (id) => {
        // Simple cycle for demo: Open -> In Progress -> Submitted
        setRequests(requests.map(req => {
            if (req.id === id) {
                let nextStatus = 'Open';
                if (req.status === 'Open') nextStatus = 'In Progress';
                else if (req.status === 'In Progress') nextStatus = 'Submitted';
                else if (req.status === 'Submitted') nextStatus = 'Accepted';
                return { ...req, status: nextStatus };
            }
            return req;
        }));
    };

    const columns = [
        { field: 'requestId', headerName: 'Request ID', width: 120 },
        { field: 'description', headerName: 'Description', width: 400 },
        { field: 'receivedDate', headerName: 'Received', width: 120 },
        { field: 'dueDate', headerName: 'Due Date', width: 120 },
        { field: 'assignedTo', headerName: 'Assigned To', width: 180 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (params) => {
                const colorMap = {
                    'Open': 'error',
                    'In Progress': 'warning',
                    'Submitted': 'info',
                    'Accepted': 'success',
                    'Rejected': 'error'
                };
                return <Chip label={params.value} color={colorMap[params.value] || 'default'} size="small" />;
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleStatusChange(params.row.id)}
                    disabled={['Accepted', 'Rejected'].includes(params.row.status)}
                >
                    {params.row.status === 'Open' && 'Start'}
                    {params.row.status === 'In Progress' && 'Submit'}
                    {['Submitted', 'Accepted', 'Rejected'].includes(params.row.status) && 'View'}
                </Button>
            )
        }
    ];

    return (
        <Box sx={{ height: 600, width: '100%', p: 3 }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Audit Requests & Responses
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Track and manage official information requests from tax authorities.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Paper sx={{ p: 2, flex: 1, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#fff3e0' }}>
                    <Warning color="warning" />
                    <Box>
                        <Typography variant="subtitle2">Pending Requests</Typography>
                        <Typography variant="h5">{requests.filter(r => ['Open', 'In Progress'].includes(r.status)).length}</Typography>
                    </Box>
                </Paper>
                <Paper sx={{ p: 2, flex: 1, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#e3f2fd' }}>
                    <Send color="info" />
                    <Box>
                        <Typography variant="subtitle2">Submitted</Typography>
                        <Typography variant="h5">{requests.filter(r => r.status === 'Submitted').length}</Typography>
                    </Box>
                </Paper>
                <Paper sx={{ p: 2, flex: 1, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#e8f5e9' }}>
                    <CheckCircle color="success" />
                    <Box>
                        <Typography variant="subtitle2">Accepted</Typography>
                        <Typography variant="h5">{requests.filter(r => r.status === 'Accepted').length}</Typography>
                    </Box>
                </Paper>
            </Box>

            <Paper elevation={2} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={requests}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>
        </Box>
    );
};

export default AuditRequestsResponses;
