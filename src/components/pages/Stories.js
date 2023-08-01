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
    <div className='px-10 mt-12'>
      <h1 className='font-canela text-4xl pb-8'>Stories of Picturing Mexican America</h1>
      <div className='border-t border-gray-900 my-4 w-auto'/>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-4'>
        {stories.length > 0 ? (
          stories.map((s) => (
            <div key={s._id} className='flex flex-col'>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt="" className='w-24 h-auto'/>
              <button onClick={ ()=> navigate(`/stories/${s._id}`)} className=' bg-pink-400 rounded-lg'>Click Me</button>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Stories;
