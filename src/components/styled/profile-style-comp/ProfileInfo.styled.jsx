import styled from "styled-components";

export const ProfileInfoCard = styled.div`
  background: white;
  border-radius: clamp(8px, 1vw, 12px);
  padding: clamp(10px, 1.2vw, 14px) clamp(14px, 1.8vw, 20px);
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: clamp(2px, 0.3vw, 4px);
  max-width: calc(100% - 16px);
  box-sizing: border-box;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 12px 18px;
    border-radius: 10px;
    margin-top: 2px;
    max-width: calc(100% - 12px);
  }

  @media (max-width: 580px) {
    padding: clamp(9px, 1vw, 12px) clamp(12px, 1.5vw, 16px);
    border-radius: 8px;
    margin-top: 0;
    max-width: calc(100% - 12px);
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    border-radius: 8px;
    margin-top: 0;
    max-width: calc(100% - 8px);
  }
`;

export const ProfileName = styled.h2`
  font-family:
    "Poppins",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111318;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 580px) {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    margin: 0 0 2px 0;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    margin: 0 0 2px 0;
  }
`;

export const MemberSince = styled.p`
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #6b7280;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 580px) {
    font-size: clamp(0.7rem, 1.6vw, 0.8rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.65rem, 1.4vw, 0.75rem);
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 12px);
  margin-top: clamp(8px, 1vw, 10px);
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0 clamp(4px, 1vw, 8px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 8px;
    padding: 0 4px;
  }

  @media (max-width: 580px) {
    gap: clamp(6px, 1vw, 8px);
    margin-top: clamp(6px, 0.8vw, 8px);
    padding: 0 2px;
  }

  @media (max-width: 480px) {
    gap: clamp(5px, 0.8vw, 6px);
    margin-top: 4px;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`;

export const StatBadge = styled.div`
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background: white;
  border-radius: clamp(14px, 1.5vw, 18px);
  padding: clamp(5px, 0.6vw, 7px) clamp(10px, 1.2vw, 14px);
  font-size: clamp(0.7rem, 1.6vw, 0.825rem);
  color: #374151;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    border-radius: 14px;
  }

  @media (max-width: 580px) {
    padding: clamp(4px, 0.5vw, 6px) clamp(8px, 1vw, 11px);
    font-size: clamp(0.65rem, 1.3vw, 0.75rem);
    border-radius: clamp(12px, 1.2vw, 14px);
  }

  @media (max-width: 480px) {
    padding: clamp(3px, 0.4vw, 5px) clamp(6px, 0.8vw, 10px);
    font-size: clamp(0.6rem, 1vw, 0.7rem);
    width: fit-content;
    border-radius: clamp(10px, 1vw, 12px);
  }
`;
