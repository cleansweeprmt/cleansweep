'use client'
import { useState } from "react";
import PageHeader from "../(components)/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        toast.success("Thanks for your message")
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred while submitting the form');
      console.error('Error:', error);
      toast.error("Something went wrong")
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader title={'Contact Us'} />
      <ToastContainer />
      <section className="container mx-auto px-5 lg:px-20 py-10">
      



      </section>

      <section className="container mx-auto px-5 lg:px-20 py-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-10">

          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4 hidden lg:block">
          <div className="space-y-3">
          <div className="flex  items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
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
            <p>Dorus Rikerskplein- Hague</p>
          </div>
          <div className="flex items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <p> +31630665434</p>
          </div>
          <div className="flex items-center justify-center border-2 border-solid border-gray-100 shadow-ld rounded-lg p-10 text-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
            </svg>

            <p>info@spruceitup.nl</p>
          </div>
        </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 block lg:hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.800665020861!2d36.808691074965616!3d-1.2941083986935926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e9e9f172db%3A0xde236816f452452b!2sI%26M%20Bank%202nd%20Ngong%20Avenue%20Branch%2C%20Ngong%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1717142028581!5m2!1sen!2ske" width="330" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded-lg">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-3 rounded outline-none focus:border-blue-500 w-full mb-4"
        />
        
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-3 rounded outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="border p-3 rounded outline-none focus:border-blue-500"
        />
      </div>
      <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Write Details"
        className="border p-3 rounded outline-none focus:border-blue-500 w-full mb-4"
        rows="4"
      ></textarea>
      {message && <p className="text-primary">{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-black text-white p-3 rounded w-full flex items-center gap-2 justify-center"
      >
        {isSubmitting ? 'Submitting...' : 'SEND MESSAGE'}
      </button>
    </form>
  
          </div>

        </div>
      </section>
    
    </div>
  );
};

export default Page;
