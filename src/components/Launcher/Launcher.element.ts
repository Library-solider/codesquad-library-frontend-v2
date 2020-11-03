import styled from "styled-components";

export const LauncherWrapper = styled.div`
  position: fixed;
  z-index: 1000;

  bottom: 5%;
  right: 5%;

  svg {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: 34px;
  }
`;

export const LauncherButton = styled.button`
  width: 54px;
  height: 54px;

  border-radius: 31px;
  transition: 0.3s;

  background: linear-gradient(
    rgb(3, 94, 252) 0%,
    rgb(3, 160, 252) 50%,
    rgb(3, 200, 252) 100%
  );

  :hover {
    opacity: 0.7;
  }
`;

export const LauncherToggleWrapper = styled.div`
  position: relative;
  width: 300px;
  border-radius: 12px;
  font-size: 14px;
  padding: 12px;

  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.white};

  background: linear-gradient(
      130deg,
      rgb(3, 94, 252) 0%,
      rgb(3, 160, 252) 50%,
      rgb(3, 200, 252)
    )
    100% center;

  p {
    line-height: 24px;
    font-weight: bold;
  }

  .context-top {
    margin-bottom: 24px;
  }

  .admin-email {
    margin: 24px 0;
  }

  .email-recipient-link {
    display: inline-block;
    background-color: black;
    width: 100%;

    padding: 8px 12px;
    text-align: center;
    background-color: ${({ theme: { colors } }) => colors.green};
  }
`;

export const LauncherToggleHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;

  .close-modal-btn {
    cursor: pointer;
    font-size: 18px;
  }
`;
