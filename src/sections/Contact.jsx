import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert';
import { Particles } from '../components/ui/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({name:"", email:"", message:"",});
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("Success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true);
    setTimeout(() => {setShowAlert(false)}, 5000);
  } ;
  const handleChange = (e) => {
    setFormData({ ... formData, [e.target.name]: e.target.value })}
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Submitted", formData);

      await emailjs.send("service_u3foy4n","template_1q8udfr", {
        from_name: formData.name,
        to_name:"ELIUD",
        from_email: formData.email,
        to_email:"eliudmusenge@gmail.com",
        message: formData.message,
      },"LiiUKL6X3FllBq1TY");
      setIsLoading(false);
      setFormData({name:"", email:"", message:""});
      showAlertMessage(
        "Success", "Your Message Has Been Sent.");

    }catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger","Error: Message NOT Sent.")

    }
    
  }
  return (
    <section className='relative flex items-center c-space section-spacing' >
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && < Alert type={alertType} text={alertMessage} />}
      <div className='flex flex-col items-center justify-center max-w-md p-5 
        mx-auto border border-white/10 rounded-2xl bg-primary ' >
          <div className='flex flex-col items-start w-full gap-5 mb-10'>
            <h2 className='text-heading' >Let's Talk</h2>
            <p className='font-normal text-neutral-400'>
              Are you looking for someone dedicated to build your Website, 
              Mobile app or Join your team? 
              Feel free to reach out and let's discuss your project!
            </p>
          </div>
          <form className='w-full' action=""  onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label htmlFor="name" className='field-lable'>Full Name</label>
                <input type="text" id='name' name='name' className='field-input field-input-focus'
                    placeholder='Enter Your Name / Company Name' required autoCapitalize='name' 
                    value={formData.name} onChange={handleChange}  autoComplete='name' />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='field-lable'>Email</label>
                <input type="email" id='email' name='email' className='field-input field-input-focus' 
                    placeholder='yourname@**mail.com' required autoCapitalize='email' autoComplete='email'
                    value={formData.email} onChange={handleChange} />
            </div>
            <div className='mb-5'>
                <label htmlFor="message" className='field-lable'>Message</label>
                <textarea type="text" id='message' rows="4" name='message' className='field-input field-input-focus'
                    placeholder='What can I help you build? Share your thoughts...' autoCapitalize='name' required
                    value={formData.message} onChange={handleChange} />
            </div>
            <button className='w-full px-1 py-1 text-center text-lg rounded-md 
                cursor-pointer bg-radial from-blue-900 to-royal hover-animation' 
                type='submit' >
              {!isLoading? "Send":"Sending..."}
            </button>
          </form>
      </div>
    </section>
  )
}

export default Contact