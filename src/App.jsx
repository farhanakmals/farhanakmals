import HeroScene from './components/HeroScene';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// 3D hero options from the design's tweak panel
// shape: 'Tech globe' | 'Wireframe knot'    motion: 'Still' | 'Calm' | 'Lively'
const HERO_SHAPE = 'Tech globe';
const HERO_MOTION = 'Calm';

export default function App() {
  return (
    <div className="bg-page min-h-screen overflow-x-clip text-text">
      <HeroScene shape={HERO_SHAPE} motion={HERO_MOTION} />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
