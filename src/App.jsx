import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <main className="main">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Portfolio />
        <Resume />
        <Blog />
        <Contact />
        <Footer />
    </main>
  )
}

export default App
