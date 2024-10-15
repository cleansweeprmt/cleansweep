
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from './(components)/navbar';
import Footer from './(components)/footer';


const roboto = Roboto({
  subsets: ['latin'],
  weight:['100','300','400','500','700','900']
});

export const metadata = {
  title: "spruceitup",
  description: "Your cleaning solutions Partner",
  openGraph: {
    title: 'spruceitup',
    description: 'Your cleaning solutions Partner',
    url: 'https://www.spruceitup.nl/',
    siteName: 'Spruceitup',
    images: '/img/hero.jpg',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
