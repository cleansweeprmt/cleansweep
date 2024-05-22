import PageHeader from "../(components)/header";
import { services } from "../(services)/data";
const Page = () => {
    return ( <div >
    
    <PageHeader title={'Our Services'}/>
    <section className="container mx-auto px-5 lg:px-20 py-10">
        <h1 className="text-2xl text-center text-primary font-semibold">Our Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((card, index) => (
          <div key={index} className="p-4">
            <div
              className="bg-white p-4 rounded shadow h-[348px] bg-cover bg-top flex justify-between items-end relative"


              style={{ backgroundImage: `url(${card.img})` }}
            >
                <div className="bg-transparent h-full w-full absolute top-0 left-0  hover:bg-[#0C9494] hover:opacity-50 flex items-center text-transparent hover:text-white justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 z-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

                </div>
                <div>
                <h1 className=" font-extrabold text-white text-2xl ">
                {card.title}
              </h1>
                    </div>
                
           
              
            </div>
          </div>
        ))}
        </div>

    </section>

    </div> );
}
 
export default Page;