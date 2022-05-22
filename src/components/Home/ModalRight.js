import React from 'react'

const ModalRight = ({ titulo, setmodal }) => {
    return (
        <section className='modalsideRight'>
            <h3>{titulo}</h3>
            <button onClick={() => setmodal(false)}>Cerrar</button>
        </section>
    )
}

export default ModalRight