import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between px-5 py-4 sm:px-10 max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--trendcart-accent)]">TrendCart</h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          {['/', '/collection', '/about', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-[var(--trendcart-accent)] px-2 py-1 transition-all duration-200 ${
                  isActive ? 'text-[var(--trendcart-accent)] font-semibold border-b-2 border-[var(--trendcart-accent)]' : ''
                }`
              }
            >
              {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}
            </NavLink>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:scale-110 transition"
            onClick={() => {
              setShowSearch(true)
              navigate('/collection')
            }}
          />

          {/* Profile */}
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer hover:scale-110 transition"
              onClick={() => !token && navigate('/login')}
            />
            {token && (
              <div className="absolute right-0 mt-3 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg border w-40 py-2 px-4 text-sm text-gray-700 z-50">
                <p className="hover:text-[var(--trendcart-accent)] cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/orders')} className="hover:text-[var(--trendcart-accent)] cursor-pointer">Orders</p>
                <p onClick={logout} className="hover:text-[var(--trendcart-accent)] cursor-pointer">Logout</p>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="Cart" className="w-5" />
            <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-[var(--trendcart-accent)] text-white w-4 h-4 flex items-center justify-center rounded-full shadow font-bold">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-xl transition-all duration-300 z-50 ${visible ? 'w-3/4 max-w-xs' : 'w-0'} overflow-hidden`}>
        <div className="flex flex-col text-gray-700 h-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-4 border-b cursor-pointer">
            <img src={assets.dropdown_icon} className="w-4 rotate-180" alt="Back" />
            <p className="font-medium">Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-3 pl-6 border-b transition ${
                  isActive ? 'bg-[var(--trendcart-accent)]/10 text-[var(--trendcart-accent)] font-semibold' : 'hover:bg-gray-100'
                }`
              }
            >
              {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar


