import Link from "next/link";
import PageHeader from "../(components)/header";
import Image from "next/image";

const Page = () => {
    return (
        <div className="bg-gray-50">
            <PageHeader title={'About Us'}/>
            
            {/* Hero Section */}
            <section className="container mx-auto px-5 lg:px-20 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:basis-1/2 space-y-6">
                        <h1 className="text-4xl text-primary font-bold">Welcome to <span className="text-secondary">CleanSweep</span> Remote Services</h1>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We provide <span className="font-semibold">top-quality, reliable, and eco-friendly cleaning services</span> across Alberta. Whether you need <span className="font-semibold">residential, commercial, or post-construction cleaning</span>, our skilled team ensures a spotless and hygienic environment.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <button className="bg-secondary hover:bg-secondary/80 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                                Book Now
                            </button>
                            <button className="border-2 border-primary text-secondary hover:bg-secondary font-medium py-3 px-6 rounded-lg transition duration-300">
                                Our Services
                            </button>
                        </div>
                    </div>
                    <div className="md:basis-1/2">
                        <img src="/img/hero.jpg" alt="CleanSweep Team" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">Our commitment to quality and customer satisfaction sets us apart. Experience the CleanSweep difference today!</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Customized Cleaning Plans</h3>
                            <p className="text-white">We tailor our services to fit your schedule and cleaning needs.</p>
                        </div>
                        
                        <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Trained & Professional Cleaners</h3>
                            <p className="text-white">Our team is highly trained, background-checked, and detail-oriented.</p>
                        </div>
                        
                        <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly Products</h3>
                            <p className="text-white">We use non-toxic, environmentally safe cleaning solutions to protect your space.</p>
                        </div>
                        
                        <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction Guarantee</h3>
                            <p className="text-white">If you're not happy, we'll make it right!</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">From regular house cleaning to post-construction cleanup, we offer comprehensive services to meet all your cleaning needs.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-primary flex items-center justify-center text-white">
                               <img src="/services/2.jpg" alt="Residential Cleaning"className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Residential Cleaning</h3>
                                <p className="text-gray-600 mb-4">Deep cleaning, move-in/move-out, and regular home maintenance.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-500">
                               <img src="/services/1.jpg" alt="Office & Commercial Cleaning"className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Office & Commercial Cleaning</h3>
                                <p className="text-gray-600 mb-4">Office spaces, retail stores, and business properties.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-500">
                               <img src="/services/3.jpg" alt="Post-Construction Cleaning"className="w-full h-full object-cover" /> <img src="/services/1.jpg" alt="Residential Cleaning"className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Post-Construction Cleaning</h3>
                                <p className="text-gray-600 mb-4">Removing dust, debris, and construction residue.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-500">
                                <img src="/services/5.jpg" alt="Airbnb & Vacation Rental Cleaning"className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Airbnb & Vacation Rental Cleaning</h3>
                                <p className="text-gray-600 mb-4">Quick turnaround cleaning to impress guests.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-500">
                                <img src="/services/9.jpg" alt="Green Cleaning Services"className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Green Cleaning Services</h3>
                                <p className="text-gray-600 mb-4">Safe for kids, pets, and the environment.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-500">
                                <img src="/services/7.jpg" alt="Flexible Scheduling"className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                                <p className="text-gray-600 mb-4">Weekly, bi-weekly, or one-time cleaning options available.</p>
                                <a href="#" className="text-blue-500 font-medium hover:underline">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="text-center mb-12">
                        <p className="text-blue-500 font-medium mb-2">🧼 Meet Our Team</p>
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Dedicated Professionals</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At <span className="font-semibold">CleanSweep Remote Services</span>, our team is dedicated to delivering 
                            <span className="font-semibold"> exceptional cleaning services</span> while maintaining the highest standards of 
                            <span className="font-semibold"> professionalism, reliability, and attention to detail</span>.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-8 shadow-md mb-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">What Sets Our Team Apart?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Trained & Experienced</h4>
                                    <p className="text-gray-600">Our cleaners undergo thorough training to ensure top-quality results.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Background-Checked & Trustworthy</h4>
                                    <p className="text-gray-600">Your safety is our priority, and every team member is carefully vetted.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Detail-Oriented & Efficient</h4>
                                    <p className="text-gray-600">We don't just clean; we refresh, sanitize, and transform spaces.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-4 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Customer-Focused</h4>
                                    <p className="text-gray-600">We tailor our cleaning services to your needs, ensuring satisfaction every time.</p>
                                </div>
                            </div>
                        </div>
                        
                        <p className="mt-6 text-gray-700 text-lg">
                            <span className="font-semibold">Our team is growing, but our mission remains the same</span> – to provide 
                            <span className="font-semibold"> spotless, healthy, and welcoming spaces for our clients</span>. Whether it's 
                            <span className="font-semibold"> office buildings, Airbnbs, post-construction sites, or residential homes</span>, 
                            CleanSweep is here to serve you!
                        </p>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-8 border-l-4 border-blue-500">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Team Ready to Serve</h3>
                                <p className="text-gray-700">
                                    Our professional cleaning specialists are trained in the latest cleaning techniques and use eco-friendly products to deliver exceptional results. Each team member undergoes extensive training and background checks to ensure the highest quality service for your home or business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="container mx-auto px-5 lg:px-20  gap-10 subscribe bg-cover bg-center min-h-screen -mb-40 flex flex-col justify-center ">
          <div className='space-y-3'>
          <h2 className='text-4xl font-bold'>Book Service Online</h2>
          <p className='text-dim lg:max-w-[50%]'>We provide reliable and high-quality house cleaning services in Alberta.

</p>

          </div>
          <Link href={'/contact'}
            className="py-3 px-5 w-[300px] text-white text-center transition-colors duration-150 bg-secondary border border-transparent rounded-lg active:bg-primary hover:bg-[#022b60]"
          >
            SCHEDULE YOUR CLEANING
          </Link>



        </section>
        </div>
    );
}
 
export default Page;