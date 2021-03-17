import React from 'react'
import Header from './Header'
import '../assets/css/Intro.css'

const Intro = () => {
  return (
    <div className="Intro">
      <Header />

      <div className="Intro-texts">
        <h1 className="Intro-title">Say hello to ReactJS</h1>

        <h3 className="Intro-description">
          <span>You will learn how to use </span>
          <span>the most popular frontend library,</span>
          <span>and become a super Ninja Developer</span>
        </h3>

        <a className="Intro-btn" href="/">Awesome!</a>
      </div>
    </div>
  )
}

export default Intro