import React from 'react';
import Header from './Header'; // Import the original Header component
import PatientHeader from './PatientHeader'; // Import the patientHeader component
import AuthService from '../../utils/auth';

function AppHeader() {
  const isLoggedIn = AuthService.loggedIn(); // Check the user's login state

  // Conditional rendering based on the user's login state
  return isLoggedIn ? <PatientHeader /> : <Header />;
}

export default AppHeader;