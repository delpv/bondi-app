import styled from "styled-components";

export const SectionHeader = styled.header`
  margin-bottom: 24px;

  h1 {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0 0 6px 0;
    font-size: 28px;
    line-height: 1.2;
  }

  p {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0;
    opacity: 0.8;
  }
`;

export const FormWrapper = styled.div`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  gap: 12px;

  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

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

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  label {
    font-weight: 600;
    color: #333;
  }

  input,
  textarea,
  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.95rem;
    background: #fff;
    color: #222;
    outline: none;
    transition: border 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: #999;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #2d936c;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const ImagePreview = styled.div`
  margin-top: 8px;
  border: 1px dashed #c9c9c9;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 140px;
  background: #fafafa;
`;

export const PreviewImg = styled.img`
  max-width: 100%;
  max-height: 240px;
  border-radius: 8px;
  display: block;
`;

export const CheckboxLabel = styled.label`
  font-weight: 600;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;
