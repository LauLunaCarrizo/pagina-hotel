import React from 'react'
import Maps from '../../../utils/Maps'
import "./Location.css"

const Location = () => {
  
  return (<>
    <div className='Location'>
      <section>
      <Maps/>
      </section>
      <hr />
      <section className='LocationInfo'>
      <aside>
        <h2>ACCESOS</h2>
        <ul>
          <li>A 4 cuadras del subte que une Palermo con el resto de la Ciudad.</li>
          <li>A 5KM del Aeroparque Jorge Newbery.</li>
          <li>A 6KM de acceso a Panamericana</li>
          <li>A 40KM del Aeropuerto Internacional Ministro Pistarini (Ezeiza).</li>
        </ul>
        <h2>PUNTOS DE INTERÉS (a pie):</h2>
        <ul>
          <li>Detrás del Centro de Exposiciones La Rural</li>
          <li>3 minutos del Consulado de EEUU</li>
          <li>5 minutos de los Bosques de Palermo</li>
          <li>8 minutos del Zoológico.</li>
          <li>8 minutos de Plaza Italia.</li>
          <li>8 minutos del Jardín Botánico.</li>
          <li>15 minutos de zona de outlets.</li>
          <li>15 minutos de Plaza Cortázar (Serrano).</li>
          <li>15 minutos del Centro Comercial Alto Palermo.</li>
        </ul>
        <h2>OTROS PUNTOS DE INTERÉS:</h2>
        <ul>
          <li>A 8 minutos del Obelisco</li>
          <li>A 13 minutos de Puerto Madero</li>
          <li>A 18 minutos de La Boca</li>
        </ul>
      </aside>
        <div className='LocationInfoImage'>image</div>
      </section>
      
    </div>
  </>
  )
}

export default Location