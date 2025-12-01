import styled from "styled-components";

export const ParticipantsCardContainer = styled.div`
  border-radius: 12px;
  padding: 15px;
  background-color: white;
`;

export const ParticipantTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ParticipantList = styled.div`
  display: grid;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 4px; /* spacing between badges */
`;

export const ParticipantBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  font-size: 16px;
  background-color: ${(props) => (props.isHost ? "#F8DCDC" : "#ffffff")};
  border: ${(props) => (props.isHost ? "1px solid #7F4F4E" : "none")};
  border-radius: ${(props) => (props.isHost ? "5px" : "12px")};
  box-shadow: ${(props) => (props.isHost ? " 0 2px 4px grey" : "none")};
  color: black;
`;

export const ParticipantImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HostLabel = styled.span`
  font-family: "Inter", sans-serif;
  color: rgba(127, 79, 78, 1);
  font-size: 16px;
  font-weight: bold;
  padding: 2px 6px;
  margin-left: 6px;
  text-align: center;
`;

export const ViewMoreButton = styled.button`
  font-family: "Inter", sans-serif;
  background-color: white;
  color: #3a00e5;
  font-size: 16px;
  padding: 6px 10px;
  margin-top: 10px;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;

  &:hover {
    background-color: #edaf53;
    color: white;
  }
`;
