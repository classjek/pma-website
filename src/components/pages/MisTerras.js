import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MisTerras = () => {
  
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
      });
    });
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
