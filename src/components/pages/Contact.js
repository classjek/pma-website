import React from 'react'
import ContactForm from '../ContactForm'

const Contact = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-9 mx-auto mt-8 mb-6 px-8'>
      <div className='col-span-4 mx-auto'>
          <h1 className='font-canela text-3xl mb-3'>We'd like to hear from you</h1>
          <div className='font-avenir text-s grid grid-cols-2 gap-x-12 mb-4'>
              <p>General Inquiries</p>
              <a href='mailto:info@pma.com'>info@pma.com</a>
              <p>Collaboration Inquiries</p>
              <a href='mailto:collab@pma.com'>collab@pma.com</a>
              <p>Story Submissions</p>
              <a href='mailto:writing@pma.com'>writing@pma.com</a>
          </div>
          <div className='flex justify-center'>
            <img src='/images/contact1.png' alt='' className='px-12 max-h-80'/>
          </div>
      </div>
      <div className='col-span-1 mx-auto lg:block hidden'>
        <h1 className='font-avenir mt-10'>-OR-</h1>
      </div>
      <div className='col-span-4 mx-auto mt-10 lg:mt-0'>
        <h1 className='font-canela text-3xl mb-3'>Contact Us</h1>
        <ContactForm />
        <div>
          <a href='https://www.instagram.com/picturingmexicanamerica'><img src='/icons/instagram_black.svg' alt='' classname='text-black'/></a>
          <a href='https://www.facebook.com/picturingmexicanamerica'><img src='/icons/youtube.svg' alt='' className='text-white'/></a>
          <a href='https://www.youtube.com/channel/UCeuIC2BpuyY0yTau7OCwvCA'><img src='/icons/facebook.svg' alt='' classname='text-white'/></a>
          <a href='https://www.twitter.com/picturingmexam?lang=en'><img src='/icons/twitter.svg' alt='' classname='text-white'/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
