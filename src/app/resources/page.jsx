'use client'
import { useState } from "react";
import PageHeader from "../(components)/header";
import PopupForm from "../../components/Form/PopupForm";
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleApplyClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="">
      <PageHeader title={"LEGAL INFORMATION AND RESOURCES"} />
      {isPopupOpen && (<PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>) }
      <section className="container mx-auto px-5 lg:px-20 bg-white -mt-10 lg:-mt-10 grid grid-cols-1 lg:grid-cols-4 mb-10 gap-10">
        <a href="/articles" className="shadow-xl h-[250px] flex flex-col items-center justify-center z-10 rounded-lg gap-4 bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>

          <p className="font-semibold text-primary text-lg">Articles</p>
        </a>
        <a className="shadow-xl h-[250px] flex flex-col items-center justify-center z-10 rounded-lg gap-4 bg-gray-100 p-4 text-center" href="/resources/documents">
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
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>
          <p className="font-semibold text-primary text-lg">HR Document Library</p>
        </a>
        <div className="shadow-xl h-[250px] flex flex-col items-center justify-center z-10 rounded-lg gap-4 bg-gray-100 p-4 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
</svg>

          <p className="font-semibold text-primary text-lg">Upcoming Webinars & Events</p>
        </div>
        <div className="shadow-xl h-[250px] flex flex-col items-center justify-center z-10 rounded-lg gap-4 bg-gray-100 p-4 text-center" onClick={handleApplyClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>


          <p className="font-semibold text-primary text-lg">Subscribe to our Newsletter</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
