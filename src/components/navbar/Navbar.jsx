import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer, Stack, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { jwtDecode } from "jwt-decode";
import { ofetch } from "ofetch";
import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Navbar() {
  const background =
    "radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, " +
    "#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, " +
    "#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)";
  const sx_navbar = {
    layout: {
      backgroundImage:
        "radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, " +
        "#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, " +
        "#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)",
      display: { xs: "", md: "flex" },
      paddingLeft: "11px",
    },
    layout_toolbar: {
      display: { xs: "flex", md: "flex" },
      width: "100%",
      justifyContent: "space-between",
    },
    logo: {},
    items: {
      width: { xs: "none", md: "60%" },

      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: "20px",
    },

    options: {
      display: { xs: "none", md: "flex" },
      width: "100%",
      gap: "10px",

      justifyContent: "end",
    },

    login: {
      color: "#636363",
    },

    items_button: {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderLeftRadius: "10px",
      borderRightRadius: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      backgroundImage:
        "radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, " +
        "#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, " +
        "#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      width: { xs: "", md: "15%" },
      padding: "5px",
    },

    input_field: {
      display: { xs: "none", md: "flex" },
      width: { xs: "", md: "40%" },
      justifyContent: "center",
      alignItems: "center",
      gap: "px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderLeftRadius: "10px",
      borderRightRadius: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },

    input: {
      width: "70%",
      backgroundColor: "#efebeb",
      color: "#636363",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderLeftRadius: "10px",
      borderRightRadius: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      margin: "10px",
      "& fieldset": { border: "none" },
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      fontSize: "10px",
    },
  };

  const navbarList = [
    { title: "Home", route: "/" },
    { title: "Catalogo", route: "/catalogo" },
    { title: "Nosotros", route: "/nosotros" },
    { title: "Contacto", route: "/contacto" },
  ];
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchText === "") {
      navigate("/");
    } else {
      navigate(`/catalogo/${searchText}`);
    }
  };

  const handleCartClick = () => {
    // Navega a la página de catálogo al hacer clic en el carrito
    navigate("/login");
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const email = useMemo(() => {
    if (!document.cookie) return null;
    const data = jwtDecode(document.cookie);
    console.log("cookie:", data); // Debug
    return data.sub;
  }, []);

  const {
    data: wishlist,
    isLoading,
    mutate: reloadWishlist,
  } = useSWR(`/wishlist?email=${email}`);

  console.log("wishlist:", wishlist); // Debug

  const { trigger, isMutating } = useSWRMutation(
    "/wishlist",
    (key, { arg }) => {
      return ofetch(key, {
        baseURL: "http://localhost:3000",
        method: "POST",
        params: {
          email,
          productId: arg,
          remove: wishlist?.content?.some((item) => item.id === arg),
        },
      });
    },
    {
      onSuccess: () => reloadWishlist(),
      onError: (error) => console.error("Error updating wishlist:", error),
    }
  );

  return (
    <Box>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Wishlist</Typography>
          <Stack>
            <Typography hidden={!isLoading}>Cargando...</Typography>
            <Typography hidden={isLoading || wishlist?.content?.length}>
              Aun no tienes favoritos
            </Typography>
            {wishlist?.content?.map((item, index) => (
              <Typography key={index}>
                <Link to={`/producto/${item.productId}`}>
                  {item.productName}
                </Link>
                <IconButton
                  disabled={isMutating}
                  onClick={() => trigger(item.productId)}
                >
                  <FavoriteIcon />
                </IconButton>
              </Typography>
            ))}
          </Stack>
        </Box>
      </Drawer>

      <AppBar
        sx={{ ...sx_navbar.layout }}
        elevation={1}
        style={{ backgroundImage: background }}
      >
        <Toolbar
          sx={{ ...sx_navbar.layout_toolbar }}
          style={{ padding: "0px" }}
        >
          <Box sx={{ ...sx_navbar.logo }}>
            <Typography variant="h6" component="div">
              Logo
            </Typography>
          </Box>

          <Box sx={{ ...sx_navbar.items }}>
            <Box sx={{ ...sx_navbar.options }}>
              {navbarList.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{ ...sx_navbar.items_button }}
                  component={NavLink}
                  to={item.route}
                >
                  <Typography
                    sx={{
                      fontFamily: "Tisa Sans Pro Regular",
                      color: "#636363",
                      fontSize: "13px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </IconButton>
              ))}
            </Box>
            <Box sx={{ ...sx_navbar.input_field }}>
              <TextField
                sx={{ ...sx_navbar.input }}
                inputProps={{ style: { fontSize: 10, color: "#636363" } }}
                size={"small"}
                id="outlined-basic"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundImage: background,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => handleSearch()}
              >
                <SearchIcon sx={{ color: "#636363" }}></SearchIcon>
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ ...sx_navbar.login }}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <FavoriteIcon />
            </IconButton>
            <Button hidden={!!email} onClick={handleCartClick} color="inherit">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
