"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="container-fluid bg-white fixed w-full z-20">
      <div className=" container mx-auto lg:px-20 bg-primary text-white text-xs hidden lg:flex items-center px-3 py-2 justify-between z-10">
        <div className="flex items-center gap-2">
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

            <p>I&M Bank House, 3rd Floor, 2nd Ngong Avenue, Nairobi</p>
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <p> +254741511183</p>
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

            <p>info@hrfleek.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/company/hr-fleek/?viewAsMember=true" target="blank">
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_68)">
              <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_17_68">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100077643974033" target="blank">
          <svg width='24' height='24' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_61)">
              <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_17_61">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
         
          </a>
          <a href="https://www.instagram.com/hrfleek/" target="blank">
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="white" />
          </svg>
          </a>
          <a href="https://www.tiktok.com/@hrfleek_kenya?_t=8mnygT77gwv&_r=1" target="blank">  <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
            </svg></a>
          <a href="https://www.instagram.com/hrfleek/" target="blank">
            
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 4H14C8.47715 4 4 8.47715 4 14V34C4 39.5228 8.47715 44 14 44H34C39.5228 44 44 39.5228 44 34V14C44 8.47715 39.5228 4 34 4ZM40 34C40 37.3137 37.3137 40 34 40H14C10.6863 40 8 37.3137 8 34V14C8 10.6863 10.6863 8 14 8H34C37.3137 8 40 10.6863 40 14V34ZM24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15ZM24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24C29 26.7614 26.7614 29 24 29ZM35 11C34.4477 11 34 11.4477 34 12C34 12.5523 34.4477 13 35 13C35.5523 13 36 12.5523 36 12C36 11.4477 35.5523 11 35 11Z" fill="white"/>
          </svg>
          </a>
          
         
        
        
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-20 flex items-center justify-between lg:shadow-lg lg:rounded-b-lg lg:bg-white p-3   z-10 lg:w-full">
        <div className="logo">
          <a href="/" className="nav-logo">
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

          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/resources">Resources</a>
          <a href="/clients">Clients</a>
          <a href="/jobs">Jobs</a>

          <a href="/contact">Contact</a>

          <button
            onClick={() => {
              router.push("/consultation");
            }}
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple"
          >
            BOOK A CONSULTATION
          </button>

          <button
            onClick={() => {
              router.push("https://hrfleek.com/wp-content/uploads/2022/11/HR-FLEEK-SERVICES-LTD-Brochure-1.pdf");
            }}
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-primary transition-colors duration-150 bg-tranparent border-2 border-primary rounded-lg active:bg-primar focus:outline-none focus:shadow-outline-purple hover:bg-[#0C9494] hover:text-white lg:ml-3"
          >
            DOWNLOAD BROCHURE
          </button>
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
