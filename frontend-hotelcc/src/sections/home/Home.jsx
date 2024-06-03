import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [characteristics, setCharacteristics] = useState([
    {button:"<",title:"VIVÍ PALERMO",text:"El Hotel Cristoforo Colombo está situado en un lugar de privilegio en el corazón de los bosques de Palermo, en la misma manzana del Centro de Convenciones “La Rural”, próximo a la Embajada de los Estados Unidos, a pocos metros del Campo de Polo, Hipódromo y a escasos minutos del Aeroparque Metropolitano."},
    {button:"-",title:"DISFRUTÁ",text:"Nuestros huéspedes pueden disfrutar de la cocina argentina y mediterránea en el Restaurante “Puerto de Palos” y en el Bar “Timón” degustar una gran variedad de bebidas y platos ligeros."},
    {button:">",title:"SOLUCIONES CORPORATIVAS",text:"Descubra nuestros salones en alquiler donde podrán llevarse a cabo exitosas reuniones de trabajo. Un ambiente acogedor y confortable con múltiples posibilidades de adaptación, que permitirán satisfacer cada uno de sus requerimientos."}
  ])

  const carouselSettings = {
    showArrows: true,
    showThumbs: false,
    showStatus: true,
    infiniteLoop: true,
  }

  const [whyUs, setWhyUs] = useState([
    {title:"INTERNET",text:"Tenemos cobertura gratuita de WiFi de alta velocidad en todo el hotel."},
    {title:"ACEPTAMOS MASCOTAS",text:"Porque entendemos que toda la familia puede disfrutar de la estadía en nuestro hotel."},
    {title:"GIMNASIO / SPA",text:"Ubicado en el piso 16, es una muy buena oportunidad para mantener su estado físico, disfrutando un ambiente confortable y de panorámicas vistas de Palermo."},
    {title:"PISCINA",text:"Nuestra piscina climatizada ofrece una opción de distensión para disfrutar el aire libre dentro de las instalaciones del hotel. Disponible de diciembre a Semana Santa"}
  ])
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characteristics.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [characteristics.length]);  

  return (<>
  <div className='home'>
    <section>
      <img src="https://www.hotelcc.com.ar/wp-content/uploads/2014/06/15-370x246.jpg" alt="" className='hotelFrontImage'/>
    </section>
    <div className='background'>

  <article className='bookingSection'>
    <h2>RESERVAS</h2>
    <a href="https://wa.me/5491132565636" className='bookingImage'><img src="https://cdn.icon-icons.com/icons2/3685/PNG/512/whatsapp_logo_icon_229310.png" alt="" className='bookingImage'/></a>
  </article>
    <section >
      <div className='characteristicCarousel'>
        <h2>{characteristics[currentIndex].title}</h2>
        <p>{characteristics[currentIndex].text}</p>
      </div>
    </section>

    <article className='whyUsSection'><h2>¿POR QUÉ ELEGIRNOS?</h2></article>

    <section className='sectionHome'>
      <div className='whyUsContainer'>
        {
          whyUs.map((element,key)=>(
            <div key={key} className='whyUsCard'>
              <h2>{element.title}</h2>
              <p>{element.text}</p>
            </div>
          ))
        }
      </div>
    </section>

    <section className='takeALook'>
      <Carousel {...carouselSettings} autoPlay={true} interval={3000} infiniteLoop={true}>
        {

        }
      </Carousel>
    </section>
  </div>
    </div>
  </>
  )
}

export default Home