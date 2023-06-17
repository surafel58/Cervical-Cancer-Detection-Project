import React from 'react';
import Navbar from './Navbar';
import DataAnalytics from './DataAnalytics';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line to import Bootstrap JavaScript

const App = () => {

  return (

    <div>
        <Router>
          <Navbar/>
        </Router>
        <DataAnalytics/>
    </div>
  );
};

export default App;