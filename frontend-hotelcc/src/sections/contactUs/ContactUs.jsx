import React, { useState } from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  const [formData, setData] = useState({
    email:"",
    message:""
})  

const [errors, setErrors] = useState({
  email:"ingrese un email",
  message:"ingrese un mensaje"
})

// const handleChange = (event) =>{
//   const {name, value} = event.target
//   setData({
//       ...formData,
//       [name] : value
//   })
//   setErrors(validation({
//       ...formData,
//       [name]: value
//   }))
// }

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     if(){
//       alert("Reseña enviada")
//     }
//   } catch (error) {
//     console.log(error.message)
//   }
// }
  return (<>
    <div className='contactUs'>
      <section className='contactUsForm'>
        <h2>Déjanos un Mensaje</h2>
        <form >
          <h3>Nombre:</h3>
          <input 
          type="text"
          className='contactUsInput'
          />
          <h3>Apellido:</h3>
          <input 
          type="text"
          className='contactUsInput'
          />
          <h3>Email:</h3>
          <input 
          type="text"
          className='contactUsInput'
          />
          <h3>Consulta:</h3>
          <input 
          type="text"
          className='contactUsInput'
          />
          <button className='contactUsButton'>Enviar</button>
        </form>
      </section>
      <section className='contactUsInfo'>
        <h3>Estemos en contacto</h3>
        <label>Dirección: Fray Justo S. M. de Oro 2747</label>
        <label>Tel: (011) 4778-4945</label>
        <label>Email: reservas@hotelcc.com.ar</label>
        <label>Web: www.hotelcc.com.ar</label>
        <h3>Nuestras redes:</h3>
        <a href='https://www.pinterest.com/hotelcc' target='blanck'><img src="https://www.hotelcc.com.ar/wp-content/uploads/2015/02/pinterest-icon.png" alt="" className='pinterestIcon'/></a>
        <img src="https://www.hotelcc.com.ar/wp-content/uploads/2015/02/linkedin.png" alt="" className='linkedInIcon'/>
        <img src="https://www.hotelcc.com.ar/wp-content/uploads/2015/02/Google-Plus-Logo-50x50.png" alt="" className='googlePlusIcon'/>
        <h3>Escaneame:</h3>
        <a href="https://api.qrserver.com/v1/create-qr-code/?data=MECARD%3AN%3AHotel+Cristofaro+Colombo%3BADR%3AFray+Justo+S.+M.+de+Oro+2747%3BTEL%3A%2B+%28011%29+4778-4945%3BTEL%3A%2B+%28011%29+4778-4900%3BFAX%3A%2B+%28011%29+4778-4944%3BEMAIL%3Areservas%40hotelcc.com.ar%3BURL%3Ahttps%3A%2F%2Fwww.hotelcc.com.ar%2F%3B&size=140x140"><img src='https://api.qrserver.com/v1/create-qr-code/?data=MECARD%3AN%3AHotel+Cristofaro+Colombo%3BADR%3AFray+Justo+S.+M.+de+Oro+2747%3BTEL%3A%2B+%28011%29+4778-4945%3BTEL%3A%2B+%28011%29+4778-4900%3BFAX%3A%2B+%28011%29+4778-4944%3BEMAIL%3Areservas%40hotelcc.com.ar%3BURL%3Ahttps%3A%2F%2Fwww.hotelcc.com.ar%2F%3B&size=140x140' className='qrImage'></img></a>
      </section>
    </div>
  </>
  )
}

export default ContactUs