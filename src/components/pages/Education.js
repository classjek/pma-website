import React from 'react'

const Education = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-lg px-10'>
        <div className='ml-10 mt-10 mb-10 flex justify-center flex-col items-center'>
          <div>
            <div className='absolute bg-pma-orange w-96 h-116 top-27 left-38'/> 
            <img src='/images/education.png' alt='' className='w-96 relative'/>
            <p className='font-avenir text-xs text-gray-700 mt-1'>Sylvia Mendez - Mendez v. Westminster 1946</p>
          </div>
        </div>
        <div className='mt-20 mb-10'>
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
        <h1 className='font-canela text-2xl mb-5'>Sample Lesson Plans for Fourth Grade</h1>
        <div className='flex flex-col'>
          <div className=' bg-pma-pink mb-5'>
            <div className='m-8'>
              <h1 className='text-xl mb-5 font-avenir font-bold'>Mis Tierras (My Land)</h1>
              <p className='font-avenir'>
                <b>Objective:</b> Students will locate the rancho that is closet to their neighborhood and compare 
                the land usage during the Mexican period of California history and present day.
              </p>
              <br />
              <p className='font-avenir'>
                <b>Summary:</b> Students use the Mis Terras (My Land) feature to locate their neighborhood. Students 
                complete a double bubble thinking map or venn diagram comparing and contrasting the land during the 
                Mexican period vs. now. The teacher leads a class discussion on what caused the changes over time.
              </p>
              <br />
              <p>View PDF</p>
            </div>  
          </div>
          <div className=' bg-pma-pink mb-5'>
            <h1>LA Selfie</h1>
            <p>
              <b>Objective:</b> Students will assume the identityof an important figurein Mexican America 
              and will demonstrate knowledge of life in Mexican America by writing a journal entry.
            </p>
            <br />
            <p>
              <b>Summary:</b> Students use the LA Selfie feature to take a selfie and match to a Mexican 
              historical portrait. Student will write a journal entry as if they were the person in the 
              portrait.
            </p>
            <br />
            <p>View PDF</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
