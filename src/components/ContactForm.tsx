// ContactFormStatic.tsx
export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row gap-16 lg:gap-28 p-6 md:p-12 bg-white rounded-xl shadow-lg max-w-5xl mx-auto mb-40">
      {/* TEXT */}
      <div className="md:w-1/2 space-y-8">
        <h2 className="uppercase text-center text-green-700 md:text-left text-3xl font-extrabold">Contactanos</h2>
        <p className="text-sm text-center md:text-left text-gray-600">
          En <span className="font-semibold">AK Inmobiliaria</span> estamos súper comprometidos en ayudarte a encontrar justo lo que necesitás. Ya sea que estés buscando tu próximo hogar, un vehículo, una propiedad para invertir o algún espacio comercial, nuestro equipo está acá para acompañarte en cada paso y hacer que todo sea más fácil y sin vueltas.

          Solo déjanos tus datos de contacto y uno de nuestros asesores te va a llamar lo antes posible para charlar sobre lo que buscás, despejar todas tus dudas y mostrarte las mejores opciones que tenemos para vos.

          No importa qué estés buscando, en AK Inmobiliaria queremos que encuentres justo eso que te hace falta, rápido, seguro y sin complicaciones. ¡Estamos para ayudarte!
        </p>
      </div>

      {/* FORM */}
      <form className="md:w-1/2 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-full sm:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,50}$"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="w-full sm:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,25}$"
          />
        </div>
        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          pattern="^\+?\d{10,15}$"
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="w-full p-3 border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-400/75 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
