
import Banner from '../components/Banner'
import '../css/landingpge.css'
import TopSelling from '../components/TopSelling'
import FlashsSale from '../components/FlashsSale'
import Limited from '../components/Limited'
import Withlove from '../components/Withlove'
import Withloveone from '../components/Withloveone'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

const LandingPge = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <TopSelling/>
      <Banner/>
      <FlashsSale countdown={15}/>
      <Limited/>
      <Withloveone/>
      <Withlove/>
    </div>
  )
}

export default LandingPge
