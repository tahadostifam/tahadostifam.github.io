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
  {
    text: "Experience",
    onClick: () => { }
  },
  {
    text: "Works",
    onClick: () => { }
  },
  {
    text: "Blog",
    onClick: () => { }
  },
  {
    text: "Contact",
    onClick: () => { }
  },
]

class Header extends React.Component {
  constructor(){
    super()
    this.state = { 
      active_nav_item: 0
    }
    this.toggleMobileMenuButton = React.createRef();
  }

  makeClassNameForNavItem(index) {
    let base = "nav-item"
    if (this.state.active_nav_item === index) {
      base += " nav-item-active"
    }
    return base
  }

  toggleMobileMenu(){
    const button = document.querySelector(".toggleMobileMenu")
    if (button.classList.contains("active")) {
      button.classList.remove('active')
    } else {
      button.classList.add('active')
    }
  }

  render() { 
    return (
      <header id='header'>
        <div className="__container__">
          <a href="/" id="brand">Taha<span>.</span></a>
          <div ref={this.toggleMobileMenuButton} onClick={this.toggleMobileMenu} className="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="navbar">
            {
              navbarItems.map(
                (item, index) =>
                <button key={index} onClick={item.onClick} className={this.makeClassNameForNavItem(index)}>{item.text}</button>
              )
            }
          </nav>
        </div>
      </header>
    );
  }
}
 
export default Header;