import { useState} from 'react'
import './Navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
   const [active,setActive]= useState('navBar');
   const showNav=()=>{
    setActive('navBar activeNavbar')
   }
   const removeNavbar=()=>{
    setActive('navBar')
   }
  return (
    <section className='navBarSection' >
        <header className="header flex">
            <div className="logoDiv">
                <a href="htt" className="logo flex">
                    <h1>
                        <MdOutlineTravelExplore className="icon"/> Travel.</h1> </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="gh" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="gh" className="navLink">Contact</a>
                    </li>

                        <button className="btn">
                            <a href="er">BOOK NOW</a>
                        </button>

                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon' />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavBar">
            <TbGridDots className='icon' />
            </div>


        </header>
    </section >
  )
}

export default Navbar