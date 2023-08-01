import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
      <div>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          About Us
        </Typography>
        <img
          src="/images/hero2.jpg"
          alt="DocTalk Logo"
          style={{ width: '100%', maxWidth: '800px', height: 'auto', marginBottom: '20px' }}
        />
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', fontSize: 25 }}>
          Welcome to DocTalk! We are a leading telemedicine platform that aims to provide easy and
          convenient access to medical care from the comfort of your home.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', fontSize: 25 }}>
          Our mission is to bridge the gap between patients and healthcare professionals, making healthcare
          accessible to everyone, anytime, and anywhere. With our user-friendly interface and a network of
          skilled doctors, you can consult with medical experts, get prescriptions, and manage your health
          efficiently.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', fontSize: 25 }}>
          Whether you need to schedule a virtual appointment with a specialist or require immediate medical
          advice, DocTalk is here to provide you with reliable healthcare services at your fingertips.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', fontSize: 25 }}>
          <Link href="/contactus" color="primary">Contact us </Link>to learn more about our services and how we can help you take better control of your health.
        </Typography>
      </div>

      <div>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: 18, marginY: '50px' }}>
          <img
            src="/images/stopwatch.jpeg"
            alt="stopwatch icon"
            style={{ width: '70px', height: '70px' }}
          />
          <Typography>
            24/7 access to U.S.-licensed doctors by phone or video
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: 18, marginY: '50px' }}>
          <img
            src="/images/tablet.png"
            alt="virtual visit icon"
            style={{ width: '70px', height: '70px' }}
          />
          <Typography>
            Our doctors diagnose, treat, and prescribe medication when needed
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: 18, margin: '50px' }}>
          <img
            src="/images/rxbottle.jpeg"
            alt="prescription icon"
            style={{ width: '80px', height: '70px' }}
          />
          <Typography>
            Quality care from wherever you are
          </Typography>
        </Box>
      </div>
      <Footer />
    </Container>
  );
};

export default AboutUs;
