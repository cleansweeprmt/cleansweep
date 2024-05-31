
'use client'
import Image from 'next/image'
import PageHeader from '../../(components)/header';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const Page = () => {
     
    const {id}  = useParams();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading,setLoading]=useState(true)
  
    useEffect(() => {
      setLoading(true)
      fetch("https://hrfleek.com/wp-json/wp/v2/catalogue")
        .then((response) => response.json())
        .then((posts) => {
          const promises = posts.map((post) => {
            return fetch(
              `https://hrfleek.com/wp-json/wp/v2/media/${post.featured_media}`
            )
              .then((response) => response.json())
              .then((media) => {
                post.featured_image_url = media.source_url;
                return post;
              });
          });
          return Promise.all(promises);
        })
        .then((posts) => {
          console.log(posts);
          setLoading(false)
          setPosts(posts);
          const singlePost =posts.find((post)=>post.slug===id)
          setPost(singlePost)
        })
        .catch((error) => setLoading(false));
    }, []);
    return (   <div>
     <PageHeader title={'Our Services'}/>
     {loading&&(
          <div className='w-full flex items-center justify-center py-10'>
            <div className=" flex justify-center items-center">
  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
</div> 
          </div>
        )}
        {!loading&&(<>
            <div className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
            <div className="flex flex-col lg:flex-row">
                <div className="bg-white p-4 lg:w-1/4">

                    <ul className="bg-teal-700 p-4  text-white rounded-md overflow">
                        {posts.map((service,index)=>(  <li className="mb-2 py-2" key={index}>
                            <a href={`/services/${service?.slug}`} className="flex items-center gap-2">
                                <p dangerouslySetInnerHTML={{ __html: service?.title.rendered }}></p>
                                <span className="ml-auto min-w-[40px] h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center"><img src="/wansom/chevron-right-solid.svg" className="h-[20px] w-[20px]" alt="HrFleek" /></span>
                            </a>
                        </li>))}
     
                    </ul>
                </div>

                {/* Main Content */}
                <div className="p-8 pt-4 lg:w-3/4">
                    <div>
                        <div className="mb-6 rounded-md overflow-hidden">
                            <img src={post?.featured_image_url} alt="Placeholder Image" className="mx-auto" />
                        </div>
                    </div>
                    <h2 className="text-2xl mt-16 font-bold mb-4 text-teal-700" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h2>
                   <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} className='service-content'>

                   </div>
                </div>
            </div>
        </div>
        <div className="bg-teal-700">
            {/* Call to Action Section */}
            <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white p-4 py-16 container flex flex-col md:flex-row items-center justify-between rounded mt-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                        <Image src="/wansom/calender.png" alt="Calendar Icon" width={24} height={24} />
                    </div>
                    <p className="text-md lg:text-2xl font-bold">Get to know how HRFLEEK can help your business</p>
                </div>
                <a href="/consultation" className="bg-white text-teal-700 py-2 px-4 rounded border-2 border-white hover:bg-teal-600 hover:text-white transition">
                    BOOK A CONSULTATION
                </a>
            </div>
        </div>
        </>)}
 
    </div> );
}
 
export default Page;