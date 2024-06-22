import React from 'react'
import "./index.css"

const About = () => {
  return (
    <div className='about-container'>
        <div className='aboutHeadingContainer'>
          <img className='smStyleLine' src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719041547/Frame_1_e4ct7x.png" alt=''/>
          <p className='text'> About</p>
          <img  className='smStyleLine' src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719041547/Frame_1_e4ct7x.png" alt=''/>
        </div>
        <div className='aboutDetails-container'>
          <img src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719042126/Frame_2_c9oldl.png' alt=''/>
          <p className='description'>Our products are crafted exclusively from the dreams and screams of young kids
            who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily 
            wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for
            miles. Buy them, burst them, brag about them.
            <br/> <b className='boldText'>The choice is yours. Because they don’t have one.</b>
          </p>
          <img src='https://res.cloudinary.com/dq1ktqbtb/image/upload/v1719042126/Frame_2_c9oldl.png' alt=''/>
        </div>

        <div className='smAboutDetails-container'>
          <p className='description'>Our products are crafted exclusively from the dreams and screams of young kids
            who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily 
            wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for
            miles. Buy them, burst them, brag about them.
            <br/> <b className='boldText'>The choice is yours. Because they don’t have one.</b>
          </p>
        </div>
      </div>
  )
}

export default About