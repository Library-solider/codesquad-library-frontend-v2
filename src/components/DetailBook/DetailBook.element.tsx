import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const DetailBookWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DetailBookContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 1024px;
`;

export const DetailBookContent = styled.div`
  width: 100%;

  .detail-book-top {
    display: flex;
    margin-bottom: 60px;

    .book-cover {
      width: 300px;
      margin-right: 12px;
    }

    .book-info {
      line-height: 1.6rem;
      .detail-book-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 12px;
      }
    }

    img {
      width: inherit;
      box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    }
  }

  .detail-book-bottom {
    .bottom-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 2px solid #767676;
    }

    .detail-book-content {
      line-height: 1.6rem;
    }
  }
`;
