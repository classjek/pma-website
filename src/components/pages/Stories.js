import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const Stories = () => {
  const [place, setPlaces] = useState([]); // Initial state is an empty array

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.post(API_URL+'/places', {
            client: {
                version: '37' // Set version to 35 or more
              },
        });

        console.log("fetched places", res.data)
        setPlaces(res.data.result); 
      } catch (error) {
        console.error('Failed to fetch places:', error);
      }
    };

    fetchPlaces();
  }, []); // Dependency array is empty to run only once on component mount

  return (
    <div>
      <h1>Places</h1>
      <ul>
        {place.length > 0 ? (
            place.map((p, index) => (
                <div key={index}>
                    <p>{p.name?.en}</p>
                </div>
            ))
        ) : (
            <p>loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Stories;
