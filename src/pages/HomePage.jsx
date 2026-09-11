import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import BrandsStrip from '../components/BrandsStrip.jsx'
import Services from '../components/Services.jsx'
import ContractModels from '../components/ContractModels.jsx'
import Packages from '../components/Packages.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Advantage from '../components/Advantage.jsx'
import FinalCta from '../components/FinalCta.jsx'
import About from '../components/About.jsx'
import StartJourney from '../components/StartJourney.jsx'
import Footer from '../components/Footer.jsx'
import MobileBottomNav from '../components/MobileBottomNav.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandsStrip />
        <Services />
        <ContractModels />
        <Packages />
        <HowItWorks />
        <Advantage />
        <FinalCta />
        <About />
        <StartJourney />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
