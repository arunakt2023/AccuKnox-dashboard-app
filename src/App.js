import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './components/Dashboard';
import AddWidget from './components/AddWidget';
import Header from './components/Header';
import CNAPPDashboard from './components/CNAPPDashboard';
import { Box, Container, Paper } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container sx={{ paddingY: 4 }}>
        <Paper elevation={3}>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <Box sx={{ padding: 2 }}>
            {/* CNAPP Dashboard Section */}
            <CNAPPDashboard />
            
            {/* Widgets and AddWidget Components */}
            <AddWidget />
            <Dashboard />
          </Box>
        </Paper>
      </Container>
    </Provider>
  );
}

export default App;
