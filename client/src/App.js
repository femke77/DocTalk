import Login from './components/Login';
import Signup from './components/Signup'; 
import ContactForm from './components/Contact';
import React from "react";
import AppHeader from "./components/Header/AppHeader";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home/Home";
import Services from "./components/Services";
import Billing from "./components/Billing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from '@apollo/client';
import ContactDoctor from './pages/Patient/ContactDoc';
import { setContext } from '@apollo/client/link/context';
import CallPatient from './pages/Doctor/CallPatient';

import ComposeEmail from './pages/Doctor/DoctorEmails/ComposeEmail';
import EmailDashboard from './pages/Doctor/DoctorEmails/EmailDashboard';
import EmailDetails from './pages/Doctor/DoctorEmails/EmailDetails';
import EmailList from './pages/Doctor/DoctorEmails/EmailList';

import PatientProfile from './pages/Patient/PatientProfile';
import BookAppointment from './pages/Patient/BookAppointment';
import Appointments from './pages/Patient/Appointments';
import MyAccount from './pages/Patient/MyAccount';
import FindDoctor from './pages/Patient/FindDoctor';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import DoctorEmail from './pages/Doctor/DoctorEmail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from '@apollo/client';



import { setContext } from '@apollo/client/link/context';
import ContactDoctor from './pages/Patient/ContactDoc';
import ContactPatient from './pages/Doctor/ContactPatient';
import ContactPatientChat from './pages/Doctor/ContactPatientChat';



const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
  
      <ApolloProvider client={client}>
     
        <Router>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactus" element={<ContactForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/contactdoctor" element={<ContactDoctor />} />
            <Route path="/compose" element={<ComposeEmail />} />
            <Route path="/email-dashboard" element={<EmailDashboard />} />
            <Route path='/emaillist' element={<EmailList />} />
            <Route path="/emaildetails" element={<EmailDetails />} />
            <Route path="/callpatient" element={<CallPatient />} />


            
            <Route path="/contactpatient" element={<ContactPatient />} />


        
            <Route path="/contactpatientchat" element={<ContactPatientChat />} />

            <Route path="/PatientProfile" element={<PatientProfile />} />
            <Route path="/BookAppointment" element={<BookAppointment />} />
            <Route path="/FindDoctor" element={<FindDoctor />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/doctor-email" element={<DoctorEmail />} />
            <Route path="/DoctorProfile" element={<DoctorProfile />} />


          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
