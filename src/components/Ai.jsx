import React from 'react'
import Bot from './Bot'

import Text from './Text'
import MyCame from './MyCame'




function Ai() {
  return (
    <div className="row " >
        <div className="col d-flex border border-dark align-items-center justify-content-center p-4 m-2 bg-black rounded mt-5" style={{ height: '90vh' }}>
    <Bot/>
    </div>
    <div className="col d-flex border border-dark align-items-center justify-content-center p-4 m-2 bg-black rounded mt-5" style={{ height: '90vh' }}>
    <MyCame/> 
    </div>
  
    
  </div>
  )
}

export default Ai