import ResponsiveSize from '../public/ResponsiveSize'
import BackdropBG from './components/BackdropBG/BackdropBG'
import Header from './components/Header/Header'
import TopBannerAds from './components/Header/TopBanner'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
    return (
        <div>
            <BackdropBG/>
            <TopBannerAds/>
            <Header/>
        </div> 
    )
}

export default App
