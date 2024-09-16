
import Link from "next/link";
import PageHeader from "../(components)/header";
import { services } from "../(services)/data";



async function fetchPosts() {
  const res = await fetch("https://dashboard.hrfleek.com/wp-json/wp/v2/catalogue");
  const posts = await res.json();

  // Fetch featured images
  const updatedPosts = await Promise.all(
    posts.map(async (post) => {
      if (post.featured_media) {
        const imageResponse = await fetch(
          `https://dashboard.hrfleek.com/wp-json/wp/v2/media/${post.featured_media}`
        );
        const image = await imageResponse.json();
        return {
          ...post,
          featured_image_url: image.source_url,
        };
      } else {
        return {
          ...post,
          featured_image_url: '', // or a default image URL
        };
      }
    })
  );

  return updatedPosts.reverse();
}
const Page = async() => {
  const posts = await fetchPosts();
  if (!posts) return <div className='w-full flex items-center justify-center py-10'>
  <div className=" flex justify-center items-center">
<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
</div></div>;

    return ( <div >
    
    <PageHeader title={'Our Services'}/>

    <section className="container mx-auto px-5 lg:px-20 py-10">
        {/* <h1 className="text-2xl text-center text-primary font-semibold">Our Services</h1> */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((card, index) => (
  <div key={index} className="p-4">
    <div
      className="bg-white p-4 rounded shadow h-[348px] bg-cover bg-top flex justify-between items-end relative"
      style={{ backgroundImage: `url(${card?.img})` }}
    >
      <div className="z-20 bg-transparent h-full w-full absolute top-0 left-0 hover:bg-[#022b60] hover:bg-opacity-60 flex flex-col items-center gap-2 p-4 text-transparent hover:text-white justify-center">
        <div className="z-30 list-disc list-inside description" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
        <Link href="/consultation" className="flex items-center border-solid">
          Book Service
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 z-30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>
      <div className="h-16 w-full absolute left-0 bottom-0 bg-black opacity-10"></div>
      <div>
        <h1 className="font-extrabold text-primary text-2xl">{card.title}</h1>
      </div>
    </div>
  </div>
))}

        </div>

    </section>

    </div> );
}

 
export default Page;