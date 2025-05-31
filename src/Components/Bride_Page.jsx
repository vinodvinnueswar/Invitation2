import React from 'react'
import Bride from '../images/Groom.jpeg'
import Flower2 from '../images/flower3.png'

const Bride_Page = () => {
  return (
       <div className="Bride-Container">
            <div className="Bride-Image" data-aos="flip-left">
                <img src={Bride} alt="" />
                <div className="Bride-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sed voluptatibus culpa vel, distinctio quo dolorem nisi ipsam ducimus molestias nostrum inventore maxime voluptate doloremque sint repellendus earum quibusdam aliquid?</p>
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