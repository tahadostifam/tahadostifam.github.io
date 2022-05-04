import React, { useState } from 'react'
import { lazyMe } from '../lazyImageLoader'
import './recent_works.css'

const groups = [
  {
    name: "All",
  },
  {
    name: "WebSite",
  },
  {
    name: "Api",
  }
]

const groupItems = [
  {
    group: 0,
    header: "Tahagram!",
    image: "https://picsum.photos/700/500",
    url: "github.com/tahadostifam/Tahagram.git"
  },
  {
    group: 0,
    header: "Tahagram!",
    image: "https://picsum.photos/700/500",
    url: "github.com/tahadostifam/Tahagram.git"
  },
  {
    group: 1,
    header: "Tahagram!",
    image: "https://picsum.photos/700/500",
    url: "github.com/tahadostifam/Tahagram.git"
  },
  {
    group: 2,
    header: "Tahagram!",
    image: "https://picsum.photos/700/500",
    url: "github.com/tahadostifam/Tahagram.git"
  },
]


export default function RecentWorks() {
  const [activeGroup, setActiveGroup] = useState({name: "All"})
  function activateGroupItem(item){
    setActiveGroup(item)
  }
  function makeClassForGroupItem(index){
    let base = "item"
    if (isActiveGroup(index)) {
      base += " active"
    }
    return base
  }
  function isActiveGroup(index){
    return groups[index].name === activeGroup.name
  }
  function displayByActiveItem(index){
    const itemIndex = groups.findIndex(({ name: _name_ }) =>  _name_ === activeGroup.name)
    if (itemIndex === index) {
      return true
    } else if (itemIndex === 0) {
      return true
    }
    return false
  }
  return (
  <div data-aos="fade-left" data-aos-duration="1500">
    <div className="container" style={{marginTop: "100px"}}>
      <div id='recent_works'>
        <h1 className="section-header" style={{marginBottom: "30px"}}>Recent Works</h1>
        <div id="recent_works_sorter_panel">
          {
            groups.map((item, index) => {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              return <a onClick={() => activateGroupItem(item)} key={index} className={makeClassForGroupItem(index)}>{item.name}</a>
            })
          }
        </div>
        <div id="recent_works_grid">
          {
            groupItems.map((g, index) => {
              return displayByActiveItem(g.group) ?
              <div key={index} className="item">
                <img src={g.image} alt="" onLoad={lazyMe}/>
                <div className="on_hover">
                  <span className="group_name">{groups[g.group].name}</span>
                  <h1>{g.header}</h1>
                  <a href={g.url} className="open_icon">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
              </div> 
              : undefined
            })
          }
        </div>
      </div>
    </div>
  </div>
  )
}
