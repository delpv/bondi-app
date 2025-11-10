import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import BondiLogo from "../../assets/Icons/logo-Bondi.svg?react";
import Settings from "../../assets/Icons/settings.svg?react";
import Avatar from "../../assets/Images/Avatar.png";
import LogoutIcon from "../../assets/Icons/logout.svg?react";
import {
  NavBarContainer,
  Inner,
  NavLinksContainer,
  NavActions,
  BrandContainer,
  IconButton,
  AvatarImg,
  BrandName,
  BrandLogo,
} from "../styled/feed-style-comp/NavBar.styled";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/login");

  return (
    <NavBarContainer>
      <Inner>
        <BrandContainer>
          <BrandLogo>
            <BondiLogo />
          </BrandLogo>
          <BrandName>BONDI</BrandName>
        </BrandContainer>

        <NavLinksContainer>
          <NavLink to="/feed" end>
            Feed
          </NavLink>
          <NavLink to="/create-activity">Create Activity</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinksContainer>

        <NavActions>
          <Link to="/profile" aria-label="Profile">
            <AvatarImg src={Avatar} alt="User avatar" />
          </Link>

          <IconButton title="Settings" onClick={() => alert("Settings soon!")}>
            <Settings />
          </IconButton>

          <IconButton title="Logout" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </NavActions>
      </Inner>
    </NavBarContainer>
  );
}

export default NavBar;
