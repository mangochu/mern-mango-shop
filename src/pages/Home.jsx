import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Slider from '../components/Slider'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
