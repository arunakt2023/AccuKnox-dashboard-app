import React from 'react';
import { Box, Typography } from '@mui/material';

const NoGraphData = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img 
                src="/path-to-no-data-image.png"  
                alt="No Data"
                style={{ maxWidth: '100%', marginBottom: 16 }}
            />
            <Typography variant="body2">No graph data available</Typography>
        </Box>
    );
};

export default NoGraphData;
