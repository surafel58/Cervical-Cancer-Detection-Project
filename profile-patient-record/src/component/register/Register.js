///
import './register.css'
import Validation from '../../Validation/Validation'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const initialValues = { name: '', email: '', password: '' }
  const [values, setFormValues] = useState(initialValues)
  const [errors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState('')

  const handleChange = (e) => {
    setFormValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(Validation(values))
  }

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // setIsSubmitted(true)

  // useEffect(() => {
  //   if (isSubmitted) {
  //     // You can perform additional actions here after successful submission
  //     console.log('Form submitted successfully!')
  //   }
  // }, [isSubmitted])

  return (
    <>
      <div w-full h-screen flex>
        <div className='container grid grid-cols-1 md:h-[600px] shadow-lg shadow-gray-600 sm:max-w-[500px] my-8'>
          <img src='./images/img.jpeg' className='img' alt='notfound' />
          <h1 className='heading font-bold '>CREAT ACCOUNT</h1>

          <form className='form' onSubmit={handleSubmit}>
            <div className='formContainer'>
              <div className='formInput'>
                <label className='label font-semibold'>Username</label>
                <input
                  className='input'
                  type='text'
                  placeholder='username'
                  name='name'
                  values={values.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p
                  className='bg-white mx-2'
                  style={{ color: 'red', fontSize: '13px' }}
                >
                  {errors.name}
                </p>
              )}
              <div className='formInput'>
                <label className='label font-semibold'>Email</label>
                <input
                  className='input'
                  type='text'
                  name='email'
                  placeholder='email'
                  values={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p
                  className='bg-white mx-2'
                  style={{ color: 'red', fontSize: '13px' }}
                >
                  {errors.email}
                </p>
              )}
              <div className='formInput'>
                <label className='label font-semibold'>Password</label>
                <div className='passwordInputContainer'>
                  <input
                    className='input'
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='password'
                    value={values.password}
                    onChange={handleChange}
                  />
                  <button
                    type='button'
                    className='passwordToggle'
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className='passwordToggleIcon'
                    />
                  </button>
                </div>
              </div>
              {errors.password && (
                <p
                  className='bg-white mx-2px'
                  style={{ color: 'red', fontSize: '13px' }}
                >
                  {errors.password}
                </p>
              )}
              <div className='buutonContainer'>
                <button className='signUpButton '>SignUp</button>
              </div>

              {isSubmitted && <p>{isSubmitted}</p>}
              <div className='buttom font-semibold bg-white flex justify-center '>
                <p className='buttom-header bg-white'>
                  <Link to='/login'> Already have an account?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register

//////
