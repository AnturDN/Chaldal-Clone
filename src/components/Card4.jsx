import React from "react";


const Card4 = () => {
  return (
    <div className="container py-4">
      <div className="row g-4">
        
        <div className="col-md-4">
          <div className="card rounded-4 shadow-sm h-100 w-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Shop & Earn Points</h5>
              <p className="card-text">
                The more you shop the more you earn – cash back, free shipping, exclusive offers and more.
                Discover the perks of <strong>Egg Club</strong> membership.
              </p>
            </div>
            <img
              src="card4_img1.webp"
              className="card-img-bottom rounded-bottom-4"
              alt="Shop and Earn"
            />
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card rounded-4 shadow-sm h-100 w-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Deal of the Day</h5>
              <p className="card-text">
                Stock up on your favorite groceries for less with our unbeatable deals!
                Don't miss out – limited stock.
              </p>
            </div>
            <img
              src="/card4_img2.webp"
              className="card-img-bottom rounded-bottom-4"
              alt="Deals"
            />
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card rounded-4 shadow- h-100 w-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Premium Care</h5>
              <p className="card-text">
                Too busy to place an order or handling order issues? No need to worry,
                as we give you the option to take premium assistance.
              </p>
            </div>
            <img
              src="/card4_img3.webp"
              className="card-img-bottom rounded-bottom-4"
              alt="Premium Care"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
