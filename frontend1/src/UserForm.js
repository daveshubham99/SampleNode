import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, email, age });
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Age"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </Box>
  );
}

export default UserForm;
