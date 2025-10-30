"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import Menu from "./Menu";
import HamburgerMenu from "../ui/buttons/HamburgerMenu";
import Logo from "../common/Logo";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-gray-900 md:h-[auto] ">
      <div className={`relative md:h-[auto] p-4 z-10 transition-all duration-300`}>
        <div className="container relative mx-auto md:flex md:items-center md:justify-between">
          {/* Mobile menu - only show on mobile after hydration */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2">
            {isMobile && <HamburgerMenu />}
          </div>

          {isMobile && (
            <div className="w-full flex justify-center">
              <Logo width={60} height={91} />
            </div>
          )}

          {!isMobile && (
            <div className="">
              <Logo width={80} height={91} />
            </div>
          )}


          {/* Desktop menu - only show on desktop after hydration */}
          <div className="hidden md:block">
            {!isMobile && <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
}