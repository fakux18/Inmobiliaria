import leftHouse from "../assets/images/about/left-house.jpg"
import rightHouse1 from "../assets/images/about/right-huose1.jpg"
import rightHouse2 from "../assets/images/about/right-huose2.jpg"

function About() {
  return (
    <section className="center-all mb-40">

      <div className="flex flex-col md:flex-row gap-6 lg:max-h-[600px]">

        {/* Izquierda */}
        <div className="w-full flex flex-col gap-6 lg:flex-col">
          <div className="flex flex-col items-center justify-center text-center gap-3 p-4 w-full h-1/2 md:h-[40%]">
            <h2 className="text-3xl uppercase font-extrabold text-green-700">Conocenos</h2>
            <p className="text-sm font-semibold text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repellat atque quam minima exercitationem in similique facere reprehenderit excepturi vel ea accusantium nemo voluptates, eligendi eius labore saepe quidem! lore excepturi</p>
          </div>
          <div className="overflow-hidden rounded-3xl w-full h-1/2 md:h-[60%]">
            <img src={leftHouse} alt="" className="w-full h-full max-h-[380px] object-fill" />
          </div>
        </div>

        {/* Derecha */}
        <div className="w-full flex flex-col-reverse md:flex-col gap-6">

          {/* Parte superior: 2 imágenes con proporción 3fr / 4fr */}
          <div className="flex h-1/2 lg:h-[60%] gap-2 lg:gap-6">
            <div className="w-1/2 overflow-hidden rounded-3xl">
              <img src={rightHouse2} alt="" className="h-full w-full"/>
            </div>
            <div className="w-1/2 overflow-hidden rounded-3xl">
              <img src={rightHouse1} alt="" className="w-full h-full"/>
            </div>
          </div>

          {/* Parte inferior */}
          <div className="h-1/2 lg:h-[40%] p-5 gap-3 flex flex-col items-center text-center">
            <h2 className="text-3xl uppercase font-extrabold text-green-700"> Titulo temporal</h2>
            <p className="text-sm font-semibold text-slate-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas corporis velit tenetur voluptates. Quae debitis iure sit quidem iusto repellat assumenda quis officiis dignissimos</p>
          </div>

        </div>

      </div>
    </section>

  )
}

export default About