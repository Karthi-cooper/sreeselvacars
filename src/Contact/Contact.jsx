 



import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
// import whatsapp from '/Asset/whats1.png';
// import insta from '/Asset/insta1.png';
// import face from '/Asset/facebook.png';
import whatsapp from '../Asset/whats1.png';
import insta from '../Asset/insta1.png';
import face from '../Asset/facebook.png';

function Contact() {
  const [result, setResult] = React.useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "572b55c8-115e-4859-9c29-d0f8f40e2583");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className= ' ' id='contact'>
       <div className='container flex flex-wrap py-10 md:py-0 justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 ml-0 md:ml-10 mt-10 md:mt-20 bg-whit  items-center'>
        
        {/* Form */}
        <form className='flex-1  ' id='form' onSubmit={onSubmit}>
          <div className='p-10 w-full md:w-3/4 ml-0 md:ml-44  '>

            <div className=" flex-wrap relative mb-3">
              <span><FaUser /></span>
              <input 
                className="block w-full bg-neutral-400 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white placeholder-slate-950 hover:placeholder-white"
                type="text" 
                placeholder="Name"
                name='name' 
              />
            </div>

            <div className="relative mb-3">
              <span><FaPhoneAlt /></span>
              <input 
                className="block w-full bg-neutral-400 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white placeholder-slate-950 hover:placeholder-white"
                type="text" 
                name='contact'
                placeholder="Contact"  required
              /> 
            </div>

            <div className="relative mb-3">
              <span><IoMdMail /></span>
              <input 
                type="text" 
                placeholder="Mail Id"
                name='Mailid'  required
                className="block w-full bg-neutral-400 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none placeholder-black focus:bg-white hover:placeholder-white"
              />
            </div>

            <div className="relative mb-3">
              <span><MdMessage /></span>
              <input 
                className="block    w-full first-letter:w-full bg-neutral-400 placeholder-black text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white hover:placeholder-white"
                type="text" 
                placeholder="Message"
                name='message'
                required
              />
            </div>

            <button className='w-full bg-black   text-white py-2 rounded mt-3' type='submit'>
              Submit
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className='flex-1 w-full md:w-72 h-68 bg-white p-6 -mt-10'>
          <h1 className='text-xl font-semibold mb-4 text-center'>Contact Information</h1>
          <div className='flex flex-col'>
            <div className='flex items-center mb-3'>
              <FaPhoneAlt className='text-red-500 mr-3' />
              <span>  +919842763438  +919943563438</span>
            </div>
            <div className='flex items-start'>
              <FaMapMarkerAlt className='text-red-500 mr-3 mt-1 text-2xl' />
              <span>
                41/1, Tamil Sangam Rd, opposite of Tamil sangam mandapam, Sankar Nagar, Salem, Tamil Nadu 636007
              </span>
             
            </div>
            
            <div className='flex items-center justify-center m-4 gap-3'>
            <a href="https://wa.me/9943563438" title="whatsapp "> <img src={whatsapp} alt="" className='w-8 h-8' /> </a>
            <a href="https://www.instagram.com/sg_pre_owned_cars/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D" title="instagram"> <img src={insta} alt="" className='w-8 h-8' /> </a>
            <a href="https://www.facebook.com/profile.php?id=100013621632814&mibextid=LQQJ4d" title=" facebook "> <img src={face} alt="" className='w-8 h-8' /> </a>
              </div>
   
              
          </div>
          </div>

        </div>
      </div>  
    </div>
  );
}

export default Contact;
