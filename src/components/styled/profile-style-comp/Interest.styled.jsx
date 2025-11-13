import styled from "styled-components";

// Interest section parent container
export const InterestContainer = styled.section`
  width: 960px;
  max-width: 100%;
  height: auto;
  min-height: 220px;
  border-radius: 12px;
  padding: 6px 10px;
  background: #FFFFFF;
  box-shadow: 
    0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  box-sizing: border-box;
`;

// Interest frame - header section with title and edit button
export const InterestFrame = styled.div`
  width: 100%;
  height: 69px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

// Interest title
export const InterestTitle = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111318;
  margin: 0;
`;

// Edit button
export const EditButton = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background-color 0.2s ease;
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

// Interest chips container - 2 rows, 4 columns grid
export const InterestChipsContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 110px;
  display: grid;
  grid-template-rows: repeat(2, minmax(40px, auto));
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 0;
  box-sizing: border-box;
`;

// Individual interest chip
export const InterestChip = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: ${props => props.isRemoveMode ? 'pointer' : 'default'};
  opacity: ${props => props.isRemoveMode ? 0.7 : 1};
  transform: ${props => props.isRemoveMode ? 'scale(0.95)' : 'scale(1)'};
  transition: all 0.2s ease;
  border: ${props => props.isRemoveMode ? '2px dashed #ff4444' : 'none'};
  background: ${props => {
    switch(props.color) {
      case 'coral': return 'linear-gradient(90deg, #F6B4AF 40.39%, rgba(144, 105, 102, 0.5) 100%)';
      case 'peach': return 'linear-gradient(90deg, #FAE6C8 46.56%, rgba(144, 105, 102, 0.5) 100%)';
      case 'mint': return 'linear-gradient(90deg, #D1EEDF 46.56%, rgba(144, 105, 102, 0.5) 100%)';
      case 'orange': return 'linear-gradient(90deg, #FFB370 55.77%, rgba(144, 105, 102, 0.5) 100%)';
      case 'blue': return 'linear-gradient(90deg, #B8DEFF 0%, #437199 99.67%)';
      case 'purple': return 'linear-gradient(90deg, #D789E2 38.94%, #437199 99.67%)';
      case 'green': return 'linear-gradient(90deg, #ACDD8A 44.23%, #437199 99.67%)';
      default: return 'linear-gradient(90deg, #E5E7EB 0%, #9CA3AF 100%)';
    }
  }};
`;

// Text inside the chip
export const ChipText = styled.span`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  width: 100%;
  height: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Edit dropdown container with relative positioning
export const EditDropdownContainer = styled.div`
  position: relative;
`;

// Edit options dropdown
export const EditDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0;
  min-width: 120px;
  z-index: 10;
  overflow: hidden;
`;

// Edit dropdown option button
export const EditDropdownOption = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: ${props => props.isHovered ? '#68B6FF' : 'white'};
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-radius: 0;
  display: block;
`;

// Chip input for editing
export const ChipInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

// Remove mode tooltip
export const RemoveModeTooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  z-index: 20;
  pointer-events: none;
`;