import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[var(--trendcart-accent)]/10 to-white rounded-t-3xl shadow-inner mt-32 pt-12 pb-4 px-4 sm:px-16">
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 mb-10 text-sm'>
        <div>
          <span className="prata-regular text-3xl text-[var(--trendcart-accent)] font-bold tracking-wide mb-3 block">TrendCart</span>
          <p className='w-full md:w-2/3 text-gray-600'>
            Discover the latest trends and shop with confidence at TrendCart. Your one-stop shop for style, value, and convenience.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 text-[var(--trendcart-accent-dark)]'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 text-[var(--trendcart-accent-dark)]'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@trendcart.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-200" />
        <p className='py-5 text-sm text-center text-gray-500'>© 2024 TrendCart. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
