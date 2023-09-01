import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const StoryWidget = () => {
const [stories, setStories] = useState([]);

//can probably remove this

const navigate = useNavigate();

useEffect(() => {
  const fetchStories = async () => {
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
    }
  };

  fetchStories();
}, []);

  return (
    <div className='px-10'>
      <div className='flex justify-around'>
        {stories.length > 0 ? (
          stories.map((s, index) => (
            <div key={s._id} className={`flex flex-col items-center m-2 ${index === 2 ? 'hidden md:flex' : ''} ${index === 1 ? 'hidden sm:flex' : ''}`}>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt="" 
                className=' h-40 md:h-64 w-auto'
                onLoad={(e) => {
                  // When the image is loaded, set the width of the container div
                  e.target.parentNode.style.width = `${e.target.offsetWidth}px`;
                }}
              />
              <div className='bg-pma-light-orange w-full overflow-hidden'>
                <h1 className='font-avenir text-sm md:text-m line-clamp-3 mt-5 mx-4'>{s.text?.en}</h1>
                <button onClick={ ()=> navigate(`/stories/${s._id}`)}>
                  <p className='font-avenir text-s text-gray-800 mx-5 mb-5 mt-2 underline'>Read More</p>
                </button>
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
