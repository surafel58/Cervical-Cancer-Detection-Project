import Top from "./Top";
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return ( 
        <div className="down">
           <Top/>
                <div className="box1">
                <img src= "/images/img1.jpg" alt="imagehere"/> 
                <div className="para">
                    <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                    <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                    <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                    <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                    <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p> 
                    <button className="button-48" onClick={() => navigate('/patientinformation')}>
                       <span className="text">Perform Screening</span>
                    </button>
                    </div>                     
                   
                </div>
                <div className="box2">
                    <div>
                           <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                            <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                            <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                            <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                            <p>heyyyy</p>
                            <button className="button-48" onClick={() => navigate('/patientrecord')}>
                               <span className="text">Patient Records</span>
                            </button>
                    </div>
                            <img src= "/images/img2.jpg" alt="imagehere"/>         
                </div>
                <div className="box3">
                    <img src= "/images/img1.jpg" alt="imagehere"/> 
                           <div className="para">
                                  <p>here is my note</p>
                                  <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                                  <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                                  <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                                  <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                                  <button className="button-48" onClick={() => navigate('/analytics')}>
                                     <span className="text">Data Analytics</span>
                                  </button>
                            </div>
                </div>

                <div className="box4"> 
                {/* <img src= "/images/img1.jpg" alt="imagehere"/>  */}
                <div className="para">
                       
                         <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                         <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                         <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                         <p>here is my note heteikdhcjns ab\yughdweuigchhvlcfgxclw</p>
                         <button className="button-48" onClick={() => navigate('/about')}>
                               <span className="text">About Us</span>
                        </button>
                </div>
                <img src= "/images/img2.jpg" alt="imagehere"/>  
                         </div>
                         {/* <Footer/> */}
            </div>
       
     );
}
 
export default Home;