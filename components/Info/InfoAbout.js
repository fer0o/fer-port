import React from 'react'
import Image from 'next/image'
const InfoAbout = ({ image }) => {
  return (
    <div>
      <div>
        {/* grid informacion about */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border border-white p-8 m-8'>
          <div className='block text-center lg:order-1 order-2'>
            <div className=''>
              <h2 className='block text-center text-3xl font-bold '>
                Acerca de Mí
              </h2>
              <h2 className='block text-left mb-4 mt-4'>
                Fer0o, Desarrollador web, Gamer y campeón de League of Legends
                de mi cuadra
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
                Estuve intentanto en diferentes áreas dentro del mundo de TI,
                pero por cuenta propia empecé a aprender desarrollo web más en
                la parte del frontend. Cuando cuarsaba clases me agradaba hacer
                la maquetación de los sitios web, pero no conocía todo el
                trasfondo de toda la tecnología web.
              </p>
              <p className='block text-left mt-4'>
                Actualmente estoy aprendiendo a ser un desarrollador web
                especializado en la parte de forntend. Utilizando tecnologías
                como React, NodeJS, MongoDB, Express, etc. En cuanto a
                frameworks de diseño como tailwindcss. Está página está hecha
                con NextJs y TailwindCSS.
              </p>
              <p className='block text-left mt-4'>
                Desde hace ya un par de años resido en Guadalajara, y soy
                gradudo en la carrera en Ingeniería en Sistemas Computacionales.
              </p>
            </div>
            {/* imagen */}

          </div>
          <div className=' drop-shadow shadow-white flex justify-center  w-full h-48 lg:w-96 lg:h-full m-auto '>
              <Image layout='fill' src={image} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoAbout
