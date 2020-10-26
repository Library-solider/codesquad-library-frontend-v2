import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const MainBookWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainCarouselWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;

  img {
    width: inherit;
  }

  .carousel-title {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .slick-track {
    display: flex;
    align-items: flex-end;
  }

  .slick-prev {
    z-index: 10;
    left: -10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev,
  .slick-next {
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme: { colors } }) => colors.basicFont};
    font-size: 36px;
  }
`;
