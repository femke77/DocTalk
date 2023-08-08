import Login from './components/Login';
import Signup from './components/Signup';
import ContactForm from './components/Contact';
import React from "react";
import AppHeader from "./components/Header/AppHeader";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home/Home";
import Services from "./components/Services";
// import Billing from "./pages/Doctor/DoctorBilling";
// import PatientBilling from './pages/Patient/PatientBilling';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from '@apollo/client';
import ContactDoc from './pages/Patient/ContactDoc';
import { setContext } from '@apollo/client/link/context';
import CallPatient from './pages/Doctor/CallPatient';
import ComposeEmail from './pages/Emails/ComposeEmail';
import EmailDashboard from './pages/Emails/EmailDashboard';
import EmailDetails from './pages/Emails/EmailDetails';
import EmailList from './pages/Emails/EmailList';
import Profile from './components/Profile';
import BookAppointment from './pages/Patient/BookAppointment';
import Appointments from './pages/Patient/Appointments';
import MyAccount from './pages/Patient/MyAccount';
import FindDoctor from './pages/Patient/FindDoctor';

import MessagesPatient from './pages/Doctor/MessagesPatient';
// import ContactDoctor from './pages/Patient/ContactDoc';
// import ContactPatient from './pages/Doctor/ContactPatient';
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
            {/* <Route path="/DoctorBilling" element={<Billing />} />
            <Route path="/PatientBilling" element={<PatientBilling />} /> */}
            <Route path="/contactdoctor" element={<ContactDoc />} />
            <Route path="/compose" element={<ComposeEmail />} />
            <Route path="/email-dashboard" element={<EmailDashboard />} />
            <Route path='/emaillist' element={<EmailList />} />
            <Route path="/emaildetails" element={<EmailDetails />} />
            <Route path="/callpatient" element={<CallPatient />} />
            <Route path="/doctor-messages" element={<MessagesPatient />} />


           <Route path="/contactpatientchat" element={<ContactPatientChat />} />
            <Route path="/Profile" element={<Profile />} />

            <Route path="/BookAppointment" element={<BookAppointment />} />
            <Route path="/FindDoctor" element={<FindDoctor />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/FindDoctor" element={<FindDoctor />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}
export default App;