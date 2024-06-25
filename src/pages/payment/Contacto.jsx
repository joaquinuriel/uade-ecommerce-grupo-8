import  { useState } from 'react';
import {TextField, Button, Container, Typography, Box} from '@mui/material';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box sx={{height:'800px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'  }}>
            <Container maxWidth="sm" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',padding:'50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                <Typography variant="h4" align="center" gutterBottom sx={{color:'black'}}>Contacto</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        sx={{
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black', // Cambia el color del borde del TextField
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black', // Cambia el color del texto de la etiqueta
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black', // Cambia el color del texto de entrada
                            },
                        }}

                    />
                    <TextField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        sx={{
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black', // Cambia el color del borde del TextField
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black', // Cambia el color del texto de la etiqueta
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black', // Cambia el color del texto de entrada
                            },
                        }}
                    />
                    <TextField
                        label="Mensaje"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black', // Cambia el color del borde del TextField
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black', // Cambia el color del texto de la etiqueta
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black', // Cambia el color del texto de entrada
                            },
                        }}
                        color="secondary"
                    />
                    <Button type="submit" variant="contained" color="secondary" fullWidth>
                        Enviar
                    </Button>
                </form>
            </Container>
        </Box>

    );
};

export default Contacto;
