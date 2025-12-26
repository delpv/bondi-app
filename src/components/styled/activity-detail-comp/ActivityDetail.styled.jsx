import styled from "styled-components";

export const BeforeContainer = styled.div`
  margin-bottom: 20px;
  a {
    width: 227px;
    height: 35px;
    font: Poppins;
    font-size: 24px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const JoinButton = styled.button`
  width: 242px;
  height: 45px;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.$joined ? "gray" : "rgba(87, 169, 137, 1)"};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const CountLabel = styled.p`
  width: 242px;
  height: 45px;
  padding: 8px 16px;
  background-color: white;
  color: rgba(87, 169, 137, 1);
  font-size: 22px;
  border: none;
  border-radius: 12px;
`;

export const CountNumber = styled.span`
  font-size: 24px;
  color: purple;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff3c4;
  min-height: 100px;
`;

export const HeaderSectionContainer = styled.div`
  text-align: left;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 20px;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

export const HeaderText = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
  color: black;
`;

export const Label = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px; /* space between icon and text */
  padding: 10px 20px;
  margin: 5px; /* remove default margin */
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 14px;
  max-width: 200px;
  word-wrap: break-word;
  background-color: ${(props) =>
    props.type === "yellow"
      ? "rgba(254, 211, 131, 1)"
      : "rgba(214, 247, 189, 1)"};
  color: black;

  svg {
    width: 17px;
    height: 17px;
    display: inline-block;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`;

export const CardRight = styled.div`
  text-align: right;
  button {
    padding: 6px 12px;
    background-color: ${(props) =>
      props.joined ? "gray" : "rgba(87, 169, 137, 1)"};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
    color: gray;
    margin: 0;
  }
`;

export const HostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff3c4;
  min-height: 300px;
`;

export const HostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* space between image and text */
  margin-bottom: 20px;
`;

export const HostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HostTitle = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: 6px; /* space between icon and text */
  margin: 5px; /* remove default margin */
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
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
`;

export const HostName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const HostSubtitle = styled.p`
  font-size: 16px;
  color: rgba(32, 104, 77, 1);
  font-weight: bold;
  margin: 0;
`;

export const HostDescription = styled.p`
  font-size: 16px;
  font: Inter;
  color: black;
  text-align: left;
  margin-bottom: 8px;
`;

export const HostMemberSince = styled.p`
  width: 255px;
  height: 44px;
  background-color: rgba(254, 211, 131, 1);
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  fonr: Inter;
  color: black;
  margin-bottom: 12px;
`;

export const DescriptionContainer = styled.div`
  border-top: 1px solid grey;
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
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  fonr: Inter;
  color: black;
  margin-bottom: 12px;
`;

export const HostButton = styled.button`
  width: 255px;
  height: 28px;
  // padding: 8px 16px;
  font-size: 22px;
  font: Poppins;
  background-color: white;
  color: rgba(107, 79, 29, 1);
  border: 1px solid rgba(107, 79, 29, 1);
  border-radius: 5px;
  cursor: pointer;
`;

export const TitleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff3c4;
`;

export const CardTitle = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: 6px; /* space between icon and text */
  margin: 5px; /* remove default margin */
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;

  svg {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  font-family: "Inter", sans-serif;
`;

export const CardWhatToBring = styled.div`
  border-top: 1px solid darkgrey;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const BringList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const BringBadge = styled.li`
  background: linear-gradient(to right, #fdd86c, #f9b233);
  color: white;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ParticipantsCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff3c4;
`;

export const ParticipantList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ParticipantBadge = styled.li`
  background: linear-gradient(to right, #fdd86c, #f9b233);
  color: white;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;

export const ParticipantImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const LocationCardContainer = styled.div`
  border-top: 1px solid darkgrey;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const LocationTitle = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;

export const LocationContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LocationImage = styled.img`
  max-width: 300px;
  height: 150px;
  object-fit: cover;
`;

export const DirectionButton = styled.button`
  padding: 8px 16px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
