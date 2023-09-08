import React from 'react'
import EmailSub from '../EmailSub'
import Instagram from '../Instagram'
import StoryWidget from '../widgets/StoryWidget'
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <img src='/images/home1.png' alt=''/>
      </div>
      <div className='xs:px-10 md:px-32 mt-10'> 
        <h1 className='font-canela xs:text-3xl md:text-4xl text-center mb-4'>Recovering LA's Erased Mexican History</h1>
        <p className='font-avenir text-md text-center'>
          Welcome! Picturing Mexican America is a cluster of Digital humanities projects
           designed and run by Professor Marissa L0pez at UCLA. We're looking back at the 
           history of Mexican Los Angeles to help us understand our present and undo the 
           systemic erasure of Los Angeles' Mexican past-in a fun way!
          </p>
      </div>
      <div className='mx-10 px-8 xs:py-10 md:py-16'>
        <h1 className='font-avenir font-bold'>POPULAR STORIES</h1>
        <div className='border-t border-gray-900 mb-6 mt-2 w-auto'/>
        <StoryWidget/>
        <button onClick={ () => navigate('/stories')} className='flex hover:underline'>
          <h1 className='font-avenir text-lg text-gray-600 mt-8'>More Stories</h1>
          <FiArrowRight className='text-xl text-gray-600 mt-9'/>
        </button>
      </div>
      <div className='overflow-hidden relative flex items-center'>
        <img src='/images/home2crop.png' alt='' className='w-full object-cover'/>
          <div className="absolute inset-0 flex items-center justify-end mx-40">
            <div className="relative bg-white bg-opacity-80 text-center p-4 rounded w-1/3 h-1/5 md:min-w-[300px] md:min-h-[130px]">
              <a href='https://mailchi.mp/8bb2d79e8e70/sign-up' className="flex hover:underline">
                <h1 className="text-left font-canela text-base md:text-xl pl-3 pr-1 pt-2">
                  Let's Collaborate
                </h1>
                <img src='/icons/arrow-right.svg' alt='' className='w-8'></img>
              </a>
                  <p className="text-left text-sm md:text-base px-4">
                    We're always looking for writers, educators, and organizations to work with!
                  </p>
            </div>
          </div>
      </div>
      <div>
        <EmailSub/>
      </div>
      <div className='m-10'>
        <Instagram />
      </div>
    </div>
  )
}

export default Home
