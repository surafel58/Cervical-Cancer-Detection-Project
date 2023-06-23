import DataAnalytics from './DataAnalytics/DataAnalytics';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ImageAnalysisContainer from './ImageAnalysis/ImageAnalysisContainer';
import AboutUs from './About/About'
import Home from './Home/Home' 
import Addpatient from './ImageAnalysis/AddPatient';
import Footer from './Footer/Footer';
import PatientRecord from './PatientRecord/PatientRecord';
import PatientInformation from './Patientdetail/Patientdetail'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line to import Bootstrap JavaScript


const App = () => {
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
   </Routes>
    
    </div>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
