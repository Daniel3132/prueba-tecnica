import React, { useContext } from 'react'
import lupa from '../../assets/SVG/lupa.svg'
import doc from '../../assets/IMG/Mask Group.png'
import { contentContext } from '../../hooks/useContext'

const NavBar = () => {
  const { setContext } = useContext(contentContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setContext('busqueda')
  }
  return (
    <nav className='navbar'>
      <form className='inputCont' onSubmit={handleSubmit}>
        <input type="text" name="busqueda" placeholder='BUSCAR' />
        <button type="submit">
          <img src={lupa} alt=""/>
        </button>
      </form>
      <div className='perfilCont'>
          <img className='avatar' src={doc} alt="" />
          <span>2000 puntos</span>
        </div>
    </nav>
  )
}

export default NavBar