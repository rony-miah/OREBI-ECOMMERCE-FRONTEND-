import './App.css'
import Ads_1 from './Components/Ads_1/Ads_1'
import Banner from './Components/Banner/Banner'
import BannerInfo from './Components/Banner/BannerInfo'
import BtmHeader from './Components/Headers/BtmHeader/BtmHeader'
import TopHeader from './Components/Headers/TopHeader/TopHeader'
import NewArrivals from './Components/NewArrivals/NewArrivals'
import OurBestsellers from './Components/OurBestsellers/OurBestsellers'

function App() {

  return (
    <>
      <TopHeader/>
      <BtmHeader/>
      <Banner/>
      <BannerInfo/>
      <Ads_1/>
      <NewArrivals/>
      <OurBestsellers/>
    </>
  )
}

export default App
