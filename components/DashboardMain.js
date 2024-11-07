import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardMain = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      <Grid item xs={12} md={6} onClick={() => handleNavigate('/courses/early-development')}>
        <Skeleton height={200} />
        <Typography variant="h5" align="center" sx={{ mt: 2 }}>
          Программа 1
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} onClick={() => handleNavigate('/courses/school-prep')}>
        <Skeleton height={200} />
        <Typography variant="h5" align="center" sx={{ mt: 2 }}>
          Программа 2
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} onClick={() => handleNavigate('/courses/online-school-prep')}>
        <Skeleton height={200} />
        <Typography variant="h5" align="center" sx={{ mt: 2 }}>
          Программа 3
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} onClick={() => handleNavigate('/courses/english')}>
        <Skeleton height={200} />
        <Typography variant="h5" align="center" sx={{ mt: 2 }}>
          Программа 4
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardMain;
