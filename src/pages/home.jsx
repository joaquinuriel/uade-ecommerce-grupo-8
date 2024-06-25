import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching productos:', error));
  }, );

  return (
    <Container>
      <Navbar />

    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '40%' }}>

      <Carousel style={{padding: '20px'}}>
        {productos && productos.length > 0 ? (
          productos.map(producto => (
            <Carousel.Item key={producto.id}>
              <img
                className="d-block w-100"
                src={producto.img}
                alt={producto.titulo}
              />
              <Carousel.Caption style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px' }}>
                <h3>{producto.titulo}</h3>
                <p>{producto.detalle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <Carousel.Caption>
              <h3>No hay productos disponibles</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
      </div>
      </div>

        <Grid container spacing={3}>
          { productos && productos.length > 0 ? (
              productos.map(producto => (
            <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.img}
                  alt={producto.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Detalle: {producto.detalle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio: {producto.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Categoría: {producto.Categoria}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cantidad disponible: {producto.stock}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
          ) : (
            <Typography variant="body1">Cargando productos...</Typography>
          )
          }
      </Grid>     
    </Container>
  );
};

export default Home;
