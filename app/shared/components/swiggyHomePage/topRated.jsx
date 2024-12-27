import React from 'react';
import { Heart } from 'lucide-react';
import cha from '../../../assets/images/cha.png'
import cha1 from '../../../assets/images/cha1.png'
import cha2 from '../../../assets/images/cha2.png'
import Image from 'next/image';

const TopRatedRestaurants = () => {
  const restaurants = [
    {
      name: "Domino's Pizza",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ye0cuamd3narriqobmrq",
      rating: "4.4",
      time: "20-25 mins",
      categories: ["Pizzas", "Italian", "Pastas"],
      offer: "Free Delivery",
      price: "AT ₹89",
      items: "ITEMS"
    },
    {
      name: "McDonald's",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9fc1e9ebc45d764068261af568e3be14",
      rating: "4.5",
      time: "10-15 mins",
      categories: ["Burgers", "Beverages", "Cafe"],
      offer: "Free Delivery",
      price: "AT ₹99",
      items: "ITEMS"
    },
    {
      name: "Keventers",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/d15b13a0-0c82-4faa-93b7-a7906a4e3596_882314.JPG",
      rating: "4.4",
      time: "15-20 mins",
      categories: ["Beverages", "Ice Cream"],
      offer: "Extra 10% Free Delivery",
      price: "AT ₹69",
      items: "ITEMS"
    },
    {
      name: "Keventers",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/c5253720-7d35-4bb0-ae6e-8ba87643343a_542526.JPG",
      rating: "4.4",
      time: "15-20 mins",
      categories: ["Beverages", "Ice Cream"],
      offer: "Extra 10% Free Delivery",
      price: "AT ₹69",
      items: "ITEMS"
    },
    {
      name: "Keventers",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pkbkgopzdlellfbfch0i",
      rating: "4.4",
      time: "15-20 mins",
      categories: ["Beverages", "Ice Cream"],
      offer: "Extra 10% Free Delivery",
      price: "AT ₹69",
      items: "ITEMS"
    },
    {
      name: "Keventers",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898",
      rating: "4.4",
      time: "15-20 mins",
      categories: ["Beverages", "Ice Cream"],
      offer: "Extra 10% Free Delivery",
      price: "AT ₹69",
      items: "ITEMS"
    },
    {
        name: "Keventers",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ugppvo0zjw45s8qrcaef",
        rating: "4.4",
        time: "15-20 mins",
        categories: ["Beverages", "Ice Cream"],
        offer: "Extra 10% Free Delivery",
        price: "AT ₹69",
        items: "ITEMS"
      },
      {
        name: "Keventers",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/10/d1fdf49f-3267-47ec-ba4e-3531a8869173_37488.jpg",
        rating: "4.4",
        time: "15-20 mins",
        categories: ["Beverages", "Ice Cream"],
        offer: "Extra 10% Free Delivery",
        price: "AT ₹69",
        items: "ITEMS"
      },
      {
        name: "Keventers",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/e7721b81-ca35-4b2c-a1dc-fa1b3ff1b19b_748964%20(1).jpg",
        rating: "4.4",
        time: "15-20 mins",
        categories: ["Beverages", "Ice Cream"],
        offer: "Extra 10% Free Delivery",
        price: "AT ₹69",
        items: "ITEMS"
      },    
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">TOP RATED NEAR YOU</h2>
      
      <div className="flex overflow-x-auto gap-4 pb-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="min-w-[280px] rounded-lg overflow-hidden flex-shrink-0">
            <div className="relative">
              <Image 
                src={restaurant.image}
                alt={restaurant.name}
                height={200}
                width={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-0  bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                {restaurant.offer}
              </div>
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80">
                <Heart className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60">
                <div className="text-white">
                  <div className="text-lg font-bold">{restaurant.items}</div>
                  <div className="text-2xl font-bold">{restaurant.price}</div>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-white">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-1 rounded text-sm">
                  ⭐ {restaurant.rating}
                </span>
                <span>•</span>
                <span className="text-gray-600 text-sm">{restaurant.time}</span>
              </div>
              <p className="text-gray-500 text-sm truncate">
                {restaurant.categories.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedRestaurants;