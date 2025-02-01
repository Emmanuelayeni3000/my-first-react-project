import React from 'react'
import HeroImage from '../assets/pf pic web.jpg'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-black text-white text-center py-16 pt-20'>
      <div className='px-8 md:px-16 lg:px-24'>
        <img
          src={HeroImage}
          alt='Profile picture of Emmanuel Ayeni'
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-2xl sm:text-4xl font-bold'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
            Emmanuel Ayeni 
          </span>
          , also known as , 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
            EawebCraft
          </span>
          , a Front-End Developer
        </h1>
        <p className='mt-4 text-base sm:text-lg text-gray-300 px-4'>
          I specialize in building modern and responsive Web applications and Websites.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded font-medium'>
            Contact me
          </button>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded font-medium'>
            My Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero