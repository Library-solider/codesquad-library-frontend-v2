import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  background-color: #218ce5;

  @media only screen and (max-width: 540px) {
    padding: 0;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 100;

  img {
    width: 60px;
  }

  .header-left {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;

export const HeaderTop = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTabWrapper = styled.ul`
  display: flex;
  font-size: 14px;
  margin-left: 12px;
  color: ${({ theme: { colors } }) => colors.white};

  li {
    display: flex;
    margin-right: 8px;
  }

  p {
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }

  .category-tab {
    position: relative;

    li {
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const CategoryToggleWrapper = styled.ul`
  position: absolute;
  border-radius: 8px;
  width: 120px;
  z-index: 30;
  top: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.basicFont};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};

  li {
    padding: 12px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 32px;
  padding: 12px;
  background-color: ${({ theme: { colors } }) => colors.green};
  color: ${({ theme: { colors } }) => colors.white};

  :hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
