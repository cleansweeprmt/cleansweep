
import Image from 'next/image'
import PageHeader from '../../(components)/header';
import {fetchServices,fetchAllServices} from '../../api/fetchService'
const Page =async ({params}) => {    
   const post = await fetchServices(params.id)
   const posts= await fetchAllServices()
    if (!post) return <div className='w-full flex items-center justify-center py-10'>Post not found.</div>;
    return (   <div>
     <PageHeader title={'Our Services'}/>
     
            <div className="font-sans mx-auto py-10 px-4 sm:px-6 lg:px-8  container">
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="bg-white p-4 lg:w-1/4">

                    <ul className="bg-primary p-4  text-white rounded-md overflow">
                        {posts.reverse().map((service,index)=>(  <li className="mb-2 py-2" key={index}>
                            <a href={`/services/${service?.slug}`} className="flex items-center gap-2">
                                <p dangerouslySetInnerHTML={{ __html: service?.title.rendered }}></p>
                                <span className="ml-auto min-w-[40px] h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center"><img src="/wansom/chevron-right-solid.svg" className="h-[20px] w-[20px]" alt="HrFleek" /></span>
                            </a>
                        </li>))}
     
                    </ul>
                </div>

                {/* Main Content */}
                <div className="pt-4 lg:w-3/4">
                    <div>
                        <div className="mb-6 rounded-md overflow-hidden">
                            <img src='/services/1.jpg' alt="Placeholder Image" className="mx-auto w-full h-auto rounded-lg" />
                        </div>
                    </div>
                    <h2 className="text-2xl mt-16 font-bold mb-4 text-primary">Cleaning Services</h2>
                   <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} className='service-content'>

                   </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-800">
            {/* Call to Action Section */}
            <div className="mx-auto px-2 sm:px-6 lg:px-8 text-white p-4 py-16 container flex flex-col md:flex-row items-center justify-between rounded mt-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                        <Image src="/wansom/calender.png" alt="Calendar Icon" width={24} height={24} />
                    </div>
                    <p className="text-md lg:text-2xl font-bold">Get to know how CLEANSWEEP can help your business</p>
                </div>
                <a href="/consultation" className="bg-white text-secondary py-2 px-4 rounded border-2 border-white hover:bg-teal-600 hover:text-white transition">
                    BOOK A CLEANING CONSULTATION
                </a>
            </div>
        </div>
      
 
    </div> );
}
 
export default Page;