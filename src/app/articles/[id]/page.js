import Image from 'next/image';
import PageHeader from '../../(components)/header';
const Page = () => {
    return (  <div className="bg-white">
        <PageHeader title={'Performance Management'}/>
    <div className=" container mx-auto px-5 lg:px-20 py-10">
        {/* Main Content */}
        <div className="">
            <div className="lg:w-3/4 lg:pr-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">Packard Consulting</h1>
                        <p className="text-base mb-4">
                            There are many variations of passages of lorem ipsum available, but the majority have alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className="text-base">
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </p>
                    </div>
                    <div className="bg-teal-500 text-white p-4 rounded-lg mt-4 md:mt-0 md:ml-4">
                        <p className="py-2"><strong>Date:</strong> Jun 20, 2019</p>
                        <p className="py-2"><strong>Client:</strong> Envato Group, US</p>
                        <p className="py-2"><strong>Category:</strong> Increase Leads</p>
                        <p className="py-2"><strong>Address:</strong> 2946 Angus Road, NY</p>
                    </div>
                </div>
                <Image src="/wansom/law-audits.jpg" alt="Packard Consulting" width={800} height={400} className="mb-8 rounded-md" />

                <h3 className="text-xl font-semibold mb-2 text-teal-500">What We Did</h3>
                <p className="mb-4">
                    Surrounded by their possessions and a familiar environment, our clients receive the support they need to enjoy their regular training activities & continue living at our company. About the our emphire company for affected businesses significantly as our best employees to improvements. And Advisers can provides service needs from providing the training to managing entire HR department.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li className="py-2">Highly experienced Emphires employees</li>
                    <li className="py-2">Our employees are expert and professional</li>
                    <li className="py-2">People choose us because they believe us</li>
                    <li className="py-2">We believe in the value of functions business</li>
                    <li className="py-2">We have great support digital marketing</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-teal-500">Our Research</h3>
                <p className="mb-4">
                    Surrounded by their possessions and a familiar environment, our clients receive the support they need to enjoy their regular training activities & continue living at our company. About the our emphire company for affected businesses significantly as our best employees to improvements. And Advisers can provides service needs from providing the training to managing entire HR department.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                        <Image src="/wansom/card image.png" alt="Excellence Research" width={64} height={64} className="mx-auto mb-2" />
                        <h4 className="font-bold text-xl">Excellence Research</h4>
                    </div>
                    <div className="text-center">
                        <Image src="/wansom/card image.png" alt="Strategy Planning" width={64} height={64} className="mx-auto mb-2" />
                        <h4 className="font-bold text-xl">Strategy Planning</h4>
                    </div>
                    <div className="text-center">
                        <Image src="/wansom/card image.png" alt="Improve Business" width={64} height={64} className="mx-auto mb-2" />
                        <h4 className="font-bold text-xl">Improve Business</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  );
}
 
export default Page;