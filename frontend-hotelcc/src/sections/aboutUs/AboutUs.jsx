import React from 'react'
import "./aboutUs.css"

const AboutUs = () => {
  return (<>
    <div className='aboutUs'>
      <article className='aboutUsImage'>imagen</article>
      <aside>
        <h2>Visión</h2>
        <p>Llegar a ser un hotel 4 estrellas plus líderes en el sector por su crecimiento sostenible, atención y ser el hotel preferido por el viajero de negocios y la familia en cuanto a calidad de servicios.</p>
        <h2>Misión</h2>
        <p>Brindar a cada huésped y colaborador una notable experiencia a través de la calidez, honestidad, y la
        actitud proactiva de nuestro personal, el cual refleje el compromiso con la dirección, los huéspedes y los proveedores. Trabajamos para que los clientes sientan el deseo de volver.</p>
        <h2>Valores</h2>
        <p>En el Hotel Cristóforo Colombo nos guiamos con los siguientes valores:</p>
        <ul>
          <li>Orientación a las personas: El principal activo de la compañía son las personas: nuestros clientes, huéspedes, colaboradores, accionistas y proveedores. Gracias al rendimiento de nuestros colaboradores podemos ofrecer a nuestros clientes y huéspedes un servicio personalizado y una experiencia satisfactoria.</li>
          <li>Responsabilidad con el medioambiente: en el Hotel Cristóforo Colombo nos comprometemos a realizar todas las acciones necesarias para proteger nuestro medioambiente. Nos enfocamos en una cultura sostenible disminuyendo los impactos negativos que puedan afectarlo.</li>
          <li>Calidad de servicio: Nuestros clientes y huéspedes son nuestra prioridad, nuestra razón de ser, es por ello que estamos pendientes de sus necesidades cuidándolos en todo momento.</li>
          <li>Trabajo en Equipo y Calidez: Buscamos que el cliente y el huésped se sientan cómodos, es nuestro objetivo común. Trabajamos en conjunto hacia un mismo resultado.</li>
          <li>Compromiso: nos gusta lo que hacemos, somos responsables y tenemos sentido de pertenencia.</li>
          <li>Respeto: comprendemos al otro, sabemos valorar sus intereses y necesidades.</li>
        </ul>
      </aside>
    </div>
  </>
  )
}

export default AboutUs