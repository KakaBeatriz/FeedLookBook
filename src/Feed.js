import React from "react";
import "./Feed.css";
import Feedbox from "./Feedbox";
import Post from "./Post";
 

function Feed(){

    return(
        <div className="Feed">

            {/* is contain two more components
            
            1. Feed Box
            2. Posts
            */}

            <Feedbox/>
            <Post/> 

           


        </div>
    )
}

export default Feed;
