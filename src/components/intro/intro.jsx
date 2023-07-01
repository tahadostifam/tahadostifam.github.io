import React from 'react';
import config from "../../config.json";
import './intro.scss';

export default function IntroSection() {
    return (
        <React.Fragment>
            <div id="intro_section">
                <div className="avatar">
                    <img src={config.AVATAR_URL} alt="Avatar" />
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
                <button style={{ marginTop: "20px" }} className="btn btn-primary btn-rounded btn-animate">Hire Me</button>
            </div>
            <div onClick={() => window.scrollTo(0, 720)} style={{ width: "100%", textAlign: "center", marginBottom: "20px", userSelect: "none", cursor: "pointer" }}>
                <div style={{ color: "#ddd", cursor: "pointer", fontSize: "12px", marginBottom: "8px" }}>Scroll Down</div>
                <button id='scrollDownButton'>
                    <span></span>
                </button>
            </div>
        </React.Fragment>
    );
}
