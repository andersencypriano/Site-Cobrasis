"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import Menu from "./Menu";
import HamburgerMenu from "../ui/buttons/HamburgerMenu";
import Logo from "../common/Logo";

export default function Header() {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 md:h-[auto] md:top-8 ">
        <div className="relative h-20 container mx-auto p-4 z-10 md:flex md:items-center md:justify-between md:bg-red-50/50 md:rounded-lg">
            {/* Mobile menu - only show on mobile after hydration */}
            <div className="md:hidden absolute top-1/2 -translate-y-1/2">
              {isMobile && <HamburgerMenu />}
            </div>
            
            {/* Logo - centered on mobile, left on desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 md:relative md:left-auto md:translate-x-0">
              <Logo />
            </div>
            
            {/* Desktop menu - only show on desktop after hydration */}
            <div className="hidden md:block">
              {!isMobile && <Menu />}
            </div>
        </div>
    </div>
  );
}