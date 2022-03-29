import React from 'react'
import './header.css'

const navbarItems = [
  {
    text: "Home",
    onClick: () => { console.log("Clicked Pn Home"); }
  },
  {
    text: "About",
    onClick: () => { }
  },
  {
    text: "Services",
    onClick: () => { }
  },
]

export default function Header() {
  return (
    <header id='header'>
      <div className="__container__">
        <a href="/" id="brand">Taha<span>.</span></a>
        <nav className="navbar">
          {
            navbarItems.map(
              (item, index) =>
              <button key={index} onClick={item.onClick} className="nav-item">{item.text}</button>
            )
          }
        </nav>
      </div>
    </header>
  )
}
