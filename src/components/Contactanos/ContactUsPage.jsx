import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Link,
} from '@mui/material';

function ContactUsPage() {
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: '#FFFFFF' }} component="div" sx={{ flexGrow: 1 }}>
            Directorio de Lugares
          </Typography>
          <Link href="/404" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Lugares
          </Link>
          <Link href="/Contactanos" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Contactanos
          </Link>
          <Link href="/Login" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Login
          </Link>
          <Link href="/register" style={{ color: '#FFFFFF' }}>
            Register
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '2rem', marginTop: '4rem' }}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Si tienes alguna pregunta o comentario, por favor, déjanos saber. Estamos aquí para ayudarte.
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Correo Electrónico"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar Mensaje
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default ContactUsPage;