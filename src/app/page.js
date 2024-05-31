"use client";
import { useEffect, useState } from 'react';
import ClientSlider from './(components)/clientSlider'
import ServiceSlider from './(components)/servicesSlider'
import Testimonials from './(components)/testimonials'
import PopupForm from '../components/Form/PopupForm';

export default function Home() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleBeforeUnload = () => {
    setIsPopupOpen(true);
  };
  useEffect(() => {

handleBeforeUnload()
  }, []);

  return (
    <div className="bg-white">
      <main className="min-h-screen flex-col items-center justify-between bg-white">
        <section className="py-12  bg-cover hero bg-center lg:bg-top min-h-screen flex flex-col items-start justify-center gap-5 container mx-auto px-5 lg:px-20">
        <h1 className="hero-title text-primary mb-5 text-start lg:max-w-[50%] lg:mt-28">
                Your preferred partner in managing your entire HR cycle
              </h1>
              <a
           href="/consultation"
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple"
          >
            BOOK A CONSULTATION
          </a>
        </section>
        {isPopupOpen && (<PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>) }
        <ClientSlider/>
        <section className="container mx-auto px-5 lg:px-20 py-10" id="about">
          <div className="flex items-center justify-between">
            <div>
            <h1 className="section-title text-dark">
          Our Services
          </h1>
          <p className="text-dim text-md"> HRFLEEK is your one-stop place
for Human resource Services</p>
            </div>
            <a
           href="/services"
            className="uppercase px-4 py-2 text-xs md:text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border-2 border-primary rounded-lg active:bg-primar focus:outline-none focus:shadow-outline-purple hover:bg-[#0C9494] hover:text-white"
          >
            View All
          </a>

          </div>

        <ServiceSlider/>
         
        </section>
        <section className="container mx-auto px-5 lg:px-20 rounded-lg flex flex-col md:flex-row items-start justify-between bg-gray-100 py-10 gap-10">
          <div className="md:basis-1/2 space-y-5">
            <h2 className="text-primary text-2xl font-semibold">About Us</h2>
            <p className="text-dim text-lg">We offer bespoke and tailored professional human resource services delivered by our team of highly qualified and experienced professionals to ensure that you receive the support and expertise that you need. It is not just about the services we provide but how we put them together to solve your problems. We focus on offering solutions so that you can focus on your business.<br/><br/>Our focus is to get to the core of our clients HR needs creating and adding value to them by delivering timely, innovative and commercially sound advice and HR solutions. We have set up robust systems to ensure consistently high quality output in every task we undertake and are compromising in our quality control.</p>
          </div>
          <div className="md:basis-1/2 ">
          <img src="/img/about.png" className="rounded-lg w-full"/>
          </div>
          
          
        </section>
        <section className="container mx-auto px-5 lg:px-20 py-10 gap-10">
          <h2 className='text-center text-primary font-bold text-2xl'>TESTIMONIALS</h2>
          <Testimonials/>
        </section>
      </main>
    </div>
  );
}
