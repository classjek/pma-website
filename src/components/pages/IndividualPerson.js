import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const IndividualPerson = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const selfieData = location.state.selfieData;
    const { id } = useParams();
    // Set display the the requested item
    const display = selfieData.find(item => item._id === id);

  return (
    <div>
        {/* change this to something else because individualdata might exist but be bad */}
      { selfieData ? (
        <div className='flex flex-col'>
            <div className='bg-pma-green flex flex-col items-center text-white text-center'>
                <img src={display.artifacts[0].imageUrl} alt={display.artifacts[0].title?.en} className='h-96 md:h-124 p-5 pt-10'/>
                <h1 className='font-canela xs:text-3xl md:text-4xl'>{selfieData[0].person[0].name?.en}</h1>
                { (display.person[0].birthYear || display.person[0].deathYear) && (
                    <div className='flex'>
                        {display.person[0].birthYear ? <h2 className='p-1'>BORN: {display.person[0].birthYear}</h2> : <h2>BORN: ~</h2>}
                        {display.person[0].deathYear ? <h2 className='p-1'>BORN: {display.person[0].deathYear}</h2> : <h2>BORN: ~</h2>}
                    </div>
                )} 
                <p className='font-avenir xs:text-md md:text-l pb-5 pt-2 px-48'>{selfieData[0].artifacts[0].caption?.en}</p>
            </div>
            <div className='mx-16'>
                <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{selfieData[0].person[0].description?.en}</p>
                <h1 className='font-avenir font-bold'>OTHER MATCHES</h1>
                <div className='border-t border-gray-900 mt-2 mb-4 w-auto'/>
                <div className='flex justify-around'>
                    { selfieData.slice(0, 4).filter(result => result._id !== id).map((result, index) => (
                    <div key={index} className={`flex flex-col items-center m-2 ${index === 2 ? 'hidden md:flex' : ''} ${index === 1 ? 'hidden sm:flex' : ''}`}>
                        <img src={result.artifacts.length > 0 ? result.artifacts[0].imageUrl : null} alt='More selfie responses' className='object-fit h-64'/>
                        <div className='bg-pma-light-orange w-full overflow-hidden'>
                        <h1 className='font-avenir text-sm md:text-m line-clamp-3 mt-5 mx-4'>{result.person[0].name?.en}</h1>
                        <button onClick = {() => {
                            navigate(`/laselfie/${result._id}`, { state: { selfieData: selfieData } } ) 
                            window.scrollTo(0,0);
                        }}>
                            <p className='font-avenir text-s text-gray-800 mx-5 mb-5 mt-2 hover:underline'>Read Story</p>
                        </button>
                    </div>
                    </div>
                    ))}
                </div>      
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
