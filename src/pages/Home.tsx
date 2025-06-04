import whatsappIcon from '../assets/images/whatsapp-social-media-svgrepo-com.svg'
import Navbar from "../components/Navbar";
import HouseCard from "../components/PropertiesHouseCard";
import mainImg from "../assets/images/hero-images/Salon-decorado.jpg.webp"
import logoImg from "../assets/images/hero-images/casa-akinm.png"
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Properties from '../components/Properties';

function Home() {

  return (
      <main className="min-w-full min-h-dvh">
        <Navbar></Navbar>
        <div className='relative'>
          <img src={mainImg} className='w-dvw h-dvh max-h-[1080px] rounded-b-3xl transform -translate-y-20 z-10' alt="" />
        </div>
        <About></About>
        {/* PROPIEDADES */}
        <Properties></Properties>
        <Services></Services>
        <Footer></Footer>
        {/* <div className='h-dvh flex items-center justify-center'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl mb-20 py-20 xl:text-6xl uppercase text-center italic font-extrabold leading-relaxed bg-white/25 backdrop-blur-md rounded-lg border shadow-2xl border-slate-200 p-6 main-title'>
            <p>Tu hogar empieza aca</p>
            <p>AP inmobiliaria</p>
          </h1>
          <div className='h-80 w-80 2xl:h-96 2xl:w-96 bg-white/30 mb-10 border-2 backdrop-blur-md border-green-600 shadow-2xl p-6 rounded-full'>
            <img src={logoImg} alt="" />
          </div>
        </div> */}
      </main>
  );
}

export default Home;