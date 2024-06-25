import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils.js";

const Producto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    titulo: "",
    id: "",
    detalle: "",
    precio: "",
    Categoria: "",
    img: "",
    stock: "",
    marca: "",
    dificultad: "",
  });
  const [cantidad, setCantidad] = useState(1);
  const [idUsuario, setIdUsuario] = useState(null);
  const [userOk, setUserOk] = useState("");

  // Lo usamos para acceder a los datos del producto mediante el param
  useEffect(() => {
    fetch(`http://localhost:3000/productos?id=${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data[0]));
  }, []);

  // Función para restar unidades
  const removeProduct = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  // Función para agregar unidades
  const addProduct = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1);
    }
  };

  // Función para obtener el id del usuario mediante el email que pasó mediante el input
  const getUseridByEmail = () => {
    let emailIngresado = document.getElementById("id-email").value;
    if (document.getElementById("id-email").value !== "") {
      const url = `http://localhost:3000/usuarios?email=${emailIngresado}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setIdUsuario(data[0].id);
            setUserOk("✓");
            return data[0].id;
          } else {
            console.error("No se encontró el usuario");
            setIdUsuario(null);
            setUserOk("✗");
            return null;
          }
        });
    } else {
      console.error("No se ingresó un email");
      setIdUsuario(null);
      setUserOk("✗");
    }
  };

  const getLastIdCarrito = () => {
    const url = `http://localhost:3000/carritos`;
    let id = 0;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          id = data[data.length - 1].id;
        } else {
          id = 1;
        }
      });
    return id;
  };

  // Función que nos sirve para obtener la cantidad de unidades de un producto en el carrito
  const uniXCarPro = async () => {
    let url = `http://localhost:3000/carritos?producto=${product.id}&comprado=0&usuario=${idUsuario}`;
    let cant = 0;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          cant = cant + element.cantidad;
        });
      });
    return cant;
  };

  const handleAddToCart = async () => {
    const url = `http://localhost:3000/carritos`;

    // Obtenemos las unidades existentes en el carrito por este producto
    let cantidadCarrito = await uniXCarPro();

    // Verificamos si el usuario está ok y si la cantidad a agregar no supera el stock
    if (idUsuario != null && cantidadCarrito + cantidad <= product.stock) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: getLastIdCarrito() + 1,
          usuario: idUsuario,
          producto: product.id,
          cantidad: cantidad,
          comprado: false,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCantidad(1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setUserOk("✗");
    }
  };

  return (
    <Grid>
      <Container sx={{height:'2000px',color:'black' }}>
        <Box sx={{ textAlign: "left",}}>
          <Typography variant="h6">{product.Categoria}</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Container
              component="img"
              src={product.img}
              alt={product.titulo}
            />
          </Grid>
          <Grid item xs={12} sm={6} alignItems="center">
            <Typography variant="h4" sx={{ textAlign: "left" }}>
              {product.titulo}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              {product.detalle}
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              AR$ {product.precio}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Stock: {product.stock}
            </Typography>
            <Container>
              <Button onClick={removeProduct}>-</Button>
              <span id="id-cantidad">{cantidad}</span>
              <Button onClick={addProduct}>+</Button>
            </Container>
            <Container>
              <Typography variant="h6">
                Total: AR$ {product.precio * cantidad}
              </Typography>
              <Input
                placeholder="Correo electrónico"
                id="id-email"
                onBlur={getUseridByEmail}
              />
              <Button sx={{ border: 1, borderColor: "white" }}>{userOk}</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                id="id-add-to-cart"
              >
                Agregar al carrito
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Producto;