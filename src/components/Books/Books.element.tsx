import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const BooksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BooksContainer = styled(Container)`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .book-card {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      width: 33.33333%;
    }

    @media only screen and (max-width: 540px) {
      width: 100%;
    }
  }

  .book-title,
  .book-author {
    width: 70%;
  }
`;
