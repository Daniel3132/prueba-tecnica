import React from 'react'

const ModalRight = ({titulo, setmodal}) => {
    return (
        <section className='modalsideRight'>
            <h1>{titulo}</h1>
            <button onClick={()=>setmodal(false)}>Cerrar</button>
        </section>
    )
}

export default ModalRight