import styled from "styled-components";

// Recent Activities section parent container
export const RecentActivitiesContainer = styled.section`
  width: 100%;
  max-width: 960px;
  height: auto;
  min-height: 216px;
  border-radius: 12px;
  padding: 6px 10px;
  background: #FFFFFF;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

// Header frame - contains title
export const HeaderFrame = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  box-sizing: border-box;
`;

// Title section
export const TitleSection = styled.div`
  width: 100%;
  max-width: 196px;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

// Recent Activities title
export const SectionTitle = styled.h2`
  width: 100%;
  max-width: 196px;
  height: 29px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: left;
  color: #111318;
  margin: 0;
`;

// Activities content container
export const ActivitiesContent = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  gap: 40px;
  padding: 4px;
  box-sizing: border-box;
  overflow-x: auto;
  
  /* Responsive: Stack on small screens */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

// Individual activity image container
export const ActivityImageContainer = styled.div`
  width: 280px;
  height: 120px;
  min-width: 280px;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Hover animations */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive sizing */
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    height: 160px;
  }
`;

// Activity image
export const ActivityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease;
`;

// Activity overlay (for text on image if needed)
export const ActivityOverlay = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #FFF;
  color: var(--normal, #19191B);
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.28px;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
  height: 24px;
  width: auto;
  min-width: fit-content;
  max-width: calc(100% - 32px);
  white-space: nowrap;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;