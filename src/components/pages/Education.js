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
          <br/>
          <p className='font-avenir'>
            Right now we currently only have lesson plans for fourth grade; however, we are actively working towards expanding 
            the curriculum beyond the elementary level. If you are a teacher interested in working with us or would like be involved 
            in designing assignments and lesson plans around our content, please contact us.
          </p>
        </div>
      </div>
      <div className='px-20 mt-5'>
        <h1 className='font-canela text-2xl'>Sample Lesson Plans for Fourth Grade</h1>
        <div className='border-t border-gray-900 mb-6 w-auto'/>
        <div className='flex flex-col'>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-4 font-avenir font-bold'>Mis Tierras (My Land)</h1>
              <p className='font-avenir'>
                <b>Objectives:</b> Students will locate the rancho that is closet to their neighborhood and compare 
                the land usage during the Mexican period of California history and present day.
              </p>
              <br />
              <p className='font-avenir'>
                <b>Summary:</b> Students use the Mis Terras (My Land) feature to locate their neighborhood. Students 
                complete a double bubble thinking map or venn diagram comparing and contrasting the land during the 
                Mexican period vs. now. The teacher leads a class discussion on what caused the changes over time.
              </p>
              <br />
              <a href='http://linkedin.com/in/jake-ekoniak' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-4 font-avenir font-bold'>LA Selfie</h1>
              <p className='font-avenir'>
                <b>Objectives:</b> Students will assume the identity of an important figure in Mexican America and 
                will demonstrate their knowledge of life in Mexican America by writing a journal entry.
              </p>
              <br />
              <p className='font-avenir'>
                <b>Summary:</b> Students us ethe LA Selfie feature to take a selfie and match to a Mexican Historical portrait. 
                Students will write a journal entry as if they wer the person in the portrait. 
              </p>
              <br />
              <a href='http://linkedin.com/in/jake-ekoniak' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-4 font-avenir font-bold'>Simulation: Redistributing Mission Lands</h1>
              <p className='font-avenir'>
                <b>Objectives:</b> Students will use their knowledge of secularization to come up with a 
                a plan to present to Mexican Congress
              </p>
              <br />
              <p className='font-avenir'>
                <b>Summary:</b> This lessons should be taught ofer 3-4 days. Students will be assigned the identity 
                of an important figure in Mexican American through the LA Selfie feature in the Picturing Mexican 
                American app and will work in teams to devise plans for secularizing and redistributing mission lands. 
                They will have to present thier plasn to the Mexican Congress who will vote on the best one.
              </p>
              <br />
              <a href='http://linkedin.com/in/jake-ekoniak' className='flex'>
                <p className='mr-1 font-avenir text-sm'>View PDF </p>
                <BsFiletypePdf/>
              </a>
            </div>  
          </div>
        </div>
      </div>
      <div className='mx-10 px-8 xs:py-10 md:py-20'>
        <h1 className='font-avenir font-bold'>NEWEST STORIES</h1>
        <div className='border-t border-gray-900 mb-6 mt-2 w-auto'/>
        <StoryWidget/>
        <button onClick={ () => navigate('/stories')} className='flex hover:underline'>
          <h1 className='font-avenir text-lg text-gray-600 mt-8'>More Stories</h1>
          <FiArrowRight className='text-xl text-gray-600 mt-9'/>
        </button>
      </div>
    </div>
  )
}

export default Education
