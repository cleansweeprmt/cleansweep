'use client'
import React, { useState, useEffect } from 'react';
import PageHeader from "../../(components)/header";
import { useParams } from "next/navigation";
import dynamic from 'next/dynamic';

const PopupForm = dynamic(() => import('../../../components/Form/PopupForm'), { ssr: false });

const Page = () => {
  const {id}  = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://hrfleek.com/wp-json/wp/v2/job-listings")
      .then((response) => response.json())
      .then((posts) => {
        
        setLoading(false)
        setPosts(posts);
        const singlePost = posts.find((post) => post.slug === id);
        console.log(singlePost);
        setPost(singlePost);
      })
      .catch((error) => setLoading(false));
  }, []);

  const handleApplyClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white">
      <PageHeader title={''}/>
      
      {loading && (
        <div className='w-full flex items-center justify-center py-10'>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
          </div> 
        </div>
      )}
      {!loading && (
        <div className="container mx-auto px-5 lg:px-20 py-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
          <div className="flex items-center gap-4">
            <div className="py-1 px-4 bg-secondary rounded-xl">
              <p className="text-sm text-gray-600">Posted on: {new Date(post?.date).toDateString()}</p>
            </div>
            <div className="py-1 px-4 bg-red-100 rounded-xl">
              <p className="text-sm text-gray-600">Application Deadline: {new Date(post?.date).toDateString()}</p>
            </div>
          </div>

          <div className="mb-10 job-details">
            <img src="/logo.png" alt="Virtual HR" className="h-32 mb-4" />
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <a
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" href='mailto:recruitment@hrfleek.com'
             
            >
              Apply
            </a>
          </div>
          {isPopupOpen && <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />}
        </div>
      )}
    </div>
  );
};

export default Page;