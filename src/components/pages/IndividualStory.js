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
                    <div className='bg-pma-dark-orange flex justify-around'>
                        <img src={story.imageUrls.length > 0 ? story.imageUrls[0] : null} alt="" className='w-2/5 h-auto p-16'/>
                    </div>
                    <p className='text-xs p-5'>{story.text?.en}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default IndividualStory;

