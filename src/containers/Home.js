import React from 'react'
import Content from '../components/Home/Content'
import Footer from '../components/Home/Footer'
import NavBar from '../components/Home/NavBar'
import SidebarLeft from '../components/Home/SidebarLeft'
import SidebarRight from '../components/Home/SidebarRight'

const Home = () => {
  return (
    <div id='home'>
      <NavBar/>
      <SidebarLeft/>
      <SidebarRight/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home