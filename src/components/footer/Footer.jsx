import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer__title'>Made with ❤️ and 🥑</h1>
      <ul className='footer__item'>
        <li ><img className='footer__item_element' src="https://picsum.photos/40/40?random=1" alt="img" /></li>
        <li ><img className='footer__item_element' src="https://picsum.photos/40/40?random=2" alt="img" /></li>
        <li ><img className='footer__item_element' src="https://picsum.photos/40/40?random=3" alt="img" /></li>
      </ul>
    </div>
  )
}

export default Footer
