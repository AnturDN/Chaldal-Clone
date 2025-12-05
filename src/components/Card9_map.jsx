import React from 'react'

import Card9 from './Card9'

const Card9_map = () => {


    const card9Details = [
        {
            text1 : 'Corporate',
            text2 : 'Do you own a business? Become a corporate customer',
            img9 : '/card9_img1.webp'
        },
        {
            text1 : 'Career',
            text2 : 'Work with a team that works to improve the lives of our consumers and the communities around us.',
            img9 : '/card9_img2.webp'
        }
    ]


  return (


    <div className='card9_all_card'>
        

        {card9Details.map((value, index)=>(
            <Card9 key={index}
            text1={value.text1}
            text2={value.text2}
            img9={value.img9}/>
        ))}


    </div>
  )
}

export default Card9_map