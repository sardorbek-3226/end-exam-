import React from 'react'
import './section5.css'

const Section5 = () => {
  return (
    <div className='mission'>
      <div className='mission__title'>
            <h1 className='mission__help'>Beyond the plate</h1>
            <br />

            <p className='mission__health'>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p><br />
            <ul>
                <li> <span className='span'></span> Encourage family dinners and social cooking.</li>
                <li> <span className='span'></span> Reduce reliance on single-use packaging and delivery waste.</li>
                <li> <span className='span'></span> Spark curiosity about seasonal produce and local agriculture.</li>
            </ul>
      </div>
      <div>
        <img className='mission__img' src="/images/image-about-beyond-the-plate-large.webp" alt="" />
      </div>
    </div>
  )
}

export default Section5
