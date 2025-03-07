import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0 text-left'>
                <h3 className='text-2xl font-bold mb-2'>Emmanuel</h3>
                <p className='text-gray-400'>Front-end Developer based in Nigeria, Specializing in the creation of responsive websites and web Applications</p>
            </div>
             <div className='flex-1 w-full'>
                <form className='flex items-center justify-center'>
                    <input type="email" placeholder='Your Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' />
                    <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg rounded-l-none'>subscribe</button>
                </form>
            </div>
        </div>

        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between'>
            <p className='text-gray-400'>
                &copy;{new Date().getFullYear()} EawebCraft. All rights reserved
            </p>

            <div className='flex space-x-4 my-4 md:my-0'>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaInstagram />
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaLinkedin />
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    <FaGithub />
                </a>
            </div>
            <div className='flex space-x-4'>
                <a href="" className='text-gray-400 hover:text-white'>
                    privacy
                </a>
                <a href="" className='text-gray-400 hover:text-white'>
                    Terms of Services
                </a>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;

