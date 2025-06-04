function Services() {
  return (
    <div id="servicios" className="center-all mb-40">
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
    </div>
  )
}

export default Services