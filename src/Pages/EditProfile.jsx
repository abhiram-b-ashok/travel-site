import { useState, useEffect } from 'react';
import './Signup.scss';
import video from '../Assets/video.mp4';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiLogInCircle } from 'react-icons/bi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { MdOutlineHomeWork } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';


const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Password:', password);
    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigate('/profile')

  };
  const navigate= useNavigate()

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 
  return (
    <section className="login">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="loginContent container">
        <div className="logoDiv">
          <a href="/home" className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            Travelon.
          </a>
          <h1>Edit Profile</h1>
        </div>
       
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="firstName">First Name</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="lastname">LastName</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="email">Enter Email</label>
            <div className="input flex">
              <input
                type="email"
                placeholder="Mail id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdOutlineAlternateEmail className="icon" />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="password">Enter Password</label>
            <div className="input flex">
              <input
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
              <RiLockPasswordLine className="icon" />
            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input flex">
              <input
                type="password"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <RiLockPasswordLine className="icon" />
            </div>
          </div>
        
                <div className="destinationInput">
                <label htmlFor="address">Enter Address</label>
                <div className="input flex">
                  <input
                    type="text"
                    id="address"
                    placeholder=" Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <MdOutlineHomeWork className='icon'/>
                </div>
              </div>
            

          <div onClick={handleSubmit} className=" flex searchOptions">
            Submit
            <BiLogInCircle className="icon" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditProfile;
