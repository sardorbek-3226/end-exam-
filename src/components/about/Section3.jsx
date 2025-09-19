import React from 'react'
import "./section3.css"

const Section3 = () => {
  return (
    <>
      <section className='exits'>
        {/* Title */}
        <div className='exits__title'>
          <h1 className='our'>Our food philosophy</h1>
        </div>

        {/* Info items */}
        <div className='exits__info'>
          <div className='exits__info__item'>
            <img src="/images/icon-bullet-point.svg" width={30} alt="bullet" />
            <div className='inf'>
              <h4 className='info__high'>Whole ingredients first.</h4>
              <p className='info__parag'>
                Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.
              </p>
            </div>
          </div>

          <div className='exits__info__item'>
            <img src="/images/icon-bullet-point.svg" width={30} alt="bullet" />
            <div className='inf'>
              <h4 className='info__high'>Flavor without compromise.</h4>
              <p className='info__parag'>
                Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
              </p>
            </div>
          </div>

          <div className='exits__info__item'>
            <img src="/images/icon-bullet-point.svg" width={30} alt="bullet" />
            <div className='inf'>
              <h4 className='info__high'>Respect for time.</h4>
              <p className='info__parag'>
                Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.
              </p>
            </div>
          </div>

          <div className='exits__info__item'>
            <img src="/images/icon-bullet-point.svg" width={30} alt="bullet" />
            <div className='inf' style={{marginBottom:"40px"}}>
              <h4 className='info__high'>Sustainable choices.</h4>
              <p className='info__parag'>
                Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <br /><br />
    </>
  )
}

export default Section3
