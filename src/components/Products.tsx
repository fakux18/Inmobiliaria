import PropertiesHouseCard from "./ProductsCard"

function Products() {
  return (
    <section id="products" className="center-all mb-40">
      <h2 className="text-4xl md:text-5xl text-center lg:text-left uppercase font-extrabold text-green-700 mb-16">Propiedades</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
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

export default Products