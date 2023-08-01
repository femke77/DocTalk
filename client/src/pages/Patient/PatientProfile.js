import React from "react";
import { Typography, Box, Avatar, Button, Divider } from "@mui/material";

const PatientProfile = () => {
  
  const patient = {
    name: "Vlad Mladenov",
    age: 36,
    gender: "Male",
    email: "vladkb@yahoo.com",
    profileImage: "/images/Profile.jpg", 
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar
        src={patient.profileImage}
        alt={patient.name}
        sx={{ width: 150, height: 150, my: 2 }}
      />
      <Typography variant="h4">{patient.name}</Typography>
      <Typography variant="body1">{`Age: ${patient.age}`}</Typography>
      <Typography variant="body1">{`Gender: ${patient.gender}`}</Typography>
      <Typography variant="body1">{`Email: ${patient.email}`}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Edit Profile
      </Button>
      <Divider sx={{ my: 2, width: "100%" }} />
      
    </Box>
  );
};

export default PatientProfile;
