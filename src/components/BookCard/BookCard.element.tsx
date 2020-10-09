import styled from "styled-components";

const BookCardWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 12px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  }

  .book-title {
    font-weight: bold;
    padding-top: 12px;
  }

  .book-author {
    padding-top: 6px;
  }

  .book-title,
  .book-author {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default BookCardWrapper;
