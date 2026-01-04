import styled from "styled-components";

export const BeforeContainer = styled.div`
  margin-bottom: 20px;
  a {
    width: 227px;
    height: 35px;
    font-family: Poppins;
    font-size: 24px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const JoinButton = styled.button`
  width: 100%;
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

  gap: 20px;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  min-height: 100px;
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

export const Label = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  margin: 5px;
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
