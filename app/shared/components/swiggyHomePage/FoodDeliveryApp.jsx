'use clien'
import React from 'react'
import { Search, User, Mic } from 'lucide-react'
import banner from '../../../assets/images/b3.png'
import Image from 'next/image'

console.log('banner', banner)

const FoodDeliveryApp = () => {
  const categories = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada%20Pav.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png'
  ]

  const CategoryRow = ({ items }) => (
    <div className='flex w-full md:justify-center gap-8 pb-4'>
      {items.map((image, index) => (
        <div key={index} className='flex flex-col items-center min-w-[100px]'>
          <div className='w-28 h-28 overflow-hidden rounded-full bg-white pb-2 px-2 mb-2'>
            <Image src={image} alt='' height={200} width={200} className='w-full h-full object-cover ' />
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <div
      className='min-h-[560px] bg-gradient-to-r from-red-900 to-red-600 p-4 relative'
      style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#8B0000' }}
    >
      {/* Header */}
      <header className='flex justify-between items-center mb-4'>
        <div className='flex items-center text-white'>
          <span className='text-2xl mr-2'>🏠</span>
          <div>
            <h1 className='text-xl'>Home</h1>
            <p className='text-sm text-gray-300'>Samras Boys Hostel</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <button className='bg-orange-500 text-white px-4 py-2 rounded-lg'>BUY one</button>
          <button className='bg-gray-800 p-2 rounded-full'>
            <User className='text-white' />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className='bg-white rounded-full p-4 flex items-center mb-6'>
        <Search className='text-gray-400 mr-2' />
        <input type='text' placeholder="Search for 'Sweets'" className='flex-1 outline-none' />
        <Mic className='text-orange-500' />
      </div>

      <div className='h-[50px] w-100'></div>
      <div className='flex items-center justify-center gap-4 w-100 mb-4'>
        <div className='h-px bg-red-500 flex-grow max-w-[400px]'></div>
        <p className='text-white font-medium whitespace-nowrap'>Get Flat ₹200 OFF</p>
        <div className='h-px bg-red-500 flex-grow max-w-[400px]'></div>
      </div>
      <div className='space-y-8 flex overflow-x-auto flex-col'>
        <CategoryRow items={categories} />
      </div>

      {/* Footer */}
      {/* <footer className='mt-8 flex items-center justify-center gap-4 absolute bottom-0 left-[50%] translate-x-[-50%] py-2 opacity-90 w-full'>
        <span className='text-white'>POWERED BY</span>
        <img src='https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp' alt="Domino's" className='h-[50px] rounded-full bg-white' />
        <img src='https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726603431.png?output-format=webp' alt='FSSAI' className='h-[50px] rounded-full bg-white' />
      </footer> */}
    </div>
  )
}

export default FoodDeliveryApp
