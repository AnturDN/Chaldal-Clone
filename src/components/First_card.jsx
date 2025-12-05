import React from 'react'

const First_card = ({icon, text}) => {
  return (
    <div>

      <div className="container">
      
        <div className="card">

          <i>{icon}</i>
          
          <span>{text}</span>
        </div>

      </div>
        
    </div>

    
  )
}

export default First_card