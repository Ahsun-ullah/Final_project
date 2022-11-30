import React from 'react';
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <div>
            <div className='h-screen bg-stone-200'>
                <h2 className='text-black font-bold text-2xl flex justify-center pt-8'>
                    This is Home.

                </h2>
            </div>   
               <Footer></Footer>
        </div>
    );
};

export default Home;