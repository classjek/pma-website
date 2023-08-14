import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';

// see if these are needed
import { useNavigate, useLocation } from 'react-router-dom';

const MisTerras = () => {

  const [places, setPlaces] = useState([]);
  
  useEffect(()=> {
    const loader = new Loader({
      apiKey: "AIzaSyAY7hh4EYU3tiudyiAMX-SubD_0Tpc3u6Q",
      version: "weekly",
    });

    loader.load().then(async ()=> {
      const { Map } = await window.google.maps.importLibrary("maps");

      new Map(document.getElementById("map"), {
        center: { lat: 33.9522, lng: -118.2437 },
        zoom: 10,
        mapTypeId: 'roadmap',
        mapId: '4bce721c1d3a22e5',
      });
    });

    const fetchMarkers = async () => {
      try {
        const res = await axios.post(`http://localhost:3001/places`, {
          numStories: 20,
            client: {
                version: '37' // Set version to 35 or more
              },
        });

        console.log("fetched places", res.data)
        setPlaces(res.data); 
      } catch (error) {
        console.error('Failed to fetch places:', error);
      }
    };

    fetchMarkers();

  }, []);

  return (
    <div>
      <div className=' bg-blue-200 w-full h-140'>
            <div id="map" className='h-148 w-screen'></div>
      </div>
    </div>
  )
}

export default MisTerras
