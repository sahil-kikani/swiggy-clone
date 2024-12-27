import React from 'react';
import { Heart } from 'lucide-react';

const RestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      name: 'The Black Chimney',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597',
      rating: '4.1',
      time: '25-30 mins',
      cuisine: 'Biryani',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 2,
      name: 'Burger Farm',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7',
      rating: '4.5',
      time: '20-25 mins',
      cuisine: 'Burgers',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 3,
      name: 'New Restaurant',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_81814.JPG',
      rating: '4.0',
      time: '30-35 mins',
      cuisine: 'Waffles',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 4,
      name: 'New Restaurant',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f740bfaf-1c4f-42e7-ab24-029d88ea6bd3_40831.JPG',
      rating: '4.0',
      time: '30-35 mins',
      cuisine: 'Waffles',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 5,
      name: 'New Restaurant',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/f922d86d-15ef-41d5-88e7-3300761a2e28_675031.jpg',
      rating: '4.0',
      time: '30-35 mins',
      cuisine: 'Waffles',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 6,
      name: 'New Restaurant',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vnz9vx0jk8rxtiei132q',
      rating: '4.0',
      time: '30-35 mins',
      cuisine: 'Waffles',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
      id: 7,
      name: 'New Restaurant',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/9d13ab8d-8b26-4763-928e-a5b9d343fe78_621792.JPG',
      rating: '4.0',
      time: '30-35 mins',
      cuisine: 'Waffles',
      offer: '₹125 OFF',
      minOrder: 'ABOVE ₹199'
    },
    {
        id: 8,
        name: 'New Restaurant',
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2832f87a0deb01b980f63f8a419780c1',
        rating: '4.0',
        time: '30-35 mins',
        cuisine: 'Waffles',
        offer: '₹125 OFF',
        minOrder: 'ABOVE ₹199'
      },
      {
        id: 9,
        name: 'New Restaurant',
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/1b4407df-e7e7-491b-903f-3d21403ebf1c_638338.jpg',
        rating: '4.0',
        time: '30-35 mins',
        cuisine: 'Waffles',
        offer: '₹125 OFF',
        minOrder: 'ABOVE ₹199'
      },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl rotate-180">👆</span>
          <div>
            <h2 className="font-bold text-xl">ENJOY YOUR WELCOME OFFER!</h2>
            <p className="text-gray-600">Get flat ₹125 off on your next order</p>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
        {restaurants.map((restaurant) => (
          <div 
            key={restaurant.id} 
            className="max-w-[250px] rounded-lg overflow-hidden flex-shrink-0"
          >
            <div className="relative">
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80">
                <Heart className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60">
                <div className="flex justify-between items-center text-white">
                  <div className="font-bold">{restaurant.offer}</div>
                  <div className="text-sm">{restaurant.minOrder}</div>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-white">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-1 rounded">
                  ⭐ {restaurant.rating}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{restaurant.time}</span>
              </div>
              <p className="text-gray-500 text-sm">{restaurant.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;