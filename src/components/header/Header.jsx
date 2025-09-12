import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='btn__div '>
      <h1 className='info__title'><spans className='span'>Healthy</spans> meals, zero fuss</h1>
      <p className='info__title__p'>Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
      </div>
      <div className="btn__div">

      <button className='btn btn__start'>Start exploring</button>
      </div>
      {/* <div className='info__image'>
        <img src="https://picsum.photos/1100/400" alt="" />
      </div> */}
    </div>
  )
}

export default Header
