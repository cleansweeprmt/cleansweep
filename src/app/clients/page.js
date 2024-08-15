import PageHeader from "../(components)/header";
const Page = () => {
    return ( <div>
        <PageHeader title={'Our Clients'}/>
        <section className="container mx-auto px-5 lg:px-20 py-10 flex items-center flex-wrap gap-10 lg:min-h-[300px]">
            <img src="/clients/barizi.png" className="w-40 h-12"/>
            <img src="/clients/belmac.png" className="w-40 h-12"/>
            <img src="/clients/cm.png" className="w-40 h-12"/>
            <img src="/clients/pb.png" className="w-40 h-12"/>
            <img src="/clients/procs.png" className="w-40 h-12"/>

        </section>
    </div> );
}
 
export default Page;