import React from 'react'


const service = [
    {
        id: 1,
        title: 'Front-end Development',
        description: 'I specialize in building modern and responsive Web applications and Websites.',
    },
    {
        id: 2,
        title: 'Web-Design',
        description: 'I create visually appealing and user-friendly designs that enhance user experience and engagement.',
    },
    {
        id: 3,
        title: 'E-commerce Development',
        description: 'Professional e-commerce development for secure, responsive, and user-friendly online stores.',
    },
    {
        id: 4,
        title: 'WordPress Development',
        description: 'Professional WordPress development for responsive, SEO-friendly, and visually appealing websites.',
    }

]
const Services  = () => {
  return (
    <div className='text-white py-20' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {service.map(services => (
                    <div key={services.id} className="bg-gray-800 px-6 pb-6 pt-6 rounded-lg hover:shadow-lg transform transition-transform 
                     duration-300 hover:scale-105">
                        <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            {services.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            {services.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{services.description}</p>
                        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read more</a>
                    </div>            
                ))}
            </div>
        </div>
    </div>
        
  );
};

export default Services;