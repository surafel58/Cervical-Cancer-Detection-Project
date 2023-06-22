import { useNavigate } from "react-router-dom";
import './patient.css';

const Addpatient = () => {
   
   const navigate = useNavigate();
    return ( 
      
        <div className="add">
<div className="information">
  <div className="text">
    <h3>Please fill the required information carefully:</h3>
  </div>
  <table className="patienttable">
    <tbody>
      <tr className="tr1">
        <td><label htmlFor="patientId">PatientId/Card No</label></td>
        <td><input type="number" id="patientId" required /></td>
      </tr>
      <tr className="tr2">
        <td><label htmlFor="fullName">Full Name</label></td>
        <td><input type="text" id="fullName" required /></td>
      </tr>
      <tr className="tr3">
        <td><label htmlFor="address">Address</label></td>
        <td><input type="text" id="address" required /></td>
      </tr>
      <tr className="tr4">
        <td><label htmlFor="phoneNumber">Phone number</label></td>
        <td><input type="text" id="phoneNumber" required /></td>
      </tr>
      <tr className="tr5">
        <td><label htmlFor="age">Age</label></td>
        <td><input type="text" id="age" required /></td>
      </tr>
    </tbody>
  </table>
</div>
     {/* <button class="button-48" ><span class="text">Save and Continue</span></button> */}
     <button className="button-48" onClick={() => navigate('/imageanalysis')}>
                               <span className="text">Save</span>
                        </button>
   
      </div>
      
     );
}
 
export default Addpatient;