import About from '@/Components/About'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import TopButton from '@/Components/TopButton'
import React from 'react'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default Home