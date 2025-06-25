// import Header from './components/Header';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <>
      {/* <DarkModeToggle /> */}
      <SideNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
