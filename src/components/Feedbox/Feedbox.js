import React, { useState } from "react";
import "./Feedbox.css";
import { BubbleChart } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";

function Feedbox () {
    const[tweetText, settweetText] = useState('');
    const[tweetImg, settweetImg] = useState(''); 

    const submitForm=(e)=>{
        e.preventDefault();


        settweetText("");
        settweetImg("");

    }


    return (
        <div  className="Feedbox">

            <div className="feedbox_header">
                <h2> Home </h2>
                <BubbleChart/>
            </div>

            <div className="feedbox_body">
                <form>

                    <div className="feedbox_input">

                        <Avatar className="avatar" src="https://i.pravatar.cc/150?img=2"/>
                        <div className="feedbox_input_fields">
                            
                            <input placeholder="What's happening?" 
                            className="tweet_input"
                            onChange={(e)=>{settweetText(e.target.value)}} 
                            value={tweetText}/>

                            <input placeholder="Image Url?(Optional)" 
                            className="tweet_img_input"
                            onChange={(e)=>{settweetImg(e.target.value)}} 
                            value={tweetImg}/>

                        <div className="feedbox_submit">
                            <Button className="Button__Submit" onClick={submitForm}> Tweet</Button>
                        </div>


                        </div>

                        

                        </div>
                </form>
            </div>
        


        </div>

    )
}

export default Feedbox;