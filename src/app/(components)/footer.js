'use client'
import "./component.css"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from '../assets/logo.png'
const Footer = () => {
    return ( 
        <footer className="bg-gray-800 rounded-top-lg shadow">
    <FloatingWhatsApp   phoneNumber="+254741511183"
        accountName="HRFLEEK"
        avatar='./logo.png'
        allowEsc
        notification
        notificationSound />
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-20 footer-logo" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary sm:mb-0">
               
                <li>
                    <a href="/contact" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                
                <li>
                    <a href="/contact" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-primary text-center">© {new Date().getFullYear()} <a href="#" className="hover:underline">HRFLEEK</a>. All Rights Reserved.</span>
    </div>
</footer>
     );
}
 
export default Footer;