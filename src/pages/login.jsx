import { Button, FormControl, TextField } from "@mui/material";
import { ofetch } from "ofetch";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { trigger } = useSWRMutation(
    "/api/v1/auth/authenticate",
    (key, { arg: form }) => {
      form.preventDefault();
      return ofetch(key, {
        baseURL: "http://localhost:3000",
        method: "POST",
        body: { email, password },
      });
    },
    {
      onSuccess: (data) => {
        document.cookie = `token=${data.access_token}`;
        console.log("Logged in:", data);
        return navigate("/");
      },
      onError: (error) => console.error("Error logging in:", error),
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
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="contraseña123"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button variant="text">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </FormControl>
      </form>
    </main>
  );
}
