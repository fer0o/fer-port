import Image from 'next/image'
import { Card } from '../components/Info/Card'
import InfoAbout from '../components/Info/InfoAbout'
import FooterComponent from '../components/Layout/FooterComponent'
import Navcomponent from '../components/Layout/Navcomponent'
// import fotoAbout from '../public/aboutFotos/foto2.jpg'
const about = () => {
  return (
    <div>
      <Navcomponent />
      <div>
        <InfoAbout image='/aboutFotos/foto2.jpg' />
      </div>

      {/* segundo grid */}
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-2 gap-4 border border-white m-8'>
        {/* card animestation */}
        <Card
          title='Anime Station'
          description='Página web únicamente con HTML, CSS y JavaScript de la materia de Desarrollo Web en la escuela de Coderhouse.'
          image='/aboutFotos/foto2.jpg'
        />
        <Card
          title='Anime Station'
          description='Página web únicamente con HTML, CSS y JavaScript de la materia de Desarrollo Web en la escuela de Coderhouse.'
          image='/aboutFotos/foto2.jpg'
        />
        <Card
          title='Anime Station'
          description='Página web únicamente con HTML, CSS y JavaScript de la materia de Desarrollo Web en la escuela de Coderhouse.'
          image='/aboutFotos/foto2.jpg'
        />
      </div>

      <FooterComponent />
    </div>
  )
}

export default about
