import React from 'react'
import './recent_works.css'

export default function recents_works() {
  return (
    <div className="container" style={{marginTop: "100px"}}>
      <div id='recent_works'>
        <div id="recent_works_sorter_panel">comming soon</div>
        <div id="recent_works_grid">
          <div className="item">
            <img src="https://picsum.photos/700/500"/>
            <div className="on_hover">
              <span className="group_name">Group</span>
              <h1>Project Name</h1>
              <div className="open_icon">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://picsum.photos/700/500"/>
            <div className="on_hover">
              <span className="group_name">Group</span>
              <h1>Project Name</h1>
              <div className="open_icon">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://picsum.photos/700/500"/>
            <div className="on_hover">
              <span className="group_name">Group</span>
              <h1>Project Name</h1>
              <div className="open_icon">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
