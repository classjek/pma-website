import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
  const [stories, setStories] = useState([]); // Initial state is an empty array
  const navigate = useNavigate();

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
          stories.map((s) => (
            <div key={s._id} className='flex justify-around p-10'>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt="" className='w-24 h-auto'/>
              <p className='text-xs p-5'>{s.text?.en}</p>
              <button onClick={ ()=> navigate(`/stories/${s._id}`)} className=' bg-pink-400 rounded-lg'>Click Me</button>
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
