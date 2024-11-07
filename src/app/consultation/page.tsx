import React from 'react';
import dynamic from 'next/dynamic';

const CalendlyWidget = dynamic(() => import('../../components/Calendly/CalendlyWidget'), { ssr: false });

const BookingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-32">
        <h1 className="text-3xl font-semibold mb-6 text-center">Book A Cleaning Consultation</h1>
        <p className="text-center mb-6">
          Use the calendar below to schedule a consultation with us.
        </p>
        <div className="flex justify-center h-fit">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
