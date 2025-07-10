import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-3 items-center mb-3'>
      <span className='prata-regular text-2xl sm:text-3xl font-bold text-[var(--trendcart-accent)]'>{text1}</span>
      <span className='prata-regular text-2xl sm:text-3xl font-bold text-gray-800'>{text2}</span>
      <span className='w-10 sm:w-16 h-1 bg-[var(--trendcart-accent-dark)] rounded'></span>
    </div>
  )
}

export default Title
