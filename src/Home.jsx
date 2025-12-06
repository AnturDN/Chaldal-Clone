import React from 'react'
import Header from '../../components/Header'
import First_card from '../../components/First_card';
import { FaShoppingBasket } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdDirectionsBike } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import Card2_map from '../../components/Card2_map';
import Card3 from '../../components/Card3'
import Card4 from '../../components/Card4';
import Card5 from '../../components/Card5';
import Card6 from '../../components/Card6';
import Card7_map from '../../components/Card7_map';
import Card8 from '../../components/Card8';
import Card9_map from '../../components/Card9_map';
import Footer from '../../components/Footer';


const Home = () => {



    const cardDetails=[
        {
            icon: <FaShoppingBasket />,
            text: '+15000 products to shop from'
        },
        {
            icon: <GiWallet/>,
            text: 'Pay after receiving products'
        },
        {
            icon: <MdDirectionsBike />,
            text: 'Get your delivery within 1 hour'

        },
        {
            icon: <FaHandHoldingUsd />,
            text: 'Get offers that Save Money'
        }
    ]


  return (
    <div>
        <Header/>


        <div className="nav_bottom">
            <div className="bg_img">
                <img src="/background.png" alt="" />

                <div className="nav_bottom_bg">
                    <img src="/nav_bottom_bg.webp" alt="" />
                </div>
            </div>

            <div className="search">
                <h1>Grocery Delivered at your Doorstep</h1>
                <input type="text" placeholder='Search for products (e.g. egg, mill, bread)'></input>
                
            </div>
        </div>

        <div className="all_card">

        {cardDetails.map((value, index) => (
            <First_card
            key={index}
            
            icon={value.icon}
            text={value.text}
        />
        ))}

        </div>

        <div className="categories">
        <h4>Popular Categories</h4>
        </div>
        <div className="Card2_map_button">
            <div className="buttons">
            <span>View All</span>
            <button><FaArrowLeft /></button>
            <button><FaArrowRight /></button>
            </div>
        </div>
       <Card2_map/>

       <div className="popular">
        <h4>Popular on Chaldal</h4>
       </div>

       <Card3/>
       
       <div className="shop_get">
        <h4>Shop & Get More</h4>
       </div>

        <Card4/>
        <Card5/>
        <Card6/>
        <Card7_map/>
        <Card8/>

        <div className="be_part_of_chaldal">
            <h4>Be part of the Chaldal Family!</h4>
        </div>

        <Card9_map/>
        <Footer/>
        
       

        
    </div>
  )
}

export default Home;

