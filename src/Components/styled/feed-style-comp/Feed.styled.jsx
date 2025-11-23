import styled from "styled-components";

export const SectionHeader = styled.div`
  margin-bottom: 24px;
  margin-left: 20px;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.95rem;
    color: #6b6b6b;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 36px auto 0;
  padding: 10px 22px;
  background-color: #d4efe0;
  color: #1a6840;
  border: 1.5px solid #1a6840;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a6840;
    color: white;
  }
`;
