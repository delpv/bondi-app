import styled from "styled-components";

export const HostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;

export const HostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* horizontal centering */
  gap: 15px;
  margin-bottom: 20px;
  line-height: 1.6; /* adds space between lines */
  margin-bottom: 1em; /* space after each paragraph */
  white-space: pre-line; /* respects line breaks (\n) */
`;

export const HostTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HostTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 5px;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;

  svg {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
`;

export const HostImage = styled.img`
  width: 178px;
  height: 106px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  font-family: "Inter", sans-serif;
`;

export const HostName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const HostSubtitle = styled.p`
  font-size: 16px;
  color: rgba(32, 104, 77, 1);
  font-family: "Inter", sans-serif;
  margin: 0;
`;

export const HostDescription = styled.p`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  text-align: left; /* aligns text to the left */
  line-height: 1.6; /* adds space between lines */
  margin-bottom: 1em; /* space after each paragraph */
  white-space: pre-line; /* respects line breaks (\n) */
  color: black;
  text-align: left;
  margin-bottom: 8px;
`;

export const HostMemberSince = styled.p`
  width: 255px;
  height: 44px;
  background-color: rgba(254, 211, 131, 1);
  display: flex; /* makes it a flex container */
  justify-content: center; /* horizontal centering */
  align-items: center; /* vertical centering */
  border-radius: 10px;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: black;
  margin-bottom: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* subtle drop shadow */
`;

export const DescriptionContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 8px;
  margin: 0px;
`;

export const ActivitiesHostedLabel = styled.span`
  width: 255px;
  height: 44px;
  background-color: rgba(254, 211, 131, 1);
  display: flex; /* makes it a flex container */
  justify-content: center; /* horizontal centering */
  align-items: center; /* vertical centering */
  border-radius: 10px;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: black;
  margin-bottom: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* subtle drop shadow */
`;

export const HostButton = styled.button`
  width: 255px;
  height: 44px;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  background-color: white;
  color: rgba(107, 79, 29, 1);
  border: 2px solid #fdd86c; /* yellow border */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out; /* smooth hover transition */

  &:hover {
    background-color: #edaf53; /* yellow background on hover */
    color: white; /* text becomes white */
    border: 2px solid #edaf53;
  }
`;
