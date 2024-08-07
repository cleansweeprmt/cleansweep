// pages/page.tsx
'use client'

import { useRouter } from 'next/navigation';
import {  useState } from 'react';

const CheckoutForm = () => {
  const router = useRouter();
  const  id = router?.query;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    country: 'Kenya',
    postcode: '',
    state: '',
    city: '',
    phone: '',
    email:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: 28157,
          customer: {
            billing: {
              first_name: formData.fullName.split(' ')[0],
              last_name: formData.fullName.split(' ')[1] || '',
              address_1: formData.streetAddress,
              city: formData.city,
              state: formData.state,
              postcode: formData.postcode,
              country: formData.country,
              email: formData.email, // Replace with actual email if needed
              phone: formData.phone,
            },
            shipping: {
              first_name: formData.fullName.split(' ')[0],
              last_name: formData.fullName.split(' ')[1] || '',
              address_1: formData.streetAddress,
              city: formData.city,
              state: formData.state,
              postcode: formData.postcode,
              country: formData.country,
            },
          },
        }),
      });

      const order = await response.json();
      console.log(order);
      
const url ='https://dashboard.hrfleek.com'
      if (order.id) {
        window.location.href = `${url}/checkout/?order_id=${order.id}`;
      } else {
        throw new Error('Order creation failed');
      }
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-24">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg px-6 py-10">
   
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">BILLING ADDRESS</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Street address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Country / Region</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option>Kenya</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Postcode / ZIP</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">State / County</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option>Nairobi County</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Town / City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md" disabled={loading}>
            {loading ? 'Processing...' : 'Continue to payment'}
          </button>
        </div>
      </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">YOUR CART</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="flex items-center mb-4">
                <img src="/webinar.jpeg" alt="Webinar" className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p>How to deal with Staff Absenteeism</p>
                  <p className="font-semibold">KShs 500.00</p>
                </div>
              </div>
              {/* <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Promo Code</label>
                <div className="flex mt-1">
                  <input type="text" className="block w-full p-2 border border-gray-300 rounded-l-md" placeholder="Enter Promo Code" />
                  <button className="px-4 bg-gray-300 rounded-r-md">Apply</button>
                </div>
              </div> */}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>KShs 500.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Surcharge Fee</p>
                  <p>KShs 0.00</p>
                </div>
                <div className="flex justify-between font-semibold border-t mt-2 pt-2">
                  <p>Total</p>
                  <p>KShs 500.00</p>
                </div>
                <p className="text-xs text-gray-500">(includes KShs 275.86 VAT Tax)</p>
              </div>
            </div>
            <div className="mt-4 text-teal-500">
              <a href="/" className="text-sm">« Return to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
