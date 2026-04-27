"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import Link from "next/link";
import toast from "react-hot-toast";
import API, { API_ENDPOINTS } from "../../../api";

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

      // Store user data
      console.log("USER:", res.data.user);

      // Open contact directory in a new tab after login
      window.open("/contact", "_blank");

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
        py: { xs: 6, md: 10 },
        background:
          "radial-gradient(circle at top left, #ffe5e5 0, transparent 50%), radial-gradient(circle at bottom right, #fff0f0 0, #ffffff 55%)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          boxShadow:
            "0 18px 45px rgba(0, 0, 0, 0.08), 0 6px 15px rgba(139, 0, 0, 0.15)",
        }}
      >
        {/* Left brand / illustration panel */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            p: 4,
            background:
              "linear-gradient(135deg, #7b1113 0%, #a30000 40%, #d32f2f 100%)",
            color: "#ffffff",
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, opacity: 0.9 }}
            >
              RAJPUT CHATRAWAS
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mt: 1, lineHeight: 1.2 }}
            >
              Alumni Portal
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, maxWidth: 260, opacity: 0.9 }}
            >
              Stay connected with your hostel community, update your details,
              and access exclusive alumni resources.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 4,
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.3)",
              px: 2.5,
              py: 2,
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0,0,0,0.18)",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              A home away from home.
            </Typography>
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 0.8, opacity: 0.9 }}
            >
              Join fellow Rajput Chatrwas alumni and keep the legacy alive.
            </Typography>
          </Box>
        </Box>

        {/* Right form panel */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign={{ xs: "center", md: "left" }}
            >
              Alumni Login
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={{ xs: "center", md: "left" }}
              mt={0.5}
            >
              Sign in with your registered email and password.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              label="Email address"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 1,
                mb: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.3,
                backgroundColor: "#8b0000",
                fontWeight: "bold",
                letterSpacing: 0.5,
                textTransform: "none",
                borderRadius: 999,
                boxShadow:
                  "0 10px 25px rgba(139, 0, 0, 0.35), 0 4px 12px rgba(0,0,0,0.12)",
                "&:hover": {
                  backgroundColor: "#a30000",
                  boxShadow:
                    "0 12px 30px rgba(139, 0, 0, 0.45), 0 4px 14px rgba(0,0,0,0.16)",
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
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              style={{
                color: "#8b0000",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Register here
            </Link>
          </Typography>

          <Typography
            variant="caption"
            textAlign="center"
            mt={2}
            color="text.secondary"
          >
            © Rajput Chatrwas Alumni
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
