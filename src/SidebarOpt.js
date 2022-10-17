import React from "react";
import "./SidebarOpt.css";

function SidebarOpt({Text, Icon, Active}){
    return (
        <div className={`sidebarOpt ${Active && "sidebarOpt_active"}`}>
            <Icon/>

            <h2> {Text}</h2>

        </div>
    )
}

export default SidebarOpt;
