// pages/index.js
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {getBlogPosts} from '../lib/fetchPosts'


const BlogSection=({number})=> {
  const [postsData, setPostsData] = useState({ posts: [], totalPages: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // loadPosts(page);
    setLoading(true)
    getBlogPosts(page,number).then((data)=>{
      setLoading(false)
      setPostsData({ posts: data.posts, totalPages: data.totalPages })
      console.log(data);
    }).catch((err)=>{
      setLoading(false)
      console.log('something went wrong',err);
    })
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
            <img src={post?.featured_image_url} alt={post?.title.rendered}  className="w-full h-[300px] object-cover"/>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> {new Date(post?.date).toDateString()}</p>
                <span className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">cleaning guides</span>
              </div>
              <Link href={`/articles/${post.slug}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition cursor-pointer" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h3>
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