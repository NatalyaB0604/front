import React from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DashboardMain from './DashboardMain';
import logo from './logo_main.png';
import About from './About';

const demoTheme = createTheme({
    palette: {
      primary: {
        main: '#3b82f6',
      },
      secondary: {
        main: '#ef4444',
      },
      background: {
        default: '#FEF1FE',
      },
      appbarcolor: {
        default: '#dbb6d3',
      },
      text: {
        primary: '#111827',
      },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

export default function DashBoard({ currentPage }) {
  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider>
        <PageContainer>
          <Grid container alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <img src={logo} alt="Логотип" style={{ height: '60px', marginRight: '16px' }} />
            </Grid>
          </Grid>
          <Typography variant="body1" align="center" sx={{ mt: 2, color: '#666' }}>
            Мы предлагаем разнообразные программы для развития ваших детей!
          </Typography>
          {currentPage === '' ? <DashboardMain /> : <About />} {/* Здесь вы можете переключать содержимое */}
        </PageContainer>
      </AppProvider>
    </ThemeProvider>
  );
}
