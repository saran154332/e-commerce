import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3 cursor-pointer group border border-gray-100' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center h-40'>
        <img className='h-full max-h-36 w-auto mx-auto group-hover:scale-110 transition-transform duration-300' src={image[0]} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-base font-semibold text-gray-800 group-hover:text-[var(--trendcart-accent)] transition'>{name}</p>
      <p className='text-base font-bold text-[var(--trendcart-accent-dark)]'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
