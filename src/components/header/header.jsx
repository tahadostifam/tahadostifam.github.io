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
    this.toggleMobileMenuButtonRef = React.createRef();
    this.navbarRef = React.createRef()
  }

  makeClassNameForNavItem(index) {
    let base = "nav-item"
    if (this.state.active_nav_item === index) {
      base += " nav-item-active"
    }
    return base
  }

  toggleMobileMenu = () => {
    const button = this.toggleMobileMenuButtonRef.current;
    const navbar = this.navbarRef.current;
    if (button.classList.contains("active")) {
      button.classList.remove('active')
      if (navbar.classList.contains("__show__")) {
        navbar.classList.remove("__show__")
      }
    } else {
      button.classList.add('active')
      if (!navbar.classList.contains("__show__")) {
        navbar.classList.add("__show__")
      }
    }
  }

  render() { 
    return (
      <header id='header'>
        <div className="__container__">
          <a href="/" id="brand">Taha<span>.</span></a>
          <div ref={this.toggleMobileMenuButtonRef} onClick={this.toggleMobileMenu} className="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="navbar" ref={this.navbarRef}>
            <div onClick={this.toggleMobileMenu} className="closeMobileMenu">
              <ion-icon name="close-outline"></ion-icon>
            </div>
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