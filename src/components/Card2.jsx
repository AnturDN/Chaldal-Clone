import React from 'react'

const Card2 = ({img2,title2}) => {
  return (
    <div>
        <div className='container2'>
        <div className="card2">
            <img src={img2}/>
            <span>{title2}</span>
        </div>
    </div>
    </div>
    
  )
}

export default Card2