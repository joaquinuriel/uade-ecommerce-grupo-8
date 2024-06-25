import { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [email, setEmail] = useState('');
    const [idUsuario, setIdUsuario] = useState(null);
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos();
    }, []);

    useEffect(() => {
        if (email !== '') {
            fetchUsuario();
        }
    }, [email]);

    const fetchUsuario = async () => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios?email=${email}`);
            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    setIdUsuario(data[0].id);
                    fetchCarrito(data[0].id);
                } else {
                    console.error('Usuario no encontrado');
                }
            } else {
                console.error('Error al obtener el usuario');
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    };

    const fetchCarrito = async (idUsuario) => {
        try {
            const response = await fetch(`http://localhost:3000/carritos?comprado=0&usuario=${idUsuario}`);
            if (response.ok) {
                const data = await response.json();
                setCarrito(data);
            } else {
                console.error('Error al obtener el carrito');
            }
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    };

    const fetchProductos = async () => {
        try {
            const response = await fetch(`http://localhost:3000/productos`);
            if (response.ok) {
                const data = await response.json();
                setProductos(data);
            } else {
                console.error('Error al obtener el producto');
            }
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleQuitar = async (idCarrito) => {
        await fetch(`http://localhost:3000/carritos?id=${idCarrito}`, {
            method: 'DELETE',
        });
    }

    const renderCarritoItems = () => {
        return carrito.map((item) => {
            const idProducto = item.producto;
            const produ = productos.find((producto) => producto.id == idProducto);
            return <ListItem key={item.id}>
                <ListItemText primary={`Producto: ${produ.titulo}`}/>
                <ListItemText primary={`Cantidad: ${item.cantidad}`} />
                <ListItemText primary={`Subtotal: ${item.cantidad * produ.precio}`} />
                <Button variant="contained" color="secondary" onClick={() => handleQuitar(item.id)}>Quitar</Button>
            </ListItem>
        });
    };

    const handleComprar = async () => {
        const url = `http://localhost:3000/carritos?comprado=0&usuario=${idUsuario}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            for (const item of data) {
                await fetch(`http://localhost:3000/carritos?id=${item.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        comprado: true,
                    }),
                });
            }
        }
    }

    return (
        <Container>
            <TextField
                label="Correo Electrónico"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
            />
            <List>
                {renderCarritoItems()}
            </List>
            <Button variant="contained" color="secondary" onClick={() => handleComprar()}>Comprar</Button>
        </Container>
    );
};

export default Carrito;