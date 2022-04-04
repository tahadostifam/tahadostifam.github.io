import React from 'react'
import './services_section.css'

function makeClassNameForServiceBox(color) {
    let base = "service-box"
    if (color) {
        base += ` service-box-${color}`
    }
    return base
}

const servicesBoxs = [ 
    {
        icon: `<ion-icon name="desktop-outline"></ion-icon>`,
        title: "Web Development",
        description:
        `
        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
        `.trim(),
        color: "purple"
    },
    {
        icon: `<ion-icon name="desktop-outline"></ion-icon>`,
        title: "Teaching",
        description:
        `
        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
        `.trim(),
        color: "yellow"
    },
    {
        icon: `<ion-icon name="desktop-outline"></ion-icon>`,
        title: "Open Source Projects",
        description:
        `
        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
        `.trim(),
        color: "pink"
    },
]

export default function services_section() {
  return (
    <div data-aos="fade-right" data-aos-duration="1500">
        <div className="container">
            <div id="services_section">
                <h1 class="section-header" style={{marginBottom: "50px"}}>Services</h1>
                <div id="services_section_grid">
                    {
                        servicesBoxs.map((box, index) => {
                            return (
                                <div className={makeClassNameForServiceBox(box.color)} key={index} >
                                    <div className="icon" dangerouslySetInnerHTML={{ __html: box.icon }}>
                                    </div>
                                    <h3 className="title">{box.title}</h3>
                                    <p>
                                        {box.description}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{textAlign: "center", color: "#fff", width: "100%", display: "block", marginTop: "20px", marginBottom: "20px"}}>
                Looking for a custom job? Click here to contact me! 😃
            </div>
        </div>
    </div>
  )
}