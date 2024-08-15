
import { notFound } from 'next/navigation';
import { fetchPost,fetchAllPost} from '../../api/fetchPosts';
import Head from 'next/head';
import PageHeader from '../../(components)/header';
const Page =async ({ params })=> {
    

  const post = await fetchPost(params.id);
  const posts= await fetchAllPost()

  if (!post) {
    notFound();
  }

    return (  <div className="bg-white">
                       <Head>
        <title>HRFLEEK-{post.title.rendered}</title>
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
            </div></div>
    
</div>  );
}
 
export default Page;