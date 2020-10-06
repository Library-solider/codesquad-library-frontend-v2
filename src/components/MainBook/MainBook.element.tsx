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

  .carousel-title {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .slick-track {
    display: flex;
    align-items: flex-end;
  }
`;

export const MainBookCardWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 12px;
  outline: none;

  img {
    width: inherit;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  }

  .book-title {
    padding-top: 12px;
    margin-bottom: 6px;
  }

  .book-title,
  .book-author {
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
