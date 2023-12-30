import React,{useState} from 'react'
import './Contact.css'
import Alert from './Alert';
import emailjs from '@emailjs/browser'
// import Gravity from './Gravity'
const Contact = () => {
  // const [text, settext] = useState("");
  // const [loading, setloading] = useState(false);
  const [data, setdata] = useState({name:"",message:"",email:""});
  const [alert, setalert] = useState({type:null,message:''});
 
  const handleSubmit=(e)=>{

    e.preventDefault()
    console.log(data)

    emailjs
      .send(
        process.env.REACT_APP_SER,
        process.env.REACT_APP_TEM,
        {
          from_name: data.name,
          to_name: "Shubham",
          from_email: data.email,
          to_email: "shubhamdev015@gmail.com",
          message: data.message,
        },
         process.env.REACT_APP_PUB
      )
      .then(
        () => {
          setalert({type:"Success",message:"Thank you. I will get back to you as soon as possible."})
          setdata({name:"",message:"",email:""})

          
        },
        (error) => {
          setalert({type:"Failure",message:"There is some error. Please try again."})

          console.error(error);

        }
      );

  }
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className='contact'>
      
      {/* <div className="gravity">
        <Gravity/>
      </div> */}
      <Alert message={alert.message} type={alert.type} setalert={setalert}/>
      <span id='contact'></span>
      <form className="form"  onSubmit={handleSubmit}>
        <p className='getintouch'>GET IN TOUCH</p>
        <p className='contactHeading'>Contact.</p>
        <p className='inputLabel'>Your Name</p>
        <input type="text" name="name" id="" required={true} className='inputForm' value={data.name} onChange={handleChange} placeholder='Enter your name'/>
        <p className='inputLabel'>Your email</p>
        <input type="email" name="email" id="" required={true} className='inputForm' value={data.email} onChange={handleChange} placeholder='Enter your email'/>
        <p className='inputLabel'>Your Message</p>
        <textarea rows={5} cols={40} type="text" required={true} name="message" id="" className='inputTextbox' value={data.message} onChange={handleChange} placeholder='Enter your message'/>
        <button type='submit' className='submitBtn'>Send<span>{}</span></button>
      </form>
      
    </div>
  )
}

export default Contact
