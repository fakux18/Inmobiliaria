import PropertiesHouseCard from "./PropertiesHouseCard"

function Properties() {
  return (
    <section id="propiedades" className="center-all mb-40">
      <h2 className="text-3xl md:text-4xl gradient-titles">Propiedades</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
        <PropertiesHouseCard/>
      </div>
    </section>  )
}

export default Properties