'use client'
import "./component.css"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Link from 'next/link'

const Footer = () => {
    return ( 
        <footer className="bg-primary text-white">
            <FloatingWhatsApp   
                phoneNumber="+1(587)894-6112"
                accountName="cleansweep"
                avatar='./logo.png'
                allowEsc
                notification
                notificationSound 
            />
            
            <div className="container mx-auto px-5 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/">
                            <img src="/logo.png" className="h-20 footer-logo" alt="CleanSweep Logo" />
                        </Link>
                        <p className="text-sm mt-4">
                            Professional cleaning services in Lethbridge, Alberta. We provide reliable and thorough cleaning solutions for homes and businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/articles" className="hover:text-gray-300 transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>Lethbridge, Alberta</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span>+1(587)894-6112</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span>info@cleansweep.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                        <ul className="space-y-2">
                            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                            <li>Saturday: 9:00 AM - 4:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Emergency Service</h4>
                            <p className="text-sm">Available 24/7 for urgent cleaning needs</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm">
                            © {new Date().getFullYear()} CleanSweep. All Rights Reserved.
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-gray-300 transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-300 transition-colors text-sm">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;