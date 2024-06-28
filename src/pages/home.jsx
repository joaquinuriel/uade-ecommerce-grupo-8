import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
  const { data } = useSWR("/productos");
  const productos = data?.content;
  // const [productos, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/productos")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.content))
  //     .catch((error) => console.error("Error fetching productos:", error));
  // });

  return (
    <Container>
      <Navbar />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%" }}>
          <Carousel hidden style={{ padding: "20px" }}>
            {productos && productos.length > 0 ? (
              productos.map((producto) => (
                <Carousel.Item key={producto.id}>
                  <img
                    className="d-block w-100"
                    src={producto.img}
                    alt={producto.productName}
                  />
                  <Carousel.Caption
                    style={{
                      color: "white",
                      background: "rgba(0, 0, 0, 0.7)",
                      padding: "10px",
                    }}
                  >
                    <h3>{producto.productName}</h3>
                    <p>{producto.productDescription}</p>
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
        {productos && productos.length > 0 ? (
          productos.map((producto) => (
            <Link
              to={`/producto/${producto.productId}`}
              key={producto.productId}
            >
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={producto.img}
                    alt={producto.productName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {producto.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Detalle: {producto.productDescription}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Precio: {producto.productPrice}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
          ))
        ) : (
          <Typography variant="body1">Cargando productos...</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
