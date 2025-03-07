import React from 'react'
import AboutImage from '../assets/pf pic web.jpg'

const About = () => {
  return (
    <div className='text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="profilepic" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                    <p className='text-left pl-8 text-lg mb-8'>I am a passionate Front-end developer with a focus on building modern and 
                    responsive web applications with a strong foundation in front-end technologies, 
                    i strive to create seamless and efficient user experience
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-11 md:space-x-7'>
                            <label htmlFor="htmlandcss" className='w-1/12'>HTML</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 w-9/12 flex'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300
                                 hover:scale-105 w-10/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-11 md:space-x-7'>
                            <label htmlFor="htmlandcss" className='w-1/12'>REACT JS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 w-9/12 flex'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300
                                 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-11 md:space-x-7'>
                            <label htmlFor="Nodejs" className='w-1/12'>NODE JS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 w-9/12 flex'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300
                                 hover:scale-105 w-9/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-11 md:space-x-7'>
                            <label htmlFor="cssframeworks" className='w-1/12 text-sm'>CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 w-9/12 flex'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300
                                 hover:scale-105 w-10/12'>
                                </div>
                            </div>
                        </div>
                        {/*<div className='flex items-center space-x-11 md:space-x-7'>
                            <label htmlFor="wordpress" className='w-1/12 text-sm'>Wordpress</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5 w-9/12 flex'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300
                                 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                2+
                            </h3>
                            <p className='text-sm'>
                                Years of Experience
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                               30+
                            </h3>
                            <p className='text-sm'>
                                projects completed
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                               10+
                            </h3>
                            <p className='text-sm'>
                                Happy Clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About