import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App