import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
