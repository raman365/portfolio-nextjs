// src/app/page.js
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="App">
      {/* The combined Header and Hero section */}
      <div className="md:h-screen">
        <Header />
        <Hero />
      </div>
      <Project />
      <About />
      <Footer />
    </div>
  );
}
