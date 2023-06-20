import './register.css'

import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
      
      <div w-full h-screen flex>
        <div className='container grid grid-cols-1 md:h-[500px] shadow-lg shadow-gray-600 sm:max-w-[500px] my-8'>
          <img src='./images/img.jpeg' className='img' alt='notfound' />
          <h1 className='heading font-bold '>CREAT ACCOUNT</h1>
          <form className='form'>
            <div className='formContainer'>
              <div className='formInput'>
                <label className='label font-semibold'>Username</label>
                <input className='input' type='text' placeholder='username' />
              </div>
              <div className='formInput'>
                <label className='label font-semibold'>Email</label>
                <input className='input' type='text' placeholder='email' />
              </div>
              
              
              <div className='formInput'>
                <label className='label font-semibold'>Password</label>
                <input
                  className='input'
                  type='password'
                  placeholder='password'
                />
              </div>
              <button className='signUpButton'>SignUp</button>
              <div className='buttom font-semibold bg-white'>
                <span className='buttom-header bg-white'>Already have an account? </span>
                <span className='buttom-header bg-white'>
                  <Link to='/login'>Login</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
