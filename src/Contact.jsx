import { useState } from "react"

function Contact() {

  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    message:""
  })

  function handleChange(e){
    const {name,value}=e.target
    setFormdata((prev ) => ({ ...formdata, [name]: value }));

  }
  return (
    <div className="contactDiv">
    <div className="mapDiv">
             <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.241403255128!2d75.78975017514333!3d26.864070362179707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f27d3dad07%3A0xb2641415d32e0c18!2sFull%20Stack%20Learning!5e0!3m2!1sen!2sin!4v1748587600429!5m2!1sen!2sin"
            width="100%"
            height="450"
            // className="border-2 border-rose-200 rounded"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
    <div className="form">
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" name="name" placeholder="Enter Name" value={formdata.name} onChange={handleChange} />
        <label htmlFor="">E-mail</label>
        <input type="email" name="email" placeholder="Enter Name" value={formdata.email} onChange={handleChange} />
        <label htmlFor="">Message</label>
        <textarea name="message" id="message" placeholder="Your Message" value={formdata.message} onChange={handleChange}></textarea>
        <button>Submit</button>
      </form>
    </div>
    
    </div>
  )
}

export default Contact