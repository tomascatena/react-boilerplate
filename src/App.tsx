import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './themes/darkTheme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div>
        <h1>App Test</h1>
      </div>
    </ThemeProvider>);
};

export default App;