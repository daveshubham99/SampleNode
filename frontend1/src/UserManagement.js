import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Grid, Button } from "@mui/material";
import UserList from "./UserList";
import UserForm from "./UserForm";

function UserManagement() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`${window.location.origin}/users`);
    setUsers(response.data);
  };

  const handleAddUser = async (user) => {
    await axios.post(`${window.location.origin}/users`, user);
    fetchUsers();
  };

  const handleEditUser = async (id, user) => {
    await axios.put(`${window.location.origin}/users/${id}`, user);
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await axios.delete(`${window.location.origin}/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        User Management
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <UserForm onAdd={handleAddUser} />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserList
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserManagement;
