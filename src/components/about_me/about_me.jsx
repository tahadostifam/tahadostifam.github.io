import React from 'react';
import './about_me.scss';

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
];

export default function AboutMeSection() {
    return (
        <div data-aos="fade-left" data-aos-duration="1500">
            <div id="about_me" className="container">
                <h1 className="section-header" style={{ marginBottom: "50px" }}>About Me</h1>
                <div id="about_me_intro">
                    <div className="avatar">
                        <img src="https://avatars.githubusercontent.com/tahadostifam" alt="Avatar" />
                    </div>
                    <div id="about_me_intro_box">
                        <div>
                            <p style={{ color: "#fff", lineHeight: "25px" }}>
                                Im Taha Dostifam, Full Stack Web Developer from Iran, Bonab. I have rich experience in web site design and building and customization, also im good at Managing.
                            </p>
                            <button id='download_cv_button' style={{ marginTop: "20px" }} className="btn btn-primary btn-rounded btn-animate">Download CV</button>
                        </div>
                        <div>
                            {
                                progressBars.map((p, index) => {
                                    return (<div className="progress" style={{ marginBottom: "25px" }} key={index}>
                                        <div className="progress-label">
                                            <span>{p.label}</span>
                                            <span>{`${p.percent}%`}</span>
                                        </div>
                                        <div className="progress-bar" >
                                            <div className="progress-filled" style={{ width: `${p.percent}%` }}></div>
                                        </div>
                                    </div>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
