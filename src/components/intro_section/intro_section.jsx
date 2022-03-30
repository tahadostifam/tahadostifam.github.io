import React from 'react'
import './intro_section.css'

export default function intro_section() {
  return (
    <div id="intro_section">
        <div className="avatar">
            <img src="https://avatars.githubusercontent.com/tahadostifam" alt="Avatar" />
        </div>
        <h1>
            [ Taha. Dostifam ]
        </h1>
        <h2>Full-Stack Web Developer</h2>
        <div id="intro_social_media">
            <a href="#" className="item">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="item">
                <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#" className="item">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="#" className="item">
                <ion-icon name="send-outline"></ion-icon>
            </a>
        </div>
        <button style={{marginTop: "20px"}} className="btn btn-primary btn-rounded btn-animate">Hire Me</button>
    </div>
  )
}
