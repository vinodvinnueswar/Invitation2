import React from 'react'
import Groom from '../images/Bride.jpeg'

const Groom_Page = () => {
  return (
    <div className="Groom-Container">
        <div className="Groom-Image" data-aos="flip-left">
        <div className="Groom-content">
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatibus soluta sequi rem sapiente possimus dolores dignissimos corrupti! Repellat et sunt molestias laborum eveniet aut ducimus tempora praesentium fugit atque.</p>
            </div>
        <img src={Groom} alt=""  />
       
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