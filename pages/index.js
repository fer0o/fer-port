import HeroComponent from '../components/Hero/HeroComponent'
import FooterComponent from '../components/Layout/FooterComponent'
import Navcomponent from '../components/Layout/Navcomponent'

export default function Home () {
  return (
    <div>
      <Navcomponent />
      <HeroComponent />
      <FooterComponent />
    </div>
  )
}
