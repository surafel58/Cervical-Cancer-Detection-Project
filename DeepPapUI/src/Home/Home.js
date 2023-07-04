import React from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  AOS.init();

  const navigate = useNavigate();

  return (
    <div>

       <div id='section1' className='intro-container'>
          <div data-aos = "zoom-in" className='intro-content'>
            <h1 className='intro-title'>
            DeepPap
            </h1>
            <h2 className='intro-detail'>
              is an AI-based <strong>Cervical cancer screening system</strong>.
              We provide accurate <strong>Cervical cancer screening</strong>, 
              <strong>patient record manager</strong>, and all in one <strong>visual data analytics.</strong>
            </h2>
          </div>

          <div className='down-arrow-container'>
            <a href='#section2'>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
            </a>
          </div>
       </div>

       <div id='section2' className='intro-container container2'>
          <div data-aos = "zoom-in" className='intro-content container2-content'>
            <h1 className='intro-title'>
            Cervical Cancer Screening test
            </h1>
            <h2 className='intro-detail'>
              Detect cervical cancer and pre-cancerous cells easily using our Pap smear microscopic image-based screening test.
            </h2>

            <button type="button" className="btn btn-outline-primary" onClick={ (e) =>  navigate("/patientinformation") }>Take screening test</button>

          </div>

          <div className='down-arrow-container'>
            <a href='#section3'>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
            </a>
          </div>
       </div>

       <div id='section3' className='intro-container  container3'>
          <div data-aos = "zoom-in" className='intro-content container3-content'>
            <h1 className='intro-title'>
            Manage Patient Records
            </h1>
            <h2 className='intro-detail'>
              Simplify all the hassel of managing patient records with our user-friendly system for organizing and managing patient records that took screening tests. 
            </h2>

            <button type="button" className="btn btn-outline-primary btn-fill" onClick={ (e) =>  navigate("/patientrecord") }>Manage records</button>

          </div>

          <div className='down-arrow-container'>
            <a href='#section4'>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
            </a>
          </div>
       </div>

       <div id='section4' className='intro-container  container4'>
          <div data-aos = "zoom-in" className='intro-content container4-content'>
            <h1 className='intro-title'>
            Visual Data Analytics
            </h1>
            <h2 className='intro-detail'>
            Effortlessly analyze and interpret complex data and easily extract insightful information using our data visualization tool.
            </h2>

            <button type="button" className="btn btn-outline-primary" onClick={ (e) =>  navigate("/analytics") }>View analytics</button>

          </div>
          <div className='down-arrow-container'>
            <a href='#section1'>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_up
            </span>
            </a>
          </div>
       </div>

    </div>
  );
};

export default Home;
