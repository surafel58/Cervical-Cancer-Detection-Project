import Register from './component/register/Register'
import Login from './component/login/Login'
import SideBar from './component/sidebar/SideBar'
import Profile from './component/profile/Profile'
import EditProfile from './component/profile/edit/EditProfile'
import DeleteProfile from './component/profile/deleteprofile/DeleteProfile'
import Confirmation from './component/profile/confirmation/Confirmation'
import PatientRecord from './component/record/PatientRecord'
import Navbar from './component/navbar/Navbar'
import './index.css'
//import Login from './component/sidebar/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
  
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sidebar' element={<SideBar />}></Route>
          <Route path='/edit' element={<EditProfile />} />
          <Route path = "deleteprofile" element = {<DeleteProfile/>}/>
          <Route path='/delete' element={<Confirmation/>} />
          <Route path='/patientrecord' element= {< PatientRecord/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
