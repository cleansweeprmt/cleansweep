
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from './(components)/navbar';
import Footer from './(components)/footer';
import { GoogleTagManager } from '@next/third-parties/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight:['100','300','400','500','700','900']
});

export const metadata = {
  title: "HRFLEEK",
  description: "Your Human resource solutions Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-030ZCRYVNB" />
      <body className={roboto.className}>
        <div> 
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
