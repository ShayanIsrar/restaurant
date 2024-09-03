import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Banner from './components/banner/Banner'
import WhyChoose from './components/whyChoose/WhyChoose'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import React, { useEffect } from 'react'
import { useState } from 'react'
import PopUp from './components/popup/PopUp'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const handlePopUp = ()=>{
    setShowPopUp(true)
  }

  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    Aos.refresh();
  },[])

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar handlePopUp={handlePopUp} />
        <Hero/>
        <Banner/>
        <WhyChoose/>
        <About handlePopUp={handlePopUp} />
        <Banner/>
        <Footer/>
        <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
      </div>
    </>
  )
}

export default App
