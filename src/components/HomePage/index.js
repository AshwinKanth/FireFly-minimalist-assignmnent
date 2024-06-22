import React from 'react'
import Popup from 'reactjs-popup'
import Navbar from "../Navbar"
import "./index.css"
import About from '../About'
import Products from '../Products'
import Footer from '../Footer'
import { IoCloseCircle } from "react-icons/io5";

const HomePage = () => {
  return (
    <>
      <div className='homePage-container'>
        <Navbar/>
        <div className='homeText-container'>
          <h1 className='homeText'>The choice is yours.<br/> Because they don’t have one.</h1>
           <Popup
            modal
            trigger={
              <button className='button' type='button'>QUICK VIEW</button>
            }
          >
            {close => (
              <>
                <div className='popup-container'>
                  <img className='popupImage' src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719051009/Screenshot_2024-06-21_at_8.48.07_PM_1_jjql3q.png' alt=''/>
                
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <IoCloseCircle className='icons'/>
                </button>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
      <About/>
      <Products/>
      <Footer/>
      </>
  )
}

export default HomePage