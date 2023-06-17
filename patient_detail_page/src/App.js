import React from 'react';
import './css/style.css';
import PatientInformation from './PatientInformation';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line to import Bootstrap JavaScript


const App = () => {

  return (

    <div>
        <Router>
          <Navbar/>
        </Router>
        <PatientInformation/>
    </div>
  );
};

export default App;