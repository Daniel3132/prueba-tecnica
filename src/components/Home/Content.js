import React, { useContext, useState } from 'react'
import { usuarios } from '../../data/listaUsers'
import { contentContext } from '../../hooks/useContext'


const Content = () => {

  const { context, setContext } = useContext(contentContext)
  const [modal, setmodal] = useState(false)

  return (
    <>
      {
        context === 'doctor' ?
          <section className='content'>
            <header>
              <h1 onClick={() => setmodal(true)} >German Lopez</h1>
              <h6>Enfermero</h6>
            </header>

            <div>
              <h6>ENTRENAMIENTOS</h6>
            </div>
            <article className='carrousel'>
              <div>
                <h2>ADEMPAS</h2>
                <small>Cardiopulmonar</small>
              </div>
              <div className="ovalo"></div>
              <button>SIGUIENTE</button>
            </article>
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