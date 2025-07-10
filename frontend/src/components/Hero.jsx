import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-br from-[var(--trendcart-accent)]/10 to-white rounded-3xl shadow-lg p-6 sm:p-12 my-8">
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex flex-col items-start justify-center gap-6 py-10 sm:py-0'>
        <div className='flex items-center gap-3'>
          <span className='w-10 h-1 bg-[var(--trendcart-accent)] rounded'></span>
          <span className='uppercase text-[var(--trendcart-accent-dark)] font-semibold tracking-widest text-xs sm:text-sm'>Best Sellers</span>
        </div>
        <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800'>Discover the Latest Arrivals</h1>
        <p className='text-gray-600 text-base sm:text-lg max-w-md'>Shop the trendiest products, handpicked for you. Enjoy exclusive deals and fast delivery with TrendCart.</p>
        <button className='trendcart-btn mt-2 px-8 py-3 text-lg shadow-lg'>Shop Now</button>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2 rounded-2xl shadow-xl mt-8 sm:mt-0' src={assets.hero_img} alt="Latest Arrivals" />
    </section>
  )
}

export default Hero
