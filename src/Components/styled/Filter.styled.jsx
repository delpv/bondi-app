import styled from "styled-components";

const coral = "#E78F8E";
const bg = "rgba(255,255,255,0.9)";
const subtle = "#6B7280";
const border = "rgba(0,0,0,0.06)";

export const FilterWrapper = styled.aside`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04),
    rgba(0, 0, 0, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 320px;
  backdrop-filter: blur(4px);
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 14px;
`;

export const FilterTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #111;
`;

export const Icon = styled.span`
  display: inline-grid;
  place-items: center;
`;

export const FilterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: ${subtle};
`;

export const TextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${bg};
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid ${border};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);

  .left-icon {
    display: inline-grid;
    place-items: center;
    color: ${subtle};
    margin-right: 8px;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.95rem;
    color: #111;
    width: 100%;
  }
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  background: ${bg};
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid ${border};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
  font-size: 0.95rem;
  color: #111;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 6px;
`;

export const ApplyButton = styled.button`
  background: ${coral};
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(234, 108, 91, 0.18);
`;

export const ResetButton = styled.button`
  background: white;
  color: #111;
  border: 1px solid ${border};
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;
