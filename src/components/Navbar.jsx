import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white px-8 md:px-16 lg:px-24 z-50'>
      <div className='w-full mx-auto py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>EawebCraft</div>
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'>
          Connect me
        </button>
        <button className='md:hidden bg-black text-white p-2 rounded' onClick={toggleMenu}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden fixed top-0 left-0 h-full w-full bg-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex flex-col items-center justify-center h-full space-y-6'>
          <button className='absolute top-4 right-4 bg-black text-white' onClick={toggleMenu}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
          <a href="#home" className='hover:text-gray-400 text-2xl' onClick={toggleMenu}>Home</a>
          <a href="#about" className='hover:text-gray-400 text-2xl' onClick={toggleMenu}>About Me</a>
          <a href="#services" className='hover:text-gray-400 text-2xl' onClick={toggleMenu}>Services</a>
          <a href="#projects" className='hover:text-gray-400 text-2xl' onClick={toggleMenu}>Projects</a>
          <a href="#contact" className='hover:text-gray-400 text-2xl' onClick={toggleMenu}>Contact</a>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded' onClick={toggleMenu}>
            Connect me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar