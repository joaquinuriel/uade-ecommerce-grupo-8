import {useCallback, useState} from "react";
import {FormControl, TextField, Button} from "@mui/material";
import {Link, redirect} from "react-router-dom";

export default function SignUp() {
    // nombre de usuario, mail, contraseña, nombre y apellido
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submit = useCallback((e) => {
        e.preventDefault();
        // check username
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        redirect("/")
    }, [username, password, email, firstName, lastName]);

    return (
        <main style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", background: "whitesmoke" }}>
            <form onSubmit={submit}>
                <FormControl sx={{gap: 2}}>
                    <TextField
                        placeholder="correo@gmail.com"
                        autoComplete="email"
                        name="email" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        placeholder="contraseña123"
                        autoComplete="new-password"
                        name="password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        placeholder="nombre"
                        autocomplete="given-name"
                        name="firstName" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        placeholder="apellido"
                        autocomplete="family-name"
                        name="lastName" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        placeholder="username"
                        autocomplete="nickname"
                        name="username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button type="submit" variant="contained">Sign Up</Button>
                    <Button variant="text">
                    <Link to="/login">Login</Link>
                    </Button>
                </FormControl>
            </form>
        </main>
    )
}