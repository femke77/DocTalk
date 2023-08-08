import React from "react";
import { Typography, Box, Avatar, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const PatientProfile = () => {
  const patient = {
    name: "Vlad Mladenov",
    age: 36,
    gender: "Male",
    email: "vladkb@yahoo.com",
    profileImage: "/images/Profile.jpg",
  };

  const appointments = [
    {
      date: "2023-07-20",
      doctor: "Dr. Smith",
      department: "Cardiology",
    },
    {
      date: "2023-08-05",
      doctor: "Dr. Johnson",
      department: "Dermatology",
    },
    // Add more appointment data here
  ];

  const bills = [
    {
      date: "2023-07-15",
      amount: "$100",
      description: "Consultation Fee",
    },
    {
      date: "2023-08-01",
      amount: "$250",
      description: "Lab Tests",
    },
    // Add more billing data here
  ];

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

      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">Appointments</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: "100%", mt: 2 }}>
        <Typography variant="h5">Bills</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bills.map((bill, index) => (
                <TableRow key={index}>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>{bill.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PatientProfile;

