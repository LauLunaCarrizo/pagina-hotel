import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = ({setRooms}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (<>
  <div className='header'>
    <section className='navBarImage'>
      <img src="https://www.hotelcc.com.ar/wp-content/uploads/2013/12/Logo_w.png" alt="" className='hotelImage'/>
    </section>
<hr className='footerHr'/>
    <section>
      <div className='navBarInfo'>
        <label>telefono:(54-11) 4778-4900 </label>
      </div>
      <div className={`navBarButtons ${isOpen && "open"}`}>
        <NavLink to={"/"} className="navItem">INICIO</NavLink>
        <div className="navMenu">
        <NavLink to={"/rooms"} className="navItem">HABITACIONES</NavLink>
          <div className="navMenu-content">
            <a onClick={()=>setRooms("Estandar")}>Habitaciones Estandar</a>
            <a onClick={()=>setRooms("Superior")}>Habitaciones Superior</a>
            <a onClick={()=>setRooms("Ejecutivas")}>Habitaciones Ejecutivas</a>
            <a onClick={()=>setRooms("Amadeus")}>Habitación Amadeus</a>
            <a onClick={()=>setRooms("Junior")}>Suite Junior</a>
            <a onClick={()=>setRooms("Honeymoon")}>Honeymoon Suite</a>
            <a onClick={()=>setRooms("Diplomatica")}>Suite Diplomática</a>
            <a onClick={()=>setRooms("ADA")}>ADA Habitaciones para Discapacitados</a>
            <a onClick={()=>setRooms("Colombo")}>Suite Colombo</a>
          </div>
        </div>
        <NavLink to={"/location"} className="navItem">UBICACIÓN</NavLink>
        <NavLink to={"/services"} className="navItem">SERVICIOS</NavLink>
        <NavLink to={"/aboutUs"} className="navItem">CONOCENOS</NavLink>
        <NavLink to={"/gallery"} className="navItem">GALERIA DE FOTOS</NavLink>
        <NavLink to={"/covidPolitics"} className="navItem">POLÍTICAS COVID-19</NavLink>
        <NavLink to={"/contactUs"} className="navItem">CONTACTO</NavLink>
      </div>
      <div 
      className={`navToggle ${isOpen && "open"}`}
      onClick={()=> setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  </div>
  </>
  )
}

export default Header