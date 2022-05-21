import React from 'react'
import lupa from '../../assets/SVG/lupa.svg'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <form className='inputCont'>
        <input type="text" name="busqueda" placeholder='BUSCAR' />
        <button type="submit">
          <img src={lupa} alt="" srcset="" />
        </button>
      </form>
    </nav>
  )
}

export default NavBar