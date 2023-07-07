import React from 'react'
import EmailSub from '../EmailSub'

const About = () => {
  return (
    <div>
      <div>
        <img src='/images/home1.png' alt=''/>
      </div>
      <div>
        <h1>Recovering LA's Erased Mexican History</h1>
        <p>Welcome! ...</p>
      </div>
      <div className='px-8 py-20'>
        Stories
      </div>
      <div className='overflow-hidden relative flex items-center'>
        <img src='/images/home2crop.png' alt='' className='w-full object-cover'/>
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
    </div>
  )
}

export default About
