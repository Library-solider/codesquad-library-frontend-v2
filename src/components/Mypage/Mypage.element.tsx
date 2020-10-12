import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";
import { Button } from "../../styles/Button";

export const MypageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MypageContainer = styled(Container)`
  margin-top: 60px;
`;

export const UserInfoWrapper = styled.div`
  z-index: 0;
  width: 100%;
  padding-bottom: 48px;
  border-bottom: 2px solid rgb(233, 236, 239);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .user-info-left {
    display: flex;
    align-items: center;
  }

  .user-name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .user-email {
    font-weight: bold;
  }

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    img {
      margin-bottom: 12px;
    }
  }
`;

export const RentalListWrapper = styled.div`
  margin-top: 60px;
  width: 100%;

  .rental-list-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .none-rental-list {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: bold;
    svg {
      font-size: 200px;
      margin-bottom: 24px;
    }
  }
`;

export const RentalCardWrapper = styled.li<{ isReturn: boolean }>`
  width: 33.3333%;
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .return-date {
    margin-bottom: 4px;
    font-weight: bold;
    color: ${(props) =>
      props.isReturn ? props.theme.colors.red : props.theme.colors.green};
  }

  img {
    height: inherit;
    width: inherit;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const RentalList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ReturnModalWrapper = styled.div`
  text-align: center;
  .modal-content {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #767676;
  }

  .modal-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      justify-content: center;
      width: 40%;
      margin: 12px;
    }

    .cancel-button {
      background-color: ${({ theme: { colors } }) => colors.red};
    }
  }
`;

export const LogoutButton = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.red};
`;
