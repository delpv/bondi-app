import styled from "styled-components";

const ink = "#111318";
const subtle = "#6B7280";
const border = "#E9ECEF";

export const Container = styled.nav`
  width: 100%;
  max-width: none;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(18, 22, 25, 0.08);
  display: flex;
  flex-direction: column;
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
  ${(p) => (p.variant === "right" ? "right: 16px;" : "left: 16px;")}
`;

// main content below the image
export const Content = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: ${ink};
  letter-spacing: -0.02em;
  line-height: 1.02;
`;
export const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${subtle};
  line-height: 1.5;
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

export const Participants = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
`;

export const LocationInfo = styled.div`
  font-size: 0.95rem;
  color: ${subtle};
`;

export const JoinButton = styled.button`
  background: ${(p) => (p.joined ? "#166638" : "#2d936c")};
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${(p) =>
    p.joined
      ? "0 8px 18px rgba(22,102,56,0.18)"
      : "0 8px 18px rgba(47, 133, 90, 0.18)"};
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    background 120ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(p) =>
      p.joined
        ? "0 12px 26px rgba(22,102,56,0.26)"
        : "0 12px 26px rgba(47, 133, 90, 0.22)"};
    background: ${(p) => (p.joined ? "#125031" : "#2a8e60")};
  }
`;
