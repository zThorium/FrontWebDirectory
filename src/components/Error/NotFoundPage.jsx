import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Paper } from '@mui/material';
import { ErrorOutline as ErrorOutlineIcon } from '@mui/icons-material';

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '4rem' }}>
        <ErrorOutlineIcon style={{ fontSize: 100, color: '#f44336' }} />
        <Typography variant="h4" color="textPrimary" gutterBottom>
          ¡Página no encontrada!
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          La página que estás buscando no existe o ha sido movida.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{ marginTop: '1rem' }}
        >
          Ir a la página de inicio
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;
