import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function IndividualStory() {
    const { id } = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        async function fetchStory() {
            try {
                const response = await axios.post(`http://localhost:3001/stories/${id}`);
                setStory(response.data);
            } catch (error) {
                console.error("Error fetching story:", error);
            }
         }
         
         fetchStory();
    }, [id]);

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
                <p>Loading...</p>
            )}
        </div>
    )
}

export default IndividualStory;

