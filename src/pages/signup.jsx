import { Button, FormControl, TextField } from "@mui/material";
import { ofetch } from "ofetch";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";

export default function SignUp() {
  // nombre de usuario, mail, contraseña, nombre y apellido
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const { trigger } = useSWRMutation(
    "/api/v1/auth/register",
    (key, { arg: form }) => {
      form.preventDefault();
      return ofetch(key, {
        baseURL: "http://localhost:3000",
        method: "POST",
        body: {
          firstName,
          lastName,
          email,
          password,
          username,
          document: "12345678",
          address: "Calle falsa 123",
          phoneNumber: "123456789",
          role: "SELLER",
        },
      });
    },
    {
      onSuccess: (data) => {
        document.cookie = `token=${data.access_token}`;
        return navigate("/");
      },
      onError: (error) => console.error("Error signing up:", error),
    }
  );

  return (
    <main
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "whitesmoke",
      }}
    >
      <form onSubmit={trigger}>
        <FormControl sx={{ gap: 2 }}>
          <TextField
            placeholder="correo@gmail.com"
            autoComplete="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="contraseña123"
            autoComplete="new-password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            placeholder="nombre"
            autoComplete="given-name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            placeholder="apellido"
            autoComplete="family-name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            placeholder="username"
            autoComplete="nickname"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
          <Button variant="text">
            <Link to="/login">Login</Link>
          </Button>
        </FormControl>
      </form>
    </main>
  );
}
