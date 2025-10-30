'use client'
import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after first render
    setIsHydrated(true);
    
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  // Return false during SSR and initial hydration to prevent mismatch
  if (!isHydrated) {
    return false;
  }

  return isMobile;
}