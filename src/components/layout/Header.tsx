"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsScrolled } from "@/utils/IsScrolled";
import Menu from "./Menu";
import HamburgerMenu from "../ui/buttons/HamburgerMenu";
import Logo from "../common/Logo";

export default function Header() {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 md:h-[auto]">
      <div className={`relative h-20 md:h-[auto] p-4 z-10 transition-all duration-300 ${isScrolled ? 'md:bg-gray-900' : 'md:bg-gray-0'} `}>
        <div className="container relative mx-auto md:flex md:items-center md:justify-between">
          {/* Mobile menu - only show on mobile after hydration */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2">
            {isMobile && <HamburgerMenu />}
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 md:relative md:left-auto md:translate-x-0 md:top-[auto] md:translate-y-[auto]">
            <Logo width={80} height={91} />
          </div>

          {/* Desktop menu - only show on desktop after hydration */}
          <div className="hidden md:block">
            {!isMobile && <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
}