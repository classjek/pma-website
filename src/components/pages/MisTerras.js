import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

// see if these are needed
//import { useNavigate, useLocation } from 'react-router-dom';

const MisTerras = () => {

  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);

  // create map instance 
  useEffect(()=> {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(async ()=> {
      setTimeout(async () => { 
        const { Map } = await window.google.maps.importLibrary("maps");
      
        const mapInstance = new Map(document.getElementById("map"), {
          center: { lat: 33.9522, lng: -118.2437 },
          zoom: 10,
          mapTypeId: 'roadmap',
          mapId: '4bce721c1d3a22e5',
        });

        setMap(mapInstance);
      }, 0);
    });

  }, []);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const res = await axios.post(`http://localhost:3001/places`, {
            client: {
                version: '37' // Set version to 35 or more
              },
        });

        console.log("fetched places", res.data);
        setPlaces(res.data.result); 
      } catch (error) {
        console.error('Failed to fetch places:', error);
      }
    };

    fetchMarkers();
  }, []);


  useEffect(()=> {

    // hover effects for map markers
    function addMarkerHoverEffect(marker, placeName, infoWindow){
      //change icon on hover and display name
      marker.addListener('mouseover', function() {
        marker.setIcon('marker_rancho_selected.svg')
        infoWindow.setContent(placeName);
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', function() {
        marker.setIcon('marker_rancho.svg');
        infoWindow.close();
      });
    };


    if(map){

      //initialize infoWindow
      const infoWindow = new window.google.maps.InfoWindow();

      if(places.length > 0){
        places.forEach(place => {
          const marker = new window.google.maps.Marker({
            position: { lat: place.lat, lng: place.lon},
            map: map,
            icon: 'marker_rancho.svg'
          });

          console.log(place.name?.en);
          addMarkerHoverEffect(marker, place.name?.en, infoWindow);
          //console.log("new location", place.lat, place.lon);
        });
      }

      // Add Search bar
      const input = document.getElementById("pac-input");
      const searchBox = new window.google.maps.places.SearchBox(input);

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
      // Bias the Searchbox results towards the current map's viewport
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      })
    }
  }, [map, places]);

  return (
    <div>
      <div className=' bg-blue-200 w-full h-140'>
            <div id="map" className='h-148 w-screen'></div>
      </div>
    </div>
  )
}

export default MisTerras;
