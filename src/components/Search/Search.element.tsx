import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 12px;

  input {
    width: inherit;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    padding: 15px;
    border-radius: 4px;
  }

  svg {
    position: absolute;

    top: 0;
    right: 0;
    height: 100%;
    margin-right: 12px;
    width: 18px;

    :hover {
      color: ${({ theme: { colors } }) => colors.blue};
    }
  }
`;

export default SearchWrapper;
