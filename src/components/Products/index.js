import React from 'react'
import Popup from 'reactjs-popup'
import "./index.css"
import { IoCloseCircle } from "react-icons/io5";

const Products = () => {
  return (
    <div className='allProducts-container'>
        <div className='aboutHeadingContainer'>
          <img className='styleLine' src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719041547/Frame_1_e4ct7x.png" alt=''/>
          <p className='ourProductsText'>Our products</p>
          <img className='styleLine' src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719041547/Frame_1_e4ct7x.png" alt=''/>
        </div>
        <div className='products-container'>
            <div className='productCard-container'>
                <img className='cardImage' src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719043734/Frame_7_fxuv1f.png' alt=''/>
                <div className='card-details'>
                    <p className='productName'>Raju Rassibomb</p>    
                    <Popup
                      modal
                      trigger={
                        <button className='viewButton' type='button'>QUICK VIEW</button>
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
            <div className='productCard-container'>
                <img className='cardImage' src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719043734/Frame_7_fxuv1f.png' alt=''/>
                <div className='card-details'>
                    <p className='productName'>Ladiyon ki Rani Chani</p>    
                    <Popup
                      modal
                      trigger={
                        <button className='viewButton' type='button'>QUICK VIEW</button>
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
        </div>
        <img className='bottomStyleLine' src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719045096/Frame_3_bqlubj.png" alt=''/>
    </div>
  )
}

export default Products