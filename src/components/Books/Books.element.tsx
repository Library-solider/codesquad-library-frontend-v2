import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const BooksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BooksContainer = styled(Container)`
  z-index: 0;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;

  .book-card {
    width: 20%;

    @media only screen and (max-width: 1024px) {
      width: 33.33333%;
    }

    @media only screen and (max-width: 540px) {
      width: 100%;
    }
  }
`;
