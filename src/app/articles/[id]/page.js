
import { notFound } from 'next/navigation';
import { fetchPost } from '../../api/fetchPosts';
import Head from 'next/head';
import SinglePostPage from './component'
const Page =async ({ params })=> {
    

  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  const { title, featured_image, content,date } = post;

    return (  <div className="bg-white">
                       <Head>
        <title>HRFLEEK-{title.rendered}</title>
        <meta name="description" content={content.rendered} />
        <meta name="keywords" content={title.rendered} />
        <meta property="og:title" content={title.rendered} />
        <meta property="og:description" content={content.rendered} />
        <meta property="og:image" content={featured_image} />
        <meta name="twitter:card" content={content.rendered} />
        <meta name="twitter:title" content={title.rendered} />
        <meta name="twitter:description" content={content.rendered} />
        <meta name="twitter:image" content={featured_image}/>
      </Head>
      <SinglePostPage/>
    
</div>  );
}
 
export default Page;