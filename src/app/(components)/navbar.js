"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="container-fluid bg-white  w-full">
      <div className=" bg-primary text-white text-xs hidden lg:flex items-center px-3 py-2 justify-between">
        <div className="container mx-auto px-5 lg:px-20 flex items-center gap-2">
          <div className="flex items-center gap-1">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p>Lethbridge RPO Higlands</p>
          </div>
          <div className="flex items-center gap-2">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <p>+1(587)894-6112</p>
          </div>
          <div className="flex items-center gap-1">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <p>info@cleansweep.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-20 flex items-center justify-between lg:rounded-b-lg lg:bg-white p-3   z-10 lg:w-full">
        <div className="logo">
          <a href="/" className="nav-logo" aria-label="Go back to Homepage">
            <Image src="/logo.png" alt="logo" width={200} height={70} />
          </a>
        </div>
        <div
          className={
            isOpen
              ? "active links flex flex-col lg:flex-row items-center justify-between"
              : "hide links flex-col lg:flex-row items-start"
          }
        >
          <div className="cancel">
            <span
              className={isOpen ? "cancel-btn active" : "cancel-btn hide"}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <Link href="/" class={` ${pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link href="/about"  class={` ${pathname === "/about" ? "active" : ""}`}>About Us</Link>
          <Link href="/services" class={` ${pathname === "/services" ? "active" : ""}`}>Services</Link>
          {/* < Link href="/articles" class={` ${pathname === "/articles" ? "active" : ""}`}>Blogs</Link> */}

          <Link href="/contact" class={` ${pathname === "/contact" ? "active" : ""}`}>Contact Us</Link>

          <button
            onClick={() => {
              router.push("/consultation");
            }}
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#ff9202] focus:outline-none focus:shadow-outline-purple"
          >
            BOOK OUR SERVICES
          </button>

          {/* <button
            onClick={() => {
              router.push("https://dashboard.hrfleek.com/wp-content/uploads/2024/06/HRFLEEK-Brochure-new.pdf");
            }}
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-primary transition-colors duration-150 bg-tranparent border-2 border-primary rounded-lg active:bg-primary focus:outline-none focus:shadow-outline-purple hover:bg-[#ff9202] hover:text-white lg:ml-3"
          >
            DOWNLOAD BROCHURE
          </button> */}
        </div>
        <div className="menu-bar">
          <span
            className={isOpen ? "hide text-white" : " active"}
            onClick={() => setOpen(true)}
          >
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
  );
};

export default Navbar;
