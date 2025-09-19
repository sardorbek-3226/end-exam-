import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer__title'>Made with ❤️ and 🥑</h1>
      <ul className='footer__item'>
        <li ><img className='footer__item_element' src="/images/icon-instagram.svg" alt="img" /></li>
        <li ><img className='footer__item_element' src="/images/icon-bluesky.svg" alt="img" /></li>
        <li ><img className='footer__item_element' src="/images/icon-tiktok.svg" alt="img" /></li>
      </ul>
    </div>
  )
}

export default Footer
