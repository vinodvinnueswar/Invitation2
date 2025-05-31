import React from 'react'

const Date_Time = () => {
  return (
    <div className="Date_Time-Container">
        <div className="Date" data-aos="fade-up"
     data-aos-duration="3000">
            <img src={''} alt="" />
            <p>12 Aug 2024 - 13 Aug 2024</p>
        </div>
        <div className="divide-line">
            <p>......................</p>
        </div>
        <div className="Time"data-aos="fade-down"
     data-aos-duration="3000">
            <img src={''} alt="" />
            <p>10:00 PM - 2:00 AM</p>
        </div>
        <div className="divide-line">
            <p>......................</p>
        </div>
        <div className="Location" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <p>Venkana Babu Function Hall</p><br />
            <p>Ram nagar-1,Gaigolupadu  <br /> near chaitanya
            college,kakinada </p>
            <img src={''} alt="" />
        </div>
    </div>
  )
}

export default Date_Time