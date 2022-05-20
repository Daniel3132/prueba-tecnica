import React from 'react'

const Tutorial = ({setview}) => {
  return (
    <div onClick={()=>setview(false)}>Tutorial</div>
  )
}

export default Tutorial