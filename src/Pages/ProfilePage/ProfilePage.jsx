import { useState, useEffect } from 'react';
import './ProfilePage.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProfilePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []); 
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/568dfcbb-4875-4362-990a-994d042b0a39 ');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const navigate= useNavigate()
    useEffect(()=>
    {
     Aos.init({duration:2000})
    },[])
    return (
        <>
        <Navbar/>
        <section className="profile-page">
        <video src={video} muted autoPlay loop type="video/mp4" ></video>

            <div className="overlay"></div>
            <div className="profile-content container">
            { data.map((userData) => (
                    <div className="profile-details" data-aos="fade-up">
                        <div className="profile-picture">
                            <img src={userData.img} alt="Profile" />
                        </div>
                        <div className="profile-info">
                            <h1>{userData.fname} {userData.lname}</h1>
                            <p>Email:{userData.email}</p>

                            <p>Address:{userData.address}</p>

                        </div>
                        <button className='btn' onClick={()=>navigate('/edit')}>Edit Profile</button>
                    </div>
               ) )}
            </div>
        </section>
        <Footer/>
        </>      
    );
};

export default ProfilePage;
