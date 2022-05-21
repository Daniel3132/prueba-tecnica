import React from 'react'
import campana from '../../assets/SVG/campana.svg'
import facebook from '../../assets/SVG/facebook.svg'
import twitter from '../../assets/SVG/twitter.svg'
import instagram from '../../assets/SVG/instagram.svg'

const SidebarLeft = () => {
  return (
    <aside className='sidebarLeft'>
      <div className='redesCont'>
        <a href="http:" target="_blank" rel="noopener noreferrer">
          <img src={campana} alt="" />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="" />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="" />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" />
        </a>
      </div>
      <h5 className='pais'>Colombia</h5>
    </aside>
  )
}

export default SidebarLeft