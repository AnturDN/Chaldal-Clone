import React from 'react'
import { RiAppleLine } from "react-icons/ri";

const Card6 = () => {
  return (
    <div className='card6_container'>
        <div className="bg6_img">
          <img src="/Card6_bg.png" alt="" />
        </div>

        <div className="bg6_img2">
          <img src="/Card6_img1.webp" alt="" />
        </div>


        <div className="bg_item">
          <h3>Download The Chaldal App Now!</h3>
          <span>Get 5% off on your first order through the Chaldal app and make your shopping experience even smoother!</span>

          
        </div>
        <div className="bg6_btns">
            <button><i><RiAppleLine /></i>Download on the App Store</button>
            <button><i class="fa-brands fa-google-play"></i>GET IT ON Google Play</button>
          </div>


    </div>
  )
}

export default Card6