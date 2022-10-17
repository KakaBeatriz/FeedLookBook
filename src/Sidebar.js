import React from "react";
import './Sidebar.css';
import SidebarOpt from "./SidebarOpt";
import HomeIcon from "@mui/icons-material/Home";

import TwitterIcon from "@mui/icons-material/Twitter"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import ListAltIcon from "@mui/icons-material/ListAlt"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Button } from "@mui/material";




function Sidebar(){
    return (
        <div className='sidebar'>


       {/*now we shall create options component for side bar*/}
       <SidebarOpt Icon={TwitterIcon} />
       
        <SidebarOpt Text="Home" Icon={HomeIcon} Active={true} />


        <SidebarOpt Text="Explore" Icon={SearchIcon} />

        <SidebarOpt Text="Notifications" Icon={NotificationsNoneIcon} />

        <SidebarOpt Text="Messages" Icon={MailOutlineIcon}/>

        <SidebarOpt Text="Bookmarks" Icon={BookmarkBorderIcon}/>

        <SidebarOpt Text="Lists" Icon={ListAltIcon}/>

        <SidebarOpt Text="Profile" Icon={PermIdentityIcon}/>

        <SidebarOpt Text="More" Icon={MoreHorizIcon} />

        <Button variant="outlined" className="tweeter_button"  fullWidth >
            Tweet
        </Button>

        </div>
    )
}

export default Sidebar;