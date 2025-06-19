import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls smoothly to the element referenced by the URL hash.
 *
 * @returns null
 */
const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str:string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;