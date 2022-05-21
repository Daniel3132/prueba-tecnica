import React, { useState } from 'react'
import ModalRight from './ModalRight'

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
        <li onClick={() => handleModal('INSIGNIAS')}>INSIGNIAS</li>
        <li onClick={() => handleModal('PREMIOS')}>PREMIOS</li>
        <li onClick={() => handleModal('MURO')}>MURO</li>
      </aside>
      {
        modal ? <ModalRight titulo={titulo} setmodal={setmodal} /> : ''
      }
    </>
  )
}

export default SidebarRight