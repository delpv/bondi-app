import styled from "styled-components";
import ParticipantsIconSvg from "../../../assets/icons_app/participants.svg?react";
import LocationIconSvg from "../../../assets/icons_app/map-pin-green.svg?react";

const ink = "#111318";
const subtle = "#6B7280";
const border = "#E9ECEF";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  max-width: none;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(18, 22, 25, 0.08);
  display: flex;
  flex-direction: column;
  cursor: ${(p) => (p.$isClickable ? "pointer" : "default")};
`;

// this is the top image
export const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #ddd;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CornerChips = styled.div`
  position: absolute;
  top: 16px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.86);
  color: #111;
  border-radius: 14px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(18, 22, 25, 0.06);
  ${({ $variant }) => ($variant === "right" ? "right: 16px;" : "left: 16px;")}
`;

// main content below the image
export const Content = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: ${ink};

  text-wrap: nowrap;
  text-overflow: ellipsis;
  width: calc(100%);
  overflow: hidden;
  display: block;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${subtle};
  line-height: 1.5;
  flex-grow: 1;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* ← number of lines before truncating */
  -webkit-box-orient: vertical;
`;

/* host row with avatar on left and participants on right */
export const HostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  gap: 12px;
`;

export const HostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HostAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${border};
  background: #fff;
`;

export const HostMeta = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HostByLabel = styled.div`
  font-weight: 600;
`;

export const HostFullName = styled.div`
  color: #9aa0a6;
  font-size: 0.9rem;
`;

export const Participants = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const ParticipantsCount = styled.div`
  margin-left: 6px;
`;

export const ParticipantsIcon = styled(ParticipantsIconSvg)`
  width: ${(p) => (p.size ? `${p.size}px` : "20px")};
  height: ${(p) => (p.size ? `${p.size}px` : "20px")};
  flex-shrink: 0;
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  width: 100%;
  max-width: 100%;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: ${subtle};
  max-width: calc(100% - 24%);
`;

export const LocationIcon = styled(LocationIconSvg)`
  width: ${(p) => (p.size ? `${p.size}px` : "18px")};
  height: ${(p) => (p.size ? `${p.size}px` : "18px")};
  flex-shrink: 0;
`;

export const JoinButton = styled.button`
  background: ${(p) => (p.joined ? "#166638" : "#2d936c")};
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 18px;
  font-weight: 600;
  cursor: ${(p) => (p.disabled ? "cursor" : "pointer")};
  box-shadow: ${(p) =>
    p.$joined
      ? "0 8px 18px rgba(22,102,56,0.18)"
      : "0 8px 18px rgba(47, 133, 90, 0.18)"};
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    background 120ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(p) =>
      p.$joined
        ? "0 12px 26px rgba(22,102,56,0.26)"
        : "0 12px 26px rgba(47, 133, 90, 0.22)"};
    background: ${({ $joined }) => ($joined ? "#125031" : "#2a8e60")};
  }
`;

export const ElypsisText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  display: block;
  margin-left: ${(p) => (p.$withIcon ? "6px" : "0")};
`;
