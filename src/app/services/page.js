import PageHeader from "../(components)/header";

const Page = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-5 lg:px-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cleaning Services</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        At <span className="font-bold">CleanSweep Remote Services</span>, we provide top-quality, eco-friendly cleaning solutions tailored to your needs. Whether you need a <span className="font-bold">spotless office</span>, <span className="font-bold">a pristine home</span>, or <span className="font-bold">specialized cleaning services</span>, our expert team is ready to help!
                    </p>
                </div>
            </section>
            
            {/* Residential Cleaning Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="p-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-primary mb-2">🏡 Residential Cleaning Services</h2>
                            <p className="text-xl text-gray-600 mb-6">Keep your home fresh, clean, and healthy with our professional cleaning solutions.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Routine Home Cleaning</h3>
                                        <p className="text-gray-600">Weekly, bi-weekly, or monthly maintenance cleaning</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Deep Cleaning</h3>
                                        <p className="text-gray-600">Thorough, top-to-bottom cleaning, including neglected areas</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Move-In/Move-Out Cleaning</h3>
                                        <p className="text-gray-600">Ensure a fresh start for new homeowners or tenants</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Airbnb & Vacation Rental Cleaning</h3>
                                        <p className="text-gray-600">Fast, high-quality cleaning between guest stays</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Post-Renovation Cleaning</h3>
                                        <p className="text-gray-600">Remove dust and debris after remodelling</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Carpet & Upholstery Cleaning</h3>
                                        <p className="text-gray-600">Deep cleaning to refresh your furniture and floors</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-blue-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Window Cleaning</h3>
                                        <p className="text-gray-600">Streak-free glass cleaning for interior and exterior windows</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Book a Home Cleaning Today!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Commercial Cleaning Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="flex flex-col md:flex-row-reverse items-start gap-8">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="p-6 rounded-full bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-primary mb-2">🏢 Commercial & Office Cleaning Services</h2>
                            <p className="text-xl text-gray-600 mb-6">Keep your workplace spotless, professional, and hygienic.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Routine Office Cleaning</h3>
                                        <p className="text-gray-600">Daily, weekly, or monthly cleaning schedules available</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Janitorial Services</h3>
                                        <p className="text-gray-600">Full-service cleaning for offices, warehouses, and buildings</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Retail Store Cleaning</h3>
                                        <p className="text-gray-600">Ensure a clean and inviting shopping environment</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Bank & Financial Institution Cleaning</h3>
                                        <p className="text-gray-600">Secure and discreet cleaning services</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Medical Facility Cleaning</h3>
                                        <p className="text-gray-600">Healthcare-grade disinfection for clinics and hospitals</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Fitness Center & Gym Cleaning</h3>
                                        <p className="text-gray-600">Eliminate bacteria and odours for a fresh workout space</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Industrial & Warehouse Cleaning</h3>
                                        <p className="text-gray-600">Heavy-duty cleaning for large spaces</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Restaurant Cleaning</h3>
                                        <p className="text-gray-600">Deep kitchen sanitization and dining area cleaning</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="text-indigo-500 mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Educational Institution Cleaning</h3>
                                        <p className="text-gray-600">Schools, daycares, and universities</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Contact Us for a Customized Business Cleaning Plan!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Specialized Cleaning Section */}
      {/* Specialized Cleaning Section */}
<section className="py-16 bg-white">
    <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3 flex justify-center">
                <div className="p-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-primary mb-2">🛠️ Specialized & High-Demand Cleaning Services</h2>
                <p className="text-xl text-gray-600 mb-6">Need a specialized cleaning solution? We've got you covered!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Post-Construction Cleaning</h3>
                            <p className="text-gray-600">Remove debris & dust to make your space move-in ready</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Eco-Friendly Cleaning</h3>
                            <p className="text-gray-600">Safe, non-toxic products for health-conscious clients</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Emergency Cleaning Services</h3>
                            <p className="text-gray-600">Same-day and last-minute cleaning available</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Hard Floor Care</h3>
                            <p className="text-gray-600">Stripping, waxing & buffing for all flooring types</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Tile & Grout Cleaning</h3>
                            <p className="text-gray-600">Deep cleaning to remove dirt and stains</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Window & Glass Cleaning</h3>
                            <p className="text-gray-600">Professional, streak-free results for homes & offices</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Pressure Washing</h3>
                            <p className="text-gray-600">Deep exterior cleaning for sidewalks, patios, and driveways</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Event Cleanup Services</h3>
                            <p className="text-gray-600">Pre- and post-event cleaning for corporate & private events</p>
                        </div>
                    </div>
                </div>
                
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Need Specialized Cleaning? Get a Free Quote Today!
                </button>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Page;  