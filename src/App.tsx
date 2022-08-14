import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { useDarkMode } from './hooks/useDarkMode';
import AboutPage from './pages/AboutPage/AboutPage';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import React from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ResponsiveAppBar from '@/components/AppBar/AppBar';

const App = () => {
  const { theme, darkMode, toggleDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ResponsiveAppBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Container maxWidth="xl">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/register"
              element={<RegisterPage />}
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter >
  );
};

export default App;
