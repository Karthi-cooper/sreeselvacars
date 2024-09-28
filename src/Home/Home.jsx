
import React from 'react';
// import img from '../../public/Asset/innova.png';
// import img from '/Asset/innova.png';
import img from '../Asset/innova.png';
import { useNavigate } from 'react-router-dom';

import '../Home/Home.css';
// import { CollectionList } from '../Collection/Collection';

function Home( ) {
  const navigate = useNavigate(); 
  return (
    <div className=' z-[-1]' id='Home'>
      <div className='container flex flex-wrap py-10 md:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 place-items-center min-h-[600px] w-full lg:max-w-full'>
          {/* Text Content */}
          <div class="order-2 mt-0 flex-wrap items-center justify-center space-y-1 text-center sm:order-2 " id="head">
        <h1 class="text-base text-black sm:text-base md:text-2xl lg:text-3xl">Drive Your Dream</h1>

        <p class="flex text-center text-base italic text-black sm:text-base md:text-2xl lg:text-3xl">with our prestigious <span class="ml-1 flex text-2xl font-semibold"> SGCars</span></p>

        <button
              className="mt-6 h-10 w-36 items-center rounded-lg border-solid bg-black p-2 text-base text-white transition-colors duration-700 hover:border-slate-950 hover:bg-white hover:text-black"
              onClick={() => navigate('/NavCollection')} // Navigate to NavCollection on button click
            >
              Check Out
            </button>
      </div>
          {/* Image Section */}
          <div className='order-2 flex sm:order-2 sm:m-0'>
            <img className='w-54 sm:w-full' src={img} alt='Car Image' />
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default Home;

 