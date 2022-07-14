import React from 'react'
import Image from 'next/image'
import FooterComponent from '../components/Layout/FooterComponent'
import Navcomponent from '../components/Layout/Navcomponent'
import aboutFoto from '../public/aboutFotos/foto2.jpg'

const about = () => {
  return (
    <div>
      <Navcomponent />
      {/* information box */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border border-white p-8 m-8'>
        <div className='block text-center lg:order-1 order-2'>
          <h1 className='block text-left text-3xl font-bold mb-4'>
            Acerca de Mí
          </h1>
          <div className=''>
            <h2 className='block text-left mb-4'>
              Fer0o, Desarrollador web, Gamer y campeón de League of Legends de
              mi cuadra
            </h2>
            <p className='block text-left'>
              Mi Nombre es Fernando Medellín Cuevas, nací el 20 de Enero de
              1993. Desde pequeño tuve contacto con la tecnología con los
              videojuegos, eso me hizo interesarme por la tecnología. Desde
              pequeño me gustaba y me dió interés por saber como es que los
              videojuegos funcionan y no fue hasta la escuela preparatoria mis
              primeros pasos por la programación.
            </p>
            <p className='block text-left mt-4'>
              Actualmente estoy aprendiendo a ser un desarrollador web
              especializado en la parte de forntend. Utilizando tecnologías como
              React, NodeJS, MongoDB, Express, etc. En cuanto a frameworks de
              diseño como tailwindcss. Está página está hecha con NextJs y
              TailwindCSS.
            </p>
            <p className='block text-left mt-4'>
              Me gusta siempre estar aprendiendo tanto nuevas tecnologías como
              aprendiendo otro tipo de pasatiempos, ya sea la fotografía, un
              poco de edición de videos
            </p>
          </div>
        </div>
        <div className=' drop-shadow shadow-white flex justify-center  lg:order-2 order-1 lg:w-[400px] lg:h-[450px] m-auto'>
          <Image src={aboutFoto} layout='intrinsic' />
        </div>
      </div>

      <FooterComponent />
    </div>
  )
}

export default about
