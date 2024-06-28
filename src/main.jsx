import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { ofetch } from "ofetch";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App.jsx";

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const fetcher = ofetch.create({
  baseURL: "http://localhost:3000",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);
