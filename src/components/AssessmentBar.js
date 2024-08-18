import React from 'react';
import { Box, Typography } from '@mui/material';

const AssessmentBar = ({ portions }) => {
    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', width: '100%', height: 20, mb: 1 }}>
                {portions.map((portion, index) => (
                    <Box 
                        key={index} 
                        sx={{ 
                            width: `${portion.value}%`, 
                            backgroundColor: portion.color 
                        }} 
                    />
                ))}
            </Box>
            {portions.map((portion, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: portion.color, mr: 1 }} />
                    <Typography variant="body2">{portion.label}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default AssessmentBar;
