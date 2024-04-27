import './Main.scss';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import { useState, useEffect } from 'react';


const Main = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/9425cda3-6c3d-4626-af6d-f2a5d9eb903a');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid"> 
      { data.map((place) => (
        
           <div className="singleDestination">
                   <div className="imageDiv">
                    <img src={place.image} alt={place.title} />
                   </div>
                   <div className="cardInfo">
                    <h4 className="destTitle">{place.title}</h4>
                    <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name"> {place.city}</span>
                    </span>
                    <div className="fees flex">
                      <div className="price"> <h5>0</h5></div>
                      <div className="grade">
                        <span><small>km</small>Away</span>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{place.description}</p>
                    </div>
                    <button className='btn flex'>View<HiOutlineClipboardCheck className='icon' /> </button>
                   </div>
                </div>
        
      ))}
      </div>
    </section>
  )
}

export default Main;