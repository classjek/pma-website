import React from 'react'
import { useLocation } from 'react-router-dom'

const IndividualPerson = () => {

    const location = useLocation();
    const individualData = location.state.backendData;
    console.log('individual data', individualData);

  return (
    <div>
        {/* change this to something else because individualdata might exist but be bad */}
      { individualData ? (
        <div className='flex flex-col'>
            <div className='bg-pma-green flex flex-col items-center text-white text-center'>
                <img src={individualData[0].artifacts[0].imageUrl} alt={individualData[0].artifacts[0].title?.en} className='h-96 md:h-124 p-5 pt-10'/>
                <h1 className='font-canela xs:text-3xl md:text-4xl'>{individualData[0].person[0].name?.en}</h1>
                { (individualData[0].person[0].birthYear || individualData[0].person[0].deathYear) && (
                    <div className='flex'>
                        {individualData[0].person[0].birthYear ? <h2 className='p-1'>BORN: {individualData[0].person[0].birthYear}</h2> : <h2>BORN: ~</h2>}
                        {individualData[0].person[0].deathYear ? <h2 className='p-1'>BORN: {individualData[0].person[0].deathYear}</h2> : <h2>BORN: ~</h2>}
                    </div>
                )} 
                <p className='font-avenir xs:text-md md:text-l pb-5 pt-2 px-48'>{individualData[0].artifacts[0].caption?.en}</p>
            </div>
            <div className='mx-16'>
                <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{individualData[0].person[0].description?.en}</p>
                <h1 className='font-avenir font-bold'>OTHER MATCHES</h1>
                <div className='border-t border-gray-900 mt-2 mb-4 w-auto'/>
            </div>
        </div>
      )
      :
      ( 
        <div>Loading</div>
      )}
    </div>
  )
}

export default IndividualPerson
