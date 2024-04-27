import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.scss'
import video from '../Assets/video.mp4'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };
  const navigate=useNavigate()

 
useEffect(()=>
{
Aos.init({duration:2000})
},[])


  return (
    <section className='login'>
    <div className="overlay">
    </div>
    <video src={video} muted autoPlay loop type="video/mp4" ></video>
    <div className="loginContent conatiner">
       <div className="textDiv">
           <h1 data-aos="fade-up" className="homeTitle">Sign Up</h1>
       </div>
       <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinationInput">
               <label htmlFor="city">Enter Email</label>
               <div className="input flex"> 
               <input  type="email" placeholder='Enter Email'  value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
               <MdOutlineAlternateEmail className='icon' />
               </div>
           </div>
    
           <div className="destinationInput">
               <label htmlFor="city">Enter Password</label>
               <div className="input flex"> 
               <input  type="password" placeholder='Enter Password' value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
               <RiLockPasswordLine className='icon' />
               </div>
           </div>
           <p >
        Already have an account?{' '}
        <button onClick={()=>navigate('/login')}>Login</button>
        </p>
           <div onClick={handleSubmit} className=" flex searchOptions">
          Sign up
           <BiLogInCircle className='icon' />
           </div>
       </div>
    </div>
    </section>
  );
};

export default SignUp;