import whatsappIcon from '../assets/images/whatsapp-social-media-svgrepo-com.svg'
import Navbar from "../components/Navbar";
import HouseCard from "../components/HouseCard";

function Home() {

  return (
    <main className="w-full h-dvh relative">
      <main className="w-10/12 max-w-screen-2xl mx-auto relative">
        <Navbar></Navbar>

        {/* PROPIEDADES */}
        <section id="propiedades" className="space-y-8">
          <h2 className="text-3xl md:text-4xl gradient-titles">Propiedades</h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
          </div>
        </section>

        <section id="servicios" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Servicios</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Compra y Venta</h3>
                <p className="text-gray-600 mt-2">Te ayudamos a comprar o vender tu propiedad de forma segura y rápida.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Alquiler</h3>
                <p className="text-gray-600 mt-2">Ofrecemos una amplia variedad de propiedades en alquiler por temporada o largo plazo.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Asesoramiento Legal</h3>
                <p className="text-gray-600 mt-2">Contamos con profesionales que te asesoran en todo el proceso legal inmobiliario.</p>
              </div>
            </div>
        </section>

        <div className="h-16 w-16 fixed bottom-6 right-0">
          <img src={whatsappIcon} alt="icono whatsapp" />
        </div>

      </main>

    </main>
  );
}

export default Home;