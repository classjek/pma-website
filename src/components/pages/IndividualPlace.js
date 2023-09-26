import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';

const IndividualPlace = () => {

    const location = useLocation();
    const placeData = location.state;

    const [showPopup, setShowPopup] = useState(false);
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [place, setPlace] = useState(null);
    const { id } = useParams();

    useEffect(()=> {
        // if data was passed from previous page
        if(placeData){
            setPlace(placeData);
        }
        // page navigated to manually -> request data
        else {
            async function fetchPlace(){
                try {
                    const response = await axios.post(`https://pma-backend.herokuapp.com/place?version=37&id=${id}`);
                    setPlace(response.data[0]);
                } catch (error) {
                    console.error("Failed to fetch place:", error);
                }
            }
            fetchPlace();
        }
    }, [id, placeData])

    const handleArtifactClick = (artifact) => {
        if(artifact.caption?.en.length < 4){
            return;
        }
        setSelectedArtifact(artifact);
        setShowPopup(true);
    }

  return (
    <div>
      {place && (
        <div>
            <div>
            {place ? (
                <div className='flex flex-col'>
                    <div className='bg-pma-green flex flex-col items-center text-white'>
                        <img src={place.artifacts[0].imageUrl} alt={place.artifacts[0].title?.en} onClick={()=> handleArtifactClick(place.artifacts[0])} className='h-96 md:h-124 p-5 pt-10'/>
                        <h1 className='font-canela xs:text-3xl md:text-4xl pb-5'>{place.name?.en}</h1>
                    </div>
                    
                    {/* Display the next 3 artifacts if they exist*/}
                    {place.artifacts.length > 1 && (
                        <div className='flex justify-around align-center space-x-4 h-64 pt-5 px-20'>
                            {place.artifacts.slice(1, 4).map((artifact, index) => (
                                <div key={index} className="relative" onClick={()=> handleArtifactClick(artifact)}>
                                    <img 
                                        src={artifact.imageUrl} 
                                        alt={artifact.title?.en} 
                                        title={artifact.caption?.en}  // Tooltip on hover for description
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                    
                            ))}
                        </div>
                    )}

                    {/* Popup to give more information about artifacts */}
                    {showPopup && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                            <div className=" bg-pma-light-orange w-3/4 h-3/4 p-8 rounded-lg shadow-lg relative">
                                <button className="absolute top-2 right-4 text-xl text-gray-800 hover:text-gray-500" onClick={() => setShowPopup(false)}>&times;</button>
                                <div className='flex flex-col justify-center items-center h-full p-5'>
                                    <img src={selectedArtifact.imageUrl} alt={selectedArtifact.title?.en} className='max-h-64 w-auto'/>
                                    <div className='font-avenir text-sm text-center px-10 mt-4 flex-grow'>{selectedArtifact.caption?.en}</div>
                                    <br/>
                                    <div className='font-avenir text-gray-700 text-sm text-center px-10 mt-4 flex-grow'>{selectedArtifact.date}</div>
                                    <div className='font-avenir text-gray-700 text-sm text-center px-10 flex-grow'>{selectedArtifact.credit?.en}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{place.description?.en}</p>
                    {place.artifacts.length > 4 && (
                        <div className='flex justify-around align-center space-x-4 h-64 pt-5 px-20 pb-12'>
                            {place.artifacts.slice(4, 8).map((artifact, index) => (
                                <div key={index} className="relative" onClick={()=> handleArtifactClick(artifact)}>
                                    <img 
                                        src={artifact.imageUrl} 
                                        alt={artifact.title?.en} 
                                        title={artifact.caption?.en}  // Tooltip on hover for description
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                    
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
      )}
    </div>
  )
}

export default IndividualPlace;
