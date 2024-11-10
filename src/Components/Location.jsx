import React, { useEffect } from 'react';
import L from 'leaflet';
import Location_image from '../assets/rolls-images/facility.webp';
import Intro from './Intro';
import Widebtn from './Widebtn';
import Title from './Title';
import team from '../assets/rolls-images/team.jpeg';
import { Link } from 'react-router-dom';
import arrow from '../assets/rolls-images/rollsaroow.svg'
import access from '../assets/rolls-images/access_img.png'
import inspire from '../assets/rolls-images/inspire.webp'
import whisper from '../assets/rolls-images/whisper.webp'
import discover from '../assets/rolls-images/discover.webp'
const Location = () => {
  useEffect(() => {
    // Check if map is already initialized
    const mapContainer = document.getElementById('location-map');
    if (mapContainer && mapContainer._leaflet_id) {
      return; // Exit if map already initialized
    }

    // Initialize the Leaflet map
    const map = L.map('location-map').setView([25.0935, 55.1540], 12);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    L.marker([25.0935, 55.1540]).addTo(map)
      .bindPopup('DUBAI HEADQUATERS!')
      .openPopup();

    // Cleanup function to remove map on component unmount
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className='main-location'>
      <div className='location-item1' style={{ backgroundImage: `url(${Location_image})` }}>
        <Intro p={'ROLLS-ROYCE MOTOR CARS'} h1={'FACILITIES'} />
        <div className='find'>
          <Widebtn text={'found us'} />
          <div className="scroll-down">
            <div className="line">
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='location-item2'>
        <div className='loc2-items'>
          <Title text='AN EFFORTLESS JOURNEY' />
          <p>Owning a Rolls-Royce is an effortless pleasure...</p>
        </div>
        <div className='loc2-items'>
          <Title text='EFFORTLESS OWNERSHIP' />
        </div>
        <div className='loc2-items'>
          <div className='team'>
            <div className='team-motto'>
              <Title text={'MASTER TECHNICIAN'} />
              <p>Greatness is only ever achieved through extraordinary skill...</p>
            </div>
            <div className='team-pic'>
              <img src={team} alt="Team" />
            </div>
          </div>
        </div>
      </div>
      <div className='location-item3'>
        <div className='loc3-items-1'>
          <h3>INFORMATION</h3>
        </div>
        <div className='loc3-items'>
          <div className='sub-loc3'>
            <h4>DUBAI SHOWROOM</h4>
          </div>
          <div className='sub-loc3'>
            <h4>DUBAI SERVICES</h4>
          </div>
        </div>
      </div>
      <div className='location-item4' style={{ height: '80vh', width: '100%' }}>
        {/* Leaflet Map will render here */}
        <div id="location-map" style={{ height: '100%', width: '100%' }}></div>
      </div>
      <div className='location-item5'>
        <Title text={'ACCESSORIES'}/>
        <div className='accessories'>
          <div className='access-text'>
            <h5>PERSONALISATION</h5>
            <h2>ROLLS-ROYCE BOUTIQUE</h2>
            <p>Our range of personalised accessories, from treadplates to cushions, enables you to tailor and craft your vehicle.</p>
            <Link to='/discover'><h5>DISCOVER <img src={arrow} alt="" /></h5></Link>
          </div>
          <div className='access-img'>
            <img src={access} alt="" />
          </div>
        </div>
        <div className='continue'>
          <div className='continue-title'>
          <h3>CONTINUE YOUR JOURNEY</h3>
          <p>Delve further into stories of inspiring Greatness</p>
          </div>
          <div className='continue-container'>
            <div className='continue-items'>
              <img src={inspire} alt="" />
              <div className='continue-text'>

              <h4>INSPIRING GREATNESS</h4>
              <p>A confluence of Exceptional and extraordinary naratives by Rolls-Royce.</p>
              </div>
            </div>
            <div className='continue-items'>
              <img src={whisper} alt="" />
              <div className='continue-text'>

              <h4>WHISPERS</h4>
              <p>Whispers gives Rolls-Royce owners acces to a world beyond.</p>
              </div>
            </div>
            <div className='continue-items'>
              <img src={discover} alt="" />
              <div className='continue-text'>

              <h4>DISCOVER GHOST SERIES II</h4>
              <p>With its flawsless performance and superior craftsmanship, this distinguised masterpiece was designed to exhilarate.</p>
              </div>
            </div>
          </div>
          <Link to='/inspire'><button className='inspire-btn'>INSPIRING GREATNESS <img src={arrow} alt="" /></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
