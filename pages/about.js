import { Card } from '../components/Info/Card'
import InfoAbout from '../components/Info/InfoAbout'
import FooterComponent from '../components/Layout/FooterComponent'
import Navcomponent from '../components/Layout/Navcomponent'

const about = () => {
  return (
    <div>
      <Navcomponent />
      <div>
        <InfoAbout image='/aboutFotos/foto2.jpg' />
      </div>

      {/* segundo grid */}
      <div>
      <h2 className='text-3xl font-bold text-white block text-center'>Ultimos Proyectos </h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-4 m-4'>
        {/* card animestation */}
        <Card
          title='Anime Station'
          description='Página web dedicada a la información de algunos post de páginas de anime, manga y videojuegos. para la maquetación esta fue hecha con HTML, CSS (css puro y bootstrap) y javascript, hecha para el curso de Desarrollo Web de Coderhouse'
          image='/gif/animeStation.gif'
          link={'https://anime-station-zeta.vercel.app/'}
          linkGithub={'https://github.com/fer0o/coderhouseDesarrolloWeb'}
        />
        <Card
          title='Presion Arterial'
          description='Aplicación web para la medición de presión arterial de una persona y llevar un registro, así mismo ver información, riesgos, recomendaciones. Para su desarrollo se usó HTML, CSS (CSS puro, bootstrap) librerías como sweetalert para los mensajes y Javascript para el registro que se guarde en memoria y alteraciones del DOM con eventos. Esta aplicacion fue hecha para la materia de Javascript de la escuela Coderhouse '
          image='/gif/presionArterial.gif'
          link={'https://presion-arterial.vercel.app/'}
          linkGithub={'https://github.com/fer0o/Js_Coderhouse'}
        />
        <Card
          title='Mundialito Shop'
          description='Página web que tiene como finalidad la creación de una tienda virtual de jerseys de los equipos participantes del mundial de qatar 2022. Esta página está realizada con ReactJs, TailwindCSS, sweetalert y firebase. Este proyecto esta realizado para la materia de ReactJs de la escuela CoderHouse'
          image='/gif/mundialitoShop.gif'
          link={'https://mundialito.vercel.app/'}
          linkGithub={'https://github.com/fer0o/cursoReactCoderhouse'}
        />
      </div>

      </div>
      

      <FooterComponent />
    </div>
  )
}

export default about
