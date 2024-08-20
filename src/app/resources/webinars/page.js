import PageHeader from "../../(components)/header";

const Page = () => {
  return (
    <div>
      <PageHeader title={"Events and Webinars"} />
      <div className="container mx-auto px-5 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-3xl text-dark font-bold">How to deal with Staff Absenteeism</h2>
            <div className="flex items-center gap-10">
    <div className="flex text-md text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
10 July 2024
</div>
<div className="flex text-md text-primary">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
</svg>

11:30am -1pm
</div>
            </div>

            <p className="text-lg text-dim">   Staff absenteeism can significantly disrupt the workplace by
            decreasing productivity, increasing the workload on present
            employees, and lowering overall morale.
            <br />
            Download resources for our past Webinar : “How to Deal with Staff
            Absenteeism”</p>
            <div className="pb-4">

            </div>
            <a href="https://dashboard.hrfleek.com/product/how-to-deal-with-staff-absenteeism-webinar/"
           
           className="uppercase px-10 py-3 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple"
         >
          DOWNLOAD RESOURCES
         </a>
         
          </div>
          
         
          <div>
            <img src="/webinar.jpeg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
