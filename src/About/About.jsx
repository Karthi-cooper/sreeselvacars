
import React from 'react';
import sgcars from '../Asset/sgcar.mp4';


export default function About() {
  return (
    <div className='z-[-1]  bg-blend-overlay	my-10 relative p-5'>
      <h1 className='text-center justify-center  text-2xl font-semibold text-black'>About Us</h1>
     
     <div className=  'm-5 flex flex-col lg:flex-row  '> 
   
      <video
       className="w-full lg:w-1/2 lg:m-5 h-1/2 md:h-3/4 object-cover rounded-lg"
       src={sgcars}
       loop autoPlay muted playsInline
     >
     </video>
   <div className='flex-wrap   lg:w-1/3 space  lg:ml-20 mt-6'>
    <h1 class="text-black text-xl  leading-7 text-center"> Our mission is to provide a trustworthy and efficient marketplace where users can browse, compare, and purchase pre-owned vehicles with confidence. We offer a wide range of cars from various brands, ensuring that our customers have access to high-quality options that fit their budget and preferences. With a user-friendly interface, detailed vehicle information, and secure transaction processes, SGCars simplifies the car buying experience, making it easier and more convenient to find the perfect car</h1>
    </div>
    </div>
  </div>
  
  
  )
}

