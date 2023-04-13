import { useEffect, useState } from "react";

/**
 * Listens for media queries using window.matchMedia
 *
 */
const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleEvent = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };

    mediaQuery.addEventListener("change", handleEvent);

    return () => mediaQuery.removeEventListener("change", handleEvent);
  }, [query]);

  return match;
};

export default useMediaQuery;
