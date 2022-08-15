import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { useDarkMode } from './hooks/useDarkMode';
import CssBaseline from '@mui/material/CssBaseline';
import CustomBackdrop from './components/custom-components/CustomBackdrop/CustomBackdrop';
import React from 'react';
import ResponsiveAppBar from '@/components/AppBar/AppBar';

// Lazy load Pages
const HomePageAsync = React.lazy(() => import('./pages/HomePage/HomePage'));
const LoginPageAsync = React.lazy(() => import('@/pages/LoginPage/LoginPage'));
const RegisterPageAsync = React.lazy(() => import('@/pages/RegisterPage/RegisterPage'));
const AboutPageAsync = React.lazy(() => import('@/pages/AboutPage/AboutPage'));

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
          <React.Suspense
            fallback={
              <CustomBackdrop
                isOpen
                message='Loading...'
              />
            }
          >
            <Routes>
              <Route
                path="/"
                element={<HomePageAsync />}
              />

              <Route
                path="/about"
                element={<AboutPageAsync />}
              />

              <Route
                path="/login"
                element={<LoginPageAsync />}
              />

              <Route
                path="/register"
                element={<RegisterPageAsync />}
              />
            </Routes>
          </React.Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter >
  );
};

export default App;
