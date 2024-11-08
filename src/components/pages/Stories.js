import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Search from '../widgets/Search';
import StoryWidget from '../widgets/StoryWidget';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(urlParams.get("page")) || 1);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const res = await axios.post(`https://pma-backend.herokuapp.com/story?page=${page}&numStories=20&version=37`);
        console.log("fetched stories", res.data);
        setStories(res.data);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [page]);

  const filteredStories = stories.filter(story =>
    story.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    navigate(`/stories?page=${nextPage}`);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    const previousPage = page - 1;
    setPage(previousPage);
    if (previousPage === 1) {
      navigate(`/stories`);
    } else {
      navigate(`/stories?page=${previousPage}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white px-10 mt-12">
      <h1 className='font-canela text-4xl pb-2'>Stories of Picturing Mexican America</h1>
      <div className='border-t border-gray-900 my-4 mb-12 w-auto'/>
      
      <Search 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {loading ? (
        <div className="h-96">
          <p>loading...</p>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 pb-10'>
            {filteredStories.map((story) => (
              <div key={story._id} className='flex flex-col items-center'>
                <StoryWidget
                  key={story._id}
                  title={story.title || "Temp Title"}
                  category={story.category}
                  description={story.description}
                  image={story.imageUrls?.[0]}
                  onClick={() => navigate(`/stories/${story._id}`, {state: story})}
                />
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 font-avenir">
                No stories found matching your search.
              </p>
            </div>
          )}
        </>
      )}

      <div className='border-t border-gray-900 mb-4 w-auto'/>
      <div className='flex justify-between pb-8'>
        {page === 1 ? (
          <div />
        ) : (
          <button onClick={handlePrevious} className='font-avenir text-gray-600 hover:underline'>PREVIOUS</button>
        )}
        {loading === false && stories.length < 20 ? (
          <div />
        ) : (
          <button onClick={handleNext} className='font-avenir text-gray-600 hover:underline'>NEXT</button>
        )}
      </div>
    </div>
  );
};

export default Stories;
