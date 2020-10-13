import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 12px;

  input {
    position: relative;
    width: inherit;
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    padding: 15px;
    border-radius: 4px;
    z-index: 2;
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

export const SearchHistoryWrapper = styled.ul`
  position: absolute;
  z-index: 22;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
  top: 110%;
  border-radius: 4px;
  font-size: 14px;
  color: #969ea4;

  li {
    padding: 12px;
  }

  .none-searh-history {
    text-align: center;
  }

  .clear-all-history {
    cursor: pointer;
    display: inline-block;
    :hover {
      color: ${({ theme: { colors } }) => colors.blue};
    }
  }
`;

export const HistoryItemWrapper = styled.li<{ isFocusing: boolean }>`
  padding: 12px 0;
  color: ${({ theme: { colors } }) => colors.basicFont};
  background-color: ${(props) => props.isFocusing && "#F2F2F2"};
  display: flex;
`;

export default SearchWrapper;
