
import React from 'react'
import cus1 from '../Asset/cust1.png';
import cus2 from '../Asset/cust2.png';
import cus3 from '../Asset/cust3.png';

function Servicenow() {
  return (
    <div className='z-[1]'>
    <div class="flex my-8 items-center  relative justify-center bg-white">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

      {/* 1st image */}
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-800 ">
        <div class=" w-56 h-56   ">
          <img class="h-full w-full transition-transform duration-500 group-hover:-hue-rotate-30rotate-3 group-hover:scale-125 group-hover:opacity-20" src= {cus1} alt="" />
        </div>

        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Our customers leave satisfied, knowing they made the right choice with us. </p>
        </div>
      </div>

      {/* 2nd image */}
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-800">
        <div class=" w-full h-56   ">
          <img class="h-full w-56 transition-transform duration-500 group-hover:-hue-rotate-30rotate-3 group-hover:scale-125 group-hover:opacity-20" src= {cus2} alt="" />
        </div>
        <div class="absolute inset-0    bg-gradient-to-b from-transparent via-transparent to-transparent 
        group-hover:from-black/60 group-hover:via-black/60 group-hover:to-black/60"></div>

        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0"> 
        <p class="mb-3 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Take A Test Drive today and fell the quality of our cars before you buy. </p>
       
        </div>
      </div>

       {/* 3rd image */}
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-slate-800">
        <div class=" w-56 h-56   ">
          <img class="h-full w-full transition-transform duration-500 group-hover:-hue-rotate-30  group-hover:scale-125  group-hover:opacity-10" src=  {cus3} alt="" />
        </div>
        <div class="absolute inset-0    bg-gradient-to-b from-transparent via-transparent to-transparent 
        group-hover:from-black/60 group-hover:via-black/60 group-hover:to-black/60 "></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
        <p class="mb-3 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">  Cars comes with complete previous service history checked with authorised dealership. </p>
       
        </div>
      </div>


    </div>
  </div>
  </div>
  
  )
}

export default Servicenow;