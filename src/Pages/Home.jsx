import React from 'react'
import Slider from '../components/Slider'
import AboutSection from '../components/About'
import OtcServiceSection from '../components/OtcServiceSection' 
import BlogSection from '../components/Blog'

const Home = () => {
  return (
  <>
  <Slider/>
  <AboutSection/>
  <OtcServiceSection/>
  <BlogSection/>
  </>
  )
}

export default Home
