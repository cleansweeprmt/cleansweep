// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-sans">
      {/* Other components or content can be here */}

      {/* Resource Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">View Our <span className="text-teal-600">Articles</span></h2>
        <div className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/wansom/articles.jpg" alt="Job Rotation" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> Nov 09, 2023</p>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">HR GUIDES</span>
              </div>
              <Link href="/resources/exit-interview-tips">
                <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition cursor-pointer">Tips for a Successful Onboarding Program</h3>
              </Link>
              <div className="flex items-center justify-between text-gray-600 text-sm">
                <p><i className="far fa-user"></i> by admin</p>
                <p><i className="far fa-comment"></i> 0</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/wansom/articles.jpg" alt="Exit Interview" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> Oct 31, 2023</p>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">HR GUIDES</span>
              </div>
              <Link href="/resources/exit-interview-tips">
                <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition cursor-pointer">Tips for a Successful Onboarding Program</h3>
              </Link>
              <div className="flex items-center justify-between text-gray-600 text-sm">
                <p><i className="far fa-user"></i> by admin</p>
                <p><i className="far fa-comment"></i> 0</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/wansom/articles.jpg" alt="Onboarding Program" width={400} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm"><i className="far fa-calendar-alt"></i> Oct 31, 2023</p>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">HR GUIDES</span>
              </div>
              <Link href="/resources/exit-interview-tips">
                <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition cursor-pointer">Tips for a Successful Onboarding Program</h3>
              </Link>
              <div className="flex items-center justify-between text-gray-600 text-sm">
                <p><i className="far fa-user"></i> by admin</p>
                <p><i className="far fa-comment"></i> 0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#" className="bg-teal-600 text-white py-8 px-8 rounded hover:bg-teal-700 transition">VIEW ALL RESOURCES</a>
        </div>
      </div>

      {/* Other components or content can be here */}
    </div>
  )
}
