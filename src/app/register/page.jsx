"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { API_ENDPOINTS } from "../../../api";
import axios from "axios";

/* ================= DATA ================= */

const STATES = {
  Rajasthan: [
    "Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur",
    "Bhilwara","Chittorgarh","Sikar","Sri Ganganagar","Pali","Nagaur","Tonk",
  ],
  Maharashtra: [
    "Mumbai","Pune","Nagpur","Nashik","Aurangabad","Thane","Solapur","Kolhapur",
  ],
  UttarPradesh: [
    "Lucknow","Kanpur","Varanasi","Agra","Prayagraj","Meerut","Ghaziabad","Noida",
  ],
  MadhyaPradesh: [
    "Bhopal","Indore","Gwalior","Jabalpur","Ujjain","Sagar","Satna",
  ],
  Gujarat: [
    "Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Junagadh","Jamnagar",
  ],
  Delhi: ["New Delhi"],
  Karnataka: ["Bengaluru","Mysuru","Mangaluru","Hubli"],
  TamilNadu: ["Chennai","Coimbatore","Madurai","Trichy","Salem"],
  WestBengal: ["Kolkata","Howrah","Durgapur","Siliguri"],
};

/* ================= COMPONENT ================= */

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    user_name: "",
    phone_no: "",
    is_visible_phone_no: false,
    room_no: "",
    room_partner: "",
    location: "",
    active_status: true,
    admission_year: "",
    collage_name: "",
    img_url: "",
    state: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      return "Invalid email format";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    if (!form.user_name.trim())
      return "User name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone_no))
      return "Invalid Indian phone number";
    if (!form.admission_year.match(/^\d{4}$/))
      return "Admission year must be YYYY";
    if (!form.state || !form.city)
      return "State and city are required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      setLoading(true);
      await axios.post(API_ENDPOINTS.AUTH.REGISTER, {
        ...form,
        phone_no: Number(form.phone_no),
      });

      toast.success("Registration successful! Please login.");
      router.push("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
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
        pt: { xs: 12, md: 14 },
        pb: { xs: 6, md: 10 },
        background:
          "radial-gradient(circle at top left, #ffe5e5 0, transparent 50%), radial-gradient(circle at bottom right, #fff0f0 0, #ffffff 55%)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 1000,
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          boxShadow:
            "0 18px 45px rgba(0, 0, 0, 0.08), 0 6px 15px rgba(139, 0, 0, 0.15)",
        }}
      >
        {/* Left brand panel */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: "0 0 320px",
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
              Alumni Registration
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, maxWidth: 260, opacity: 0.9 }}
            >
              Join the Rajput Hostel alumni network. Register to stay connected
              with your hostel brothers and access the alumni directory.
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
            maxHeight: { md: "90vh" },
            overflowY: "auto",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign={{ xs: "center", md: "left" }}
            >
              Create Account
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={{ xs: "center", md: "left" }}
              mt={0.5}
            >
              Fill in your details to register as an alumni member.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Row 1: Name & Email */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                name="user_name"
                label="Full Name"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.user_name}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.email}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
            </Box>

            {/* Row 2: Password & Phone */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.password}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                name="phone_no"
                label="Phone Number"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.phone_no}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
            </Box>

            {/* Row 3: Room No & Room Partner */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                name="room_no"
                label="Room No"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.room_no}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                name="room_partner"
                label="Room Partner"
                fullWidth
                size="small"
                margin="dense"
                value={form.room_partner}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
            </Box>

            {/* Row 4: Admission Year & College */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                name="admission_year"
                label="Admission Year"
                placeholder="e.g. 2020"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.admission_year}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                name="collage_name"
                label="College Name"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.collage_name}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
            </Box>

            {/* Row 5: State & City */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                select
                name="state"
                label="State"
                fullWidth
                required
                size="small"
                margin="dense"
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value, city: "" })
                }
                sx={{ flex: "1 1 200px" }}
              >
                {Object.keys(STATES).map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                name="city"
                label="City"
                fullWidth
                required
                size="small"
                margin="dense"
                disabled={!form.state}
                value={form.city}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              >
                {(STATES[form.state] || []).map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Row 6: Location & Image URL */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                name="location"
                label="Location"
                fullWidth
                size="small"
                margin="dense"
                value={form.location}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                name="img_url"
                label="Profile Image URL"
                placeholder="https://..."
                fullWidth
                size="small"
                margin="dense"
                value={form.img_url}
                onChange={handleChange}
                sx={{ flex: "1 1 200px" }}
              />
            </Box>

            {/* Toggles */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                mt: 1,
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={form.is_visible_phone_no}
                    onChange={(e) =>
                      setForm({ ...form, is_visible_phone_no: e.target.checked })
                    }
                    color="error"
                  />
                }
                label="Show phone number publicly"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={form.active_status}
                    onChange={(e) =>
                      setForm({ ...form, active_status: e.target.checked })
                    }
                    color="error"
                  />
                }
                label="Active status"
              />
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
              {loading ? "Registering..." : "Register"}
            </Button>
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
            mt={2}
            color="text.secondary"
          >
            Already have an account?{" "}
            <Link
              href="/login"
              style={{
                color: "#8b0000",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Login here
            </Link>
          </Typography>

          <Typography
            variant="caption"
            textAlign="center"
            mt={1.5}
            color="text.secondary"
          >
            &copy; Rajput Chatrwas Alumni
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
