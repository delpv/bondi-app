import styled from "styled-components";

// About section parent container
export const AboutContainer = styled.section`
  width: 100%;
  max-width: 960px;
  height: auto;
  min-height: 139px;
  border-radius: 12px;
  padding: 6px 10px;
  background: #FFFFFF;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  box-sizing: border-box;
`;

// About frame - header section with title and edit button
export const AboutFrame = styled.div`
  width: 100%;
  height: 69px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

// About title
export const AboutTitle = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111318;
  margin: 0;
`;

// Edit button
export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  width: 32px;
  height: 32px;
  position: relative;

  &:hover {
    background-color: #f3f4f6;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #6b7280;
  }
`;

// About text content container
export const AboutTextContainer = styled.div`
  width: 100%;
  min-height: 58px;
  padding: 10px;
  gap: 10px;
`;

// About text content
export const AboutText = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #374151;
  margin: 0;
`;

// About textarea for editing
export const AboutTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #374151;
  margin: 0 0 12px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  background: ${props => props.disabled ? '#f5f5f5' : 'white'};
  resize: vertical;
  box-sizing: border-box;
`;

// About edit actions container
export const AboutEditActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

// Base about edit button styles
const BaseAboutEditButton = styled.button`
  padding: 6px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

// About edit button variants
export const AboutDiscardButton = styled(BaseAboutEditButton)`
  background-color: #6c757d;
`;

export const AboutSaveButton = styled(BaseAboutEditButton)`
  background-color: #28a745;
`;