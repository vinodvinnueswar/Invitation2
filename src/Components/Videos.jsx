import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (
    <div className="videos-Container">
        <div className="video" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
  
          <ReactPlayer  className='react-player'
             url='https://youtu.be/3oc_tM46RS0?si=Rh6EoEt2xQVZMP6B'
             width='360px'
             height="250px"

            />
            
        </div>
    </div>
  )
}

export default Videos