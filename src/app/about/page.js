import PageHeader from "../(components)/header";

const Page = () => {
    return (<div>
        <PageHeader title={'About Us'}/>
        <section className="container mx-auto px-5 lg:px-20 py-10 flex flex-col md:flex-row justify-between gap-10">
            <div className="md:basis-1/2 space-y-4">
                <h2 className="text-2xl text-primary font-semibold ">About Us</h2>
                <p className="text-dim text-md">
                We offer bespoke and tailored professional human resource services delivered by our team of highly qualified and experienced professionals to ensure that you receive the support and expertise that you need. It is not just about the services we provide but how we put them together to solve your problems. We focus on offering solutions so that you can focus on your business.<br/> <br/>

Our focus is to get to the core of our clients HR needs creating and adding value to them by delivering timely, innovative and commercially sound advice and HR solutions. We have set up robust systems to ensure consistently high quality output in every task we undertake and are compromising in our quality control.
                </p>
            </div>
            <div className="basis-1/2">

<img src="/img/hero.jpg" className="w-full rounded-lg"/>
            </div>

        </section>
    </div>  );
}
 
export default Page;