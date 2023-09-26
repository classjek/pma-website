import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

// see if these are needed
//import { useNavigate, useLocation } from 'react-router-dom';

const MisTerras = () => {

  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  const navigate = useNavigate();

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
        const res = await axios.post(`https://pma-backend.herokuapp.com/places`, {
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

    // Hover effects for map markers
    function addMarkerHoverEffect(marker, placeName, infoWindow, place){
      // Change icon on hover and display name
      marker.addListener('mouseover', function() {
        if(place.placeType === "rancho"){
          marker.setIcon('marker_rancho_selected.svg');
        } else {
          marker.setIcon('marker_street_selected.svg');
        }
        infoWindow.setContent(placeName);
        infoWindow.setContent(
          `<div class="bg-white rounded shadow-md">
          <img src=${place.artifacts[0].imageUrl} alt='' class="h-48 w-auto pb-3"/>
        <h2 class="text-l font-canela">${placeName}</h2>
        </div>`
      )
        infoWindow.open(map, marker);
      });

      marker.addListener('click', function(){
        //pass 'place' object to route 
        // Street markers are unclickable due to lack of data
        if (place.placeType === "rancho"){
          navigate(`/misterras/${place._id}`, {state: place});
        }
      });

      marker.addListener('mouseout', function() {
        if (place.placeType === "rancho"){
          marker.setIcon('marker_rancho.svg');
        } else {
          marker.setIcon('marker_street.svg');
        }
        infoWindow.close();
      });
    };


    if(map){

      //initialize infoWindow
      const infoWindow = new window.google.maps.InfoWindow({
        disableAutoPan: true
      });

      if(places.length > 0){
        places.forEach(place => {

          // Draw a street 
          if(place.placeType === "street"){

            // Add Street Marker
            const streetMarker = new window.google.maps.Marker({
              position: { lat: place.lat, lng: place.lon},
              map: map,
              icon: 'marker_street.svg'
            })

            streetMarker.setMap(map);

            // Add hover effects
            addMarkerHoverEffect(streetMarker, place.name?.en, infoWindow, place);

            // If the street has an associated line
            if (Array.isArray(place.line)) {
              const streetPath = place.line.map(coords => ({
                lat: coords[0],
                lng: coords[1]
              }));

              const streetLine = new window.google.maps.Polyline({
                path: streetPath,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 4
              });

              streetLine.setMap(map);

            }

          } else {
          // Element is a Rancho
          const marker = new window.google.maps.Marker({
            position: { lat: place.lat, lng: place.lon},
            map: map,
            icon: 'marker_rancho.svg'
          });

          addMarkerHoverEffect(marker, place.name?.en, infoWindow, place);
          }

        });
      }

      // Add Search bar
      const input = document.getElementById("pac-input");
      const searchBox = new window.google.maps.places.SearchBox(input);

      // Bias the Searchbox results towards the current map's viewport
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      })

      //search function
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0){
          return;
        }

        //display searched place
        const bounds = new window.google.maps.LatLngBounds();
        places.forEach(place => {
          if(!place.geometry){
            console.log("Returned place contains no geometry");
            return;
          }

          //if geometry(location) is available
          if(place.geometry.viewport){
            //use viewport if available
            bounds.union(place.geometry.viewport);
          } else {
            //otherwise, use the location and extend the bounds
            bounds.extend(place.geometry.location);
          }
        });

        map.fitBounds(bounds);
      })
    }
  }, [map, places, navigate]);

  return (
    <div>
      <div className=' bg-blue-200 w-full h-140'>
        <div className="absolute top-38 left-2 z-10 border p-2 rounded-md bg-white opacity-90 flex items-center">
          <i className="fas fa-search mr-2"></i>
          <input id="pac-input" className="outline-none" type="text" placeholder="Enter an address" />
        </div>
        {showInfo && (
          <div className='absolute w-1/3 top-36 right-2 z-10 p-2 bg-map-orange opacity-80 text-black'>
            <button className="absolute top-0 right-0 mt-1 mr-1 text-lg font-bold leading-none text-gray-800 hover:text-gray-500"
              onClick={() => setShowInfo(false)}
            > &times; </button>
            <p className='font-avenir text-sm p-1'>Our interactive map displays images of 29th century Mexican Los Angeles. Our goal is to change users' perception of space, to make clear the consistent, enduring presence of Latinas in the United States.</p>
          </div> )}
        <div id="map" className='h-148 w-screen'></div>
      </div>
    </div>
  )
}

export default MisTerras;
