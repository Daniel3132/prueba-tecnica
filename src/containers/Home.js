import React, { useState } from 'react'
import Content from '../components/Home/Content'
import Footer from '../components/Home/Footer'
import NavBar from '../components/Home/NavBar'
import SidebarLeft from '../components/Home/SidebarLeft'
import SidebarRight from '../components/Home/SidebarRight'
import { contentContext } from '../hooks/useContext'

const Home = () => {
  const [context, setContext] = useState('doctor')
  return (
    <div id='home'>
      <contentContext.Provider value={{context, setContext}}>
        <NavBar />
        <div className='mainContHome'>
          <SidebarLeft />
          <SidebarRight />
          <Content />
        </div>
        <Footer />
      </contentContext.Provider>
    </div>
  )
}

export default Home