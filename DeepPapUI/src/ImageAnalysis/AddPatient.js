import { useNavigate } from 'react-router-dom'
import './patient.css'
import { useState } from 'react'
import AddPatientvalidation from './AddPatientvalidation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomToast from './CustomToast'
import auth, { db } from '../config/firebase-config'
import { collection, addDoc } from "firebase/firestore";
import LoadingIcon from '../LoadingIcon/LoadingIcon'

const Addpatient = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    patientId: '',
    fullName: '',
    address: '', 
    phoneNumber: '',
    age: '',
  });
  const [errors, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    const validationErrors = AddPatientvalidation(values)

    setError(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      
      // Perform the save operation here
      setIsLoading(true);

      try{

        const path = `users/${auth.currentUser.uid}/patient_records`;
        const docRef = await addDoc(collection(db, path), values);

        setIsLoading(false);

        navigate("/imageanalysis", { state : docRef.id });

      }
      catch (error) 
      {
        setIsLoading(false);
        toast.error(error.message);  
      }

    }
  }
  const handlePopupClick = () => {
    toast.success(
      <CustomToast
        stopToast={toast.dismiss}
        proceedToPage={handleProceedToPage}
      />,
      {
        autoClose: false,
        hideProgressBar: true,
        closeButton: false, // Disable the close button
        draggable: false, // Disable dragging to close
        closeOnClick: false, // Disable closing on click
      }
    )
  }

  const handleProceedToPage = () => {
    // Logic to navigate to another page
    // Use the push method to navigate to the desired page
    navigate('/imageanalysis')
  }
  return (
    <>
        <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>    
          <div className='add'>
          <div className='information'>
            <div className='text'>
              <h3>Please fill the required information carefully:</h3>
            </div>

            <table className='patienttable'>
              <tbody>
                <tr className='tr1'>
                  <td>
                    <label htmlFor='patientId'>PatientId/Card No</label>
                  </td>
                  <td>
                    <input
                      type='number'
                      min='1'
                      name='patientId'
                      required
                      value={values.patientId}
                      onChange={handleChange}
                    />
                    {errors.patientId && (
                      <p className='css' style={{ color: 'red', fontSize: '13px' }}>
                        {errors.patientId}
                      </p>
                    )}
                  </td>
                </tr>

                <tr className='tr2'>
                  <td>
                    <label htmlFor='fullName'>Full Name</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='fullName'
                      required
                      value={values.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <p className='css' style={{ color: 'red', fontSize: '13px' }}>
                        {errors.fullName}
                      </p>
                    )}
                  </td>
                </tr>
                <tr className='tr3'>
                  <td>
                    <label htmlFor='address'>Address</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='address'
                      required
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <p className='css' style={{ color: 'red', fontSize: '13px' }}>
                        {errors.address}
                      </p>
                    )}
                  </td>
                </tr>
                <tr className='tr4'>
                  <td>
                    <label htmlFor='phoneNumber'>Phone number</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='phoneNumber'
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <p className='css' style={{ color: 'red', fontSize: '13px' }}>
                        {errors.phoneNumber}
                      </p>
                    )}
                  </td>
                </tr>
                <tr className='tr5'>
                  <td>
                    <label htmlFor='age'>Age</label>
                  </td>
                  <td>
                    <input
                      type='number'
                      min='1'
                      name='age'
                      required
                      value={values.age}
                      onChange={handleChange}
                    />
                    {errors.age && (
                      <p className='css' style={{ color: 'red', fontSize: '13px' }}>
                        {errors.age}
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='displayRow'>
            <button className='button-48' onClick={handleSubmit}>
              <span className='text'>Save</span>
            </button>
            <div className='popupMesg'>
              <div onClick={handlePopupClick} className = "filled">Already filled the information?</div>
              <ToastContainer />
            </div>
          </div>
        </div>
    </>
  )
}

export default Addpatient
