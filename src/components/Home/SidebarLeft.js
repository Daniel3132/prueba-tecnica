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
          <img src={campana} alt="" srcset="" />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="" srcset="" />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="" srcset="" />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" srcset="" />
        </a>
      </div>
      <h3 className='pais'>Colombia</h3>
    </aside>
  )
}

export default SidebarLeft