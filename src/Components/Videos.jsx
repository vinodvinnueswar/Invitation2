import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (
    <div className="videos-Container">
        <div className="video">
            
             <iframe src="https://youtu.be/qHxxmWySb6c?si=aK9iHVBFHzVi975a" frameborder="0"></iframe>
            {/* <ReactPlayer url={'https://youtu.be/qHxxmWySb6c?si=aK9iHVBFHzVi975a'} controls={true} /> */}
           
            {/* width={500} height={350} */}
        </div>
    </div>
  )
}

export default Videos