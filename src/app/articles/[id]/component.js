'use client'
import PageHeader from '../../(components)/header';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const SinglePostPage = () => {
      const {id}  = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://dashboard.hrfleek.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((posts) => {
        const promises = posts.map((post) => {
          return fetch(
            `https://dashboard.hrfleek.com/wp-json/wp/v2/media/${post.featured_media}`
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
    return ( 
        <>
            <PageHeader title={''}/>
        {loading&&(
          <div className='w-full flex items-center justify-center py-10'>
            <div className=" flex justify-center items-center">
  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
</div> 
          </div>
        )}
    <div className="container mx-auto px-5 lg:px-10 py-10">
            {!loading&&(<div className="flex flex-col md:flex-row gap-4">
                   <div className="lg:basis-3/4 lg:pr-8  px-3 rounded">
                   {/* Header Section */}
                   <div className="flex flex-col md:flex-row justify-between items-center py-8">
                       <div className="flex-1">
                           <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
                           <p className="text-base mb-4 text-dim tex-sm">{new Date(post?.date).toDateString()}
                              </p>
                       </div>
                   </div>
                   <img src={post?.featured_image_url} alt={post?.title.rendered}  className="mb-8 rounded-lg h-auto w-full object-cover" />
                   <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} className='article'>
   
                   </div>
               </div>
                  <div className='lg:basis-1/4'>
                {
                    posts.map((post,index)=>(
                        <div className='border-b-solid border-b-2 border-gray-100 py-4 bg-gray-50 shadow-lg p-4'>
                        <a className='' key={index} href={`/articles/${post.slug}`}>
                            <h1 className="text-md font-semibold" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
                        <p className="text-base mb-2 text-dim tex-sm">{new Date(post?.date).toDateString()}
                           </p>
                            </a></div>
                    ))
                }
            </div></div>)}
        
    </div>
        </>
     );
}
 
export default SinglePostPage;