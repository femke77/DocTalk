import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from './Footer';
import Box from '@mui/material/Box';

const serviceCardStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  height: '100%', // Increase card height
};

const serviceTitleStyles = {
  fontSize: '24px', // Increase font size
  marginBottom: '16px', // Add spacing between title and content
};

const serviceContentStyles = {
  fontSize: '18px', // Increase font size
};

const Services = () => {
  return (
    <Container>



      <Typography variant="h4" gutterBottom align="center" style={{ marginTop: '40px' }}>
        Services We Offer
      </Typography>
      
<Box
        component="img"
        src="./images/Services.jpeg"
        alt="Services Photo"
        width="100%"
        height="auto"
        marginBottom="24px"
      />
      <Grid container spacing={3} justifyContent="center"> {/* Center the cards */}
        {/* Service 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={serviceCardStyles}>
            <Typography variant="h6" gutterBottom style={serviceTitleStyles}>
              Telemedicine Consultation
            </Typography>
            <CardContent>
              <Typography variant="body2" style={serviceContentStyles}>
                Get access to top doctors for remote medical consultation from
                the comfort of your home.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Service 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={serviceCardStyles}>
            <Typography variant="h6" gutterBottom style={serviceTitleStyles}>
              Online Prescriptions
            </Typography>
            <CardContent>
              <Typography variant="body2" style={serviceContentStyles}>
                Receive online prescriptions from qualified doctors and get
                medication delivered to your doorstep.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Service 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={serviceCardStyles}>
            <Typography variant="h6" gutterBottom style={serviceTitleStyles}>
              Virtual Therapy
            </Typography>
            <CardContent>
              <Typography variant="body2" style={serviceContentStyles}>
                Connect with licensed therapists for virtual counseling and
                therapy sessions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Services;
