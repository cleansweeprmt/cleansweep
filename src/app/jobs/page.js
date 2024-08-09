'use client'
import { useEffect, useState } from "react";
import PageHeader from "../(components)/header";
import Link from "next/link";
import PopupForm from "../../components/Form/PopupForm";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleApplyClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  useEffect(() => {
    setLoading(true)
      fetch("https://dashboard.hrfleek.com/wp-json/wp/v2/job-listings")
      .then((response) => response.json())
      .then(async (posts) => {
        console.log('found jobs',posts);
        
        setLoading(false)
        setPosts(posts);
        
      })
      .catch((error) => setLoading(false));
  }, []);

    return (<div>
        <PageHeader title={'Job Vacancies'}/>
        {isPopupOpen && (<PopupForm isOpen={isPopupOpen} onClose={handleClosePopup}/>) }
        {loading&&(
                 <div className='w-full flex items-center justify-center py-10'>
                 <div className=" flex justify-center items-center">
       <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
     </div> 
               </div>
        )}
        {!loading&&posts.length>0&&(
             <section className="container mx-auto px-5 lg:px-20 py-10">
     <div className="shadow-lg rounded-md bg-gray-50 my-5 p-4">
      {posts.map((post,index)=>(
         <div className="flex flex-col md:flex-row  border-b-[2px] border-gray-300 border-solid p-3  items-center justify-between mb-2" key={index}>
         <a href={`/jobs/${post.slug}`} className=" hover:underline text-lg hover:text-[#0C9494] text-black" dangerouslySetInnerHTML={{ __html: post?.title.rendered }} ></a>
         <div className="flex items-center gap-3">
          {/* <p className="hidden lg:block">Recruiter: <span className="text-gray-400 text-md">{post?.meta._company_name}</span></p> */}
        
         <a href={`/jobs/${post.slug}`} className="flex justify-between items-center border-solid border-2 border-[#0C9494] px-5 py-2 rounded-lg">
         <p>More Details</p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
 </svg>
         </a>
    
 
         </div>
 
 
     </div>
      ))}
      
     </div>
     
             </section>
        )}
                {!loading&&posts.length==0&&(
                   <div className="w-full flex items-center flex-wrap justify-center gap-10 py-10">
                   <div className="grid gap-4">
                   <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full shadow-sm justify-center items-center inline-flex">
                   <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                     <g id="File Serch">
                       <path id="Vector" d="M19.9762 4V8C19.9762 8.61954 19.9762 8.92931 20.0274 9.18691C20.2379 10.2447 21.0648 11.0717 22.1226 11.2821C22.3802 11.3333 22.69 11.3333 23.3095 11.3333H27.3095M18.6429 19.3333L20.6429 21.3333M19.3095 28H13.9762C10.205 28 8.31934 28 7.14777 26.8284C5.9762 25.6569 5.9762 23.7712 5.9762 20V12C5.9762 8.22876 5.9762 6.34315 7.14777 5.17157C8.31934 4 10.205 4 13.9762 4H19.5812C20.7604 4 21.35 4 21.8711 4.23403C22.3922 4.46805 22.7839 4.90872 23.5674 5.79006L25.9624 8.48446C26.6284 9.23371 26.9614 9.60833 27.1355 10.0662C27.3095 10.524 27.3095 11.0253 27.3095 12.0277V20C27.3095 23.7712 27.3095 25.6569 26.138 26.8284C24.9664 28 23.0808 28 19.3095 28ZM19.3095 16.6667C19.3095 18.5076 17.8171 20 15.9762 20C14.1352 20 12.6429 18.5076 12.6429 16.6667C12.6429 14.8257 14.1352 13.3333 15.9762 13.3333C17.8171 13.3333 19.3095 14.8257 19.3095 16.6667Z" stroke="#0C9494" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                     </g>
                   </svg>
                   </div>
                   <div>
                   <h2 className="text-center text-black text-base font-semibold leading-relaxed pb-1">There are no open Vacancies</h2>
                   <p className="text-center text-black text-sm font-normal leading-snug pb-4">Please subscribe to our newsletter  <br />to receive job notifications </p>
                   <div className="flex gap-3">
                     <Link className="w-full px-3 py-2 flex items-center justify-center text-center rounded-lg border border-gray-300 text-gray-900 text-xs font-semibold " href={'/articles'}>View Resources </Link>
                     <button className="w-full px-4 py-2 bg-primary hover:bg-gray-800 transition-all duration-500 rounded-lg text-white text-xs font-semibold leading-4" onClick={handleApplyClick}> Subscribe to Newsletter </button>
                   </div>
                   </div>
                   </div>
                 
                   </div>
                )}
       

    </div>  );
}
 
export default Page;