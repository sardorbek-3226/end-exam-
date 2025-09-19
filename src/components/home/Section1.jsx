import React from 'react'
import "./section1.css"

const Sections1 = () => {
  return (
    <div className='grand'>
      <h1 className='grand__child'>What you’ll get</h1>
      <div className='card__parent'>

        <div className='card'>
          <div className='card__item'>
            <img className='card__img1' src="/images/icon-whole-food-recipes.svg" alt="" />
            <h3 className='card__title'>Whole-food recipes</h3>
            <p className='card__p'>Each dish uses everyday, unprocessed ingredients.</p>
          </div>
        </div>

        <div className='card'>
          <div className='card__item'>
            <img className='card__img' src="/images/icon-minimum-fuss.svg" alt="" />
            <h3 className='card__title'>Minimum fuss</h3>
            <p className='card__p'>All recipes are designed to make eating healthy quick and easy.</p>
          </div>
        </div>

        <div className='card'>
          <div className='card__item'>
            <img className='card__img' src="/images/icon-search-in-seconds.svg" alt="" />
            <h3 className='card__title'>Search in seconds</h3>
            <p className='card__p'>Filter by name or ingredient and jump straight to the recipe you need.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sections1
