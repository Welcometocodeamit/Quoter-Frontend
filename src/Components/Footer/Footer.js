import React from 'react'
import './Footer.css'
import heart from '../../Assets/heart.png'
import copyright from '../../Assets/copyright.png'

export default function Footer() {
  return (
    <div id="footer">
    <h6><img src={copyright} alt="copyright"/>  2023  |  Designed and coded with <img src={heart} alt="heart"/> by Amit Kumbhar</h6>
    </div>
  )
}
