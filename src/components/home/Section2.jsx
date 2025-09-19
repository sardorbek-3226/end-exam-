import React from 'react'
import "./section2.css"
const Section2 = () => {
  return (
    <div className='ParentBox'>
      <div className='box'>
        <h1 className='box__title'>Built for real life</h1>
        <p className='box__p'>Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat. </p>
        <p className='box__p2'>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
      </div>
      <div>
        <img className='box__img' src="/images/image-home-real-life-large.webp" alt="" />
      </div>
    </div>
  )
}

export default Section2
