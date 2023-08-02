import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import DoctorImage from '../../assets/images/3568984.jpg';
import VirtualImage from '../../assets/images/virtualimage.jpeg';
import DocTalkLogo from '../../assets/images/virtual.jpeg';

export default function Homepage() {
  // ...
  return (
    <div>
    <Container
      maxWidth="100%"
      sx={{
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top Section */}
      <div style={{ display: 'flex', width: '100%', padding: '1rem' }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              width= '100%'
              height="100%"
              image={DocTalkLogo}
              alt="image of blue and white background with DocTalk logo"
            /> */}
          </CardActionArea>
        </Card>

        {/* <Card sx={{ maxWidth: 400, marginLeft:'1rem', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <CardActionArea>
            <Typography variant="h5">
              Welcome to DocTalk
            </Typography>
            <Typography variant="h6">
              Where you can get the care you need, when you need it.
            </Typography>
            <Typography variant="body1">
              DocTalk is a convenient way to get the care you need from anywhere.
            </Typography>
            <Typography variant="body1">
              Our doctors are available 24/7 to help you feel better faster.
            </Typography>
          </CardActionArea>
        </Card> */}
      </div>

      {/* Running Text */}
      {/* ... */}

      <marquee
        behavior="scroll"
        direction="left"

        style={{
          background: '#1976d2',
          padding: '3rem',
          color: '#fff',

          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          fontWeight: 'bold',
          fontStyle: 'italic',

        }}
      >
        Established In&nbsp;&nbsp;&nbsp;2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24/7&nbsp;&nbsp; Available To Serve Our Patients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Serving In&nbsp;&nbsp;California&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100% HIPPA Compliant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We Value Our Relationship
      </marquee>

      {/* Bottom Section */}
      <div style={{ display: 'flex', width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
        {/* <Card sx={{ maxWidth: 454 }}>
          <CardActionArea>
            <Typography variant="body1">
              We are Doctors who care about your health.
            </Typography>
            <Typography variant="body1">
              Now you can message, chat, and request a call from your doctor. No more waiting for an appointment, waiting room, or long lines at the pharmacy.
            </Typography>
          </CardActionArea>
        </Card> */}

        {/* <Card sx={{ maxWidth: 554 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width= '50%'
              image={VirtualImage}
              alt="image of a female and male doctor and a male nurse"
            />
          </CardActionArea>
        </Card> */}
      </div>

     
    </Container>

 <Footer />
 </div>
  );
}