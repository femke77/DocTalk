import React, { useState } from "react";
import {
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import EditProfileForm from "./EditProfileForm";

export const QUERY_PROFILE_USER = gql`
 query getUserProfile($email: String!) {
  userByEmail(email: $email) {
    _id
    username
    email
    firstName
    lastName
    patient
    doctor
  }
}
`;
const Profile = () => {
  const [user, setUser] = useState({
    name: "Vlad Mladenov",
    age: 36,
    gender: "Male",
    email: "vladkb@yahoo.com",
    profileImage: "/images/Profile.jpg",
  });

  const [editOpen, setEditOpen] = useState(false);

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSave = (formData) => {
    setUser(formData);
    setEditOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {editOpen ? (
        <Dialog open={editOpen} onClose={handleEditClose} maxWidth="xs">
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <EditProfileForm user={user} onSave={handleSave} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <>
          <Avatar
            src={user.profileImage}
            alt={user.name}
            sx={{ width: 150, height: 150, my: 2 }}
          />
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{`Age: ${user.age}`}</Typography>
          <Typography variant="body1">{`Gender: ${user.gender}`}</Typography>
          <Typography variant="body1">{`Email: ${user.email}`}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleEditOpen}>
            Edit Profile
          </Button>
          <Divider sx={{ my: 2, width: "100%" }} />
        </>
      )}
    </Box>
  );
};

export default Profile;
