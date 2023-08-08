import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import HomeCardAnimation from '../../assets/videos/HomeAnimation.mp4';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Container
      component={Card}
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        background: '#1976d2', 
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStyle: 'italic',
      }}
    >
      <CardMedia
        component="video"
        src={HomeCardAnimation}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <marquee
        behavior="scroll"
        direction="left"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          padding: '3rem',
          color: '#000',
        }}
      >
        Established In&nbsp;&nbsp;&nbsp;2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24/7&nbsp;&nbsp; Available To Serve Our Patients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Serving In&nbsp;&nbsp;California&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100% HIPPA Compliant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We Value Our Relationship
      </marquee>
    </Container>
  );
}

























// import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Container } from '@mui/material';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Footer from '../Footer';
// import DoctorImage from '../../assets/images/3568984.jpg';
// import VirtualImage from '../../assets/images/virtualimage.jpeg';
// import DocTalkLogo from '../../assets/images/virtual.jpeg';

// export default function Homepage() {
//   // ...
//   return (
//     <div>
//       <Card sx={{ maxWidth: 645 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={VirtualImage}
//             alt="Doctor"
//           />
//         </CardActionArea>
//       </Card>

//       <Card sx={{ maxWidth: 645 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={DoctorImage}
//             alt="Doctor"
//           />
//         </CardActionArea>
//       </Card>




//       {/* Running Text */}
//       {/* ... */}

//       <marquee
//         behavior="scroll"
//         direction="left"

//         style={{
//           background: '#1976d2',
//           padding: '3rem',
//           color: '#fff',

//           fontFamily: 'Arial, sans-serif',
//           fontSize: '18px',
//           fontWeight: 'bold',
//           fontStyle: 'italic',

//         }}
//       >
//         Established In&nbsp;&nbsp;&nbsp;2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24/7&nbsp;&nbsp; Available To Serve Our Patients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Serving In&nbsp;&nbsp;California&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100% HIPPA Compliant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We Value Our Relationship
//       </marquee>



//       <Card sx={{ maxWidth: 645 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={VirtualImage}
//             alt="Virtual"
//           />
//         </CardActionArea>
//       </Card>

//       <Card sx={{ maxWidth: 645 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={DoctorImage}
//             alt="Doctor"
//           />
//         </CardActionArea>
//       </Card>


//       <Footer />
//     </div>
//   );
// }