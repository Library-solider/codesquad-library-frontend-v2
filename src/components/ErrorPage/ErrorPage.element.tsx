import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  svg {
    font-size: 200px;
  }

  h2 {
    margin-top: 24px;
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    margin: 24px;
    padding: 12px;
    background-color: ${({ theme: { colors } }) => colors.green};
    color: ${({ theme: { colors } }) => colors.white};
    border-radius: 6px;
  }
`;

export const CustomErrorWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  svg {
    font-size: 200px;
  }

  a {
    margin: 24px;
    padding: 12px;
    background-color: ${({ theme: { colors } }) => colors.green};
    color: ${({ theme: { colors } }) => colors.white};
    border-radius: 6px;
  }

  h2 {
    margin-top: 24px;
    font-size: 2rem;
    font-weight: bold;
  }
`;
