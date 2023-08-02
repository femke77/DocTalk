import React from 'react';
import Header from './Header';
import PatientHeader from './PatientHeader'; 
import DoctorHeader from './DoctorHeader';
import AuthService from '../../utils/auth';

function AppHeader() {
  const isLoggedIn = AuthService.loggedIn();

  const role = AuthService.getRole()
  console.log("THE ROLE IS    ", role);
  // Conditional rendering based on the user's login state
  return isLoggedIn ? ( role === 'patient' ? <PatientHeader /> : <DoctorHeader />) : <Header />;
  
  const handleLogout = () => {
    AuthService.logout(); // For example, call the AuthService logout function
    window.location.reload(); // Reload the page to clear the user session
  };
}

export default AppHeader;
