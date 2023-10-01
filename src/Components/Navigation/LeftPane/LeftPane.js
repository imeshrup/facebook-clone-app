import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function 
() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
           </li>
           <li className="leftPaneMenuItem">
            <GroupIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Groups</span>
           </li>
           <li className="leftPaneMenuItem">
            <FeedIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Feed</span>
           </li>
           <li className="leftPaneMenuItem">
            <FlagIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Pages</span>
           </li>
           <li className="leftPaneMenuItem">
            <CalendarMonthIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Events</span>
           </li>
           <li className="leftPaneMenuItem">
            <BuildIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Settings</span>
           </li>
           <li className="leftPaneMenuItem">
            <SportsEsportsIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Games</span>
           </li>
           <li className="leftPaneMenuItem">
            <NewspaperIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">News</span>
           </li>
           <li className="leftPaneMenuItem">
            <WorkOutlineIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Jobs</span>
           </li>
           <li className="leftPaneMenuItem">
            <ShoppingCartIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Shop</span>
           </li>
           <hr/>
           <div className="pagesYouLiked"></div>
              <h3>Pages You Liked</h3>
          </div>
          <div className="pageList">
          <li className="pagelistitem">
            <img src="/images/1.jpeg" alt="" className="pagePic" />
            <span className="Pages">Imesh Rupasinghe</span>
          </li>
          <li className="pagelistitem">
            <img src="/images/1.jpeg" alt="" className="pagePic" />
            <span className="Pages">Arnold</span>
          </li>
          <li className="pagelistitem">
            <img src="/images/1.jpeg" alt="" className="pagePic" />
            <span className="Pages">Kusal Mendis</span>
          </li>
          <li className="pagelistitem">
            <img src="/images/1.jpeg" alt="" className="pagePic" />
            <span className="Pages">Kumar Sangakkara</span>
          </li>
          <li className="pagelistitem">
            <img src="/images/1.jpeg" alt="" className="pagePic" />
            <span className="Pages">Coffee Shop</span>
          </li>
          </div>
        </div>
    </div>
  )
}
