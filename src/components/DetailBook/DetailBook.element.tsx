import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";
import { Button } from "../../styles/Button";

export const DetailBookWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DetailBookContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 1024px;

  @media only screen and (max-width: 540px) {
    margin-top: 50px;
  }
`;

export const DetailBookContent = styled.div<{ rentalState: boolean }>`
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
        line-height: 2rem;
      }
    }

    img {
      width: inherit;
      box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    }

    @media only screen and (max-width: 540px) {
      flex-direction: column;

      .book-cover {
        width: 100%;
        margin-bottom: 24px;
      }
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

  .rental-available {
    font-weight: bold;
    color: ${(props) =>
      props.rentalState ? props.theme.colors.red : props.theme.colors.green};
  }
`;

export const RentalButton = styled(Button)<{ isActive: boolean }>`
  width: 100%;
  display: center;
  align-items: center;
  justify-content: center;
  margin: 0;

  opacity: ${(props) => !props.isActive && 0.7};
`;
