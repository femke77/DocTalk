import React, { useState } from 'react';
import Header from './Header';
import PatientHeader from './PatientHeader';
import DoctorHeader from './DoctorHeader';
import AuthService from '../../utils/auth';
import CheckboxComponent from './CheckBoxComponent';

function AppHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());
  const [userType, setUserType] = useState('patient');

  const handleUserTypeChange = (isDoctor) => {
    setUserType(isDoctor ? 'doctor' : 'patient');
  };

  if (isLoggedIn) {
    
    return (
      <>
       
        <CheckboxComponent onChange={handleUserTypeChange} />

        
        {userType === 'doctor' ? <DoctorHeader /> : <PatientHeader />}
      </>
    );
  } else {
   
    return <Header />;
  }
}

export default AppHeader;
