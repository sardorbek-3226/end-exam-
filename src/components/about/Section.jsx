import React from 'react'
import './section.css'

const Section = () => {
  return (
    <div className='mission'>
      <div className='mission__title'>
            <button className='mission__btn'>Our mission</button>
            <h1 className='mission__help'>Help more people cook nourishing meals, 
            more often.</h1>
            <br />

            <p className='mission__health'>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p><br />
            <p className='mission__we'>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
      </div>
      <div>
        <img className='mission__img' src="/images/image-about-our-mission-large.webp" alt="" />
      </div>
    </div>
  )
}

export default Section
