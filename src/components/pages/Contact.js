import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-between mx-36'>
      <div>
        <h1>We'd like to hear from you</h1>
        <p>General Inquiries:         info@pma.com</p>
        <p>Collaboration Inquiries:   collab@pma.com</p>
        <p>Story Submissions:         writing@pma.com</p>
        <img src='/images/contact1.png' alt=''/>
      </div>
      <div>
        <h1>-OR-</h1>
      </div>
      <div>
        <h1>Contact Us</h1>
        <div className='mx-20 my-20 bg-orange-200'>Contact Form Goes Here</div>
      </div>
    </div>
  )
}

export default Contact;
