import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Menu, MenuItem, Modal,Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrowseIcon from '@mui/icons-material/Undo';
import Close from '@mui/icons-material/Close'; 

const AddWidgetModal = ({ open, handleClose }) => (
  <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-widget-modal-title"
      aria-describedby="add-widget-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
      <Box sx={{ width: '60%', bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          {/* Header */}
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
                          <Typography>Widget 1</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <input type="checkbox" style={{ marginRight: '8px' }} />
                          <Typography>Widget 2</Typography>
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
export default function CNAPPDashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <Box sx={{ paddingY: 2, paddingX: 3, borderBottom: '1px solid #ddd', backgroundColor: '#add8e6' }}>
            {/* Top Row: CNAPP Dashboard and Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">CNAPP Dashboard</Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button 
                        variant="outlined" 
                        onClick={handleOpenModal}
                        sx={{ color: 'black', borderColor: 'black' }}
                    >
                        Add Widget
                        <AddIcon sx={{ ml: 1 }} />
                    </Button>

                    {/* Browse Icon in a separate box */}
                    <Box sx={{ border: '1px solid #ddd', borderRadius: '4px', p: '2px' }}>
                        <IconButton>
                            <BrowseIcon />
                        </IconButton>
                    </Box>

                    {/* MoreVert Icon in a separate box */}
                    <Box sx={{ border: '1px solid #ddd', borderRadius: '4px', p: '2px' }}>
                        <IconButton onClick={handleMenuClick}>
                            <MoreVertIcon />
                        </IconButton>
                    </Box>

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                    </Menu>

                    <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px', p: '2px 8px' }}>
                        <AccessTimeIcon sx={{ mr: 1 }} />
                        <Typography variant="body2">Last 2 days</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Widgets Content will go here */}
            {/* <Dashboard /> */}

            <AddWidgetModal open={openModal} handleClose={handleCloseModal} />
        </Box>
    );
}
