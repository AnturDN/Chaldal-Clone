import React from 'react'


const Header = () => {
  return (
    <div className='header'>
        
        <div className="bar_logo">
        <i id='bar' class="fa-solid fa-bars-staggered"></i>
        <a href="#"><img src="/chaldal logo.webp" alt="" /></a>
    
        </div>

        
        <nav className='navbar'>

            <button className="location">Location<i className="fa-solid fa-location-dot"></i></button>
            
            <div className="language">
                <button className='EN'>EN</button>
                <button>বাং</button>
            </div>

            <button className='login'>Log In</button>
        </nav>
        
        
    </div>
  )
}

export default Header