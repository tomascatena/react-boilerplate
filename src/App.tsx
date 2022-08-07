import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import darkTheme from './themes/darkTheme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div>
          <h1>App Test</h1>
        </div>

        <Routes>
          <Route
            path="/"
            element={<h1>Home</h1>}
          />
          <Route
            path="/about"
            element={<h1>About</h1>}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
