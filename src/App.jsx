import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import Appoinment from './pages/Appoinment';
import MyAppointments from './pages//MyAppointments';
import { Routes ,Route} from 'react-router-dom';
import NavBar from './Commponents/NavBar';
import Footer from './Commponents/Footer';
import Docters from './pages/Docters';


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Docters />} />
        <Route path='/doctors/:speciality' element={<Docters />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appoinment' element={<MyAppointments />} />
        <Route path='/appoinment/:docId' element={ <Appoinment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;