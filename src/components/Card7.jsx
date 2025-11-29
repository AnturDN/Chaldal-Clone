import React from 'react'

const Card7 = ({icon7, text1,text2}) => {
  return (
    <div>
        <div className="card7_container">
      
      <div className="card7">

        <i>{icon7}</i>

         <h4>{text1}</h4>   
        <span>{text2}</span>
      </div>

    </div>
    </div>
  )
}

export default Card7;