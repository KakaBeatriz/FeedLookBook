import React from "react";
import "./Postdetail.css";
import { Avatar } from "@mui/material";

function Postdetail({userName,userImg, userId,time,postText,imgUrl,varify}){
    return(
        <div className='Postdetail'>

            <div className="post_header">
                <Avatar src={userImg}/>

                <div className="post">
                    <h2>{`${userName}${varify && '@'} ${userId} - ${time}`}</h2>
                    <h2 className="posttext"> {postText}</h2>


                </div>
            </div>

            <div className="post_body">
                <div className="img_class">
                    {imgUrl &&  
                    (<img 
                        alt=""
                        src={imgUrl}

                    /> )}
                </div>
            
                <div className="post_actions">
                    
                </div>
            </div>


        </div>
    )
}

export default Postdetail;