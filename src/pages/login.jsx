import {useCallback, useState} from "react";
import {Link, redirect} from "react-router-dom";
import {FormControl, TextField, Button} from "@mui/material";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = useCallback((e) => {
        e.preventDefault();
        // check db
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        redirect("/")
    }, [email, password]);

    return (
        <main style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", background: "whitesmoke" }}>
            <form onSubmit={submit}>
                <FormControl sx={{gap: 2}}>
                    <TextField
                        placeholder="correo@gmail.com"
                        name="email" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        placeholder="contraseña123"
                        name="password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained">Login</Button>
                    <Button variant="text">
                    <Link to="/signup">Sign Up</Link>
                    </Button>
                </FormControl>
            </form>
        </main>
    )
}