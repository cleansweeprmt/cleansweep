'use client'
import CtaButton from '../components/button'

const Providers = () => {
  return (
    <div>
      <main className="min-h-screen flex-col items-center justify-between bg-secondary container mx-auto px-5 lg:px-20">
        <section className="py-12">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="lg:basis-1/2">
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
        <section className="py-10" id="about">
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 py-10">
            <div className="space-y-3">
            <h1 className="hero-title text-dark mb-5 lg:max-w-[80%]">
            Better care can't wait
          </h1>
          <p className="text-md text-dim">
            We have an end-to-end platform to help you provide exceptional
            prenatal and childcare support to every mother under your care.
          </p>
          <img src="/img/dashboard.jpeg" className=" shadow rounded-lg"></img>
            </div>
          
            <div>
              <div className="space-y-3">
                <hr className="h-[2px] w-full bg-black"></hr>
                <h2 className="text-3xl text-dark">
                  Enhanced Patient Engagement
                </h2>
                <p className="text-md text-dim mx-auto">
                  Eva provides 24/7 support and personalized guidance,
                  addressing common concerns, nutrition, and emotional
                  well-being, freeing up your team's time for complex cases.
                </p>
              </div>
              <div className="space-y-3">
                <hr className="h-[2px] w-full bg-black"></hr>
                <h2 className="text-3xl text-dark">
                Improved Patient Outcomes
                </h2>
                <p className="text-md text-dim mx-auto">
                Eva empowers mothers with evidence-based information and resources, leading to better informed decisions and potentially fewer complications.
                </p>
              </div>
              <div className="space-y-3">
                <hr className="h-[2px] w-full bg-black"></hr>
                <h2 className="text-3xl text-dark">
                Increased Patient Satisfaction
                </h2>
                <p className="text-md text-dim mx-auto">
                Eva's constant support fosters trust and reduces anxieties, leading to a more positive patient experience.
                </p>
              </div>
              <div className="space-y-3">
                <hr className="h-[2px] w-full bg-black"></hr>
                <h2 className="text-3xl text-dark">
                Streamlined Workflow
                </h2>
                <p className="text-md text-dim mx-auto">
                Eva efficiently addresses routine inquiries, allowing your team to focus on high-acuity cases and personalized consultations.
                </p>
              </div>
              <button
            onClick={() => {
              router.push('https://calendly.com/ochiengwarren3/evacare')
            }}
            className="uppercase  justify-center px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple my-4"
          >
            SPEAK TO OUR TEAM
          </button>
            </div>
          </div>
        </section>
     
      </main>
    </div>
  );
};

export default Providers;
