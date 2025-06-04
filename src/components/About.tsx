function About() {
  return (
    <section className="center-all mb-40">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-dvh max-h-[720px]">

        {/* Izquierda */}
        <div className="grid grid-rows-[1fr_4fr] gap-4 bg-gray-100 rounded-lg shadow h-full">
          <div className="bg-blue-100 rounded-md flex items-center justify-center text-center h-full">
            1fr
          </div>
          <div className="bg-blue-200 rounded-md flex items-center justify-center text-center h-full">
            4fr
          </div>
        </div>

        {/* Derecha */}
        <div className="flex flex-col gap-4 bg-gray-50 rounded-lg shadow h-full">

          {/* Parte superior: 2 imágenes con proporción 3fr / 4fr */}
          <div className="grid grid-cols-2 md:grid-cols-[3fr_4fr] gap-6 h-1/2">
            <div className="bg-green-100 p-2 rounded text-center w-full h-full">
              Imagen 3fr
            </div>
            <div className="bg-green-200 p-2 rounded text-center w-full h-full">
              Imagen 4fr
            </div>
          </div>

          {/* Parte inferior */}
          <div className="bg-yellow-100 rounded-md flex items-center justify-center h-1/2 text-center">
            Parte inferior
          </div>

        </div>
      </div>
    </section>

  )
}

export default About