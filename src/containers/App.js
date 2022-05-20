import React, { useState } from 'react'
import Home from './Home'
import Tutorial from './Tutorial'

const App = () => {

  const [view, setview] = useState(true)

  return (
    <>
      {
        view ? <Tutorial setview={setview} /> : <Home/>
      }
    </>
  )
}

export default App