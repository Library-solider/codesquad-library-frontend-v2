import React from "react";
import FooterWrapper from "./Footer.element";

const COPY_RIGHT = "Copyright © 2020 codesquad library. All rights reserved";
const ADMIN_EMAIL = "jhchoi1115@gmail.com";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>{COPY_RIGHT}</div>
      <a href="mailto:jhchoi1115@gmail.com">{ADMIN_EMAIL}</a>
    </FooterWrapper>
  );
};

export default Footer;
