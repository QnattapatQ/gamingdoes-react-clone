import ResponsiveSize from '../public/ResponsiveSize'
import BackdropBG from './components/BackdropBG/BackdropBG'
import Header from './components/Header/Header'
import TopBannerAds from './components/Header/TopBanner'
import HeroSection from './components/HeroSection/HeroSection'
import NewsSection from './components/News/NewsSection'
import Trending from './components/Trending/Trending'
import PopularSection from './components/Popular/PopularSection'
import NewsHighlight from './components/NewsHighlight/NewsHighlight'

function App() {
    return (
        <div>
            <TopBannerAds/>
            <Header/>
            <HeroSection/>
            <Trending/>
            <PopularSection/>
            <NewsSection/>
            <NewsHighlight/>
        </div> 
    )
}

export default App
