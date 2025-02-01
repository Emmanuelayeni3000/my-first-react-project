import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
        <div className='text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1 text-left'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                        <p>Feel free to reach out to me for any inquiries or collaborations</p>
                        <div className='mb-4'>
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                            <a href="mailto:info@eawebcraft.com.ng" className='hover:underline'>info@eawebcraft.com.ng</a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                            <span>+2348029842952</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkerAlt className='inline-block text-green-400 mr-2'></FaMapMarkerAlt>
                            <span>Nigeria</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full text-left'>
                        <form>
                            <div>
                                <label htmlFor='name' className='block mb-2 mt-2' >Your Name</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border  border-gray-600 focus:outline-none focus:border-green-400'
                                placeholder='Enter your name' />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 mt-2'>Email</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                placeholder='Enter your Email' />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 mt-2'>Message</label>
                                <textarea type="text" className='w-full p-6 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                placeholder='Enter your Message' />
                            </div>
                            <button className='hidden lg:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded'>
                               Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact