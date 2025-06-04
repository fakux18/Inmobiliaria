export default function Footer() {
  return (
    <footer className="bg-[#2d8250] py-12">
      <div className="text-white center-all">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>            
          {/* Logo y descripción */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-2">AK Inmobiliaria</h2>
              <p className="text-sm text-[#d1fbe5]">
                Inspirando con diseño verde y funcional. Hecho con pasión y propósito.
              </p>
            </div>
            <div className="text-center lg:text-left">
          {/* Enlaces rápidos */}
              <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
              <ul className="space-y-2 text-[#d1fbe5]">
                <li><a href="#" className="hover:text-white">Inicio</a></li>
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Servicios</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
          </div>
          

          {/* Redes sociales */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f4b400]" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#f4b400]" aria-label="Twitter">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.73 1.04A4.28 4.28 0 0 0 16.07 4c-2.36 0-4.28 1.92-4.28 4.29 0 .34.04.68.11 1A12.13 12.13 0 0 1 3.15 5.15a4.29 4.29 0 0 0 1.33 5.72 4.24 4.24 0 0 1-1.94-.54v.05c0 2.01 1.43 3.69 3.33 4.07-.35.1-.71.15-1.09.15-.27 0-.52-.03-.77-.07.52 1.63 2.03 2.82 3.82 2.86A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.34 8.34 0 0 0 22.46 6z" />
                </svg>
              </a>
              {/* Puedes añadir más íconos de redes sociales aquí */}
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
