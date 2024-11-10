import React from 'react'
import { Link } from 'react-router-dom'
import { listItems } from '../assets/assets'
import you from '../assets/rolls-images/you.svg'
import face from '../assets/rolls-images/face.svg'
import insta from '../assets/rolls-images/insta.svg'
import linkden from '../assets/rolls-images/linkden.svg'
import x from '../assets/rolls-images/x.svg'
import logo from '../assets/rolls-images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-items-1'>
                <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
            </div>
            <div className='footer-items-2'>
                <div className='ul'>
                {
                    listItems.map((item , index) => {
                        return <ul className='footer-list' key={index}>
                            <li>{item.List_1}</li>
                            <li>{item.List_2}</li>
                            <li>{item.List_3}</li>
                        </ul>
                    })
                }
                </div>
            <div className='socials'>
                    <Link>
                    <img src={you} alt="" /></Link>
                    <Link>
                    <img src={face} alt="" /></Link>
                    <Link>
                    <img src={insta} alt="" /></Link>
                    <Link>
                    <img src={linkden} alt="" /></Link>
                    <Link>
                    <img src={x} alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer