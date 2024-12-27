import React from 'react'
import cha from '../../../assets/images/cha.png'
import Image from 'next/image'

const FoodCategories = () => {
  const categories = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada%20Pav.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png'
  ]

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const topRow = categories
  const bottomRow = shuffleArray(categories)

  const CategoryRow = ({ items }) => (
    <div className='flex gap-8 pb-4'>
      {items.map((image, index) => (
        <div key={index} className='flex flex-col items-center min-w-[80px]'>
          <div className='w-28 h-28 overflow-hidden mb-2'>
            <Image src={image} alt='' height={200} width={200} className='w-full h-full object-cover' />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className='p-4 space-y-6'>
      <h2 className='text-xl font-semibold'>GAURANG, WHAT'S ON YOUR MIND?</h2>

      <div className='space-y-2 flex overflow-x-auto flex-col'>
        <CategoryRow items={topRow} />
        <CategoryRow items={bottomRow} />
      </div>
    </div>
  )
}

export default FoodCategories
