import React from 'react'
import HeroImage from '../assets/pf pic web.jpg'
import App from '../App'

const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
        {/* Hero Image */}
        <div className="mb-6">
          <img
            src="/pf pic web.jpg" // Replace with your image URL
            alt="Hero"
            className="w-40 h-40 rounded-full transition-transform duration-300 hover:scale-110"
          />
        </div>
  
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">
          I'm <span className="bg-clip-text text-white bg-black">Emmanuel Ayeni</span>, a Front-End Developer.
        </h1>
  
        {/* Subheading */}
        <p className="text-lg text-center text-gray-600 mb-6">
        I specialize in building modern and responsive Web applications and Websites.
        </p>
  
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 rounded bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transition-transform duration-300 hover:scale-105">
            Contact Me
          </button>
          <button className="px-6 py-3 rounded bg-gradient-to-r from-pink-400 to-yellow-500 text-white font-medium transition-transform duration-300 hover:scale-105">
            My Resume
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;