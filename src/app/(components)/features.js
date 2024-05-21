const Features = () => {
    return ( 
        <section className="py-10">
        <h1 className="section-title text-dark mb-2 text-center lg:max-w-[50%] mx-auto">
          Care beyond barriers
        </h1>
        <p className="text-md text-dim text-center lg:max-w-[50%] mx-auto">
          Evacare offers comprehensive care for everyone planning, starting, and
          raising a family. We harness the best of technology to deliver a
          higher quality of care, online and off.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-10">
          <div className="flex flex-col items-center gap-4">
            
            <h2 className="text-dark text-2xl">
            On-demand appointments
            </h2>
            <p className="text-md text-dim text-center">
            We go beyond by partnering with specialists and hospitals, ensuring you have access to expert care when needed. 
            </p>
            <img src="/img/phone-1.png" className="h-[75%]"></img>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-dark text-2xl">Meet Eva: Your AI Companion</h2>
            <p className="text-md text-dim text-center lowercase">
              TALK TO AN AI COMPANION 24/7 ABOUT YOUR PREGNANCY/ PARENTHOOD
              ISSUES
            </p>
            <img src="/img/phone-2.png" className="h-[75%]"></img>
          </div>
          <div className="flex flex-col items-center gap-4">
            
            <h2 className="text-dark text-2xl">
              An online support Group
            </h2>
            <p className="text-md text-dim text-center">
              Access to a team of an OB-GYN, Nurse
              Midwife, Supamum and a support group of moms who are experiencing similar journeys
            </p>
            <img src="/img/phone-3.png" className="h-[75%]"></img>
          </div>
        </div>
      </section>
     );
}
 
export default Features;