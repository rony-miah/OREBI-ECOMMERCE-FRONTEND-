import './App.css'
import Ads_1 from './Components/Ads_1/Ads_1'
import Ads_2 from './Components/Ads_2/Ads_2'
import Banner from './Components/Banner/Banner'
import BannerInfo from './Components/Banner/BannerInfo'
import Footer from './Components/Footer/Footer'
import BtmHeader from './Components/Headers/BtmHeader/BtmHeader'
import TopHeader from './Components/Headers/TopHeader/TopHeader'
import NewArrivals from './Components/NewArrivals/NewArrivals'
import OurBestsellers from './Components/OurBestsellers/OurBestsellers'
import SpecialOffers from './Components/SpecialOffers/SpecialOffers'

function App() {

  return (
    <>
      <TopHeader />
      <BtmHeader />
      <Banner />
      <BannerInfo />
      <Ads_1 />
      <NewArrivals />
      <OurBestsellers />
      <Ads_2 />
      <SpecialOffers />
      <Footer />
    </>
  )
}

export default App
