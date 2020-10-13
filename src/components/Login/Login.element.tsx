import styled from "styled-components";

export const LoginWrapper = styled.div`
  .user-info {
    width: 36px;
    height: 36px;

    img {
      width: inherit;
      height: inherit;
      border-radius: 50%;
    }
  }

  .desktop-login-viewer {
    @media only screen and (max-width: 540px) {
      display: none;
    }
  }
`;

export const LoginMobileViewerWrapper = styled.div`
  display: none;

  svg {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 540px) {
    display: block;
  }
`;

export const CategoryToggleWrapper = styled.ul`
  position: absolute;
  height: 100vh;
  width: 80vw;
  z-index: 100;
  left: 53%;
  top: 0;
  padding: 12px;
  font-size: 1.6rem;

  svg {
    font-size: 2rem;
  }

  li {
    margin: 24px 0;

    :hover {
      opacity: 0.7;
    }
  }
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};

  -webkit-animation: slide-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
`;
