import Hero from '../components/Landing_Page_Section/Hero';
import MainBody from '../components/Landing_Page_Section/MainBody';
import Article from '../components/Landing_Page_Section/Article';
import InfoMitra from './InfoMitra';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';
import Footer from '../components/Landing_Page_Section/Footer';

import Navbar from '../components/Product_Page/Navbar'
import Hore from '../components/Product_Page/Hore'
import BodyProduct from '../components/Product_Page/BodyProduct'
import FooterProduct from '../components/Product_Page/FooterProduct'

import Hihi from '../components/Profile_Page/Hihi'

export default function App() {
  return (
    <>
    <MainBody />
    <Hero>
    </Hero>
    <Article />
    <InfoMitra />
    <DownloadApp />   
    <Newsletter />
    <Footer />

    <Navbar />
    <Hore />
    <BodyProduct />
    <FooterProduct />

    <Navbar />
    <Hihi />
    <FooterProduct />

    </>
  );
}