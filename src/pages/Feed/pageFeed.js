import React from "react";
import "./pageFeed.css";
import Navbar from "../../components/Navbar/Navbar";
import Feed1 from "../../components/Feed1/Feed1";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";





function pageFeed(){
  return (

    <div className='feed'>
<div className="oi">
      <Navbar/>
      </div>

<Sidebar/>

<Feed1/>
<Rightbar/>


    </div>

    
  )
}

export default pageFeed;