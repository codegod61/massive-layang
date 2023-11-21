import Hero from '../components/Landing_Page_Section/Hero';
import MainBody from '../components/Landing_Page_Section/MainBody';
import Article from '../components/Landing_Page_Section/Article';
import InfoMitra from './InfoMitra';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';
import Footer from '../components/Landing_Page_Section/Footer';

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
    </>
  );
}