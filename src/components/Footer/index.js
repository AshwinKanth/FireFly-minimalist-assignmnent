import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img className='footerStyleLine' src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719045709/Frame_64_ze8iur.png' alt=''/>
        <div className='footerDetails-container'>
            <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719046147/Frame_62_bis3vz.png" alt=''/>
            <div className='followUs-cotainer'>
                <h1 className='followUs-heading'>Follow us on</h1>
                <div>
                    <FaInstagramSquare className='icons'/>
                    <IoLogoYoutube className='icons'/>
                    <FaTwitterSquare className='icons'/>
                    <FaFacebook className='icons'/>
                    <FaLinkedin className='icons'/>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719046147/Frame_62_bis3vz.png" alt=''/>
        </div>
        <img className='footerStyleLine' src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719045709/Frame_64_ze8iur.png' alt=''/>
    </div>
  )
}

export default Footer