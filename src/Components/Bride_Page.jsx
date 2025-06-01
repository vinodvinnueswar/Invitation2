import React from 'react'
import Bride from '../images/Groom.jpeg'
import Flower2 from '../images/flower3.png'

const Bride_Page = () => {
  return (
       <div className="Bride-Container">
            <div className="Bride-Image" data-aos="flip-left">
                <img src={Bride} alt="" />
                <div className="Bride-content">
                <p>💍 A Love Story Begins… 🌸

Two hearts, one journey. Today, we promise to walk hand in hand, through every joy, every challenge, every beautiful moment life has to offer. Surrounded by love, family, and the blessings of our closest ones, we begin a new chapter — not just as partners, but as soulmates.</p>
                </div>
                
            </div>
            <div className="Bride-Text" data-aos="flip-right">
               <div className="Bride-Content">
               <h2>V.Ashwanth</h2>
               <p>M.Tech Software Engeering</p>
               </div>
            </div>
        </div>
  )
}

export default Bride_Page