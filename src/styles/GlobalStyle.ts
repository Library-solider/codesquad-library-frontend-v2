import styled, { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";

/* Util */
import px2vw from "../utils/style";

const fonts = css`
  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 300;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf")
        format("truetype");
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NanumBarunGothic", sans-serif;
  }

  html {
   position : relative;

  }

  body {
    color : ${(props) => props.theme.colors.basicFont};
    width : 100vw;
    overflow-x : hidden;
  }
  
  :root {
      /* font-size: ${px2vw(24)};

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      } */
    }
    button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline : none;
  }

  a {
    text-decoration: none;
    outline: none;
    color : inherit;
    }


  input {
    border : none;
    :focus  {
     outline : none;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
