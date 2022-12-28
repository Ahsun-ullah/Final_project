import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>
      <div className="flex flex-col py-1 footer-center bg-blue-400">
        <div className=' flex flex-row gap-8'>
          <Link className="text-black text-lg link link-hover" to="/About">
            About Us
          </Link>
          <Link className="text-black text-lg link link-hover " to="/Contact">
            Contact Us
          </Link>
        </div>
        <div>
          <p className="text-black text-lg">
            Copyright © {year} - All right reserved by Our Social App ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
