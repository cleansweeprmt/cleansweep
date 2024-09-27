"use client";
import { useEffect, useState } from 'react';
import ServiceSlider from './(components)/servicesSlider'
import Testimonials from './(components)/testimonials'
import PopupForm from '../components/Form/PopupForm';
import BlogSection from './(components)/articles'
import Link from 'next/link';

export default function Home() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleBeforeUnload = () => {
    setIsPopupOpen(true);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // handleBeforeUnload();
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="bg-white">
      <main className="min-h-screen flex-col items-center justify-between bg-white">
        <section className="py-12  bg-cover hero bg-center lg:bg-top min-h-screen flex flex-col items-start justify-center gap-5 container mx-auto px-5 lg:px-20 relative ">
          <div className='absolute left-0 top-0 bg-black opacity-20 w-full h-full'>

          </div>
        <h1 className="hero-title text-white mb-5 text-start lg:max-w-[50%] lg:mt-28 capitalize z-10">
                Your Home cleaning solutions Partner
              </h1>
              <a
           href="/consultation"
            className="z-10 uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-secondary border border-transparent rounded-lg active:bg-primary hover:bg-[#022b60] focus:outline-none focus:shadow-outline-purple"
          >
            SCHEDULE MY HOME CLEANING SERVICE
          </a>
        </section>
        {isPopupOpen && (<PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>) }
        {/* <ClientSlider/> */}
        <section className="container mx-auto px-5 lg:px-20 py-10" id="about">
          <div className="flex items-center justify-between">
            <div>
            <h1 className="section-title text-secondary">
          Our Services
          </h1>
          <p className="text-dim text-md"> Offering skilled and affordable home cleaning Services</p>
            </div>
            <a
           href="/services"
            className="uppercase px-4 py-2 text-xs md:text-sm font-medium  text-center text-white transition-colors duration-150 bg-secondary border-2 border-none rounded-lg active:bg-primar focus:outline-none focus:shadow-outline-purple hover:bg-[#022b60] hover:text-white"
          >
            View All Services
          </a>

          </div>

        <ServiceSlider/>
         
        </section>
        <section className="container mx-auto px-5 lg:px-20 rounded-lg flex flex-col md:flex-row items-start justify-between bg-gray-100 py-10 gap-10">
          <div className="md:basis-1/2 space-y-5">
            <h2 className="text-primary text-2xl font-semibold">About Us</h2>
            <p className="text-dim text-lg">We provide reliable and high-quality house cleaning services in The Hague. As a business located in the heart of the Hague we understand the hassle that comes with house cleaning and therefore we have ensured that we have the best effective and reliable cleaning team. We offer customized cleaning plans tailored to each home’s needs, ensuring a spotless and comfortable environment. Our skilled team uses eco-friendly products to keep your space safe and healthy for everyone. <br/><br/>

We specialize in a range of services, from regular interior cleaning to deep cleaning that tackles hidden dirt and allergens. Our commitment to quality and customer satisfaction sets us apart. Let us help you enjoy a cleaner home without the hassle.</p>
          </div>
          <div className="md:basis-1/2 ">
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='bg-white shadow-lg rounded-lg p-5 flex gap-3 items-center'>

            <svg xmlns="http://www.w3.org/2000/svg" width="100.646" height="101.854" viewBox="0 0 60.646 61.854" fill='#ff9202' stroke='#fff' strokeWidth={1.75}><defs></defs><g transform="translate(0.389 0.375)"><g transform="translate(0 0)"><path class="a11" d="M64.43,38.022l-1.088-1.5a2.026,2.026,0,0,1-.012-2.375l1.062-1.513a5.1,5.1,0,0,0-1.75-7.439l-1.626-.875a2.032,2.032,0,0,1-1.05-2.126l.312-1.825a5.1,5.1,0,0,0-4.8-5.939l-1.851-.075a2.021,2.021,0,0,1-1.863-1.464l-.537-1.764a5.109,5.109,0,0,0-6.916-3.262l-1.7.724A2.054,2.054,0,0,1,40.3,8.076L39.06,6.7a5.09,5.09,0,0,0-7.639.05l-1.2,1.4a2.067,2.067,0,0,1-2.312.551L26.2,8a5.187,5.187,0,0,0-1.938-.388,5.1,5.1,0,0,0-4.915,3.751l-.487,1.787a2.03,2.03,0,0,1-1.85,1.488l-1.839.113a5.087,5.087,0,0,0-4.714,6l.338,1.813a2.032,2.032,0,0,1-1.013,2.15l-1.612.9a5.1,5.1,0,0,0-1.638,7.464l1.088,1.488a2.025,2.025,0,0,1,.012,2.375L6.564,38.46A5.1,5.1,0,0,0,8.314,45.9l1.626.875A2.03,2.03,0,0,1,10.989,48.9l-.312,1.825a5.1,5.1,0,0,0,4.8,5.939l1.851.075A2.02,2.02,0,0,1,19.192,58.2l.512,1.775a5.108,5.108,0,0,0,6.915,3.264l1.7-.725a2.058,2.058,0,0,1,2.314.513L31.87,64.4a5.095,5.095,0,0,0,7.643-.05l1.211-1.4a2.069,2.069,0,0,1,2.314-.551l1.712.7a5.21,5.21,0,0,0,1.939.388A5.1,5.1,0,0,0,51.6,59.739l.487-1.788a2.036,2.036,0,0,1,1.851-1.488l1.85-.111a5.088,5.088,0,0,0,4.714-6l-.338-1.813a2.031,2.031,0,0,1,1.013-2.15l1.612-.9a5.1,5.1,0,0,0,1.638-7.463ZM62.3,41.459a2.02,2.02,0,0,1-1,1.34l-1.612.9a5.087,5.087,0,0,0-2.539,5.375l.338,1.813a2.032,2.032,0,0,1-1.887,2.4l-1.839.113a5.087,5.087,0,0,0-4.626,3.74l-.487,1.775a2.035,2.035,0,0,1-1.963,1.5,2.089,2.089,0,0,1-.776-.149l-1.714-.7a5.193,5.193,0,0,0-1.938-.388,5.118,5.118,0,0,0-3.85,1.75L37.2,62.317a2.01,2.01,0,0,1-1.538.7,1.99,1.99,0,0,1-1.512-.674l-1.238-1.376a5.116,5.116,0,0,0-3.8-1.7,5.035,5.035,0,0,0-2.014.413l-1.7.724a1.982,1.982,0,0,1-.8.164A2.039,2.039,0,0,1,22.645,59.1l-.512-1.775a5.11,5.11,0,0,0-4.678-3.676l-1.85-.075a1.972,1.972,0,0,1-1.488-.751,1.994,1.994,0,0,1-.424-1.612L14,49.388a5.084,5.084,0,0,0-2.625-5.339l-1.625-.875a2,2,0,0,1-1.026-1.326,1.961,1.961,0,0,1,.325-1.638L10.116,38.7a5.084,5.084,0,0,0-.05-5.95L8.979,31.259a1.967,1.967,0,0,1-.338-1.638,2.02,2.02,0,0,1,1-1.337l1.612-.9a5.088,5.088,0,0,0,2.538-5.377l-.325-1.8a2,2,0,0,1,.4-1.626,2.018,2.018,0,0,1,1.488-.774l1.839-.113a5.1,5.1,0,0,0,4.626-3.74l.487-1.787a2.034,2.034,0,0,1,1.963-1.5,2.107,2.107,0,0,1,.776.151l1.714.7A5.187,5.187,0,0,0,28.7,11.9a5.117,5.117,0,0,0,3.85-1.75l1.213-1.387a2.033,2.033,0,0,1,3.05-.025l1.238,1.374a5.117,5.117,0,0,0,3.8,1.7,5.049,5.049,0,0,0,2.014-.413l1.7-.724a1.98,1.98,0,0,1,.8-.162,2.037,2.037,0,0,1,1.951,1.462l.512,1.777A5.111,5.111,0,0,0,53.5,17.43l1.85.076a2.016,2.016,0,0,1,1.5.75,1.99,1.99,0,0,1,.426,1.612l-.313,1.826a5.088,5.088,0,0,0,2.625,5.339l1.626.875a2.034,2.034,0,0,1,.713,2.962L60.87,32.384a5.087,5.087,0,0,0,.05,5.953l1.088,1.486A2.2,2.2,0,0,1,62.3,41.459Z" transform="translate(-5.545 -5)"></path><path class="b11" d="M50.182,42.452,43.8,48.8l-2.073-2.084a1.461,1.461,0,0,0-2.071,2.061L42.763,51.9a1.453,1.453,0,0,0,2.06,0l7.419-7.372a1.461,1.461,0,1,0-2.06-2.071Z" transform="translate(-16.027 -16.633)"></path></g><g class="c11" transform="translate(29.934 54.835) rotate(-135)"><circle class="d11" cx="17.182" cy="17.182" r="17.182"></circle><circle class="e11" cx="17.182" cy="17.182" r="15.932"></circle></g></g></svg>
            <div>
              <h1 className='font-bold text-xl text-black'>Cleaning service on a schedule that works for you</h1>
              
            </div>

          </div>
          <div className='bg-white shadow-lg rounded-lg p-5 flex gap-3 items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="109.938" height="118.346" viewBox="0 0 49.938 58.346" fill='#ff9202' stroke='#ff9202' strokeWidth={1.75}><defs></defs><g transform="translate(0.001)"><path class="a33" d="M251.348,366.425a.7.7,0,0,1-.584.315.691.691,0,0,1-.584-.315.855.855,0,0,0-1.428.938,2.408,2.408,0,0,0,4.025,0,.854.854,0,0,0-.245-1.183A.873.873,0,0,0,251.348,366.425Zm0,0" transform="translate(-220.281 -324.327)"></path><path class="a33" d="M190.756,357.559a.855.855,0,1,0,1.209,1.209.383.383,0,0,1,.272-.113.445.445,0,0,1,.272.113.873.873,0,0,0,1.209,0,.855.855,0,0,0,0-1.209,2.095,2.095,0,0,0-2.962,0Zm0,0" transform="translate(-168.797 -316.269)"></path><path class="a33" d="M314.369,357.559a.855.855,0,1,0,1.209,1.209.383.383,0,0,1,.272-.113.444.444,0,0,1,.272.113.873.873,0,0,0,1.209,0,.855.855,0,0,0,0-1.209,2.094,2.094,0,0,0-2.962,0Zm0,0" transform="translate(-278.324 -316.269)"></path><path class="a33" d="M49.937,58.153a4.651,4.651,0,0,0-3.89-4.581,5.8,5.8,0,0,0-3.911-7.509A2.816,2.816,0,0,1,40.5,44.9a8.146,8.146,0,0,0-13.336-.568,7.23,7.23,0,0,0-2.98,1.047,1.709,1.709,0,0,1-1.68.122,6.658,6.658,0,0,0-5.047-.377,1.728,1.728,0,0,1-1.762-.386A7.706,7.706,0,0,0,3.446,53.757a4.642,4.642,0,0,0,.661,8.964l.333,2.673a17.867,17.867,0,0,0-3.125,4.743,17.014,17.014,0,0,0-1.3,4.49.855.855,0,1,0,1.692.239,15.311,15.311,0,0,1,1.171-4.038,16.173,16.173,0,0,1,1.85-3.113l.44,3.538a12.817,12.817,0,0,0-1.239,6.735c.151.992.63,2.756,2.138,3.423s3.135-.167,3.97-.723a11.689,11.689,0,0,0,3.94-4.954,12.981,12.981,0,0,0,1.055-3.9,1.024,1.024,0,0,1,1.234-1.01,1.135,1.135,0,0,1,1.01,1.234,15.06,15.06,0,0,1-1.237,4.59,13.793,13.793,0,0,1-4.753,5.92c-1.167.776-3.944,1.968-6.1.921A6.548,6.548,0,0,1,1.7,78.328a.855.855,0,0,0-1.69.257c.449,2.946,1.875,6.4,6.943,7.016l.29,2.33A8.149,8.149,0,0,0,15.527,94.8h19.56a8.149,8.149,0,0,0,8.285-6.867.855.855,0,1,0-1.7-.211,6.441,6.441,0,0,1-6.589,5.368H15.527a6.441,6.441,0,0,1-6.589-5.368l-.283-2.276a10.389,10.389,0,0,0,3.578-1.457,15.35,15.35,0,0,0,5.152-6.181,6.328,6.328,0,1,0-5.544-1.639c-1.675,2.784-3.416,3.51-3.884,3.66L6.894,71.28h0l-.708-5.7L5.839,62.8H44.775L42.1,84.316a.855.855,0,0,0,1.7.211l2.723-21.895a4.651,4.651,0,0,0,3.419-4.479ZM11.589,71.587a4.622,4.622,0,1,1,6.625,4.168,16.281,16.281,0,0,0,.762-3.53,2.776,2.776,0,0,0-2.541-3.1,2.891,2.891,0,0,0-3.1,2.541,11.039,11.039,0,0,1-.7,2.849,4.582,4.582,0,0,1-1.041-2.925ZM10.148,44.25A5.949,5.949,0,0,1,14.5,45.961,3.433,3.433,0,0,0,18,46.75a4.937,4.937,0,0,1,3.742.28,3.4,3.4,0,0,0,3.355-.2A5.546,5.546,0,0,1,28.264,46a5.642,5.642,0,0,1,5.3,4.817.855.855,0,0,0,1.693-.234,7.328,7.328,0,0,0-5.83-6.161,6.4,6.4,0,0,1,3.783-1.554,6.465,6.465,0,0,1,5.856,2.962,4.518,4.518,0,0,0,2.613,1.884,4.12,4.12,0,0,1,2.972,3.55,4.044,4.044,0,0,1-.426,2.251H5.277a6,6,0,0,1,4.872-9.26ZM5.678,75.356l.493,3.967A4.788,4.788,0,0,1,5.678,75.356ZM45.294,61.087H4.939a2.934,2.934,0,1,1,0-5.868H45.294a2.934,2.934,0,1,1,0,5.868Zm0,0" transform="translate(0 -36.452)"></path><path className="a33" d="M140.121,7.795a3.9,3.9,0,1,0-3.9-3.9A3.9,3.9,0,0,0,140.121,7.795Zm0-6.086A2.188,2.188,0,1,1,137.932,3.9a2.191,2.191,0,0,1,2.188-2.188Zm0,0" transform="translate(-120.7)"></path></g></svg>
<div>
  <h1 className='font-bold text-xl text-black'>Thorough & Meticulous cleaning service</h1>

</div>

</div>
<div className='bg-white shadow-lg rounded-lg p-5 flex gap-3 items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="108.028" height="103.757" viewBox="0 0 58.028 53.757" fill='#ff9202' stroke='#ff9202' strokeWidth={1.75}><defs></defs><g transform="translate(0.4 0.406)"><path class="a22" d="M12.878,54.9a.773.773,0,0,1-.763-.763V44.091a.763.763,0,0,1,1.526,0v9.983A.751.751,0,0,1,12.878,54.9Zm44.2,1.961V51.179a.773.773,0,0,0-.763-.763.821.821,0,0,0-.763.763v5.683a2.849,2.849,0,0,1-2.861,2.861H9.451A2.849,2.849,0,0,1,6.59,56.862V24.306a2.849,2.849,0,0,1,2.861-2.861H52.69a2.849,2.849,0,0,1,2.861,2.861v5.3a.773.773,0,0,0,.763.763.821.821,0,0,0,.763-.763v-5.3a4.464,4.464,0,0,0-4.451-4.451H9.451A4.464,4.464,0,0,0,5,24.306v32.62a4.464,4.464,0,0,0,4.451,4.451H52.69A4.507,4.507,0,0,0,57.077,56.862Zm5.15-15.451V39.694a6.513,6.513,0,0,0-6.486-6.486H43.47a6.513,6.513,0,0,0-6.486,6.486V41.41A6.513,6.513,0,0,0,43.47,47.9H55.742A6.513,6.513,0,0,0,62.228,41.41ZM55.742,34.8a4.94,4.94,0,0,1,4.9,4.9V41.41a4.94,4.94,0,0,1-4.9,4.9H43.47a4.94,4.94,0,0,1-4.9-4.9V39.694a4.94,4.94,0,0,1,4.9-4.9H55.742ZM51.354,17.12a.818.818,0,0,0,.382-1.081l-3.37-7.185a.672.672,0,0,0-.445-.382,1.084,1.084,0,0,0-.636,0L32.469,15.467a.811.811,0,0,0,.7,1.462l14.053-6.613L50.274,16.8a.863.863,0,0,0,.7.445C51.164,17.184,51.291,17.184,51.354,17.12Z" transform="translate(-5 -8.425)"></path><path class="b22" d="M15.229-7.59H12.234" transform="translate(36.086 39.503)"></path></g></svg><div>
  <h1 className='font-bold text-xl text-black'>Affordable Pricing you can rely on</h1>

</div>

</div>
<div className='bg-white shadow-lg rounded-lg p-5 flex gap-3 items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="104.754" height="116" viewBox="0 0 54.754 66" fill='#ff9202' stroke='#ff9202' strokeWidth={1.75}><defs></defs><g transform="translate(0.002 0)"><path class="a44" d="M27.375,66a27.5,27.5,0,0,0,1.1-54.973V1.1a1.1,1.1,0,1,0-2.2,0v9.927A27.5,27.5,0,0,0,27.375,66Zm0-41.8a1.1,1.1,0,0,0,1.1-1.1v-.794a2.2,2.2,0,1,1-2.2,0V23.1a1.1,1.1,0,0,0,1.1,1.1Zm-1.1-10.973v6.729a4.4,4.4,0,1,0,2.2,0V13.227a25.3,25.3,0,1,1-2.2,0Zm0,0" transform="translate(0)"></path><path class="a44" d="M143.543,275.579a1.1,1.1,0,0,0,1.54-.22l13.2-17.6a1.1,1.1,0,0,0-1.76-1.32l-13.2,17.6A1.1,1.1,0,0,0,143.543,275.579Zm0,0" transform="translate(-123.428 -220.799)"></path><path class="a44" d="M131.5,264.8a4.4,4.4,0,1,0-4.4-4.4A4.4,4.4,0,0,0,131.5,264.8Zm0-6.6a2.2,2.2,0,1,1-2.2,2.2A2.2,2.2,0,0,1,131.5,258.2Zm0,0" transform="translate(-109.627 -220.8)"></path><path class="a44" d="M207.1,340.4a4.4,4.4,0,1,0,4.4-4.4A4.4,4.4,0,0,0,207.1,340.4Zm6.6,0a2.2,2.2,0,1,1-2.2-2.2A2.2,2.2,0,0,1,213.7,340.4Zm0,0" transform="translate(-178.627 -289.8)"></path></g></svg>
<div>
  <h1 className='font-bold text-xl text-black'>Friendly, professional cleaning staff</h1>

</div>

</div>

         </div>
          </div>
          
          
        </section>
        <section className="container mx-auto px-5 lg:px-20 py-10 gap-10">
          <h2 className='text-center text-primary font-bold text-2xl'>TESTIMONIALS</h2>
          <Testimonials/>
        </section>
        <section className="container mx-auto px-5 lg:px-20 py-10 " id="about">
          <div className="flex items-center justify-between">
            <div>
            <h1 className="section-title text-secondary">
          Our Articles
          </h1>
          <p className="text-dim text-md"> Offering skilled and affordable home cleaning Services</p>
            </div>
            <a
           href="/services"
            className="uppercase px-4 py-2 text-xs md:text-sm font-medium  text-center text-white transition-colors duration-150 bg-secondary border-2 border-none rounded-lg active:bg-primar focus:outline-none focus:shadow-outline-purple hover:bg-[#022b60] hover:text-white"
          >
            View All Articles
          </a>

          </div>

       <BlogSection number={3}/>
         
        </section>
        <section className="container-fluid mx-auto px-5 lg:px-20  gap-10 subscribe bg-cover bg-center min-h-screen -mb-40 flex flex-col justify-center ">
          <div className='space-y-3'>
          <h2 className='text-4xl font-bold'>Book Service Online</h2>
          <p className='text-dim lg:max-w-[50%]'>We provide reliable and high-quality house cleaning services in The Hague.

</p>

          </div>
          <Link href={'/consultation'}
            className="py-3 px-5 w-[300px] text-white text-center transition-colors duration-150 bg-secondary border border-transparent rounded-lg active:bg-primary hover:bg-[#022b60]"
          >
            SCHEDULE YOUR HOME CLEANING
          </Link>



        </section>
      </main>
    </div>
  );
}
