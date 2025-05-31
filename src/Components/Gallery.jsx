import React, { useState } from 'react'
import Img1 from '../images/Bride.jpeg';
import Img2 from '../images/Groom.jpeg';
import Img3 from '../images/BR.jpeg';
import Img4 from '../images/Bride.jpeg'
import Img5 from '../images/Groom.jpeg'
import Img6 from '../images/BR.jpeg'
import Img7 from '../images/ba_Theme1.jpeg'
import Img8 from '../images/Groom.jpeg'



const Gallery = () => {

  let data =[
    {
      Couples_Img : Img1,
    },
    {
      Couples_Img : Img2,
    },
    {
      Couples_Img : Img3,
    },
    {
      Couples_Img : Img4,
    },
    {
      Couples_Img : Img5,
    },{
      Couples_Img : Img6,
    },
    {
      Couples_Img : Img7,
    },
    {
      Couples_Img : Img8,
    },

  ]

  return (

    <div className="Gallery-Container">

        <div className="Gallery" data-aos="fade-up"
     data-aos-duration="3000">
            {data.map((item ,index)=> {
              return(
                <div className="pics" key={index}>
                  <img src={item.Couples_Img} alt="" />
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Gallery