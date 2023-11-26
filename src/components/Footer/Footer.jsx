import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: 'auto',
        padding: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()}, Directorio de Lugares
      </Typography>
      <Typography variant="body2">
        <Link color="inherit" href="/politica-de-privacidad">
          Política de Privacidad
        </Link>{' '}
        |{' '}
        <Link color="inherit" href="/terminos-y-condiciones">
          Términos y Condiciones
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
