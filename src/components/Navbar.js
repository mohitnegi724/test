import React from 'react'
import LogoGif from '../assets/logo.gif'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <div className="HomeNavBar">
      <div className="navbarInnerContent">
        <div className="logoSection">
          <Link to="/">
            <img id="logoGif" src={LogoGif} alt="Hire Logo" />
          </Link>
        </div>
      </div>
    </div>
  )
}
