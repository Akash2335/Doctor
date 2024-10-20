import react from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
    return (
        <main>
            <aside className='text-center text-gray-600 text-2xl pt-10'>
                <p className='text-gray-700 font-medium'> About <span>US</span></p>
            </aside>
            <section className='flex my-10 flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[350px] shadow-xl shadow-gray-800 hover:translate-y-[-10px] hover:translate-x-[-10px] duration-300 hover:cursor-pointer' src={assets.about_image} alt="" />
                <aside className='flex flex-col  justify-center gap-6 md:w-2/4 text-[17px] text-gray-600'>
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                    </p>
                    <p>
                        Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>
                        Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                    
                </aside>
            </section>
            <main>
                <p className='text-xl my-4'>
                    Why <span className='text-gray-600 font-semibold'>Choose Us</span>
                </p>
                <section className='flex flex-col md:flex-row mb-20 gap-8 '>
                    <aside className='flex flex-col md:px-16 py-8 sm:py-16 gap-6 items-center h-60 border border-gray-500 hover:bg-primary hover:text-white text-gray-600 transition-all cursor-pointer hover:translate-y-[-10px]  shadow-slate-400 hover:shadow-2xl duration-300'>
                        <b>Efficiency</b>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </aside>
                    <aside className='flex flex-col md:px-16 py-8 sm:py-16 gap-6 items-center h-60 border border-gray-500 hover:bg-primary hover:text-white text-gray-600 transition-all hover:translate-y-[-10px] duration-300  shadow-slate-400 hover:shadow-2xl cursor-pointer'>
                        <b>Convenience</b>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </aside>
                   <aside className='flex flex-col md:px-16 py-8 sm:py-16 gap-6 items-center h-60 border border-gray-500 hover:bg-primary hover:text-white text-gray-600 transition-all hover:translate-y-[-10px] duration-300  shadow-slate-400 hover:shadow-2xl  cursor-pointer '>
                        <b>Personalization</b>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </aside>
                </section>
            </main>

        </main>
    );
};
export default About;