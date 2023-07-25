import React from 'react'
import EmailSub from '../EmailSub'
import Instagram from '../Instagram'

const About = () => {
  return (
    <div>
      <div>
        <img src='/pma-website/images/home1.png' alt=''/>
      </div>
      <div className='px-32 mt-10'> 
        <h1 className='font-canela text-4xl text-center mb-4'>Recovering LA's Erased Mexican History</h1>
        <p className='font-avenir text-md text-center'>
          Welcome! Picturing Mexican America is a cluster of Digital humanities projects
           designed and run by Professor Marissa L0pez at UCLA. We're looking back at the 
           history of Mexican Los Angeles to help us understand our present and undo the 
           systemic erasure of Los Angeles' Mexican past-in a fun way!
          </p>
      </div>
      <div className='px-8 py-20'>
        <h1 className='font-avenir font-bold'>POPULAR STORIES</h1>
        <div className='border-t border-gray-900 my-4 w-auto mb-6'/>
        <div className='flex justify-between mb-6'>
          <div className='mx-auto'>
            <img src='/pma-website/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
            <h1 className='font-canela'>Temp Story Title</h1>
            <p className='font-avenir text-xs'>April 4th, 2022</p>
          </div>
          <div className='mx-auto'>
            <img src='/pma-website/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
            <h1 className='font-canela'>Temp Story Title</h1>
            <p className='font-avenir text-xs'>April 4th, 2022</p>
          </div>
          <div className='mx-auto'>
            <img src='/pma-website/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
            <h1 className='font-canela'>Temp Story Title</h1>
            <p className='font-avenir text-xs'>April 4th, 2022</p>
          </div>
          <div className='mx-auto'>
            <img src='/pma-website/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
            <h1 className='font-canela'>Temp Story Title</h1>
            <p className='font-avenir text-xs'>April 4th, 2022</p>
          </div>

        </div>
        <h1 className='font-avenir text-gray-600'>More Stories</h1>
      </div>
      <div className='overflow-hidden relative flex items-center'>
        <img src='/pma-website/images/home2crop.png' alt='' className='w-full object-cover'/>
          <div className="absolute inset-0 flex items-center justify-end mx-40">
            <div className="relative bg-white bg-opacity-80 text-center p-4 rounded w-1/3 h-1/5 md:min-w-[300px] md:min-h-[130px]">
              <div className="flex">
                <h1 className="text-left font-canela text-base md:text-xl px-4">
                  Let's Collaborate
                </h1>
                <img src='/icons/arrow-right.svg' alt='' className='w-8'></img>
              </div>
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

export default About
