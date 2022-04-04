import React, { useState } from 'react'
import { lazyMe } from '../lazyImageLoader'
import './recent_works.css'

const groups = [
  {
    name: "All",
    isAll: true
  },
  {
    name: "WebSite"
  },
  {
    name: "Api"
  }
]

const groupItems = [
  {
    group: 0,
    header: "Tahagram!",
    url: "github.com/tahadostifam/Tahagram.git"
  }
]


export default function RecentWorks() {
  const [active_group, setActiveGroup] = useState(0)
  function activateGroupItem(index){
    setActiveGroup(index)
  }
  function makeClassForGroupItem(index){
    let base = "item"
    if (isActiveGroup(index)) {
      base += " active"
    }
    return base
  }
  function isActiveGroup(index){
    return index === active_group
  }
  function displayByActiveItem(index){
    if (groups[index].isAll) return true
    if (active_group === index) {
      return true
    }
    return false
  }
  return (
  <div data-aos="fade-left" data-aos-duration="1500">
    <div className="container" style={{marginTop: "100px"}}>
      <div id='recent_works'>
        <h1 class="section-header" style={{marginBottom: "30px"}}>Recent Works</h1>
        <div id="recent_works_sorter_panel">
          {
            groups.map((item, index) => {
              return <a onClick={() => activateGroupItem(item)} key={index} className={makeClassForGroupItem(index)}>{item.name}</a>
            })
          }
        </div>
        <div id="recent_works_grid">
          {
            groupItems.map((g, index) => {
              return displayByActiveItem(g.group) ?
              <div key={index} className="item">
                <img src="https://picsum.photos/700/500" alt="" onLoad={lazyMe}/>
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
