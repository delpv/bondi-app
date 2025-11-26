import styled from "styled-components";

// Activity Status section parent container
export const ActivityStatusContainer = styled.section`
  width: 100%;
  max-width: 960px;
  height: auto;
  min-height: 173px;
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
  width: 190px;
  max-width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  box-sizing: border-box;
`;

// Title section
export const TitleSection = styled.div`
  width: 190px;
  max-width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

// Activity Status title
export const SectionTitle = styled.h2`
  width: 170px;
  max-width: 100%;
  height: 29px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: left;
  color: #111318;
  margin: 0;
`;// Status content container
export const StatusContent = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8vw;
  padding: 10px;
  box-sizing: border-box;

  /* Responsive: Stack on small screens */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 30px;
    padding: 20px 10px;
  }
`;

// Individual status item
export const StatusItem = styled.div`
  width: 200px;
  max-width: 100%;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #FFFFFF;
  flex: 1;
  min-width: 0;

  /* Responsive sizing */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    gap: 10px;
    flex: unset;
  }
`;

// Number container
export const NumberContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

// Status number
export const StatusNumber = styled.span`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #3A00E5;
  margin: 0;
`;

// Text activity container
export const TextContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

// Status description text
export const StatusText = styled.span`
  width: 100%;
  max-width: 200px;
  height: 23px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 120%;
  letter-spacing: 0;
  text-align: center;
  color: #111318;
  display: flex;
  align-items: center;
  justify-content: center;
`;