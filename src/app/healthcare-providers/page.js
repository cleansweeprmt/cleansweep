'use client'
import CtaButton from '../components/button'

const Providers = () => {
  return (
    <div>
      <main className="min-h-screen flex-col items-center justify-between bg-secondary container mx-auto px-5 lg:px-20">
        <section className="py-12">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="lg:basis-1/2 mt-10 md:mt-0">
              <h1 className="hero-title text-primary mb-5 text-start">
                Helping you deliver great primary care to women and families.
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
                  What can Evacare do for Us?
                </p>
                <CtaButton/>
              </div>
            </div>

            <div>
              <img src="/img/ai-doctor.jpg" className="rounded-lg"></img>
            </div>
          </div>
        </section>
        <section className="py-10" id="about">
        <h1 className="section-title text-dark mb-5 text-center lg:max-w-[80%] mx-auto">
        Benefits for Different Healthcare Providers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-10">
          <div className="flex flex-col items-center gap-4">
            <img src="/icons/4.svg"></img>
            <h2 className="text-dark text-2xl">Hospitals & Clinics</h2>
            <p className="text-md text-dim text-center">
            Reduce patient readmission rates, improve clinic efficiency, and bolster your reputation for exceptional maternal care.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/icons/5.svg"></img>
            <h2 className="text-dark text-2xl">Insurance Companies</h2>
            <p className="text-md text-dim text-center">
            Increase member satisfaction, potentially lower healthcare costs through improved preventative care, and differentiate your plans with innovative support tools.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/icons/6.svg"></img>
            <h2 className="text-dark text-2xl">CBOs & NGOs</h2>
            <p className="text-md text-dim text-center">
            Extend your reach to underserved communities, empower mothers with essential knowledge, and bridge the gap to clinical care.
            </p>
          </div>
          
        </div>
      </section>
      <section>
      <div className="container mx-auto py-10">
      <div className="space-y-3">
            <h1 className="hero-title text-dark mb-5 text-center">
            Better care can't wait
          </h1>
          <p className="text-md text-dim text-center">
            We have an end-to-end platform to help you provide exceptional
            prenatal and childcare support to every mother under your care.
          </p>
            </div>
        <div className="bg-services-content">
          <div className="flex items-center justify-center py-3">
            <div className="h-12 w-[2px] bg-primary"></div>
          </div>
          <div className="space-y-4 lg:px-12 ">
            <a href="/register" className="flex items-center" aria-label="learn more about evacare">
              <div className="flex  flex-col md:flex-row items-center justify-between px-8 py-4 mx-auto  service-card">
                <img src="/icons/monitoring.svg"   loading="lazy" alt="evacare"></img>

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="header-3 text-primary z-10">Enhanced Patient Engagement</h2>
                </div>
                <div className="service-divider mr-4"></div>
                <h3 className="text-dim text-center">
                Eva provides 24/7 support and personalized guidance, addressing common concerns, nutrition, and emotional well-being, freeing up your team's time for complex cases.
                </h3>
              </div>
              <div>
              </div>
            </a>
            <div className="flex items-center justify-center">
            <div className="h-12 w-[2px] bg-primary"></div>
          </div>
          <a href="/register" className="flex items-center" aria-label="learn more about evacare">
              <div className="flex flex-col md:flex-row items-center justify-between  px-8 py-4 mx-auto  service-card">
                <img src="/icons/screening.svg"   loading="lazy" alt="evacare"></img>

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="header-3 text-primary z-10">Digital health screening</h2>
                </div>
                <div className="service-divider mr-4"></div>
                <h3 className="text-dim text-center">
                Time or event-based delivery of both standardized (PHQ-9, EPDS) and customizable digital health assessments.
                </h3>
              </div>
              <div>
  

              </div>
            </a>
            <div className="flex items-center justify-center">
            <div className="h-12 w-[2px] bg-primary"></div>
          </div>
          <a href="/register" className="flex items-center" aria-label="learn more about evacare">
              <div className="flex flex-col md:flex-row items-center justify-between  px-8 py-4 mx-auto  service-card">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="header-3 text-primary z-10">Improved Patient Outcomes</h2>
                </div>
                <div className="service-divider mr-4"></div>
                <h3 className="text-dim text-center">
                Eva empowers mothers with evidence-based information and resources, leading to better informed decisions and potentially fewer complications.
                </h3>
              </div>
              <div>
              </div>
            </a>
            <div className="flex items-center justify-center">
            <div className="h-12 w-[2px] bg-primary"></div>
          </div>
          <a href="/register" className="flex items-center" aria-label="learn more about evacare">
              <div className="flex flex-col md:flex-row items-center justify-between  px-8 py-4 mx-auto  service-card">
                <img src="/icons/analytics.svg"   loading="lazy" alt="evacare"></img>

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="header-3 text-primary z-10">Streamlined Workflows</h2>
                </div>
                <div className="service-divider mr-4"></div>
                <h3 className="text-dim text-center">
                Eva efficiently addresses routine inquiries, allowing your team to focus on high-acuity cases and personalized consultations.
                </h3>
              </div>
              <div>
              </div>
            </a>
           

          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container px-6 lg:px-32 py-10  mx-auto values-bg relative">
        <h3 className="text-primary font-bold text-4xl text-center capitalize">
        Increase Revenue <br/> Delivering Better Quality Care
        </h3>
        <div className="flex items-center text-center justify-center my-10">
          <hr className="values-divider"></hr>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:mt-16 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <a href="register" aria-label="learn more about evacare"
            className="flex flex-col items-center justify-start  pt-8 pb-4 lg:pb-8 lg:py-8 px-4 text-center rounded-xl gap-2 bg-primary"
          
          >
            <span className="rounded-full flex items-center justify-center -mt-16 border-solid border-2 border-[#00856f] bg-white">
              <img
                src="/icons/8.svg"
                style={{ width: "50px", height: "50px" }} loading="lazy" alt="Adanian Labs" 
              ></img>
            </span>

            <h2 className='text-white text-lg font-bold'>RPM Reimbursement</h2>
            <hr className="bg-white h-[2px] w-full mt-2"></hr>
          <p className='text-md text-white'>We provide technology to enable medical practices of every size to utilize remote patient monitoring codes which may increase revenue while improving outcomes.</p>

       
          </a>
          <a href="register" aria-label="learn more about evacare"
            className="flex flex-col items-center justify-start  pt-8 pb-4 lg:pb-8 lg:py-8 px-4 text-center rounded-xl gap-2 bg-primary"
          
          >
            <span className="rounded-full flex items-center justify-center -mt-16 border-solid border-2 border-[#00856f] bg-white">
              <img
                src="/icons/9.svg"
                style={{ width: "50px", height: "50px" }} loading="lazy" alt="Adanian Labs" 
              ></img>
            </span>

            <h2 className='text-white text-lg font-bold'>Eligibility Verification</h2>
            <hr className="bg-white h-[2px] w-full mt-2"></hr>
          <p className='text-md text-white'>We connect directly with your patients' insurance plans to determine their eligibility to avoid surprise bills.</p>

       
          </a>
          <a href="register" aria-label="learn more about evacare"
            className="flex flex-col items-center justify-start  pt-8 pb-4 lg:pb-8 lg:py-8 px-4 text-center rounded-xl gap-2 bg-primary"
          
          >
            <span className="rounded-full flex items-center justify-center -mt-16 border-solid border-2 border-[#00856f] bg-white">
              <img
                src="/icons/7.svg"
                style={{ width: "50px", height: "50px" }} loading="lazy" alt="Adanian Labs" 
              ></img>
            </span>

            <h2 className='text-white text-lg font-bold'>FSA/HSA Qualified</h2>
            <hr className="bg-white h-[2px] w-full mt-2"></hr>
          <p className='text-md text-white'>Patient cost obligations are FSA/HSA qualified minimizing out-of-pocket expenses.</p>

       
          </a>
        </div>
      </div>
    </section>

     
      </main>
    </div>
  );
};

export default Providers;
