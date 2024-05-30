import React, { useState } from 'react';

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    cv: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' || name === 'cv') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('resume', formData.resume);
    form.append('cv', formData.cv);

    try {
      // Send form data to the server or email service
      const response = await fetch('../../app/api/mailer/send-email', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        alert('Application sent successfully!');
        onClose();
      } else {
        alert('Failed to send application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send application. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl mb-4">Apply for the Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Resume</label>
            <input
              type="file"
              name="resume"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">CV</label>
            <input
              type="file"
              name="cv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
