import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Stories = () => {
  const [stories, setStories] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation()

  //parse page from query parameters or default to 1
  const urlParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(urlParams.get("page")) || 1);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const res = await axios.post(`http://localhost:3001/stories?page=${page}`, {
          numStories: 20,
            client: {
                version: '37' // Set version to 35 or more
              },
        });

        console.log("fetched stories", res.data)
        setStories(res.data); 
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false); //if data loads with no error 
      }
    };

    fetchStories();
  }, [page]); // Dependency array is empty to run only once on component mount

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    navigate(`/stories?page=${nextPage}`);
  };

  const handlePrevious = () => {
    const previousPage = page - 1;
    setPage(previousPage);
    if (previousPage === 1){
      navigate(`/stories`);
    } else {
      navigate(`/stories?page=${previousPage}`);
    }
  };

  return (
    <div className='px-10 mt-12'>
      <h1 className='font-canela text-4xl pb-2'>Stories of Picturing Mexican America</h1>
      <div className='border-t border-gray-900 my-4 mb-12 w-auto'/>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 pb-10'>
        {stories.length > 0 ? (
          stories.map((s) => (
            <div key={s._id} className='flex flex-col items-center'>
              <img src={s.imageUrls.length > 0 ? s.imageUrls[0] : null} alt="" className=' h-48 w-auto'/>
              <button onClick={ ()=> navigate(`/stories/${s._id}`)}>
                <h1 className='font-canela text-lg p-1'>Temp Title</h1>
              </button>
              <p className='font-avenir text-xs text-gray-600'>July 28th, 2023</p>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div className='border-t border-gray-900 m mb-12 w-auto'/>
      <div className='flex justify-between'>
        {page === 1 ? (
          <div />
        ) : (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {loading === false && stories.length < 20 ? (
          <div />
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Stories;
