    import React from 'react'
    import "./section2.css"
    const Section2 = () => {
    return (
        
        <>
        <div className='exits'>
        <div className='exits__title'>
            <h1 className='why'>Why we exist</h1>
        </div>
        <div className='exits__info'>
            <div className='exits__info__item'>
                <img src="/images/icon-bullet-point.svg" width={30} alt="" />
                <div className='inf'>
                    <h4 className='info__high'>Cut through the noise.</h4>
                    <p className='info__parag'>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                </div>
            </div>
            <div className='exits__info__item'>
                <img  src="/images/icon-bullet-point.svg" width={30} alt="" />
                <div className='inf'>
                    <h4 className='info__high'>Empower home kitchens.</h4>
                    <p className='info__parag'>When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                </div>
            </div>
            <div className='exits__info__item'>
                <img src="/images/icon-bullet-point.svg" width={30} alt="" />
                <div className='inf' style={{marginBottom:"40px"}}>
                    <h4 className='info__high'>Make healthy look good.</h4>
                    <p className='info__parag'>High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.</p>
                </div>
            </div>
        </div>
        </div>
        <hr />
        <br /><br />
        </>
    )
    }

    export default Section2
