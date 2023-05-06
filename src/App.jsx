import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Fade from 'react-reveal/Fade';
import ParticlesBackground from './components/ParticlesBackgrounnd';

const App = () => {
  return (
    <>
    <ParticlesBackground/>
      <Header />
      <Topbar />
      <Fade top distance = "5%" duration={1500}>
        <Intro />
      </Fade>
      <Fade top distance = "10%" duration={1500}>
        <Experience />
      </Fade>
        <Portfolio />
      <Fade top distance = "10%" duration={1500}>
        <Testimonials />
      </Fade>
      <Fade top distance = "10%" duration={1500}>
        <Contact/>
        <Footer/>
      </Fade>
    </>
  )
}

export default App
