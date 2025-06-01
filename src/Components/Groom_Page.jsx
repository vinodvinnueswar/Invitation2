import React from 'react'
import Groom from '../images/Bride.jpeg'

const Groom_Page = () => {
  return (
    <div className="Groom-Container">
        <div className="Groom-Image" data-aos="flip-left">
        <img src={Groom} alt=""  />
        <div className="Groom-content">
       <p>💍 A Love Story Begins… 🌸

Two hearts, one journey. Today, we promise to walk hand in hand, through every joy, every challenge, every beautiful moment life has to offer. Surrounded by love, family, and the blessings of our closest ones, we begin a new chapter — not just as partners, but as soulmates.</p>
            </div>
       
        </div>
        <div className="Groom-Text" data-aos="flip-right">
           <div className="Groom-Content">
           <h2>A.Varshini</h2>
           <p>B.Tech Civil Engeering</p>
           </div>
        </div>
    </div>
  )
}

export default Groom_Page