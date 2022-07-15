import Image from 'next/image'
import FooterComponent from '../components/Layout/FooterComponent'
import Navcomponent from '../components/Layout/Navcomponent'
import fotoAbout from '../public/aboutFotos/foto2.jpg'
const about = () => {
  return (
    <div>
      <Navcomponent />
      {/* information box */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border border-white p-8 m-8'>
        <div className='block text-center lg:order-1 order-2'>
          <h2 className='block text-center text-3xl font-bold mb-8'>
            Acerca de Mí
          </h2>
          {/* div contenedor descripcion */}
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
              Estuve intentanto en diferentes áreas dentro del mundo de TI, pero
              por cuenta propia empecé a aprender desarrollo web más en la parte
              del frontend. Cuando cuarsaba clases me agradaba hacer la
              maquetación de los sitios web, pero no conocía todo el trasfondo
              de toda la tecnología web.
            </p>
            <p className='block text-left mt-4'>
              Actualmente estoy aprendiendo a ser un desarrollador web
              especializado en la parte de forntend. Utilizando tecnologías como
              React, NodeJS, MongoDB, Express, etc. En cuanto a frameworks de
              diseño como tailwindcss. Está página está hecha con NextJs y
              TailwindCSS.
            </p>
            <p className='block text-left mt-4'>
              Desde hace ya un par de años resido en Guadalajara, y soy gradudo
              en la carrera en Ingeniería en Sistemas Computacionales.
            </p>
          </div>
        </div>
        <div className=' drop-shadow shadow-white flex justify-center  lg:order-2 order-1 lg:w-[400px] lg:h-[450px] m-auto'>
          <Image src={fotoAbout} layout='intrinsic' alt='' />
        </div>
      </div>
      {/* segundo grid */}
      <div className='grid grid-cols-3 gap-2 border border-white p-8 m-8'>
        {/* card animestation */}
        <div className='card w-96  bg-base-100 shadow-xl border border-white'>
          <div>
            <Image src={fotoAbout} layout='intrinsic' alt='' />
          </div>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div>Presion Arterial</div>
        <div>Mundialito shop</div>
      </div>

      <FooterComponent />
    </div>
  )
}

export default about
