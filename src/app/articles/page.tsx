// pages/index.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../(components)/header'
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
      fetch("https://hrfleek.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then(async (posts) => {
        setLoading(false)
        setPosts(posts);
        console.log(posts);
        
      })
      .catch((error) => setLoading(false));
  }, []);
  return (
    <div>
      <PageHeader title={'Articles'}/>
      {/* Other components or content can be here */}


      {/* Resource Section */}
      <div className="container mx-auto px-5 lg:px-20 py-10">
        <h2 className="text-4xl font-bold text-center">View Our <span className="text-teal-600">Articles</span></h2>
        <div className="grid gap-8 py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post,index)=>(  <div className="bg-white shadow-md rounded-lg overflow-hidden" key={index}>
            {/* <Image src="/wansom/articles.jpg" alt="Job Rotation" width={400} height={200} className="w-full h-48 object-cover"/> */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> {new Date(post?.date).toDateString()}</p>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">HR GUIDES</span>
              </div>
              <Link href="/resources/exit-interview-tips">
                <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition cursor-pointer" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h3>
                <p className='text-dim text-md' dangerouslySetInnerHTML={{ __html: post?.content.rendered.slice(0, 120) }}></p>
              </Link>
             
            </div>
          </div>))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-700 transition">VIEW ALL RESOURCES</a>
        </div>
      </div>

      {/* Other components or content can be here */}
    </div>
  )
}
