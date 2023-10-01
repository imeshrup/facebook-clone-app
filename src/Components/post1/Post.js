import React from 'react'
import "./post.css"

export default function () {
  return (
    <div>
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/WhatsApp_Image_2023-08-09_at_08.40.17-removebg-preview.png" alt="" className="postImage" />
                <span className="postUserName"> Imesh Rupasinghe</span>
                <span className="postTime"> 5 mins ago</span>
            </div>
             <div className="postCenter"></div>
                <div className="postCaption">
                  Good Morning !!!
                </div>
                <img src="/images/WhatsApp_Image_2023-08-09_at_08.40.17-removebg-preview.png" alt="" className="postedImage" />
             <div className="postBottom">
                <div className="postBottomLeft">
                  <img src="/images/thumb-up.png" alt="" className="reactionPic" />
                  <img src="/images/love.png" alt="" className="reactionPic" />
                  <img src="/images/facebook-reactions.png" alt="" className="reactionPic" />
                </div>
              </div>   
        </div>
    </div>
  )
}
