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
      
    <div>
 

      {/* Running Text */}
      {/* ... */}

      {/* <marquee
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
      </marquee> */}

     
      </div>

     
  

 <Footer />
 </div>
  );
}