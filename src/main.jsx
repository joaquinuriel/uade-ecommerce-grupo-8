import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
