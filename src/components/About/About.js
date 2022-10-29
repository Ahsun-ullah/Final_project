import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-h-full'>
            <h2 className=' container bg-stone-200 text-black '>
                This is About Us
            </h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;