"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import toast from "react-hot-toast";
import { API, API_ENDPOINTS } from "../../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });

      toast.success(res.data.message || "Login successful");

      // TODO: store user / token / redirect
      console.log("USER:", res.data.user);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        mt: "100px",
        mb: "200px",
        background: "linear-gradient(to bottom, #fff7f7, #ffffff)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Alumni Login
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Login to access alumni dashboard
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            size="large"
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.3,
              backgroundColor: "#8b0000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#a30000",
              },
            }}
            variant="contained"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          © Rajput Chatrwas Alumni
        </Typography>
      </Paper>
    </Box>
  );
}
