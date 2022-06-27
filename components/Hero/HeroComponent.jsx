import Image from 'next/image'

const HeroComponent = () => {
  return (
    <div>
      {/* grid container */}
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        {/* image grid */}
        <div className="block text-center border-2 border-white lg:order-1 order-2">
          <h1>Bienvenidos</h1>
          <h1>Bienvenidos</h1>
          <h1>Bienvenidos</h1>
          <h1>Bienvenidos</h1>
        </div>
        {/* grid text */}
        <div className="lg:order-2 order-1">imagen</div>
      </div>
    </div>
  )
}

export default HeroComponent
