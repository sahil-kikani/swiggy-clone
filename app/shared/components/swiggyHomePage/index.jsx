import React from 'react'
import { Search, User, Mic } from 'lucide-react';
import FoodDeliveryApp from './FoodDeliveryApp';
import BannerSlider from './BannerSlider';
import RestaurantList from './specialOffer';
import FoodCategories from './FoodCategory';
import TopRatedRestaurants from './topRated';
import RestaurantListing from './reastaurentLIst';

function SwiggyHomePage() {
  return (
   <>
   <FoodDeliveryApp/>
   <BannerSlider/>
   <RestaurantList/>
   <FoodCategories/>
   <TopRatedRestaurants/>
   <RestaurantListing/>
   </>
  )
}

export default SwiggyHomePage