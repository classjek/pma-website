import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-28 mb-20 gap-x-12'>
          <h1 className='font-canela text-5xl mt-8'>
            We're looking back at history to help us understand our present!
          </h1>
        <div className='mt-8'>
          <p1 className='text-s'>
              Picturing Mexican America is a cluster of digital humanities projects designed and run by Professor Marissa L0pez of UCLA. We are 
              committed to illuminating the long, Mexican history of Los Angeles that's been systemically erased through centuries of white, cultural
              supremacy. At PMA's core is a mobile app in current development being built in collaboration with the Los Angeles Public Library, that will
              display image of 19th century, Mexican Los Angeles to users based on their location. PMA is a research and teaching hub open to partnerships
              with local organizations.
          </p1>
        </div>
      </div>
      <div className='flex justify-around mb-16 px-24'>
        <img src='/images/about1.png' loading='lazy' alt=''/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-24 mb-16 gap-10'>
        <div>
            <h1 className='font-canela text-3xl'>Who We Are</h1>
            <p1 className='font-avenir'>
                We're a group of educators, students, volunteers, journalists, and tech professionals 
                working to build PMA so that people all over the world can feel connected to the stories 
                we are telling.
            </p1>
        </div>
        <div>
            <h1 className='font-canela text-3xl'>What's Next</h1>
            <p1 className='font-avenir'>
                We're currently working to build more educational plans to support teachers as well as finalizing 
                our app to get it ready for launch! We're also hoping to expand our work beyond LA!
            </p1>
        </div>
      </div>
      <div className='mb-16 mx-16'>
        <h1 className='font-avenir font-bold'>MOBILE APP</h1>
        <div className='border-t border-gray-900 mt-2 mb-4 w-auto'/>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-around'>
              <img src='/images/appprev.png' loading='lazy' alt='' /> 
            </div>
            <div className='px-6 sm:mt-4 lg:mt-0'>
                <h2 className='font-avenir mb-1'>COMING SOON</h2>
                <h1 className='font-canela text-2xl'>We're building an app!</h1>
                <p1 className='mt-4 font-avenir'>
                    The core project of Picturing Mexican America is to develop an app, in partnership with the Los Angeles 
                    Public Library, that will use geodata to display images of 19th century Mexican Los Angeles to users. 
                    This includes photographs, maps, and historical documents. Our goal is to change users' perceptions 
                    of space, to make clear the consistent, enduring presence of Latinxs in the United States.
                </p1>
            </div>
        </div>
      </div>
      <div className='mx-16'>
        <h1 className='font-avenir font-bold'>COLLABORATIONS</h1>
        <div className='border-t border-gray-900 my-4 w-auto'/>
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-4'>
            <div className='-order-first lg:order-first mb-1'>
                <h2 className='font-avenir mb-1'>CURRENT COLLABS</h2>
                <h1 className='font-canela text-2xl'>LA Explorers Club</h1>
                <p className='mt-2 font-avenir'>"Daily Life in Early Los Angeles" is a self-guided bike tour through nineteenth-century Mexican LA. 
                    We're not gonna lie: 19th century Mexican LA was neither idyllic, egalitarian, or anti-racist, but it's 
                    important to understand that it WAS here. We hope this ride untagles some of those threads.
                </p>
                <a href='https://www.picturingmexicanamerica.com/press'>Learn More</a>
            </div>
            <div className='flex justify-around'>
              <img src='/images/bikelogo.png' loading='lazy' alt='' />
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-around px-4'>
              <img src='/images/826LA.png' loading='lazy' alt='' />
            </div>
            <div>
                <h2 className='font-avenir mb-1'>PAST COLLABS</h2>
                <h1 className='font-canela text-2xl'>826LA</h1>
                <p className='mt-2 font-avenir'>
                    We partnered with 826:A for their Summer Writers Workshop for middle and high 
                    school students to lead them through a week of writing and creating art, drawing 
                    inspiration from the history, present, and future of LA.
                </p>
                <a href='https://www.picturingmexicanamerica.com/press'>Learn More</a>
            </div>

        </div>
      </div>
      <div className='px-4 sm:px-8 md:px-18 lg:px-32'>
        <div className=' bg-pma-pink ring-1 ring-pma-orange px-10 py-10 mx-20 my-20 flex flex-col justify-center items-center relative'>
            <h1 className='text-3xl font-canela mb-1'>How you can get involved</h1>
              <p className='font-avenir text-center'>
                We are looking for tech volunteers, and we are always looking for 
                more information about the material we circulate. If you have programming 
                skills to share, if you recognize anyone inthe picture we're posting on 
                Instagram, or if you have a connection to the places we've featured, we'd
                love to hear from you.
              </p>
            <button className='bg-pma-orange px-8 rounded-lg hover:bg-orange-700  p-2 font-bold mt-4'>
              <a href='https://mailchi.mp/8bb2d79e8e70/sign-up' className='text-white'>Contact Us</a>
            </button>
        </div>
      </div>
      <div className='mx-16'>
        <h1 className='font-avenir font-bold'>IN THE NEWS</h1>
        <div className='border-t border-gray-900 my-4 w-auto'/>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='m-2 sm:m-2 md:m-4 flex justify-center w-80'>
              <div>
                <img src='/images/news1.png' loading='lazy' alt='' className='h-64 block w-auto'/>
                <h1 className='font-canela'>LA Times, September 2020</h1>
                <p className='font-avenir text-s'>
                  A bike tour reveals hidden Latin history in downtown Los Angeles.
                </p>
                <a href='https://linkedin.com/in/jake-ekoniak/'>Read Story</a>
              </div>
            </div>
            <div className='m-2 sm:m-2 md:m-4 flex justify-center w-80'>
              <div>
                <img src='/images/news2.png' loading='lazy' alt='' className='h-64 w-auto'/>
                <div className='w-full'>
                  <h1 className='font-canela'>Los Angeles Public Library</h1>
                  <p className='font-avenir text-s'>
                    Professor Marissa Lopez discusses the special material she's encountered along the way. 
                  </p>
                  <a href='https://linkedin.com/in/jake-ekoniak/'>Read Story</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
