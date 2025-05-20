import React from 'react'
import Goldenarch2 from "../images/Golden-arch2.png"
import Br from "../images/BR.jpeg"
import bacIMG from "../images/Golden-arch2.png";
import Bride_Page from '../Components/Bride_Page';
import Groom_Page from '../Components/Groom_Page';
import Date_Time from '../Components/Date_Time';
import Videos from '../Components/Videos';
import Gallery from '../Components/Gallery';
import Flower2 from '../images/flower3.png'
import Flower3 from '../images/flower3.png'
import Maps from '../Components/Maps';
import Gold_Mandal from '../images/Gold_Mandals/Gold_Mandal1.png'
import Flower4 from '../images/flower/flower4.png'
import Contacts from '../Components/Contacts';


const Invite_Page = () => {
  return (
    <div className="Invite-Container">
       <div className="Invite-Card">
        
       <div className="content">
       <div className="title">
            <h2>Wedding Invitation</h2>
        </div>
        <div className="bac-img">
          <img src='../images/Golden-arch2.png' alt="" />
        </div>
        <div className="Couples_image">
            <img src={Br} alt="" />
        </div>
        <div className="Couple_name">
        <p className='right'>Ashwanth</p>
        <p className='mid'>Weds</p>
        <p className='left'>Varshini</p>
        </div>
        <div className="flower-1"> 
        
        </div>
        <div className="divide">
          <div className="head">
            <h2>Bride & Groom</h2>
          </div>
        </div>
        <div className="desgin">
        <img src={Flower2} alt="" />
        </div>
        <Bride_Page/>
        <div className="desgin-1">
          <img src={Flower3} alt="" />
        </div>
        <Groom_Page/>
        <div className="divide">
          <div className="head">
            <h2>Date & Time</h2>
          </div>
        </div>
        <Date_Time/>
        <div className="divide">
          <div className="head">
            <h2>Our Memories</h2>
          </div>
        </div>
        <Videos/>
        <div className="divide">
          <div className="head">
            <h2>Photo Gallery</h2>
          </div>
        </div>
        <div className="Gold-mandal">
              <img src={Gold_Mandal} alt="" />
        </div>
        <div className="Gold-mandal-left">
              <img src={Gold_Mandal} alt="" />
        </div>
        <Gallery/>
    
        <div className="divide">
          <div className="head">
            <h2>Venue Location</h2>
          </div>
        </div>
        <Maps/>
       </div>
       <Contacts/>
    
       </div>
    </div>
  )
}

export default Invite_Page