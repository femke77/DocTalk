// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const useStyles = makeStyles((theme) => ({
//   serviceCard: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(2),
//     boxShadow: theme.shadows[3],
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.background.paper, // Use background color from the theme
//   },
// }));

// const Services = () => {
//   const classes = useStyles();

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Services We Offer
//       </Typography>
//       <Grid container spacing={3}>
//         {/* Service 1 */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card className={classes.serviceCard}>
//             <Typography variant="h6" gutterBottom>
//               Telemedicine Consultation
//             </Typography>
//             <CardContent>
//               <Typography variant="body2">
//                 Get access to top doctors for remote medical consultation from
//                 the comfort of your home.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Service 2 */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card className={classes.serviceCard}>
//             <Typography variant="h6" gutterBottom>
//               Online Prescriptions
//             </Typography>
//             <CardContent>
//               <Typography variant="body2">
//                 Receive online prescriptions from qualified doctors and get
//                 medication delivered to your doorstep.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Service 3 */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card className={classes.serviceCard}>
//             <Typography variant="h6" gutterBottom>
//               Virtual Therapy
//             </Typography>
//             <CardContent>
//               <Typography variant="body2">
//                 Connect with licensed therapists for virtual counseling and
//                 therapy sessions.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Services;
