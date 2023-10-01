import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/Navigation/LeftPane/LeftPane'
import RightPane from '../../Components/Navigation/RightPane/RightPane'
import "./Home.css"
import PostPane from '../../Components/Navigation/PostPane/PostPane'

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="bottomContainer">
      <LeftPane/>
      <PostPane/>
      <RightPane/>
    </div>
    </>
  )
}
