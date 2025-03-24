
import PageHeader from '../../(components)/header';
import { fetchAllPost, fetchPost } from '../../api/fetchPosts';

const SinglePostPage = async({params}) => {
  
const  post=await fetchPost(params.id)
const posts= fetchAllPost()
    return ( 
        <>
            <PageHeader title={''} subTitle={''}/>
    <div className="container mx-auto px-5 lg:px-10 py-10">
            {post&&(<div className="flex flex-col md:flex-row gap-4">
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