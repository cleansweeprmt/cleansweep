import PageHeader from "../(components)/header";


const Page = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <PageHeader title={'Our Cleaning Services'} subTitle={'At CleanSweep Remote Services, we provide top-quality, eco-friendly cleaning solutions tailored to your needs. Whether you need a spotless office, a pristine home, or specialized cleaning services, our expert team is ready to help!'}/>    
            
            {/* Residential Cleaning Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-5 lg:px-20">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="p-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <img src="/services/8.jpg" alt="Services" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-primary mb-2">🏡 Residential Cleaning Services</h2>
                            <p className="text-xl text-gray-600 mb-6">Keep your home fresh, clean, and healthy with our professional cleaning solutions.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start">
                                    <div className="text-primary mr-3 mt-1">
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
                                    <div className="text-primary mr-3 mt-1">
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
                                    <div className="text-primary mr-3 mt-1">
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
                                    <div className="text-primary mr-3 mt-1">
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
                                    <div className="text-primary mr-3 mt-1">
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
                                    <div className="text-primary mr-3 mt-1">
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
                            
                            <button className="bg-primary hover:bg-primary/80 text-white py-3 px-8 rounded-lg font-medium transition duration-300 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
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
                            <img src="/services/6.jpg" alt="Services" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-primary mb-2">🏢 Commercial & Office Cleaning Services</h2>
                            <p className="text-xl text-gray-600 mb-6">Keep your workplace spotless, professional, and hygienic.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start">
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                                    <div className="text-secondary mr-3 mt-1">
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
                            
                            <button className="bg-secondary hover:bg-indigo-600 text-white py-3 px-8 rounded-lg font-medium transition duration-300 inline-flex items-center">
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
                   <img src="/services/1.jpg" alt="Services" className="w-full h-full object-cover"/>
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