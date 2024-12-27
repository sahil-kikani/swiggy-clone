import React from 'react'
import { MoreVertical } from 'lucide-react'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='flex gap-4 p-4 border-gray-100'>
      <div className='relative min-w-[150px]'>
        <img src={restaurant.imageUrl} alt={restaurant.name} className='w-[150px] h-[150px] object-cover rounded-2xl' />
        <div className='absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-medium'>{restaurant.offer}</div>
        <div className='absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded'>{restaurant.price}</div>
        {restaurant.isAd && <div className='absolute bottom-2 right-2 text-xs px-1 bg-gray-900 bg-opacity-70 text-white rounded'>AD</div>}
      </div>

      {/* Right side - Content */}
      <div className=''>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-semibold'>{restaurant.name}</h2>
          <MoreVertical className='w-5 h-5 text-gray-500' />
        </div>

        <div className='flex items-center gap-2 mt-1'>
          <div className='flex items-center gap-1'>
            <div className='bg-green-700 text-white text-sm px-1 rounded'>{restaurant.rating}</div>
            <span className='text-gray-600'>({restaurant.reviews})</span>
          </div>
          <span className='text-gray-600'>•</span>
          <span className='text-gray-600'>{restaurant.deliveryTime}</span>
        </div>

        <div className='text-gray-500 mt-1 text-sm truncate'>{restaurant.cuisines}</div>

        <div className='text-gray-500 mt-1 text-sm'>
          {restaurant.location} • {restaurant.distance}
        </div>

        <div className='flex items-center gap-2 mt-2'>
          {restaurant.freeDelivery && <div className='bg-red-50 text-red-500 px-3 py-1 rounded-lg text-sm'>FREE DELIVERY</div>}
          {restaurant.oneLite && (
            <div className='bg-orange-50 text-orange-500 px-2 py-1 rounded-lg text-sm flex items-center gap-1'>
              <span className='font-medium'>one</span>
              <span className='text-xs border border-orange-500 px-1 rounded'>LITE</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const RestaurantListing = () => {
  // Dummy data array
  const restaurants = [
    {
      id: 1,
      name: 'Wow! Momo',
      imageUrl:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/d15b13a0-0c82-4faa-93b7-a7906a4e3596_882314.JPG',
      offer: 'SAVE UPTO 42%',
      price: 'AT ₹89',
      rating: '4.4',
      reviews: '413',
      deliveryTime: '35-40 mins',
      cuisines: 'Tibetan, Healthy Food, Asian, Chinese',
      location: 'Alfa One Mall',
      distance: '1.7 km',
      freeDelivery: true,
      oneLite: true,
      isAd: true
    },
    {
      id: 2,
      name: 'Belgian Waffle',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9fc1e9ebc45d764068261af568e3be14',
      offer: 'SAVE 50%',
      price: 'AT ₹99',
      rating: '4.2',
      reviews: '512',
      deliveryTime: '25-30 mins',
      cuisines: 'Desserts, Ice Cream, Beverages',
      location: 'City Mall',
      distance: '2.1 km',
      freeDelivery: true,
      oneLite: true,
      isAd: false
    },
    {
      id: 3,
      name: 'Pizza Hut',
      imageUrl:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/c5253720-7d35-4bb0-ae6e-8ba87643343a_542526.JPG',
      offer: '40% OFF',
      price: 'AT ₹199',
      rating: '4.0',
      reviews: '1.2K',
      deliveryTime: '30-35 mins',
      cuisines: 'Pizza, Italian, Fast Food',
      location: 'Central Plaza',
      distance: '0.8 km',
      freeDelivery: true,
      oneLite: false,
      isAd: false
    },
    {
      id: 4,
      name: 'Pizza Hut',
      imageUrl:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/e7721b81-ca35-4b2c-a1dc-fa1b3ff1b19b_748964%20(1).jpg',
      offer: '40% OFF',
      price: 'AT ₹199',
      rating: '4.0',
      reviews: '1.2K',
      deliveryTime: '30-35 mins',
      cuisines: 'Pizza, Italian, Fast Food',
      location: 'Central Plaza',
      distance: '0.8 km',
      freeDelivery: true,
      oneLite: false,
      isAd: false
    },
    {
        id: 5,
        name: 'Pizza Hut',
        imageUrl:
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/10/d1fdf49f-3267-47ec-ba4e-3531a8869173_37488.jpg',
        offer: '40% OFF',
        price: 'AT ₹199',
        rating: '4.0',
        reviews: '1.2K',
        deliveryTime: '30-35 mins',
        cuisines: 'Pizza, Italian, Fast Food',
        location: 'Central Plaza',
        distance: '0.8 km',
        freeDelivery: true,
        oneLite: false,
        isAd: false
      }
  ]

  return (
    <div className='flex md:flex-row flex-col mb-8'>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default RestaurantListing
