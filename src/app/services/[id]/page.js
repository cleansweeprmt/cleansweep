
'use client'
import Image from 'next/image'
import PageHeader from '../../(components)/header';
import { services } from '../../(services)/data';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const Page = () => {
    const {id}=useParams()
    const [service, setService] = useState(null);
    useEffect(() => {
        console.log(decodeURIComponent(id));
        const service=services.find((service)=>service.title==decodeURIComponent(id))
        setService(service)
        console.log(service);
    },[])
    return (   <div>
     <PageHeader title={service.title}/>
        <div className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
            <div className="flex flex-col lg:flex-row">
                <div className="bg-white p-4 lg:w-1/4">

                    <ul className="bg-teal-700 p-4  text-white rounded-md overflow">
                        {services.map((service,index)=>(  <li className="mb-2 py-2" key={index}>
                            <a href={`/services/${service.title}`} className="flex items-center gap-2">
                              {service.title}   <span className="ml-auto min-w-[40px] h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center"><img src="/wansom/chevron-right-solid.svg" className="h-[20px] w-[20px]" alt="HrFleek" /></span>
                            </a>
                        </li>))}
     
                    </ul>
                </div>

                {/* Main Content */}
                <div className="p-8 pt-4 lg:w-3/4">
                    <div>
                        <div className="mb-6 rounded-md overflow-hidden">
                            <img src={service?.img} alt="Placeholder Image" className="mx-auto" />
                        </div>
                    </div>
                    <h2 className="text-2xl mt-16 font-bold mb-4 text-teal-700">{service?.title}</h2>
                    <p className="mb-4">
                        We will help your business achieve its goals and objectives with our proficiency in performance management and our professional approach to client service.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">What steps shall we take?</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li className="py-2">Understanding Current Practices: Discussing your current performance management system (if any) and identify areas for improvement.</li>
                        <li className="py-2">Organizational Goals: Align performance management with your company’s overall strategic objectives.</li>
                        <li className="py-2">Employee Roles and Responsibilities: Understand the different roles and responsibilities within the company to tailor performance expectations.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Developing the Performance Management System:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li className="py-2">Goal Setting: Establish a process for setting clear, measurable, achievable, relevant, and time-bound (SMART) goals for individual employees and teams.</li>
                        <li className="py-2">Performance Appraisal Tools: Design or recommend performance appraisal tools like Balance Score Card or 360-degree feedback.</li>
                        <li className="py-2">Training for Managers: Provide training for managers on how to effectively conduct performance reviews, deliver constructive feedback, and utilize the performance management system.</li>
                        <li className="py-2">Performance Management Software: Recommend and implement performance management software to streamline the process.</li>
                        <li className="py-2">Documentation and Record Keeping: Establish a system for documenting performance discussions, feedback sessions, and progress on goals.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-16  mb-4 text-teal-700">Benefits of a Performance Management System</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col items-start text-left">
                            <img src="/wansom/card image.png" alt="Improved Employee Performance" className="mb-2" />
                            <h4 className="font-bold py-4 text-xl">Improved Employee Performance</h4>
                            <p className="font-normal text-grey-100">Clear expectations and regular feedback lead to increased motivation and improved performance.</p>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <img src="/wansom/card image.png" alt="Enhanced Employee Engagement" className="mb-2" />
                            <h4 className="font-bold py-4 text-xl">Enhanced Employee Engagement</h4>
                            <p className="font-normal text-grey-100">Employees feel more valued and appreciated when their contributions are recognized.</p>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <img src="/wansom/card image.png" alt="Strategic Alignment" className="mb-2" />
                            <h4 className="font-bold py-4 text-xl">Strategic Alignment</h4>
                            <p className="font-normal text-grey-100">Performance management ensures individual and team goals align with the company’s overall strategy.</p>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <img src="/wansom/card image.png" alt="Talent Development" className="mb-2" />
                            <h4 className="font-bold py-4 text-xl">Talent Development</h4>
                            <p className="font-normal text-grey-100">Identifying strengths and weaknesses allows for targeted training and development opportunities for employees.</p>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <img src="/wansom/card image.png" alt="Improved Communication" className="mb-2" />
                            <h4 className="font-bold py-4 text-xl">Improved Communication</h4>
                            <p className="font-normal text-grey-100">Performance reviews encourage open communication between managers and employees.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-16 mb-4 text-teal-700">Our best consultants</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <img src="/wansom/ann.png" alt="Anne Otunga" className="rounded-full w-32 h-32 mb-2" />
                            <h4 className="font-bold text-xl">Anne Otunga</h4>
                            <p className="text-center">CEO/Founder</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/wansom/ann.png" alt="Fortunatus Otieno" className="rounded-full w-32 h-32 mb-2" />
                            <h4 className="font-bold text-xl">Fortunatus Otieno</h4>
                            <p className="text-center">Consultant</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/wansom/ann.png" alt="Lilian Ambani" className="rounded-full w-32 h-32 mb-2" />
                            <h4 className="font-bold text-xl">Lilian Ambani</h4>
                            <p className="text-center">Financial Advisory Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-teal-700">
            {/* Call to Action Section */}
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white p-4 py-16 container flex flex-col md:flex-row items-center justify-between rounded mt-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                        <Image src="/wansom/calender.png" alt="Calendar Icon" width={24} height={24} />
                    </div>
                    <p className="text-2xl font-bold">Call adviser for HRfleek outsourcing service business</p>
                </div>
                <a href="#" className="bg-white text-teal-700 py-2 px-4 rounded border-2 border-white hover:bg-teal-600 hover:text-white transition">
                    BOOK A CONSULTANT
                </a>
            </div>
        </div>
    </div> );
}
 
export default Page;