import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line to import Bootstrap JavaScript
import Navbar from './Navbar';
import DataAnalytics from './DataAnalytics';
import Footer from './component/footer/Footer';

const App = () => {

  return (

    <div>
        <Router>
          <Navbar/>
        </Router>
        <DataAnalytics/>
        <Footer/>
    </div>
  );
};

export default App;