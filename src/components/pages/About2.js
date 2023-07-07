import React from 'react'

const About2 = () => {
  return (
    <div>
      <div className='flex space-between px-24 mb-20'>
        <h1>We're looking back at history to help us understand our present!</h1>
        <p1 className='text-xs'>
            Picturing Mexican America is a cluster of digital humanities projects designed and run by Professor Marissa L0pez of UCLA. We are 
            committed to illuminating the long, Mexican history of Los Angeles that's been systemically erased through centuries of white, cultural
            supremacy. At PMA's core is a mobiel app in current development being built in collaboration with the Los Angeles Public Library, that will
            display image of 19th century, Mexican Los Angeles to users based on their location. PMA is a research and teaching hub open to partnerships
            with local organizations.
        </p1>
      </div>
      <div className='flex justify-around mb-16'>
        <img src='/images/about1.png' alt='' />
      </div>
      <div className='flex justify-between px-24 mb-16'>
        <div>
            <h1>Who We Are</h1>
            <p1>
                We're a group of educators, students, volunteers, journalists, and tech professionals 
                working to build PMA so that people all over the world can feel connected to the stories 
                we are telling.
            </p1>
        </div>
        <div>
            <h1>What's Next</h1>
            <p1>
                We're currently working to build more educational plans to support teachers as well as finalizing 
                our app to get it ready for launch! We're also hoping to expand our work beyond LA!
            </p1>
        </div>
      </div>
      <div className='mb-16'>
        <h1>MOBILE APP</h1>
        <div className='flex'>
            <img src='/images/appprev.png' alt='' /> 
            <div>
                <h2>COMING SOON</h2>
                <h1>We're building an app!</h1>
                <p1>
                    The core project of Picturing Mexican America is to develop an app, in partnership with the Los Angeles 
                    Public Library, that will use geodata to display images of 19th century Mexican Los Angeles to users. 
                    This includes photographs, maps, and historical documents. Our goal is to change users' perceptions 
                    of space, to make clear the consistent, enduring presence of Latinxs in the United States.
                </p1>
            </div>
        </div>
      </div>
      <div>
        <h1>COLLABORATIONS</h1>
        <div className='flex'>
            <div>
                <h2>CURRENT COLLABS</h2>
                <h1>LA Explorers Club</h1>
                <p>"Daily Life in Early Los Angeles" is a self-guided bike tour through nineteenth-century Mexican LA. 
                    We're not gonna lie: 19th century Mexican LA was neither idyllic, egalitarian, or anti-racist, but it's 
                    important to understand that it WAS here. We hope this ride untagles some of those threads.
                </p>
                <a href='https://linkedin.com/in/jake-ekoniak/'>Learn More</a>
            </div>
            <img src='/images/bikelogo.png' alt='' />
        </div>
        <div className='flex'>
            <img src='/images/826LA.png' alt='' />
            <div>
                <h2>PAST COLLABS</h2>
                <h1>826LA</h1>
                <p>
                    We partnered with 826:A for thier Summer Writers Workshop for middle and high 
                    school students to lead them through a week of writing and creating art, drawing 
                    inspiration from the history, present, and future of LA.
                </p>
                <a href='https://linkedin.com/in/jake-ekoniak/'>Learn More</a>
            </div>

        </div>
      </div>
      <div>
        <div className=' bg-orange-300 px-10 py-10 mx-20 my-20'>How you can get involved</div>
      </div>
      <div>
        <h1>IN THE NEWS</h1>
        <div className='flex'>
            <div>
                <img src='/images/news1.png' alt='' />
                <h1>LA Times, September 2020</h1>
                <a href='https://linkedin.com/in/jake-ekoniak/'>Read Story</a>
            </div>
            <div>
                <img src='/images/news2.png' alt='' />
                <h1>Los Angeles Public Library</h1>
                <a href='https://linkedin.com/in/jake-ekoniak/'>Read Story</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About2
