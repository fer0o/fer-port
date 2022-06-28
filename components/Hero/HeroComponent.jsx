import Image from 'next/image'
import Link from 'next/link'
import fuente from '../../public/heroImg/fuente.jpg'

const HeroComponent = () => {
  return (
    <div>
      {/* grid container */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 m-8">
        {/* image grid */}
        <div className="block  lg:order-1 order-2 space-y-8 p-8">
          <h2 className="lg:text-4xl text-xl">Hola, soy Fer</h2>
          <h1 className="lg:text-8xl text-4xl font-bold">Bienvenido</h1>
          <h3 className="lg:text-4xl text-xl">
            Ingeniero en sistemas, desarrollador web.
          </h3>
          <h3 className="text-2xl">
            Hola, Soy Fer o Fero como gusten llamarme. Soy desarrollador web muy
            interesado y actualmente aprendiendo en el área del frontend con
            React, fotográfo amateur y próximo campeon de LoL de mi cuadra.✌️
          </h3>
          <Link href="/about">
            <button className="bg-blue-500 text-white p-4 rounded-md">
              Conocer Más
            </button>
          </Link>
        </div>
        {/* grid text */}
        <div className="lg:order-2 order-1">
          <Image src={fuente} layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
