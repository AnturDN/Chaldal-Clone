import React from 'react'
import Card7 from './Card7'

import { FaHome } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";

const Card7_map = () => {


    const card7Details = [
        {
            icon7 : <FaHome />,
            text1 : '26 warehouses',
            text2 : 'all over bangladesh'
        },
        {
            icon7 : <FaBasketShopping />,
            text1 : '5 million orders',
            text2 : 'have been delivered'
        },
        {
            icon7 : <MdOutlineFamilyRestroom />,
            text1 : '100,000 families',
            text2 : '100,000 families'
        },
        {
            icon7 : <FaHandsHoldingCircle />,
            text1 : '340 million Taka',
            text2 : 'customer savings'
        },
    ]


  return (
    <div className='all_card'>
        
        {card7Details.map((value, index)=>(
            <Card7 key={index}
            icon7={value.icon7}
            text1={value.text1}
            text2={value.text2}/>
        ))}

    </div>
  )
}

export default Card7_map