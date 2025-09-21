// File: src/App.jsx (updated)

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Philosophy from './components/Philosophy/Philosophy';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import SkipLink from './components/SkipLink/SkipLink'; // ← Add this import

function App() {
  return (
    <div className="App">
      {/* Skip link - appears only when keyboard user presses Tab */}
      <SkipLink />
      
      <Header />
      
      {/* Add id="main-content" so the skip link knows where to jump */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <Contact />
        <Form />
      </main>
      
      <Footer />
    </div>
  )
}

export default App