import React from 'react'
import HeroImage from '../assets/pf pic web.jpg'
import App from '../App'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt='' className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm{" "}
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'> Emmanuel Ayeni</span>
            , a Front-End Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 px-4'>
        I specialize in building modern and responsive Web applications and Websites.
        </p>
        <div className='mg-8 space-x-4'>
           <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'>Contact me</button>
           <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded'>My Resume</button>
        </div>
    </div>
  )
}

export default Hero