import React from 'react';
import { Box, Typography } from '@mui/material';
import {
    Treemap,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

const data = [
    {
        name: 'Electronics',
        children: [
            { name: 'Laptops', size: 1200 },
            { name: 'Monitors', size: 800 },
            { name: 'Keyboards', size: 400 },
        ],
    },
    {
        name: 'Furniture',
        children: [
            { name: 'Desks', size: 2000 },
            { name: 'Chairs', size: 1500 },
            { name: 'Cabinets', size: 500 },
        ],
    },
    {
        name: 'Office Supplies',
        children: [
            { name: 'Paper', size: 300 },
            { name: 'Pens', size: 100 },
        ]
    }
];

const CustomContent = (props) => {
    const { root, depth, x, y, width, height, index, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? '#8884d8' : 'none',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 ? (
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 7}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}
                >
                    {name}
                </text>
            ) : null}
        </g>
    );
};

const InventoryHeatmap = () => {
    return (
        <Box sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>Inventory Value Distribution</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={data}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                />
            </ResponsiveContainer>
        </Box>
    );
};

export default InventoryHeatmap;
