import './App.css';

import DataAnalytics from './DataAnalytics/DataAnalytics';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ImageAnalysisContainer from './ImageAnalysis/ImageAnalysisContainer';
import AboutUs from './About/About'
import Home from './Home/Home' 
import Addpatient from './ImageAnalysis/AddPatient';
import Footer from './Footer/Footer';
import PatientRecord from './PatientRecord/PatientRecord';
import PatientInformation from './Patientdetail/Patientdetail';
import DeleteProfile from './profile/deleteprofile/DeleteProfile';
import EditProfile from './profile/edit/EditProfile';
import Register from './Signup/Register'
import Login from './Login/Login'
// import 

function App() {
  return (
    <div>
    <Router>
    <Navbar/> 
      
    <div className='content'>
    
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/imageanalysis" element={<ImageAnalysisContainer/>} />
      <Route path="/patientinformation" element={<Addpatient/>} />
      
          <Route path="/analytics" element={<DataAnalytics/>} />
          <Route path='/patientdetail' element={<PatientInformation/>}/>
          <Route path='/patientrecord' element={<PatientRecord/>}/>  
          <Route path="/about" element={<AboutUs/>} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path = "/deleteprofile" element = {<DeleteProfile/>}/>
          <Route path='/patientrecord' element= {< PatientRecord/>} />
      
   </Routes>
    
    </div>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
