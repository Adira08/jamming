import React from 'react'
import video1 from "../Video/video1.mp4"
import video2 from "../Video/video2.mp4"
import video3 from "../Video/video3.mp4"

const HomeComponent3 = () => {
    return (
        <div className='home-component3'>
            <video loop autoPlay>
                <source src={video1} type="video/mp4" />
            </video>
            <div>
            <video loop autoPlay>
                <source src={video2} type="video/mp4" />
            </video>
            <video loop autoPlay>
                <source src={video3} type="video/mp4" />
            </video>
            </div>
        </div>
    )
}

export default HomeComponent3