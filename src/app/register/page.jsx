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
import toast from "react-hot-toast";
import { API, API_ENDPOINTS } from "../../../api";
import axios from "axios";

/* ================= DATA ================= */

const STATES = {
  Rajasthan: [
    "Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur",
    "Bhilwara","Chittorgarh","Sikar","Sri Ganganagar","Pali","Nagaur","Tonk"
  ],
  Maharashtra: [
    "Mumbai","Pune","Nagpur","Nashik","Aurangabad","Thane","Solapur","Kolhapur"
  ],
  UttarPradesh: [
    "Lucknow","Kanpur","Varanasi","Agra","Prayagraj","Meerut","Ghaziabad","Noida"
  ],
  MadhyaPradesh: [
    "Bhopal","Indore","Gwalior","Jabalpur","Ujjain","Sagar","Satna"
  ],
  Gujarat: [
    "Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Junagadh","Jamnagar"
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
    location: "",
    active_status: true,
    admission_year: "",
    collage_name: "",
    state: "",
    city: "",
  });

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
      await axios.post(API_ENDPOINTS.AUTH.REGISTER, {
        ...form,
        phone_no: Number(form.phone_no),
      });

      toast.success("Premium user created successfully");

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
      }}
    >
      <Paper sx={{ width: "100%", maxWidth: 480, p: 2 }}>
        <Typography fontWeight="bold" textAlign="center" mb={2}>
          Alumni Registration
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          {[
            ["email","Email","email"],
            ["password","Password","password"],
            ["user_name","User Name"],
            ["phone_no","Phone Number"],
            ["room_no","Room No"],
            ["location","Location"],
            ["admission_year","Admission Year"],
            ["collage_name","College Name"],
          ].map(([name,label,type]) => (
            <TextField
              key={name}
              name={name}
              label={label}
              type={type || "text"}
              fullWidth
              size="small"
              margin="dense"
              value={form[name]}
              onChange={handleChange}
              required
            />
          ))}

          <TextField
            select
            name="state"
            label="State"
            fullWidth
            size="small"
            margin="dense"
            value={form.state}
            onChange={(e) =>
              setForm({ ...form, state: e.target.value, city: "" })
            }
          >
            {Object.keys(STATES).map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            name="city"
            label="City"
            fullWidth
            size="small"
            margin="dense"
            disabled={!form.state}
            value={form.city}
            onChange={handleChange}
          >
            {(STATES[form.state] || []).map((c) => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </TextField>

          <FormControlLabel
            control={
              <Switch
                checked={form.is_visible_phone_no}
                onChange={(e) =>
                  setForm({ ...form, is_visible_phone_no: e.target.checked })
                }
              />
            }
            label="Show phone number publicly"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
