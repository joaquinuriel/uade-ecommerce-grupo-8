import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Carrito from "./pages/Carrito.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Editar from "./pages/editar.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Producto from "./pages/producto.jsx";
import Publicar from "./pages/publicar.jsx";
import SignUp from "./pages/signup.jsx";

function App() {
  const background =
    "radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)";

  return (
    <Container
      sx={{
        backgroundImage: background,
        width: "100%",
        marginTop: "64px",
        minHeight: "100vh",
      }}
      disableGutters
      maxWidth={false}
    >
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:id" element={<Catalogo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer></Footer>
    </Container>
  );
}

export default App;
