import React from "react";
import "./Feed1.css";
import Feedbox from "../Feedbox/Feedbox";
import Post from "../Post/Post";

 

function Feed1(){

    return(
        <div className="Feed1">

            {/* is contain two more components
            
            1. Feed Box
            2. Posts
            */}

            <Feedbox/>
            <Post/> 

           


        </div>
    )
}

export default Feed1;