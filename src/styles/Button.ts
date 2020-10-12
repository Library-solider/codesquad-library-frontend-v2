import styled from "styled-components";

// interface IStyleButton {
//   fillColor: string;
//   textColor: string;
// }

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const DefaultButton = styled.button``;
