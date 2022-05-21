import React, { useState } from 'react'
import ModalRight from './ModalRight'
import insignia from '../../assets/SVG/insignia.svg'
import premios from '../../assets/SVG/premios.svg'
import muro from '../../assets/SVG/muro.svg'

const SidebarRight = () => {
  const [modal, setmodal] = useState(false)
  const [titulo, setTitulo] = useState('')

  const handleModal = (nombre) => {
    setTitulo(nombre)
    setmodal(true)
  }

  return (
    <>
      <aside className='sidebarRight'>
        <img src={insignia} alt='' onClick={() => handleModal('INSIGNIAS')}/>
        <img src={premios} alt='' onClick={() => handleModal('PREMIOS')}/>
        <img src={muro} alt='' onClick={() => handleModal('MURO')}/>
      </aside>
      {
        modal ? <ModalRight titulo={titulo} setmodal={setmodal} /> : ''
      }
    </>
  )
}

export default SidebarRight