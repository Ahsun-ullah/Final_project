import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='footer footer-center text-bottom'>
        <footer>
        <div className="grid grid-flow-col gap-4">
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Admin</Link>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Our Social App ltd.</p>
        </div>
      </footer>
      </div>
  )
}

export default Footer
