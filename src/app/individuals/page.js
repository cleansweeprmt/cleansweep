'use client'

import Features from "../components/features";

const Page = () => {
    return ( 
        <div>
        <main className="min-h-screen flex-col items-center justify-between bg-secondary container mx-auto px-5 lg:px-20">
          <section className="py-12">
            <div className=" flex flex-col md:flex-row items-center justify-center gap-5">
              <div className="lg:basis-1/2">
                <h1 className="hero-title text-primary mb-5 text-start">
                Global, end-to-end care for every path to parenthood
                </h1>
                <div className="bg-white rounded flex items-center justify-between py-2 shadow-md px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <hr className="w-[2px] h-10 bg-gray-300"></hr>
                  <p className="text-md text-gray-500">
                    What can Evacare do for my family?
                  </p>
  
                  <button
                    type="button"
                    className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-primary  focus:outline-none "
                  >
                    Learn More
                  </button>
                </div>
              </div>
  
              <div className="lg:basis-1/2">
                <img src="/img/individuals.webp" className="rounded-lg"></img>
              </div>
            </div>
          </section>
          <section className="py-10" id="about">
          <h1 className="section-title text-dark mb-5 text-center lg:max-w-[80%] mx-auto">
          Benefits for Different Healthcare Providers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10 py-10">
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/3.svg"></img>
              <h2 className="text-dark text-xl text-center">Delightful app and dedicated Care Advocate</h2>        
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/5.svg"></img>
              <h2 className="text-dark text-xl text-center">Unlimited on-demand video appointments</h2>
             
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/6.svg"></img>
              <h2 className="text-dark text-xl text-center">Live classes and provider-monitored forums</h2>
             
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/2.svg"></img>
              <h2 className="text-dark text-xl text-center">Personalized clinical programs</h2>
             
            </div>
            
          </div>
        </section>
          <Features/>      
        </main>
      </div>
     );
}
 
export default Page;