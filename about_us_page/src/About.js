import React from 'react';
import './App.css';
import { FaCheckCircle , FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="jumbotron">
        <h1 className="display-4">About Us</h1>
        <p className="lead">We are DeepPap, a provider of AI-based healthcare systems.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>We are dedicated to developing innovative AI solutions that improve healthcare outcomes and revolutionize the way medical professionals diagnose and treat patients.</p>
          </div>
          <div className="col-md-6">
            <h2>Our Vision</h2>
            <p>Our vision is to empower healthcare providers with cutting-edge AI technology, enabling them to deliver accurate and personalized healthcare services to patients worldwide.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>Our Values</h2>
            <ul>
                <li><FaCheckCircle className="icon" /> Excellence: We strive for excellence in everything we do.</li>
                <li><FaCheckCircle className="icon" /> Innovation: We embrace innovation and constantly seek new solutions.</li>
                <li><FaCheckCircle className="icon" /> Collaboration: We believe in collaboration and teamwork.</li>
                <li><FaCheckCircle className="icon" /> Integrity: We uphold the highest standards of integrity and ethics.</li>
                <li><FaCheckCircle className="icon" /> Customer Focus: We prioritize the needs and satisfaction of our customers.</li>
          </ul>
          </div>
          <div className="col-md-6">
            <h2>Our Team</h2>
            <p>We have a team of highly skilled professionals, including AI experts, data scientists, and healthcare specialists, who are passionate about leveraging technology to make a positive impact in the healthcare industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
