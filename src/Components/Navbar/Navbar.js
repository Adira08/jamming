import React, { useState } from 'react'
import HomeComponent1 from '../Home/HomeComponent1'
import HomeComponent2 from '../Home/HomeComponent2'
import HomeComponent3 from '../Home/HomeComponent3'
import HomeComponent4 from '../Home/HomeComponent4'
import "./Navbar.css"

const Navbar = () => {

    const [participants, setParticipants] = useState("1")

    return (
        <div>
            <div className='navbar-position'>
                <div><img src='https://choira.io/static/media/choria.96439620.svg' alt=''></img></div>
                <div className='heading'>Friday Night Jam</div>
                <div className='rightSide-div'>
                    <select name="participants" className='dropdown-button' onChange={(e) => { setParticipants(e.target.value) }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button className='inviteButton'>
                        <div className='plusIcon'>+</div>
                        <div className="inviteText">Invite</div>
                    </button>
                </div>
            </div>
            <div className='bodymain'>
            <div className="bodyleftpart">
                <div className="bodyvideo">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="16" rx="4" fill="#F1B103"/>
                        <path d="M20 5C20 3.34315 21.3431 2 23 2C23.5523 2 24 2.44772 24 3V13C24 13.5523 23.5523 14 23 14C21.3431 14 20 12.6569 20 11V5Z" fill="#FFE49B"/>
                    </svg>          
                </div>
                <div className="lines">
                    <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.5" y1="1.5" x2="22.5" y2="1.5" stroke="#515B85" stroke-width="3" stroke-linecap="round"/>
                        <line x1="1.5" y1="6.5" x2="22.5" y2="6.5" stroke="#515B85" stroke-width="3" stroke-linecap="round"/>
                        <line x1="1.5" y1="11.5" x2="22.5" y2="11.5" stroke="#515B85" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <div className='homeSection-position'>

                {
                    participants === "1" ? <HomeComponent1 /> :
                        participants === "2" ? <HomeComponent2 /> :
                            participants === "3" ? <HomeComponent3 /> : <HomeComponent4 />
                }
            </div>
            </div>
        </div>

    )
}
export default Navbar
