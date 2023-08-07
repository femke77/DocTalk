import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Footer from '../../components/Footer';
import ContactDoc from './ContactDoc';
import { Link } from 'react-router-dom';

const FindDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      photo: '/images/Profile.jpg',
      info: 'Dr. John Smith is a highly experienced cardiologist with 15 years of practice.',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      photo: '/images/Smith.jpeg',
      info: 'Dr. Jane Smith specializes in skin conditions and has received numerous awards for her work.',
    },
    // Add more doctors with different specialties, photos, and info
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      specialty: 'Neurology',
      photo: '/images/Johnson.jpeg',
      info: 'Dr. Michael Johnson is a renowned neurologist known for his groundbreaking research.',
    },
    {
      id: 4,
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrics',
      photo: '/images/Williams.jpeg',
      info: 'Dr. Emily Williams is passionate about providing the best care for children and their families.',
    },
    {
      id: 5,
      name: 'Dr. Robert Lee',
      specialty: 'Orthopedics',
      photo: '/images/Lee.jpeg',
      info: 'Dr. Robert Lee specializes in treating musculoskeletal injuries and joint disorders.',
    },
    {
      id: 6,
      name: 'Dr. Sarah Brown',
      specialty: 'Oncology',
      photo: '/images/Brown.jpeg',
      info: 'Dr. Sarah Brown is a compassionate oncologist dedicated to helping cancer patients.',
    },
    {
      id: 7,
      name: 'Dr. David Wilson',
      specialty: 'Gastroenterology',
      photo: '/images/Wilson.jpeg',
      info: 'Dr. David Wilson has extensive experience in diagnosing and treating digestive disorders.',
    },
    {
      id: 8,
      name: 'Dr. Jessica Chen',
      specialty: 'Endocrinology',
      photo: '/images/Chen.jpeg',
      info: 'Dr. Jessica Chen is an endocrinologist focused on hormonal and metabolic conditions.',
    },
    {
      id: 9,
      name: 'Dr. William Clark',
      specialty: 'Urology',
      photo: '/images/Clark.jpeg',
      info: 'Dr. William Clark provides expert care for urinary tract and male reproductive issues.',
    },
    {
      id: 10,
      name: 'Dr. Laura Martinez',
      specialty: 'Psychiatry',
      photo: '/images/Martinez.jpeg',
      info: 'Dr. Laura Martinez is dedicated to improving mental health and well-being in her patients.',
    },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Typography variant="h4">Find a Doctor</Typography>
      </Box>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} key={doctor.id}>
            
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
                <Link to="/contactdoctor">
              <img
                src={doctor.photo}
                alt={doctor.name}
                style={{ width: '250px', height: '250px', borderRadius: '50%', marginBottom: '10px' }}
              />
              <Typography variant="h5">{doctor.name}</Typography>
              </Link>
              <Typography variant="subtitle1">Specialty: {doctor.specialty}</Typography>
              <Typography>{doctor.info}</Typography>
            </Box>
            
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
};

export default FindDoctor;