import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stories = () => {
  const [stories, setStories] = useState([]); // Initial state is an empty array

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.post('http://localhost:3001/stories', {
          numStories: 5,
            client: {
                version: '37' // Set version to 35 or more
              },
        });

        console.log("fetched stories", res.data)
        setStories(res.data); 
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      }
    };

    fetchStories();
  }, []); // Dependency array is empty to run only once on component mount

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.length > 0 ? (
          stories.map((s, id) => (
            <div key={id}>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt=""></img>
              <p>{s.text?.en}</p>
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
