import React from 'react'

const Nav = () => {
  return (
    <div id="nav-container">
      <a id="nav-name" className="nav-item" href="#intro-container">
        LOREN MARIQUIT
      </a>
      <a className="nav-item" href="#proj-container">
        PROJECTS
      </a>
      <a className="nav-item" href="#skills-container">
        SKILLS
      </a>
      <a className="nav-item" href="#contact-container">
        CONTACT
      </a>
      <div className="nav-item">|</div>
      <div className="nav-item" href="">
        ABOUT
      </div>
    </div>
  )
}

window.addEventListener('scroll', bringmenu)

function bringmenu() {
  // console.log(document.body.scrollTop, document.documentElement.scrollTop)
  if (document.documentElement.scrollTop < 359) {
    document.getElementById('nav-name').style.opacity = '0'
    document.getElementById('nav-container').style.boxShadow = '0 0 0'
  } else {
    document.getElementById('nav-name').style.opacity = '1'
    document.getElementById('nav-container').style.boxShadow =
      '0 10px 5px -5px rgba(128, 128, 128, 0.37)'
  }
}

export default Nav
