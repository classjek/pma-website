import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


export const HamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
        <button className="p-6" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

      {isOpen && (
        <ul className="flex flex-col bg-white text-gray-900 border-2 border-gray-300 shadow-md rounded-lg m-5 w-1/4 fixed top-0 right-0 h-auto z-10 pl-5 pb-5"Custom>
          <button
            className="pt-2 pr-1 self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* This is a close icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <CustomLink to='/about' className='py-2 font-avenir text-md hover:underline'>ABOUT</CustomLink>
          <CustomLink to='/stories' className='py-2 font-avenir text-md hover:underline'>STORIES</CustomLink>
          <CustomLink to='/misterras' className='py-2 font-avenir text-md hover:underline'>MIS TERRAS</CustomLink>
          <CustomLink to='/laselfie' className='py-2 font-avenir text-md hover:underline'>LA SELFIE</CustomLink>
          <CustomLink to='/education' className='py-2 font-avenir text-md hover:underline'>EDUCATION</CustomLink>
          <div>
            <a href='https://mailchi.mp/8bb2d79e8e70/sign-up' className='py-2 font-avenir text-md hover:underline'>CONTACT</a>
          </div>
        </ul>
      )}
    </div>
  )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


