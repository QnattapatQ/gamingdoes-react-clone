import ResponsiveSize from '../public/ResponsiveSize'
import BackdropBG from './components/BackdropBG/BackdropBG'
import Header from './components/Header/Header'
import TopBannerAds from './components/Header/TopBanner'
import HeroSection from './components/HeroSection/HeroSection'
import NewsSection from './components/News/NewsSection'
import Trending from './components/Trending/Trending'
import PopularSection from './components/Popular/PopularSection'
import NewsHighlight from './components/NewsHighlight/NewsHighlight'
import NewsVideoSection from './components/NewsVideoSection/NewsVideoSection'
import WatchSection from './components/WatchSection/WatchSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'

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
            <NewsVideoSection/>
            <WatchSection/>
            <ReviewsSection/>
        </div> 
    )
}

export default App
