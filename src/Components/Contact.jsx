import React,{useState} from 'react'
import './Contact.css'
import Gravity from './Gravity'
const Contact = () => {
  const [text, settext] = useState("");
  const [loading, setloading] = useState(false);
  const handleSubmit=()=>{
    
  }

  return (
    <div className='contact' id='contact'>
      
      {/* <div className="gravity">
        <Gravity/>
      </div> */}
      <div className="form">
        <p className='getintouch'>GET IN TOUCH</p>
        <p className='contactHeading'>Contact.</p>
        <p className='inputLabel'>Your Name</p>
        <input type="text" name="name" id=""  className='inputForm'/>
        <p className='inputLabel'>Your email</p>
        <input type="text" name="name" id="" className='inputForm' />
        <p className='inputLabel'>Your Message</p>
        <textarea rows={8} cols={40} type="text" name="name" id="" className='inputTextbox' />
        <button onClick={handleSubmit} className='submitBtn'>Send<span>{text}</span></button>
      </div>
      
    </div>
  )
}

export default Contact
