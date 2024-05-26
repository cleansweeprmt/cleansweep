import PageHeader from "../(components)/header";

const Page = () => {
  return (
    <div>
      <PageHeader title={'Contact Us'} />
      <section className="container mx-auto px-5 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex flex-col items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>I&M Bank House, 3rd Floor, 2nd Ngong Avenue, Nairobi</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <p>+254741511183</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
            </svg>

            <p>info@hrfleek.com</p>
          </div>
        </div>



      </section>

      <section className="container mx-auto px-5 lg:px-20 py-10">
        <div className="flex flex-wrap justify-between">

          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-6">
              <h1 className="text-4xl font-semibold text-gray-800 mb-2">Have be any Question? feel free to contact with us.</h1>
              <p className="text-gray-600 text-lg">
                We undertake HR and Culture Audits to assess your company’s Human Resources practices and organizational culture. It aims to identify areas of strength and weakness, allowing you to make informed decisions for improvement.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-600"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-green-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
            <div className="bg-white p-8 shadow rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="border p-3 rounded outline-none focus:border-blue-500" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded outline-none focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Phone Number" className="border p-3 rounded outline-none focus:border-blue-500" />
                <input type="text" placeholder="Email address" className="border p-3 rounded outline-none focus:border-blue-500" />
              </div>
              <input type="text" placeholder="Company/Organization Name" className="border p-3 rounded outline-none focus:border-blue-500 w-full mb-4" />
              <select className="border p-3 rounded outline-none focus:border-blue-500 w-full mb-4">
                <option>Consult HR Expert</option>
                <option>Outsourced HR Manager</option>
                <option>HR contracts & Documents</option>
                <option>Recruitment Services</option>
                <option>Immigration Services</option>
                <option>Employment Law Audits</option>
                {/* Add more options here */}
              </select>
              <textarea placeholder="Write Details" className="border p-3 rounded outline-none focus:border-blue-500 w-full mb-4" rows="4"></textarea>
              <button className="bg-black text-white p-3 rounded w-full">BOOK A CONSULTATION</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page;
