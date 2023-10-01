import React from 'react'
import AddPost from '../AddPost/AddPost'
import "./postPane.css"
import Post from '../../post1/Post'

export default function () {
  return (
    <div className='postPaneBox'>
        <AddPost/>
        <Post/>
    </div>
  )
}
