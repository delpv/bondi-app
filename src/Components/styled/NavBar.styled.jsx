import styled from "styled-components";

//created some color variables for easier reuse
const coral = "#EA6C5B";
const ink = "#111318";
const border = "#E9ECEF";

export const NavBarContainer = styled.nav`
  width: 100%;
  top: 0px;
  left: 0px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

//container to keep everything alligned
export const Inner = styled.div`
  max-width: auto;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${ink};
  cursor: pointer;
`;

export const BrandLogo = styled.span`
  width: 36px;
  height: 36px;
  display: inline-grid;
  place-items: center;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const BrandName = styled.span`
  font-family: "Poppins";
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-size: 1.6rem; //bigger like in the mock
  color: ${ink};
`;

export const NavLinksContainer = styled.div`
  font-family: "Inter";
  flex: 1; //take available space
  display: flex;
  justify-content: center; // center them
  gap: 28px;

  a {
    text-decoration: none;
    color: ${ink};
    font-size: 0.95rem;
    position: relative;
    padding: 6px 0;
    font-weight: 400;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${coral};
  }

  /* This is what makes the current tab coral */
  a.active {
    color: ${coral};
    font-weight: 600;
  }

  /* underline effect for the active tab */
  a.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: ${coral};
    border-radius: 1px;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

//for settings and logout icons
export const IconButton = styled.button`
  display: inline-grid;
  place-items: center;
  background: #fff;
  border: 1px solid ${border};
  border-radius: 999px;
  padding: 6px;
  cursor: pointer;
  color: ${coral};

  &:hover {
    background: #f7f7f8;
  }

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const AvatarImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: block;
  border: 1px solid ${border};
  object-fit: cover;
`;
