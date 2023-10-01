import React from 'react'
import "./AddPost.css"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PushPinIcon from '@mui/icons-material/PushPin';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.jpeg" alt="" className="addPostPic" />
                <input placeholder='whats in yout mind..?' type="text" className="addPostInput" />
            </div>
            <hr className='postHr'/>
            <div className="addPostBottom">
                <div className="addPostOptions">
                <div className="addPostOption">
                <AddAPhotoIcon htmlColor='orange' className='addPhoto' />
                <span className="addPostText">Add Photo/Video</span>
                </div>
                <div className="addPostOption">
                <LocalOfferIcon htmlColor='red' className='addPhoto' />
                <span className="addPostText">Add Location</span>
                </div>
                <div className="addPostOption">
                <PushPinIcon htmlColor='blue' className='addPhoto' />
                <span className="addPostText">Tag</span>
                </div>
                <div className="addPostOption">
                <LiveTvIcon htmlColor='tomato' className='addPhoto' />
                <span className="addPostText">Go Live</span>
                </div>
                </div>
                <button className="PostButton">Post</button>
            </div>
        </div>
    </div>
  )
}
