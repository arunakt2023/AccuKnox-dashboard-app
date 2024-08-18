import React from 'react';
import { Box, Typography } from '@mui/material';

const DonutChart = ({ percentage, text, status }) => {
    const gradient = percentage ? `conic-gradient(blue ${percentage}%, white ${percentage}%)` : 
                                  `conic-gradient(green ${percentage.green}%, red ${percentage.green + percentage.red}%, white ${percentage.green + percentage.red}%, yellow 0%)`;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box 
                sx={{ 
                    width: 100, 
                    height: 100, 
                    borderRadius: '50%', 
                    background: gradient, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    position: 'relative'
                }}
            >
                <Typography variant="body2" sx={{ position: 'absolute' }}>{text}</Typography>
            </Box>
            <Box>
                {status.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box 
                            sx={{ 
                                width: 10, 
                                height: 10, 
                                borderRadius: '50%', 
                                backgroundColor: item.color, 
                                mr: 1 
                            }} 
                        />
                        <Typography variant="body2">{item.label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DonutChart;
