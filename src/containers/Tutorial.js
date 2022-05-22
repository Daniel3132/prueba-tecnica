import React, { useState } from 'react'
import logo from '../assets/IMG/Logo Health Academy.png'
import play from '../assets/SVG/play.svg'

const Tutorial = ({ setview }) => {

  const [video, setvideo] = useState(1)
  const [modal, setmodal] = useState(false)

  const nextVideo = () => {
    if (video < 5) {
      setvideo(video + 1)

    } else { goHome() }
    
  }

  const goHome = () => {
    setmodal(true)

  }

  return (
    <div id='tutorial'>

      <section className='entrenamiento'>
        <h4>ENTRENAMIENTO</h4>
      </section>

      <div className='main'>

        <section className='progreso'>
          <div className='barraProgreso' style={{ height: `${video * 5}rem` }}></div>
          <div onClick={() => setvideo(1)} className='bolitaVideo' style={video === 1 ? { backgroundColor: `#99C69F`, padding: '5px' } : { backgroundColor: '' }} >1</div>
          <div onClick={() => setvideo(2)} className='bolitaVideo ' style={video === 2 ? { backgroundColor: `#99C69F`, padding: '5px' } : { backgroundColor: '' }}>2</div>
          <div onClick={() => setvideo(3)} className='bolitaVideo ' style={video === 3 ? { backgroundColor: `#99C69F`, padding: '5px' } : { backgroundColor: '' }}>3</div>
          <div onClick={() => setvideo(4)} className='bolitaVideo' style={video === 4 ? { backgroundColor: `#99C69F`, padding: '5px' } : { backgroundColor: '' }}>4</div>
          <div onClick={() => setvideo(5)} className='bolitaVideo' style={video === 5 ? { backgroundColor: `#99C69F`, padding: '5px' } : { backgroundColor: '' }}>5</div>
        </section>

        <section className='bodyTutorial'>
          <img className='logo' src={logo} alt="" />
          <div className='vidCont'>
            <h4>Video {video}</h4>
            <button className='btnPlay'>
              <img className='play' src={play} alt="" />
            </button>
          </div>
          <div className='btnCont'>
            <span className='link' onClick={goHome}>OMITIR</span>
            <button onClick={nextVideo} >SIGUIENTE</button>
          </div>
        </section>
      </div>
      {
        modal ?
          <div className='modalContinuar'>
            ¿Seguro que desea avanzar ?
            <div>
              <button onClick={() => setmodal(false)} >Seguir entrenando </button>
              <button onClick={() => setview(false)} >Avanzar</button>
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default Tutorial