import react from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
    return (
        <main>
            <section className=' text-center text-2xl pt-10 text-gray-500'>
                <p className='text-gray-700 font-semibold'>Contact <span>US</span></p>
            </section>
            <section className='my-10 flex flex-col md:flex-row gap-8  justify-center ' >
                    <img className='w-full md:max-w-[400px] shadow-xl shadow-gray-800 hover:translate-y-[-10px] hover:translate-x-[-10px] duration-300 hover:cursor-pointer' src={assets.contact_image} alt="" />
                <aside className='flex flex-col gap-6 justify-center items-start'>
                    <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
                    <p className='text-gray-500'>54709 Willms Station 
Suite 350, <br/> Washington, USA</p>
                    <p className='text-gray-500'>Tel: (415) 555‑0132 <br/> Email: greatstackdev@gmail.com</p>
                    <p className='text-gray-500' >Careers at PRESCRIPTO <br /> Learn more about our teams and job openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
                </aside>
            </section>
        </main>
    )
};
export default Contact;