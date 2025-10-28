

import React from 'react'
import Avatar from "../../assets/Images/Avatar.png";
import { AvatarImg } from "../styled/NavBar.styled";

const Banner = () => {
  return (
    <div>
    <AvatarImg src={Avatar} alt="User avatar" />
     <h3>profile name</h3>
     <h3>info</h3> 
    </div>
  )
}

export default Banner
