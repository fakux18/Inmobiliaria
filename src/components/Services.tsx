import { FaSackDollar, FaHouseCircleCheck, FaUserTie } from "react-icons/fa6";

function Services() {
  return (
    <div id="servicios" className="center-all mb-40 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-xl rounded-lg border border-amber-500 md:translate-y-12 flex flex-col gap-3">
            <span className="flex justify-center w-full h-8 text-3xl"><FaSackDollar/></span>
            <h3 className="text-xl font-semibold text-gray-800">Compra y Venta</h3>
            <p className="text-gray-600 mt-2">En AK te ayudamos para que consigas justo lo que estás buscando...</p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-lg border border-amber-500 flex flex-col gap-3">
            <span className="flex justify-center w-full h-8 text-3xl"><FaHouseCircleCheck></FaHouseCircleCheck></span>
            <h3 className="text-xl font-semibold text-gray-800">Alquiler</h3>
            <p className="text-gray-600 mt-2">Ofrecemos variedad de productos en alquiler, pensados para adaptarse a tus necesidades personales o comerciales.</p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-lg border border-amber-500 md:-translate-y-12 flex flex-col gap-3">
            <span className="flex justify-center w-full h-8 text-3xl"><FaUserTie></FaUserTie></span>
            <h3 className="text-xl font-semibold text-gray-800">Asesoramiento</h3>
            <p className="text-gray-600 mt-2">Contamos con un equipo de profesionales capacitados que te brindarán asesoramiento en cada etapa del proceso..</p>
          </div>
        </div>
    </div>
  )
}

export default Services