import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const StoryWidget = () => {
const [story, setStory] = useState(null);

//can probably remove this

const navigate = useNavigate();

useEffect(() => {
  const fetchStories = async () => {
    try {
      const res = await axios.post('https://pma-backend.herokuapp.com/story?numStories=1&version=37', {
        numStories: 3,
        client: {
          version: '37'
        },
      });

      console.log('story got', res.data);
      setStory(res.data);
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
        { story ? (
            <div className="relative">
                <img src={story[0].imageUrls[0]} alt="" className="w-full h-auto" />
            
                <div className="absolute top-8 left-0 bg-pma-orange text-white px-3 pt-2 pb-1 text-sm font-avenir flex items-center justify-center">
                    STORY OF THE WEEK
                </div>
            
                <div className="absolute bottom-8 right-0 bg-white p-2">
                    <div className='mx-auto px-4'>
                        <h1 className='font-canela text-xl py-1'>Story Name</h1>
                        <h2 className='font-avenir underline text-pma-dark-orange pb-2'>Read More</h2>
                    </div>
                </div>
            </div>
        ) : (
        <div>
            loading...
        </div>)}
      </div>
    </div>
  )
}

export default StoryWidget