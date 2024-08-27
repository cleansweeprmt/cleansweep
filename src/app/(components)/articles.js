// pages/index.js
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
async function fetchPosts(page = 1) {
  const res = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/posts?per_page=3&page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  const totalPages = res.headers.get('X-WP-TotalPages');
  return { posts, totalPages: Number(totalPages) };
}


const BlogSection=()=> {
  const [postsData, setPostsData] = useState({ posts: [], totalPages: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadPosts = async (page) => {
    setLoading(true);
    try {
      const data = await fetchPosts(page);
      setPostsData(data);
      setPage(page);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts(page);
  }, []);

  return (
    <div>  
      {/* Resource Section */}
      <div className="">
        {/* <h2 className="text-4xl font-bold text-center">View Our <span className="text-teal-600">Articles</span></h2> */}
        {loading&&(
          <div className='w-full flex items-center justify-center py-10'>
            <div className=" flex justify-center items-center">
  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
</div> 
          </div>
        )}
        <div className="grid gap-8 py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


          {postsData.posts.map((post,index)=>(  <a className="bg-white shadow-md rounded-lg overflow-hidden" key={index} href={`/articles/${post.slug}`}>
            <img src="/services/1.jpg" alt="cleaning service"  className="w-full h-[300px] object-cover"/>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> {new Date(post?.date).toDateString()}</p>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">cleaning guides</span>
              </div>
              <Link href={`/articles/${post.slug}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition cursor-pointer" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h3>
                <p className='text-dim text-md' dangerouslySetInnerHTML={{ __html: post?.content.rendered.slice(0, 120) }}></p>
              </Link>
             
            </div>
          </a>))}
        </div>
      </div>

      {/* Other components or content can be here */}
    </div>
  )
}

export default BlogSection