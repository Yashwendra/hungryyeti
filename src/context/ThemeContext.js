import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ThemeProviderWrapper = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode colors
                primary: {
                  main: '#ff4757',
                  light: '#ff6b81',
                  dark: '#ff1f34',
                },
                secondary: {
                  main: '#2f3542',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#2f3542',
                  secondary: '#747d8c',
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: '#ff4757',
                  light: '#ff6b81',
                  dark: '#ff1f34',
                },
                secondary: {
                  main: '#f1f2f6',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#f1f2f6',
                  secondary: '#a4b0be',
                },
              }),
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#1e1e1e' : '#ffffff',
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#1e1e1e' : '#ffffff',
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#1e1e1e' : '#ffffff',
                color: mode === 'dark' ? '#f1f2f6' : '#2f3542',
                transition: 'all 0.3s ease',
              },
            },
          },
        },
        transitions: {
          duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  return useContext(ColorModeContext);
}; 