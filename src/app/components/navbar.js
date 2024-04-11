'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const router = useRouter()

  return (
   
      <div className=" container mx-auto px-5 lg:px-20 py-5 bg-secondary">
       
        <div className='flex items-center justify-between lg:shadow-lg lg:rounded-lg lg:bg-white p-3 fixed top-10 lg:top-8 w-[88%] mx-auto z-10'> 
        <div className="logo"> 
          <a href="/" className="nav-logo">
            <Image src="/logo-dark.png" alt="logo" width={100} height={100} />
          </a>
        </div>
        <div className={isOpen ? 'active links flex flex-col lg:flex-row items-center justify-between' : 'hide links flex-col lg:flex-row items-start'}>
          <div className="cancel">
            <span
              className={isOpen ? 'cancel-btn active' : 'cancel-btn hide'}
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>

          <a href="/#about">Why Evacare</a>
          <a href="/healthcare-providers">For Healtcare Providers</a>
          <a href="/individuals">For Individuals</a>
          <a href="/gala">Charity Gala</a>
          
          <button
            onClick={() => {
              router.push('https://calendly.com/ochiengwarren3/evacare')
            }}
            className="uppercase  justify-center px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple mb-2 lg:mb-0"
          >
            SPEAK TO OUR TEAM
          </button>
          <button className="px-4 py-2 text-sm font-medium leading-5 text-center text-[#01382E] transition-colors duration-150 border-[#01382E]  border-solid border-2 rounded-lg active:bg-[#01382E] hover:bg-[#01382E] hover:text-white focus:outline-none focus:shadow-outline-purple ml-14 lg:ml-3"  onClick={() => {
              router.push('register')
            }}>
            TRY EVA FOR FREE
            
          </button>
        </div>
        <div className="menu-bar">
          <span className={isOpen ? 'hide text-white' : ' active'} onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
        </div>
      
      </div>
    
  )
}

export default Navbar
