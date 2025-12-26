import React, { useContext } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import BondiLogo from "../../assets/icons_app/logo-Bondi.svg?react";
import Settings from "../../assets/icons_app/settings.svg?react";
import LogoutIcon from "../../assets/icons_app/logout.svg?react";
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
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const Avatar = "/defaultAvatar.jpg";
  return (
    <NavBarContainer>
      <Inner>
        <BrandContainer>
          <BrandLogo>
            <BondiLogo />
          </BrandLogo>
          <BrandName onClick={() => navigate("/feed")}>BONDI</BrandName>
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

          <IconButton title="Logout" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </NavActions>
      </Inner>
    </NavBarContainer>
  );
}

export default NavBar;
