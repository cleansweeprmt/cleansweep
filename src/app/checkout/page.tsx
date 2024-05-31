// pages/page.tsx

import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">INFORMATION</h1>
          <p className="text-sm">Welcome back, <span className="font-bold">Kelvin Kibet</span> (kelvinchebon90@gmail.com).</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">BILLING ADDRESS</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" value="kelvin kibet" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" value="galana road" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country / Region</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option>Kenya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postcode / ZIP</label>
                  <input type="text" value="00100" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">State / County</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option>Nairobi County</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town / City</label>
                  <input type="text" value="Nairobi" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" value="+254715925156" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md">Continue to payment</button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">YOUR CART</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="flex items-center mb-4">
                <img src="/academic-advisor-job.png" alt="Academic Advisor Job" className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p>Academic Advisor Job</p>
                  <p className="font-semibold">KShs 2,000.00</p>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Promo Code</label>
                <div className="flex mt-1">
                  <input type="text" className="block w-full p-2 border border-gray-300 rounded-l-md" placeholder="Enter Promo Code" />
                  <button className="px-4 bg-gray-300 rounded-r-md">Apply</button>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>KShs 2,000.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Surcharge Fee</p>
                  <p>KShs 0.00</p>
                </div>
                <div className="flex justify-between font-semibold border-t mt-2 pt-2">
                  <p>Total</p>
                  <p>KShs 2,000.00</p>
                </div>
                <p className="text-xs text-gray-500">(includes KShs 275.86 VAT Tax)</p>
              </div>
            </div>
            <div className="mt-4 text-teal-500">
              <a href="#" className="text-sm">« Return to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
