import './login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loginvalidation from '../../Validation/Loginvalidation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
  const [values, setValues] = useState({ name: '', password: '' })
  const [errors, setError] = useState({})
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(Loginvalidation(values))
    
  }
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <div className=' w-full h-screen flex'>
        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] shadow-lg shadow-gray-600 sm:max-w-[900px] my-5'>
          <div className=' w-full h-[500px] hidden md:block '>
            <img className='w-full h-full' src='./login.jpg' alt='notfound' />
          </div>
          <div className=' flex flex-col justify-center bg-white'>
            <form
              className='max-w-[400px] w-full mx-auto bg-white p-4 '
              onSubmit={handleSubmit}
            >
              <h2 className='text-2xl font-semibold bg-white text-center font-sans'>
                WELCOME BACK
              </h2>
              <div className='flex flex-col py-2 bg-white '>
                <label className='bg-white '>Username</label>
                <input
                  className='input  focus:outline-none focus:border-b-2 focus:border-b-solid  focus:border-b-blue-500'
                  type='text'
                  name='name'
                  placeholder='username'
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>
              )}

              <div className=' relative flex flex-col py-2 bg-white'>
                <label className='bg-white '>Password</label>
                {/* <div>
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
                </div> */}
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
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors.password}
                </p>
              )}
              <button className='button border w-full my-5 rounded-full py-2 text-white text-lg'>
                Login
              </button>
              <div className='flex justify-between bg-white'>
                <p className=' bg-white text-blue-500 cursor-pointer'>
                  Forgot password?
                </p>
                <p className='bg-white cursor-pointer text-blue-500'>
                  <Link to='/'>Creat an account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
