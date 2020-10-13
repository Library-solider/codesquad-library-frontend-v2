import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const RecommendWrapper = styled.div`
  width: 100%;

  .slick-dots {
    bottom: 25px;
  }
`;

export const RecommendCardWrapper = styled.div<{ themeColor: string }>`
  width: 100%;
  height: 360px;
  background-color: ${(props) => props.themeColor};
  color: ${({ theme: { colors } }) => colors.white};
`;

export const RecommendCardContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2rem;

  .card-title {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    width: 300px;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 150px;
    }
  }

  @media only screen and (max-width: 540px) {
    img {
      display: none;
    }
  }
`;

export const RecommendButton = styled.button`
  height: 36px;
  padding: 0 16px;
  margin-right: 8px;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px #ced4da;
  background-color: white;
  font-weight: bold;
  margin-bottom: 4px;

  :hover {
    color: #218ce5;
    box-shadow: inset 0 0 0 3px #218ce5;
  }
`;
