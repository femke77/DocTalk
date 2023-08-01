import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AppHeader from '../Header/AppHeader';
import ContactDoc from '../../pages/Patient/ContactDoc';
import PatientHeader from '../../components/Header/PatientHeader';
import ContactDoctor from '../../pages/Patient/ContactDoc';
import Footer from '../Footer/Footer';



export default function Homepage() {
  // const navigate = useNavigate();

  // const navigateToContactDoctor = () => {
  //   navigate('/contactdoctor');
  // };
  return (
    // <div> 
    //     <PatientHeader />
    //     <Routes>
    //       <Route path="/loggedinContact" element={<ContactDoctor />} />
    //     </Routes>
    // </div>
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Footer />
    </div>
  );
}
