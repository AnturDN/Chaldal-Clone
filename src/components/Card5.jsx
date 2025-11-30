import React from "react";


const Card5 = () => {
  return (
    <div className="card5-wrapper">
      <div className="card5-container justify-content-center">
        <div className="card5">
          <div className="card5-content">
            <div className="card5-text">
              <h2>Shop your daily necessities</h2>
              <p>
                Shop from our popular category. Explore special offers and receive
                grocery on your doorsteps within 1 hour.
              </p>
              <button>Start Shopping</button>
            </div>
            <div className="card5-image">
              <img
                src="/Card5_img1.png"
                alt="Groceries"
              />
            </div>
          </div>
        </div>

        

        <div className="card5">
          <div className="card5-content">
            <div className="card5-video">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/-Xg2kGPwePM" title="How to Place Order on Chaldal.com? | চালডাল ডট কম এ কিভাবে অর্ডার করবেন?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;

