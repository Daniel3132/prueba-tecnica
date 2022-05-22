import React, { useState } from 'react'
import Home from './Home'
import Tutorial from './Tutorial'

const App = () => {
  //estado para cambiar vista de tutorial a home, por defecto siempre el tutorial
  const [view, setview] = useState(true)

  return (
    <>
      {
        view ? <Tutorial setview={setview} /> : <Home />
      }
    </>
  )
}

export default App