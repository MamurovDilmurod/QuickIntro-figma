import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import LightSection from './components/LightSection'
import FastSection from './components/FastSection'
import PowerfulSection from './components/PowerfulSection'
import Hero from './components/Hero'
import Footer from './components/Footer'
import PriceSection from './components/PriceSection'

const App = () => {
  return (
    <>
      <div className='max-w-[1240px] mx-auto py-2 px-2'>
        {/* // <div> */}
        <Navbar />
        <Hero />
        <Section1 />
        <LightSection />
        <FastSection />
        <PowerfulSection />
      </div>
      <PriceSection />
      <Footer />

    </>
  )
}

export default App
