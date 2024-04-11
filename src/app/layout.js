import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight:['100','300','400','500','700','900']
});

export const metadata = {
  title: "Evacare",
  description: "The next generation of maternal and infant healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <div className='container-fluid z-20 fixed top-0 w-full'>
          <p className='py-1 px-4 text-white bg-primary text-xs lg:text-sm  text-center z-20'>Charity Gala On on 5/25/2024 |Adavancing maternal and infant healthcare |  <a className='text-[#F39711]' href='https://www.eventbrite.com/e/evacare-charity-award-gala-tickets-881266841847?aff=oddtdtcreator'>Register now →</a></p>
          </div>
        
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
