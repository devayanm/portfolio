// App.jsx
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { registerSW } from 'virtual:pwa-register';

import SideNav from './components/SideNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // PWA update prompt
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm('A new update is available. Refresh now?')) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Devayan | Portfolio</title>
        <meta
          name="description"
          content="Welcome to my profile! My name is Devayan Mandal. I'm always excited to connect with fellow professionals and like-minded individuals. Please feel free to drop me a message."
        />
        <meta name="author" content="Devayan Mandal" />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Devayan Portfolio"
        />
        <meta
          property="og:description"
          content="Welcome to my profile! Let's connect and collaborate on meaningful tech projects."
        />
        <meta name="google-site-verification" content="Fp7ulWWbx4tKrFPgRcXBkgVUyJNDzZJokLUg_doHDGk" />
      </Helmet>

      <BrowserRouter>
        <SideNav />
        <main>
          <AnimatePresence mode="wait">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </AnimatePresence>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
