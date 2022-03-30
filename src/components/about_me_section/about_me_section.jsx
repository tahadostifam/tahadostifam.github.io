import React from 'react'
import './about_me_section.css'

const progressBars = [
    {
        label: "Development",
        percent: 85
    },
    {
        label: "UI/UX Design",
        percent: 60
    },
    {
        label: "Development",
        percent: 85
    },
]

export default function about_me_section() {
  return (
    <div id="about_me_section">
        <h1 className="section-header" style={{marginBottom: "50px"}}>About Me</h1>
        <div id="about_me_intro">
            <div className="avatar">
                <img src="https://avatars.githubusercontent.com/tahadostifam" alt="Avatar" />
            </div>
            <div id="about_me_intro_box">
                <div>
                    <p style={{color: "#fff", lineHeight: "25px"}}>
                        Im Taha Dostifam, Full Stack Web Developer from Iran, Bonab. I have rich experience in web site design and building and customization, also im good at Managing.
                    </p>
                    <button style={{marginTop: "20px"}} className="btn btn-primary btn-rounded">Download CV</button>
                </div>
                <div>
                    {
                        progressBars.map((p) => {
                            return (<div className="progress" style={{marginBottom: "25px"}}>
                                <div className="progress-label">
                                    <span>{p.label}</span>
                                    <span>{`${p.percent}%`}</span>
                                </div>
                                <div className="progress-bar" >
                                    <div className="progress-filled" style={{width: `${p.percent}%`}}></div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
