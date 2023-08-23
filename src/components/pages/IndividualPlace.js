import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const IndividualPlace = () => {

    const location = useLocation();
    const placeData = location.state;

    const [showPopup, setShowPopup] = useState(false);
    const [selectedArtifact, setSelectedArtifact] = useState(null);

    console.log('Passed Data', placeData);
    console.log('Artifacts', placeData.artifacts);

    const handleArtifactClick = (artifact) => {
        setSelectedArtifact(artifact);
        setShowPopup(true);
    }
    
    //do image stuff like individualStory

  return (
    <div>
      {placeData && (
        <div>
            <div>
            {placeData ? (
                <div className='flex flex-col'>
                    <div className='bg-pma-green flex flex-col items-center text-white'>
                        <img src={placeData.artifacts[0].imageUrl} alt={placeData.artifacts[0].title?.en} onClick={()=> handleArtifactClick(placeData.artifacts[0])} className='h-96 md:h-124 p-5 pt-10'/>
                        <h1 className='font-canela xs:text-3xl md:text-4xl'>{placeData.name?.en}</h1>
                    </div>
                    
                    {/* Display the next 3 artifacts if they exist*/}
                    {placeData.artifacts.length > 1 && (
                        <div className='flex justify-around align-center space-x-4 h-64 px-20'>
                            {placeData.artifacts.slice(1, 4).map((artifact, index) => (
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
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg relative">
                            <button className="absolute top-2 right-2" onClick={() => setShowPopup(false)}>X</button>
                            <img src={selectedArtifact.imageUrl} alt={selectedArtifact.title?.en} />
                            <div>{selectedArtifact.caption?.en}</div>
                        </div>
                    </div>
                    )}

                    <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{placeData.description?.en}</p>

                    <p className='px-10 md:px-20 text-xs text-gray-600 py-4'>Image courtesy of Huntington Library and Botanical Gardens</p>
                    <p className='px-10 md:px-20 text-s text-gray-600 pb-6'>BY PROFESSOR MARISSA LOPEZ</p>
                    <div className='border-t border-gray-900 my-4 w-auto mx-10 md:mx-20'/>
                    <h1 className='text-center p-10'>NEXT STORY?</h1>
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
