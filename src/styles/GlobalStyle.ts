import styled, { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";

/* Util */

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
    box-sizing: border-box;
    font-family: "NanumBarunGothic", sans-serif;
  }

  :root {
    overflow-x : hidden;
  }
  
  html {
    position : relative;
    min-height: 100%;
  }

  body {
    overflow-x : hidden;
    max-width : 100vw;
    color : ${(props) => props.theme.colors.basicFont};
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
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 1024px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
