import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
      <div className="container-fluid">
        <Link to="/GB" className="navbar-brand">
          Top News
        </Link>
        <Link to="/categories" className="navbar-brand">
          Categories
        </Link>
        <Link to="/GB" className="navbar-brand">
          News from GB
        </Link>{" "}
        <Link to="/US" className="navbar-brand">
          News from US
        </Link>
      </div>
    </nav>
  )
}

export default Header
