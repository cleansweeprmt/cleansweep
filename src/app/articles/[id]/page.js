
import { notFound } from 'next/navigation';
import { fetchPost,fetchAllPost} from '../../api/fetchPosts';
import Head from 'next/head';
import PageHeader from '../../(components)/header';
import Link from 'next/link';
const Page =async ({ params })=> {
    

  const post = await fetchPost(params.id);
  const posts= await fetchAllPost()

  if (!post) {
    notFound();
  }

    return (  <div className="bg-white">
                       <Head>
        <title>cleansweep-{post.title.rendered}</title>
        <meta name="description" content={post.content.rendered} />
        <meta name="keywords" content={post.title.rendered} />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.content.rendered} />
        <meta property="og:image" content={post.featured_image} />
        <meta name="twitter:card" content={post.content.rendered} />
        <meta name="twitter:title" content={post.title.rendered} />
        <meta name="twitter:description" content={post.content.rendered} />
        <meta name="twitter:image" content={post.featured_image}/>
      </Head>
      <PageHeader title={''}/>
      <div className="flex flex-col md:flex-row gap-4 px-5 lg:px-10">
                   <div className="lg:basis-3/4 lg:pr-8  px-3 rounded">
                   {/* Header Section */}
                   <div className="flex flex-col md:flex-row justify-between items-center py-8">
                       <div className="flex-1">
                           <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
                           <p className="text-base mb-4 text-dim tex-sm">{new Date(post?.date).toDateString()}
                              </p>
                       </div>
                   </div>
                   <img src={post.featured_image} alt={post?.title.rendered}  className="mb-8 rounded-lg h-auto w-full object-cover" />
                   <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} className='article'>
   
                   </div>
               </div>
                  <div className='lg:basis-1/4 py-5 rounded-md'>
                {
                    posts.map((post,index)=>(
                        <div className='border-b-solid border-b-2 border-gray-100 py-4 bg-primary shadow-lg p-4 flex items-center justify-between'>
                        <Link className='' key={index} href={`/articles/${post.slug}`}>
                            <h1 className="text-md font-semibold text-white" dangerouslySetInnerHTML={{ __html: post?.title.rendered }}></h1>
                        <p className="text-base mb-2 text-gray-100 tex-sm">{new Date(post?.date).toDateString()}
                           </p>
                            </Link>
                            <Link href={`/articles/${post.slug}`}>
                            <span className="ml-auto min-w-[40px] h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center"><img src="/wansom/chevron-right-solid.svg" className="h-[20px] w-[20px]" alt="HrFleek" /></span>
                            </Link>
                            </div>
                    ))
                }
            </div></div>
    
</div>  );
}
 
export default Page;