import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

export const ContentContainer = styled.div`
  max-width: 800px;
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 30px;
`;
