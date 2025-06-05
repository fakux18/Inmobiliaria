import { FaWhatsapp, FaXTwitter, FaInstagram, FaFacebook} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2d8250] py-12 relative">
      <span className="absolute w-full h-16 -top-16 left-0 bg-[#2d8250] z-30 clip-footer-overline"></span>
      <div className="text-white center-all">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-12">            
          {/* Logo y descripción */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-2">AK Inmobiliaria</h2>
              <p className="text-md text-[#d1fbe5]">
                AK Inmobiliaria es tu sitio de confianza para comprar, vender o alquilar propiedades, vehículos y mucho más.
              </p>
            </div>
            <div className="text-center lg:text-left">
          {/* Enlaces rápidos */}
              <ul className="flex flex-col lg:flex-row gap-4 text-[#d1fbe5]">
                <li><a href="#" className="hover:text-white hover:underline transition ease-in duration-200">Inicio</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition ease-in duration-200">Conocenos</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition ease-in duration-200">Propiedades</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition ease-in duration-200">Servicios</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition ease-in duration-200">Contacto</a></li>
              </ul>
            </div>
          </div>
          

          {/* Redes sociales */}
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <div className="flex gap-12">

              <div className="relative"><a href="" className="text-2xl hover:text-amber-400 hover:text-3xl duration-300 absolute hover:scale-x-110"><FaFacebook/></a></div>
              <div className="relative"><a href="" className="text-2xl hover:text-amber-400 hover:text-3xl duration-300 absolute hover:scale-x-110"><FaInstagram/></a></div>
              <div className="relative"><a href="" className="text-2xl hover:text-amber-400 hover:text-3xl duration-300 absolute hover:scale-x-110"><FaWhatsapp/></a></div>
              <div className="relative"><a href="" className="text-2xl hover:text-amber-400 hover:text-3xl duration-300 absolute hover:scale-x-110"><FaXTwitter/></a></div>
              
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-[#5dbb83] pt-4 text-center text-sm text-[#d1fbe5]">
          &copy; 2025 AK Inmobiliaria. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
