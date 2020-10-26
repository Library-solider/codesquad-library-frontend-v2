import styled from "styled-components";

const BookCardWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 12px;
  outline: none;

  img {
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    height: auto;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default BookCardWrapper;
