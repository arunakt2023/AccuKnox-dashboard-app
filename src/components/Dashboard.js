import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Modal, Button } from '@mui/material';
import { AddCircleOutline, BarChart, Close } from '@mui/icons-material';
import DonutChart from './DonutChart';
import AssessmentBar from './AssessmentBar';

const NoGraphDataIcon = () => (
    <Box sx={{ textAlign: 'center' }}>
        <BarChart sx={{ fontSize: 80, color: 'gray' }} />
        <Typography variant="body2">No graph data available</Typography>
    </Box>
);

const AddWidgetModal = ({ open, handleClose }) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-widget-modal-title"
        aria-describedby="add-widget-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <Box sx={{ width: '60%', bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mb: 2, 
                bgcolor: 'blue', 
                p: 2, 
                borderRadius: '4px 4px 0 0'
            }}>
                <Typography variant="h6" color="white">Add Widget</Typography>
                <Close onClick={handleClose} sx={{ cursor: 'pointer', color: 'white' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>Personalize your dashboard by adding the following widgets:</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                        <Typography sx={{ borderBottom: 2, borderColor: 'blue', color: 'blue' }}>CSPM</Typography>
                        <Typography sx={{ borderBottom: 1, borderColor: 'white' }}>CWPP</Typography>
                        <Typography sx={{ borderBottom: 1, borderColor: 'white' }}>Image</Typography>
                        <Typography sx={{ borderBottom: 1, borderColor: 'white' }}>Ticket</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, border: '1px solid lightgray', borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            <Typography>Cloud Accounts</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            <Typography>Cloud Account Risk Assessment</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                    <Button onClick={handleClose} variant="outlined" color="primary">Cancel</Button>
                    <Button variant="contained" color="primary">Confirm</Button>
                </Grid>
            </Grid>
        </Box>
    </Modal>
);

const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <Box sx={{ p: 3, bgcolor: '#add8e6', minHeight: '100vh' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">CSPM Executive Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Cloud Accounts</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DonutChart 
                                percentage={50}
                                text="2Total"
                                status={[
                                    { label: 'Connected (2)', color: 'blue' },
                                    { label: 'Not Connected (2)', color: '#add8e6' }
                                ]}
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Cloud Accounts Risk Management</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DonutChart 
                                percentage={{ green: 75, red: 25 }}
                                text="9659"
                                status={[
                                    { label: 'Failed(1689)', color: 'red' },
                                    { label: 'Warning(681)', color: 'yellow' },
                                    { label: 'Not Available(36)', color: 'gray' },
                                    { label: 'Passed(7253)', color: 'green' }
                                ]}
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        border: '1px dashed gray',
                        height: '100%',
                        cursor: 'pointer'
                    }} onClick={handleOpenModal}>
                        <AddCircleOutline sx={{ fontSize: 40, color: 'primary.main' }} />
                        <Typography sx={{ ml: 1, fontSize: '1rem', color: 'primary.main' }}>Add Widget</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5">CWPP Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Top 5 Namespace Specific Alerts</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <NoGraphDataIcon />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Workload Alert</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <NoGraphDataIcon />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        border: '1px dashed gray',
                        height: '100%',
                        cursor: 'pointer'
                    }} onClick={handleOpenModal}>
                        <AddCircleOutline sx={{ fontSize: 40, color: 'primary.main' }} />
                        <Typography sx={{ ml: 1, fontSize: '1rem', color: 'primary.main' }}>Add Widget</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5">Registry Scan</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Image Risk Assessment</Typography>
                        <Typography variant="body2">470 Total Vulnerabilities</Typography>
                        <AssessmentBar 
                            portions={[
                                { label: 'Critical', value: 40, color: 'red' },
                                { label: 'High', value: 60, color: 'darkred' }
                            ]}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h6">Image Security Issues</Typography>
                        <Typography variant="body2">2 Total Images</Typography>
                        <AssessmentBar 
                            portions={[
                                { label: 'Critical', value: 50, color: 'red' },
                                { label: 'High', value: 50, color: 'darkred' }
                            ]}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ 
                        p: 2, 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        border: '1px dashed gray',
                        height: '100%',
                        cursor: 'pointer'
                    }} onClick={handleOpenModal}>
                        <AddCircleOutline sx={{ fontSize: 40, color: 'primary.main' }} />
                        <Typography sx={{ ml: 1, fontSize: '1rem', color: 'primary.main' }}>Add Widget</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <AddWidgetModal open={openModal} handleClose={handleCloseModal} />
        </Box>
    );
};

export default Dashboard;
