import './App.css'
import { Navbar } from './Screens/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Screens/Home/Home'
import {AboutUs} from './Screens/About/AboutUs'
import {Services} from './Screens/Services/Services'
import {News} from './Screens/News/News'
import {ContactUs} from './Screens/Contact/ContactUs'

function App() {
 

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default App
