import React from 'react'
import Select from 'react-select'

const Stories = () => {
  const options = [
    {value: 'People', label: 'People'},
    {value: 'Places', label: 'Places'},
    {value: 'Women', label: 'Women'},
    {value: 'Food', label: 'Food'},
    {value: 'Music', label: 'Music'},
    {value: 'Crime', label: 'Crime'},
    {value: 'Families', label: 'Families'},
    {value: 'Social Justice', label: 'Social Justice'},
  ]

  return (
    <div>
      <div className='px-10 mt-12'> 
        <h1 className='font-canela text-4xl pb-8'>Stories of Picturing Mexican America</h1>
        
        <Select isMulti options={options} className='max-w-xs pb-5' />
      <div className='border-t border-gray-900 mb-6 w-auto'/>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-y-4'>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>
        <div className='mx-auto'>
          <img src='/images/tempstory.jpg' alt='temp story' loading='lazy' className=' h-44'/>
          <h1 className='font-canela'>Temp Story Title</h1>
          <p className='font-avenir text-xs'>April 4th, 2022</p>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Stories
