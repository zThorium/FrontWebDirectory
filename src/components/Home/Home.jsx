import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Footer from '../Footer/Footer';

import '../../styles/Home.css'



function Home() {
  
  const [placesData, setPlacesData] = useState([]); 

  useEffect(() => {
    
    fetch('http://localhost:3000/lugares') 
      .then((response) => response.json())
      .then((data) => setPlacesData(data))
      .catch((error) => console.error('Error al obtener lugares:', error));
  }, []);

  return (
    <div>
      <AppBar position="static" className="customAppBar" sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: '#FFFFFF' }} component="div" sx={{ flexGrow: 1 }}>
            Directorio de Lugares
          </Typography>
          <Link href="/lugares" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Lugares
          </Link>
          <Link href="/contactanos" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Contactanos
          </Link>
          <Link href="/login" style={{ color: '#FFFFFF' }} sx={{ marginRight: 2 }}>
            Login
          </Link>
          <Link href="/register" style={{ color: '#FFFFFF' }}>
            Register
          </Link>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lugares más Visitados
        </Typography>

        {/* Lista de Lugares */}
        <Grid container spacing={3}>
          {placesData.map((place) => (
            <Grid item key={place.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image} 
                  alt={place.Nombre_Lugar} 
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {place.Nombre_Lugar}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {place.Descripcion}
                  </Typography>
                  <br />
                  <Typography variant="subtitle2" color="text.contrastText">
                    {place.opinion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default Home;
