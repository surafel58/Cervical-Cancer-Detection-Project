import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toastValidation from './toastValidation'
//import 'react-toastify/dist/ReactToastify.css'
import './customtoast.css'

const CustomToast = ({ stopToast, proceedToPage }) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({ patientId: '' })
  const [errors, setError] = useState('')

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleStopClick = () => {
    stopToast()
  }
  const handleProceedClick = (e) => {
    // if (inputValue)  {
    //   proceedToPage()
    // }
   e.preventDefault()
 const validationErrors = toastValidation(inputValue);
  setError(validationErrors);
   if (Object.keys(validationErrors).length === 0) {
     // Perform the save operation here
     // ...
     // Navigate to /imageanalysis
     navigate('/imageanalysis')
   }
  
 
};
  //setError(toastValidation(inputValue))
    
   
  

  return (
    <div>
      <label htmlFor='patientId' className='labeName'>
        PatientId/Card No
      </label>
      <input
        type='number'
        min='1'
        name='patientId'
        onChange={handleInputChange}
        className='toastInput'
        value = {inputValue.patientId}
       
      />
      {errors && (
      <p className = "toastP"style={{ color: 'red', fontSize: '13px' }}>{errors.patientId}</p>
      )}
      <div classame='toast-buttons'>
        <button onClick={handleStopClick} className='cancel_button'>
          Cancel
        </button>
        <button onClick={handleProceedClick} className='proceed_button'>
          Proceed
        </button>
      </div>
    </div>
  )
}
export default CustomToast
