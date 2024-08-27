'use client'
import  { useState } from 'react';
import Loader from '../../app/(components)/buttonLoader';

const PopupForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    try {
      const response = await fetch('api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      setLoading(false)
      setMessage('Subscription successful!');
      setError('');
      setEmail('');
    } catch (err) {
      setLoading(false)
      setError(err.message);
      setMessage('');
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className='text-primary'>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-[#ff9202] text-white font-bold py-2 px-4 rounded flex items-center"
            >
              {loading&&(<Loader/>)}
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
