import './App.css';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer';


const HomePage = () => {
  


  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
  </>
  )
}

export default HomePage