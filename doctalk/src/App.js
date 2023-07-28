import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import ContactForm from './components/Contact';


function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/contact"
                element={<ContactForm />}
              />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
