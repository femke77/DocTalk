import React from "react";
import { Typography, Box, Avatar, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const DoctorProfile = () => {
  const doctor = {
    name: "Dr. John Smith",
    age: 45,
    gender: "Male",
    email: "dr.smith@example.com",
    profileImage: "/images/Profile.jpg",
  };

  const appointments = [
    {
      date: "2023-07-20",
      patient: "Vladislav Mladenov",
      department: "Cardiology",
    },
    {
      date: "2023-08-05",
      patient: "Bob Williams",
      department: "Dermatology",
    },
   
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar
        src={doctor.profileImage}
        alt={doctor.name}
        sx={{ width: 150, height: 150, my: 2 }}
      />
      <Typography variant="h4">{doctor.name}</Typography>
      <Typography variant="body1">{`Age: ${doctor.age}`}</Typography>
      <Typography variant="body1">{`Gender: ${doctor.gender}`}</Typography>
      <Typography variant="body1">{`Email: ${doctor.email}`}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Edit Profile
      </Button>
      <Divider sx={{ my: 2, width: "100%" }} />

      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">Appointments</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Patient</TableCell>
                <TableCell>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.patient}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DoctorProfile;
