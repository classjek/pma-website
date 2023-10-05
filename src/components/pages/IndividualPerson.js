import React, { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import axios from "axios";

const IndividualPerson = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const selfieData = location.state?.selfieData;
    const { id } = useParams();
    const [displayPerson, setDisplayPerson] = useState(null);
    const [displayArtifacts, setDisplayArtifacts] = useState(null);

    useEffect(() => {
      // if user came here from La Selfie and selfieData exists
      if(selfieData) {
        const foundItem = selfieData.find(item => item.person._id === id);
        setDisplayPerson(foundItem.person);
        setDisplayArtifacts(foundItem.person.artifacts);
        console.log('recieved data at individual', foundItem.person);
      } 
      // if selfie data doesn't exist, make API call 
      else { 
        async function fetchPerson(){
          try {
            const response = await axios.post(`https://pma-backend.herokuapp.com/person?id=${id}`);
            console.log("response ig", response.data);
            setDisplayPerson(response.data[0]);
            setDisplayArtifacts(response.data[0].artifacts);
          } catch (error){
              console.error("Error fetching person", error);
          }
        }
        fetchPerson();
      }
    }, [id, selfieData]);

    return (
      <div>
          {/* change this to something else because individualdata might exist but be bad */}

        { displayPerson && displayArtifacts ? (
          <div className='flex flex-col'>
            <div className='bg-pma-green flex flex-col items-center text-white text-center'>
                <img src={displayArtifacts[0].imageUrl} alt={displayArtifacts[0].title?.en} className='h-96 md:h-124 p-5 pt-10'/>
                <h1 className='font-canela xs:text-3xl md:text-4xl'>{displayPerson.name?.en}</h1>
                { (displayPerson.birthYear || displayPerson.deathYear) && (
                    <div className='flex'>
                        {displayPerson.birthYear ? <h2 className='p-1 font-avenir'>BORN: {displayPerson.birthYear}</h2> : <h2 className='p-1 font-avenir'>BORN: ~</h2>}
                        {displayPerson.deathYear ? <h2 className='p-1 font-avenir'>DIED: {displayPerson.deathYear}</h2> : <h2 className='p-1 font-avenir'>DIED: ~</h2>}
                    </div>
                )} 
                <p className='font-avenir xs:text-md md:text-l pb-5 pt-2 px-48'>{displayArtifacts[0].caption?.en}</p>
            </div>
            <div className='mx-16 mb-8'>
                <p className='font-avenir text-s text-center pt-8 pb-4 px-10 md:px-32'>{displayPerson.description?.en}</p>
                { selfieData && 
                <div>
                <h1 className='font-avenir font-bold'>OTHER MATCHES</h1>
                <div className='border-t border-gray-900 mt-2 mb-4 w-auto'/>
                <div className='flex justify-around'>
                    { selfieData.slice(0, 5).filter(result => result.person._id !== id).map((result, index) => (
                    <div key={index} className={`flex flex-col items-center m-2 ${index === 2 ? 'hidden md:flex' : ''} ${index === 1 ? 'hidden sm:flex' : ''}`}>
                        <img src={result.person.artifacts.length > 0 ? result.person.artifacts[0].imageUrl : null} alt='More selfie responses' className='object-fit h-64'/>
                        <div className='bg-pma-light-orange w-full overflow-hidden'>
                        <h1 className='font-avenir text-sm md:text-m line-clamp-3 mt-5 mx-4'>{result.person.name?.en}</h1>
                        <button onClick = {() => {
                            navigate(`/laselfie/${result.person._id}`, { state: { selfieData: selfieData } } ) 
                            window.scrollTo(0,0);
                        }}>
                            <p className='font-avenir text-s text-gray-800 mx-5 mb-5 mt-2 hover:underline'>Read Story</p>
                        </button>
                    </div>
                    </div>
                    ))}
                </div>   
                </div>
              } 
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
