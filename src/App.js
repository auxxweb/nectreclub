import './App.css';
import Navbar from './components/navbar';
import Banner from './components/Banner';
import FlashNews from './components/Flash';
// import HalfCircleCarouselAutoplay from './components/Carousal';
import Request from './components/Request';
import Footer from './components/Footer';
// import Carousel from './components/Carousal';
import  Carousel2 from './components/Carousel2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Banner />
        <FlashNews/>
        {/* <HalfCircleCarouselAutoplay/> */}
       
        {/* <Carousel /> */}
        <Carousel2 />
        <Request />
        <Footer />
      </header>
    </div>
  );
}

export default App;
