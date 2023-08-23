import React from 'react'

const LaSelfie = () => {
  return (
    <div>
      <div className='grid grid-cols-7 mx-auto px-16 pb-2 pt-2'>
        <div className='col-span-2 flex flex-col items-center justify-center pt-6'>
            <h1 className='font-avenir text-center'>An Heiress?</h1>
            <img src='/images/ArcadiaBandiniStearnsdeBaker.png' alt='Heiress' loading='lazy' className='max-w-xxs'/>
        </div>
        <div className='col-span-3 text-center px-2'>
          <h1 className='font-canela text-4xl'>¿Quién esta usted?</h1>
          <h2 className='font-avenir pb-3'>Take a selfie and match to a Mexican historical portrait</h2>
          <img src='/images/blurryface.png' alt='' loading='lazy' className='mx-auto object-contain max-w-smm'/>
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center pt-6'>
          <h1 className='font-avenir text-center'>A soldier?</h1>
          <img src='/images/JoseRamonPico.png' alt='Soldier' loading='lazy' className='max-w-xxs'/>
        </div>
      </div>
      <div className='flex justify-center pb-12'>
        <input type='submit' value='TAKE A PHOTO' className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200'/>
      </div>
    </div>
  )
}

export default LaSelfie
