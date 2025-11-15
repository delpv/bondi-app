import styled from "styled-components";

const ink = "#111318";
const subtle = "rgba(0,0,0,0.78)";
const green = "#1F7A64";
const card = "#ff97208f";

export const Right = styled.aside`
  border-radius: 14px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: ${ink};
  text-align: center;
  min-height: 540px;

  @media (max-width: 900px) {
    min-height: unset;
    padding: 24px 18px;
  }
`;

export const IconCard = styled.div`
  width: min(520px, 90%);
  height: 200px;
  background: ${card};
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.27);
  color: #fff;
  display: grid;
  place-items: center;
  padding: 16px;

  .emoji {
    font-size: 34px;
    margin-bottom: 4px;
  }

  .text {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const Pitch = styled.div`
  display: grid;
  gap: 4px;

  h3 {
    margin: 0;
    font-weight: 700;
  }
`;

export const Lead = styled.p`
  margin: 6px 0 8px;
  color: ${subtle};
  line-height: 1.5;
  max-width: 560px;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 6px 0 0;
  display: grid;
  gap: 8px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  &:before {
    content: "✔";
    color: ${green};
  }
`;
