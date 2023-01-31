import React from 'react'
import "./Home.css"
import video1 from "../Video/video1.mp4"

const Home = () => {
  return (
    <div className='home-component1' >
      <video loop autoPlay>
        <source src={video1} type="video/mp4" />
      </video>
      <div class="username">Host</div>
    </div>
  )
}

export default Home