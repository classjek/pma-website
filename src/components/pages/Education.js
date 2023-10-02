import React from 'react'
import StoryWidget from '../widgets/StoryWidget'
import { BsFiletypePdf } from 'react-icons/bs'
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Education = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-lg px-10'>
        <div className='mt-5 mb-5 md:mt-10 md:mb-10 flex justify-center flex-col items-center'>
          <img src='/images/education.png' alt='' className='w-96 relative'/>
          <p className='font-avenir text-xs text-gray-700 mt-1'>Image Courtesy Sylvia Mendez School</p>
        </div>
        <div className='mt-5 md:mt-20 mb-10'>
          <h1 className='font-canela text-4xl'>Using Picturing Mexican America In The Classroom</h1>
          <p className='font-avenir'>
            Here we plan to include resources and teaching ideas for working with Picturing Mexican America 
            and related archival material. Coming soon - but if you are a teacher interested in working with us or designing 
            assignments around our content, please use the "Contact" form to be in touch.
          </p>
        </div>
      </div>
      <div className='px-20 mt-5'>
        <h1 className='font-canela text-2xl'>Sample Lesson Plans</h1>
        <div className='border-t border-gray-900 mb-6 w-auto'/>
        <h1 className='font-canela text-xl mb-1'>Fourth Grade</h1>
        <div className='flex flex-col'>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-2 font-avenir font-bold'>Mis Tierras (My Land)</h1>
              <h1 className='text-xl mb-4 font-avenir font-bold'>4th Grade</h1>
              <p className='font-avenir'>
                {/* to be added */}
              </p>
              <a href='https://www.picturingmexicanamerica.com/' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-2 font-avenir font-bold'>LA Selfie</h1>
              <h1 className='text-xl mb-4 font-avenir font-bold'>4th Grade</h1>
              <p className='font-avenir'>
                { /* to be added */}
              </p>
              <a href='https://www.picturingmexicanamerica.com/' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-2 font-avenir font-bold'>Simulation: Redistributing Mission Lands</h1>
              <h1 className='text-xl mb-4 font-avenir font-bold'>4th Grade</h1>
              <p className='font-avenir'>
                {/* to be added */}
              </p>
              <a href='https://www.picturingmexicanamerica.com/' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
        </div>
        <h1 className='font-canela text-xl mb-1 mt-2'>Middle School</h1>
        <div className='flex flex-col'>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-2 font-avenir font-bold'>Simulation: Redistributing Mission Lands</h1>
              <h1 className='text-xl mb-4 font-avenir font-bold'>8th Grade</h1>
              <p className='font-avenir'>
                { /* to be added */}
              </p>
              <a href='https://www.picturingmexicanamerica.com/' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
        </div>
        <h1 className='font-canela text-xl mb-1 mt-2'>High School</h1>
        <div className='flex flex-col'>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-2 font-avenir font-bold'>Simulation: Redistributing Mission Lands</h1>
              <h1 className='text-xl mb-4 font-avenir font-bold'>10th Grade</h1>
              <p className='font-avenir'>
                { /* to be added */}
              </p>
              <a href='https://www.picturingmexicanamerica.com/' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
