import React from 'react'
import Br from "../images/BR.jpeg"
import Flower from "../images/flower.png";
import Flower3 from "../images/flower3.png";
import bacImg from  "../images/bac_desgin.png";
import {Link} from 'react-router-dom'



const Entry_Page = () => {
  return (
    <div className="Entry_Container">
      {/* <div className="bac_video">
        <video autoPlay loop muted className='bg-overlay'>
         <source src={bgImage}/>
        </video>
      </div> */}
     <div className="bg-Image">
     <img src={bacImg} alt="" />
     </div>
        <div className="heading">
            <p>The Wedding of</p>
            <h2>Kumar  &  Satya</h2>
        </div>
        <div className="Images">
         <div className="Border-Img">
         {/* <img src={Flower3} alt="" /> */}
         </div>
        <div className="Couples_Image">
          <img src={Br} alt="Couple" />
        </div>
        <div className="img">
        <img src={Flower} alt="" />
        </div>
        </div>
        <div className="buttons">
          <div className="Bride" >
          <Link to='/invitation'>
          Bride
          </Link>
          </div>
          <br /><br />
          <div className="Groom">
            <a href="https://www.wix.com/website-template/view/html/1883?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fevents%2Fweddings&tpClick=view_button&esi=985b84a0-5e02-4a46-baa1-7ed02f240a76">
              Groom
            </a>
          </div>
        </div>
        
    </div>
  )
}

export default Entry_Page