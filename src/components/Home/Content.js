import React, { useContext, useState } from 'react'
import { usuarios } from '../../data/listaUsers'
import { contentContext } from '../../hooks/useContext'
import Carousel from './Carousel'

const Content = () => {

  const { context, setContext } = useContext(contentContext)
  //abrir o cerrar modal
  const [modal, setmodal] = useState(false)

  //condicional (operador ternario) para cambiar la vista segun el contexto global 
  return (
    <>
      {
        context === 'doctor' ?
          <section className='content'>
            <header>
              <h1 onClick={() => setmodal(true)} style={{ cursor: 'pointer' }} >German Lopez</h1>
              <h6>Enfermero</h6>
            </header>
            <div>
              <h6>ENTRENAMIENTOS</h6>
            </div>

            <Carousel />

            {
              modal ?
                <section className='modalsideRight'>
                  <h4>Lista Usuarios</h4>
                  <ul>{
                    usuarios.map(u =>
                      <li onClick={() => setContext(u)} key={u}>{u}</li>
                    )}
                  </ul>
                  <button onClick={() => setmodal(false)}>Cerrar</button>
                </section>
                : ''
            }
          </section>
          : context === 'busqueda' ?
            <section className='content'>
              <button onClick={() => setContext('doctor')}>Volver</button>
              <h1>No hay datos disponibles</h1>
            </section>
            :
            <section className='content'>
              <button onClick={() => setContext('doctor')}>Volver</button>
              <h1>{context}</h1>
            </section>
      }
    </>
  )
}

export default Content