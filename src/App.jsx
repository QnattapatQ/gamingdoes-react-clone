import ResponsiveSize from '../public/ResponsiveSize'
import BackdropBG from './components/BackdropBG/BackdropBG'
import Header from './components/Header/Header'
import TopBannerAds from './components/Header/TopBanner'
import HeroSection from './components/HeroSection/HeroSection'
import PopularNews from './components/PopularNews/PopularNews'
import Trending from './components/Trending/Trending'

function App() {
    return (
        <div>
            <TopBannerAds/>
            <Header/>
            <HeroSection/>
            <Trending/>
            <PopularNews/>
        </div> 
    )
}

export default App
