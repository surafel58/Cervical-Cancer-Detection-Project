import Register from './component/register/Register'
import Login from './component/login/Login'
import SideBar from './component/sidebar/SideBar'
import Profile from './component/profile/Profile'
import EditProfile from './pages/edit/EditProfile'
import Aboutprofile from './pages/about/Aboutprofile'
import DeleteProfile from './pages/delete/DeleteProfile'
import PatientRecord from './component/record/PatientRecord'
import Navbar from './component/navbar/Navbar'
import './index.css'
//import Login from './component/sidebar/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
  
      <BrowserRouter>
      <router>
      <Navbar/>
      </router>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sidebar' element={<SideBar />}></Route>
          <Route path='/edit' element={<EditProfile />} />
          <Route path='/about' element={<Aboutprofile />} />
          <Route path='/delete' element={<DeleteProfile />} />
          <Route path='/patientrecord' element= {< PatientRecord/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
