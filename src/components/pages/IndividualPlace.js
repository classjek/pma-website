import React from 'react'
import { useLocation } from 'react-router-dom'

const IndividualPlace = () => {

    const location = useLocation();
    const placeData = location.state;

    console.log(placeData);
    console.log(placeData.artifacts);
    
    //do image stuff like individualStory

  return (
    <div>
      {placeData && (
        <div>
            <div>
            {placeData ? (
                <div className='flex flex-col'>
                    <div className='bg-pma-dark-orange flex flex-col items-center text-white'>
                        <img src={placeData.artifacts[0].imageUrl} alt='' />
                        <h1 className='font-canela xs:text-3xl md:text-4xl'>Title to be Added</h1>
                        <p className='font-avenir text-md text-center mb-5'>Blurb also to be Added</p>
                    </div>
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
