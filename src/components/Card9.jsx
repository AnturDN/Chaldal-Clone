import React from 'react'

const Card9 = ({text1, text2, img9}) => {
  return (
    <div className='card9_container'>

        <div className="card9">
            <div className="card9_item">
                <div className="texts">
                <h2>{text1}</h2>
                <span>{text2}</span>
                </div>

                <div className="card9_btn">
                <button>Find out more</button>
            </div>
            </div>
            
            <div className="card9_img">
                <img src={img9} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Card9
