// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      basicFont: string;

      black: string;
      white: string;
      red: string;
      blue: string;
      green: string;
      gray: string;
    };

    boxShadow: {
      base: string;
    };
  }
}
