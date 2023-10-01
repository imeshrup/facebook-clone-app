import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navbarleft">
            <span className="logo">Facebook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchbarbox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for your friend' className='searchInput' />
            </div>
        </div>
        <div className="navBarRight">
            <span className="navBarLinks">Homepage</span>
            <span className="navBarLinks">Profile</span>
        </div>
        <div className="navBarIcons">
            <div className="navBarIcon">
                <PersonIcon/>
                <span className="iconTag">7</span>
            
            </div>
            <div className="navBarIcon">
                <ForumIcon/>
                <span className="iconTag">3</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className="iconTag">1</span>
            </div>
        </div>
        <div className='img'>
            <div className="imgprofileimage">
                <img src="/images/1.jpeg" alt="" className="profilepic" />
            </div>

        </div>
    </div>
  )
}

