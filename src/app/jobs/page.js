import PageHeader from "../(components)/header";

const Page = () => {
    return (<div>
        <PageHeader title={'Job Vacancies'}/>
        <section className="container mx-auto px-5 lg:px-20 py-10">
        <form class="w-full mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter by:</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Department</option>
    <option value="US">Software Engineer</option>
    <option value="CA">Digital Marketing</option>
    <option value="FR">Human Resource</option>
    <option value="DE">Finance</option>
  </select>
</form>
<div className="shadow-lg rounded-md bg-gray-50 my-5 p-4">
    <div className="flex  border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2">
        <a href="/job/1" className=" hover:underline text-lg hover:text-[#0C9494] text-black">Group Internal Auditor</a>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-md">Finance</span>
        <p>More Details</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        </div>


    </div>
    <div className="flex  border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2">
        <a href="/job/1" className=" hover:underline text-lg hover:text-[#0C9494] text-black">Group Internal Auditor</a>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-md">Finance</span>
        <p>More Details</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        </div>


    </div>
    <div className="flex border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2">
        <a href="/job/1" className=" hover:underline text-lg hover:text-[#0C9494] text-black">Group Internal Auditor</a>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-md">Finance</span>
        <p>More Details</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        </div>


    </div>
    <div className="flex border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2">
        <a href="/job/1" className=" hover:underline text-lg hover:text-[#0C9494] text-black">Group Internal Auditor</a>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-md">Finance</span>
        <p>More Details</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        </div>


    </div>
    <div className="flex  border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2">
        <a href="/job/1" className=" hover:underline text-lg hover:text-[#0C9494] text-black">Group Internal Auditor</a>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-md">Finance</span>
        <p>More Details</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

        </div>


    </div>

</div>

        </section>

    </div>  );
}
 
export default Page;