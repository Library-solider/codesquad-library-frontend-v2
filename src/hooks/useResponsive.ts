import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const isMobileQueryResult = useMediaQuery({ maxWidth: "450px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileQueryResult);
  }, [isMobileQueryResult]);

  return isMobile;
};

export default useIsMobile;
