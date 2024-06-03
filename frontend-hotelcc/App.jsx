import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/sections/home/Home'
import Rooms from './src/sections/rooms/Rooms'
import Location from './src/sections/location/Location'
import Services from './src/sections/services/Services'
import AboutUs from './src/sections/aboutUs/AboutUs'
import Gallery from './src/sections/gallery/Gallery'
import CovidPolitics from './src/sections/covidPolitics/CovidPolitics'
import ContactUs from './src/sections/contactUs/ContactUs'
import Header from './src/header/Header'
import Footer from './src/footer/Footer'

const App = () => {
  const [Rooms, setRooms] = useState("")
  return (<>
  <div className='app'>
    <Header setRooms={setRooms}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms Rooms={Rooms}/>}/>
    <Route path='/location' element={<Location/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/covidPolitics' element={<CovidPolitics/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
  </Routes>
  <Footer/>
  </div>
  </>
  )
}

export default App