'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      title: 'Flat ₹200 OFF',
      subtitle: 'On joyful delights to celebrate Christmas!',
      images: 'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png'
    },
    {
      title: 'Christmas Special',
      subtitle: 'Explore our festive menu with amazing offers!',
      images: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png'
    },
    {
      title: 'Holiday Treats',
      subtitle: 'Delicious desserts and party platters',
      images: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png'
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className='w-full p-4 mx-auto my-4 relative'>
      {/* Banner Content */}
      <div className='relative overflow-hidden rounded-2xl'>
        {banners?.map((d, i) => {
          if (currentSlide === i) {
            return (
              <div
               key={i}
                className='bg-red-800 p-8 h-[100px] md:h-[350px]'
                style={{ backgroundImage: `url(${d.images})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            )
          } else return null
        })}
        {/* <div className="bg-red-800 p-8 h-[350px]" style={{backgroundImage: `url(${banners[1].images})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        </div> */}

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors'
        >
          <ChevronRight className='w-6 h-6' />
        </button> */}
      </div>

      {/* Pagination Dots */}
      <div className='flex justify-center gap-2 mt-4'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-red-800 w-4' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerSlider
