import {useState} from 'react'

import images from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';




import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ 
    name: '',
    email:'',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => { 
    const {name, value } = e.target;
    setFormData({...formData, [name]: value })
  }

  const handleSubmit =   async(data) => { 
   setLoading(true);
   
   const contact = {
     _type: 'contact',
     email,
     name,
     message
   }
   try {
     const response = client.create(contact);
     setLoading(false);
     setIsFormSubmitted(true);
   } catch (error) {
     console.log(error)
   }
  


   }
  
  const {name, email, message } = formData;
  return (
    <>
    <h2 className='head-text'>Take a coffe & chat with me </h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email" />
        <a href="mailto:luartemu@gmail.com" className='p-text'>luartemu@gmail.com</a>

      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="email" />
        <a href="tel:+504 95444687" className='p-text'>+504 95444687  </a>
      </div>
    </div>

    
  {!isFormSubmitted
  ? <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input 
        type="text" 
        name="name"  
        className='p-text' 
        placeholder='Your Name' 
        onChange={handleInputChange}
        value={name} />
      </div>

      <div className='app__flex'>
        <input 
        type="email" 
        name="email"  
        className='p-text' 
        placeholder='Your Email' 
        onChange={handleInputChange}
        value={email} />
      </div>

      <div>
        <textarea
        name="message"
        value={message}
        onChange={handleInputChange} 
        placeholder='Your Message' 
        cols="30" 
        rows="10"></textarea>
      </div>
      <button 
      type='button'
      className='p-text'
      onClick={!loading? handleSubmit: null }
      > { loading? 'Sending': 'Send Message '}</button>

    </div>
    :<div>
      <h3 className='head-text'> Thank you for gettin in touch  </h3>
    </div>
  }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);