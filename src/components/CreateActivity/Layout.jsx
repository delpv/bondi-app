import styled from "styled-components";

export const FormWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(18, 22, 25, 0.08);
  padding: 32px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

export const Primary = styled.button`
  background: #2d936c;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1a6840;
  }
`;

export const Secondary = styled.button`
  background: white;
  color: #1a6840;
  border: 1px solid #1a6840;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;
