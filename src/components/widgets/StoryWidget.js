import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const StoryWidget = () => {
const [stories, setStories] = useState([]);

//can probably remove this
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

useEffect(() => {
  const fetchStories = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/stories', {
        numStories: 3,
        client: {
          version: '37'
        },
      });

      setStories(res.data);
    } catch (error) {
      console.error('Failed to fetch stories:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchStories();
}, []);

  return (
    <div className='px-10'>
      <div className='flex justify-around'>
        {stories.length > 0 ? (
          stories.map((s) => (
            <div key={s._id} className='flex flex-col items-center'>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt="" 
                className=' h-48 w-auto'
                onLoad={(e) => {
                  // When the image is loaded, set the width of the container div
                  e.target.parentNode.style.width = `${e.target.offsetWidth}px`;
                }}
              />
              <div className='bg-pma-orange w-full'>
                <button onClick={ ()=> navigate(`/stories/${s._id}`)}>
                  <h1 className='font-canela text-sm p-1'>{s.text?.en}</h1>
                </button>
                <p className='font-avenir text-xs text-gray-600'>July 28th, 2023</p>
              </div>
            </div>
          ))
        ) : (
          <p>loading... </p>
        )}
      </div>
    </div>
  )
}

export default StoryWidget
