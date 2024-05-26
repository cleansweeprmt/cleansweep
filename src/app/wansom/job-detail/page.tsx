import React from 'react'
import Head from 'next/head'

function jobDetail() {
    return (
        <div className="bg-white p-8">
            <Head>
                <title>Job Vacancy - Operations Manager</title>
            </Head>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Vacancy – Operations Manager</h1>
                <p className="text-sm text-gray-600 mb-2">ON MAY 24, 2024</p>
                <p className="text-sm text-gray-600 mb-8">Closing on: Jun 7, 2024</p>

                <div className="mb-10">
                    <img src="/logo.png" alt="Virtual HR" className=" h-32 mb-4" />
                    <p className="text-gray-700 mb-4">Our client is a non-profit organization that operates independently by making globalization work for the many, not the few. They achieve this by helping countries, their people, and their governments address some of the most difficult challenges in the world and offer new thinking and new approaches to address some of the most intractable problems that leaders wrestle with today.</p>
                    <p className="text-gray-700 mb-4">Our client is seeking to recruit a qualified professional to fill the following position in their Nairobi office:</p>
                    <h2 className="text-xl font-semibold mb-3">OPERATIONS MANAGER</h2>
                    <p className="text-gray-700 mb-4">Reporting to the Country Director, the incumbent will be responsible for providing effective and efficient support to ensure smooth administrative and program delivery. This includes administrative, logistical, and information management.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Ensuring the development of regional level security SOPs that are contextually appropriate to the risk to staff and activities in the region.</li>
                        <li>Understanding and helping to ensure compliance with relevant laws and regulations regarding local and international procurement and import/export procedures.</li>
                        <li>Conducting monthly checks of all vehicles to ensure safety features and equipment are functional and serviced as per the servicing schedules.</li>
                        {/* <!-- Add more responsibilities as needed --> */}
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Key Qualifications, Experience, Skills, and Competencies</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Bachelor’s degree in Project Management, Finance, Logistics, Administration, Accounting or other related fields from an accredited institution of higher learning.</li>
                        <li>Minimum of 5 years of experience in administrative work; experience in project administrative and financial management or related work is an added advantage.</li>
                        <li>Proficiency in MS Office.</li>
                        {/* <!-- Add more qualifications as needed --> */}
                    </ul>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Apply</button>
                    <div>
                        <a href="#" className="text-blue-600 hover:underline">Share on Social Media</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default jobDetail