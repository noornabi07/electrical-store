import React from 'react';
import banner from '../../../public/banner.jpg'

const Welcome = () => {
    return (
        <div>
            <section className='bg-gray-200 px-20 text-center py-16'>
                <div className='mt-20'>
                    <h2 className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl font-black'>Welcome To HeroGadget</h2>
                    <p className='mt-10 text-xl w-3/6 mx-auto mb-16'>Best E-commerce platform for buying high quality Smart Home Appliances at extremely affordable Price.</p>
                    <div className='pb-60'>
                        <button className='bg-cyan-400 px-8 hover:bg-cyan-600 py-4 font-bold text-white text-xl rounded-3xl mr-4'>Shop Now</button>
                        <button className='border-4 hover:bg-cyan-500 border-cyan-200 px-8 py-4 font-semibold text-black hover:text-white text-xl rounded-3xl mr-4'>Learn More</button>
                    </div>
                </div>
            </section>

            <section>
                <img className='w-3/4 mx-auto -mt-40 rounded-lg pb-10' src={banner} alt="" />
            </section>

            <hr className='border-2 border-gray-200'/>
        </div>
    );
};

export default Welcome;