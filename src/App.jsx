import './App.css'
import Header from './components/header'
import MainVisual from './components/main-visual'
import WrapperText from './components/wrapper-text'
import Introduction from './components/introduction'
import Map from './components/map'
import Access from './components/access'
import Introduction02 from './components/introduction02'
import Map02 from './components/map02'
import Access02 from './components/access02'
import Footer from './components/footer'
import Gallery from './components/gallery'
import Gallery02 from './components/gallery02'

export default function App() {
  return (
    <div>
      <Header />
      <MainVisual />
      <WrapperText />
      <Introduction />
      <Gallery />
      <Map />
      <Access />
      <Introduction02 />
      <Gallery02 />
      <Map02 />
      <Access02 />
      <Footer />
    </div>
  )
}
