import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (<>
  <div className='footer'>
    <hr className='footerHr'/>
    <section className='leftSection'>
      <img src="https://www.hotelcc.com.ar/wp-content/uploads/2013/12/Logo_w.png" alt="" />
    </section>
    <hr className='footerHr'/>
    <section className='rightSection'>
      <label >Dirección: Fray Justo S. M. de Oro 2747</label>
      <label >Tel: (011) 4778-4945 Email: reservas@hotelcc.com.ar</label>
    </section>
  </div>
  </>
  )
}

export default Footer