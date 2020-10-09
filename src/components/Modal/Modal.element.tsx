import styled from "styled-components";

export const DimmedLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: ${({ theme: { colors } }) => colors.black};
`;
export const ModalWrapper = styled.div`
  z-index: 4;
  position: fixed;
  box-sizing: border-box;
  border-radius: 4px;
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};

  @media only screen and (max-width: 1024px) {
    width: 60%;
  }

  @media only screen and (max-width: 540px) {
    width: 90%;
  }
`;
