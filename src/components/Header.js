import React, { useState } from 'react';
import { Box, InputBase, IconButton, Typography, MenuItem, Select, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here, e.g., call an API or filter data
    console.log('Search term:', searchTerm);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0, borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1">Home &gt; Dashboard V2</Typography>
      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
        <InputBase
          sx={{ ml: 1, flex: 1, border: '1px solid #ddd', padding: '2px 8px', borderRadius: '4px' }}
          placeholder="Search anything..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <IconButton type="button" onClick={handleSearch} sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControl variant="outlined" sx={{ minWidth: 12, marginRight: 2 }}>
          <Select defaultValue="Profile">
            <MenuItem value="Profile"></MenuItem>
            <MenuItem value="Settings">Settings</MenuItem>
            <MenuItem value="Logout">Logout</MenuItem>
          </Select>
        </FormControl>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ContactMailIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
