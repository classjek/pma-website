import React from 'react';
import emailjs from '@emailjs/browser';

function sendEmail(e, afterFormSubmit){
    e.preventDefault();

    emailjs.sendForm('gmail', 'email_template', e.target, 'Ps1VgVOc4a0ovJAyn')
      .then((result) => {
          console.log(result.text);
          afterFormSubmit();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

const ContactForm = ({afterFormSubmit}) => {
    const handleSubmit = (e) => {
        sendEmail(e, afterFormSubmit);
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 font-avenir gap-3 mb-2'>
            <div className='grid grid-col-1'>
                <label className='text-xs block text-gray-700 mb-1'>FIRST NAME</label>
                <input className='appearance-none block w-full bg-transparent text-gray-700 border-b border-gray-200 focus:outline-none focus:border-pma-orange transition duration-200' type='text' placeholder='Enter your first name' name='from_first' />
            </div>
            <div className='grid grid-col-1'>
                <label className='text-xs block text-gray-700 mb-1'>LAST NAME</label>
                <input className='appearance-none block w-full bg-transparent text-gray-700 border-b border-gray-200 focus:outline-none focus:border-pma-orange transition duration-200' type='text' placeholder='Enter your last name' name='from_last' />
            </div>
            <div className='grid grid-col-1'>
                <label className='text-xs block text-gray-700 mb-1'>EMAIL</label>
                <input className='appearance-none block w-full bg-transparent text-gray-700 border-b border-gray-200 focus:outline-none focus:border-pma-orange transition duration-200' type='email' placeholder='Enter your email' name='email' />
            </div>
            <div className='grid grid-col-1'>
                <label className='text-xs block text-gray-700 mb-1'>PHONE</label>
                <input className='appearance-none block w-full bg-transparent text-gray-700 border-b border-gray-200 focus:outline-none focus:border-pma-orange transition duration-200' type='text' placeholder='Enter your phone number' name='phone'/>
            </div>
        </div>
        <div className='grid grid-cols-1'>
            <label className='text-xs block text-gray-700 mb-1'>MESSAGE</label>
            <textarea className='appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 h-24 focus:outline-none focus:border-pma-orange transition duration-200 resize-none' placeholder='Enter your message' name='message' />
            <input type='submit' value='SUBMIT' className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200'/>
        </div>
    </form>
  );
}

export default ContactForm;