import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function IndividualStory() {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [error, setError] = useState(null);

    const location = useLocation();
    const storyData = location.state;
 
    useEffect(() => {
        // if data was passed from previous page
        if(storyData){
            setStory(storyData);
        }
        // Page navigated to manually -> no data passed
        else {
            async function fetchStory() {
                try {
                    const response = await axios.post(`https://pma-backend.herokuapp.com/story?id=${id}`);

                    // Error handling
                    if (response.status !== 200) {
                        setError(`Error: ${response.statusText}`);
                        return;
                    }

                    setStory(response.data);
                } catch (error) {
                    console.error("Error fetching story:", error);
                    setError("There was a problem fetching the story. Please try again later.");
                }
             }
            fetchStory();
        }
    }, [id, storyData]);

    return (
        <div>
            {story ? (
                <div className='flex flex-col'>
                    <div className='bg-pma-dark-orange flex flex-col items-center text-white'>
                        <img src={story.imageUrls.length > 0 ? story.imageUrls[0] : null} alt="" className='h-96 md:h-124 p-5 pt-10'/>
                        <h1 className='font-canela xs:text-3xl md:text-4xl'>Title to be Added</h1>
                        <p className='font-avenir text-md text-center mb-5'>Blurb also to be Added</p>
                    </div>
                    <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{story.text?.en}</p>
                    <div className='border-t border-gray-900 my-4 w-auto mx-10 md:mx-20 pb-10'/>
                </div>
            ) : (
                <div>
                    { error ? (
                        <div className='font-avenir'>{error}</div>
                    ) : (
                        <p className='font-avenir'>Loading...</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default IndividualStory;

