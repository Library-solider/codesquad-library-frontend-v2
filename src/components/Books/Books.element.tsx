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

    .book-title,
    .book-author {
      width: 70%;
    }
  }
`;
