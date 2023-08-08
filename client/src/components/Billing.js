import React, { useState } from 'react';
import DoctorBilling from '../pages/Doctor/DoctorBilling';
import PatientBilling from '../pages/Patient/PatientBilling';

const Billing = () => {
  const [billData, setBillData] = useState(null);

  // Callback function to update billData in the parent component
  const handleDoctorBillingSubmit = (data) => {
    setBillData(data);
  };

  return (
    <>
      {billData ? (
        // Show the patient billing component if billData is available
        <PatientBilling billData={billData} />
      ) : (
        // Show the doctor billing component if billData is not available
        <DoctorBilling onSubmit={handleDoctorBillingSubmit} />
      )}
    </>
  );
};

export default Billing;
