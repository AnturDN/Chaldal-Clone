import React from 'react'
import Card2 from './Card2'

const Card2_map = () => {


    const card2Details=[

        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/fruitsAndVegs.png?q=low&webp=1',
            title2: 'Fruits & Vegetables'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&webp=1',
            title2: 'Meat & Fish'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&webp=1',
            title2: 'Cooking'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&webp=1',
            title2: 'Beverages'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/home-cleaning.png?q=low&webp=1',
            title2: 'Home & Cleaning'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&webp=1',
            title2: 'Pest Control'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/stationary.png?q=low&webp=1',
            title2: 'Stationery & Office'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beauty.png?q=low&webp=1',
            title2: 'Beauty Products'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/healthCare.png?q=low&webp=1',
            title2: 'Health Products'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/petFood.png?q=low&webp=1',
            title2: 'Pet Care'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/kitchen-appliances.png?q=low&webp=1',
            title2: 'Kitchen Appliances'
        },
        {
            img2: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-790/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/baby-care.png?q=low&webp=1',
            title2: 'Baby Care'
        }

    ]


  return (
    <div className="slider-wrapper">
    <div className="scroll-container">
      {card2Details.map((value, index) => (
        <Card2
          key={index}
          img2={value.img2}
          title2={value.title2}
        />
      ))}
    </div>
  </div>
  )
}

export default Card2_map