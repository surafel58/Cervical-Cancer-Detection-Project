import './login.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className=' w-full h-screen flex'>
        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] shadow-lg shadow-gray-600 sm:max-w-[900px] my-5'>
          <div className=' w-full h-[500px] hidden md:block '>
            <img className='w-full h-full' src='./login.jpg' alt='notfound' />
          </div>
          <div className=' flex flex-col justify-center bg-white'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
              <h2 className='text-2xl font-semibold bg-white text-center font-sans'>
                WELCOME BACK
              </h2>
              <div className='flex flex-col py-2 bg-white '>
                <label className='bg-white   '>Username</label>
                <input
                  className=' input  border p-1 rounded-md 
             focus:outline-none focus:border-b-2 focus:border-b-solid  focus:border-b-blue-500'
                  type='text'
                  placeholder='username'
                />
              </div>
              <div className='flex flex-col py-2 bg-white'>
                <label className='bg-white '>Password</label>
                <input
                  className=' input border p-1 rounded-lg focus:outline-none focus:border-b-2 focus:border-b-solid
                  focus:border-b-blue-500'
                  type='password'
                  placeholder='password'
                />
              </div>
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
