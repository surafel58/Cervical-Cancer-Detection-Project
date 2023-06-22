import React from 'react';
import './Footer.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line to import Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h4>Follow Us</h4>
        <ul className="follow-us">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p>&copy; 2023 DeepPap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
