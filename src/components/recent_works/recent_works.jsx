import React from 'react'
import { lazyMe } from '../lazyImageLoader'
import './recent_works.css'

let active_group = 0
const groups = [
  {
    name: "WebSite"
  },
  {
    name: "Api"
  }
]

function isActiveGroup(index){
  return index === active_group
}

function makeClassForGroupItem(index){
  let base = "item"
  if (isActiveGroup(index)) {
    base += " active"
  }
  return base
}

export default function recents_works() {
  return (
    <div className="container" style={{marginTop: "100px"}}>
      <div id='recent_works'>
        <h1 class="section-header" style={{marginBottom: "30px"}}>Recent Works</h1>
        <div id="recent_works_sorter_panel">
          {
            groups.map((i, index) => {
              return <a key={index} className={makeClassForGroupItem(index)}>{i.name}</a>
            })
          }
        </div>
        <div id="recent_works_grid">
          <div className="item" group="WebSite">
            <img src="https://picsum.photos/700/500" onLoad={lazyMe}/>
            <div className="on_hover">
              <span className="group_name">Group</span>
              <h1>Project Name</h1>
              <a className="open_icon">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
