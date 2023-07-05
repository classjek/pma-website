import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './fonts.css'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white'>
      <Link to='/' className='text-white font-canela px-3 py-4'>
        <img src='/Logo.png' alt="Logo" className='h-auto w-auto max-h-14' />
      </Link>
      <ul className='flex items-center justify-between px-8'>
        <CustomLink to='/' className='px-10 font-avenir text-base hover:text-gray-500 focus:text-pma-orange'>ABOUT</CustomLink>
        <CustomLink to='/stories' className='px-10 font-avenir text-base hover:text-gray-500 focus:text-pma-orange'>STORIES</CustomLink>
        <CustomLink to='/misterras' className='px-10 font-avenir text-base hover:text-gray-500 focus:text-pma-orange'>MIS TERRAS</CustomLink>
        <CustomLink to='/laselfie' className='px-10 font-font-avenir avenir text-base hover:text-gray-500 focus:text-pma-orange'>LA SELFIE</CustomLink>
        <CustomLink to='/education' className='px-10 font-avenir text-base hover:text-gray-500 focus:text-pma-orange'>EDUCATION</CustomLink>
        <CustomLink to='/contact' className='px-10 font-avenir text-base hover:text-gray-500 focus:text-pma-orange'>CONTACT</CustomLink>
      </ul>
    </nav>
  )
}

export const Footer = () => {
  return (
    <nav className='flex justify-between bg-green-300'>
      <div className='flex flex-grow items-center list-none mt-8 mb-2 ml-4'>
        <CustomLink to='/' className='font-avenir underline text-xs px-2'>About</CustomLink>
        <CustomLink to='/stories' className= 'font-avenir underline text-xs px-2'>Stories</CustomLink>
        <CustomLink to='/misterras' className='font-avenir underline text-xs px-2'>Mis Terras</CustomLink>
        <CustomLink to='/laselfie' className='font-avenir underline text-xs px-2'>La Selfie</CustomLink>
        <CustomLink to='/education' className='font-avenir underline text-xs px-2'>Education</CustomLink>
        <CustomLink to='/contact' className='font-avenir underline text-xs px-2'>Contact</CustomLink>
      </div>  
      <div className='flex flex-col justify-around px-4'>
        <div>Social Media Icons</div>
        <div className='text-xs'>Picturing Mexican America CC 2022</div>
      </div>
    </nav>
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

