import whatsappIcon from '../assets/images/whatsapp-social-media-svgrepo-com.svg'
import Navbar from "../components/Navbar";
import HouseCard from "../components/ProductsCard";
import mainImg from "../assets/images/hero-images/Salon-decorado.jpg.webp"
import mainImgMobile from "../assets/images/hero-images/Salon-decorado-mobile.jpg"
import logoImg from "../assets/images/hero-images/casa-akinm.png"
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Properties from '../components/Products';
import ContactForm from '../components/ContactForm';

function Home() {

  return (
      <main className="min-w-full min-h-dvh relative">
        <Navbar></Navbar>
        {/* imagen bien puta */}
        <div className='relative'>
          <img 
          srcSet={mainImg} 
          className='hidden w-dvw h-dvh max-h-[1080px] rounded-b-3xl transform -translate-y-20 z-10 md:block object-fit' alt="" />
          <img src={mainImgMobile} className='w-dvw h-dvh max-h-[1080px] rounded-b-3xl transform -translate-y-20 z-10 object-fit md:hidden' alt="" />
        </div>
        <About></About>
        <Properties></Properties>
        <Services></Services>
        <ContactForm></ContactForm>
        <Footer></Footer>
        {/* wpp icon */}
        <div className='fixed flex justify-end pointer-events-none center-all bottom-5 h-20 left-1/2 transform -translate-x-1/2 z-50'>
        <a href="" className='pointer-events-auto'>
          <img src={whatsappIcon} alt="" className='h-20 w-20'/>
        </a>
        </div>
      </main>
  );
}

export default Home;