"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import Menu from "./Menu";
import HamburgerMenu from "../ui/buttons/HamburgerMenu";
import Logo from "../common/Logo";

export default function Header() {
  let isMobile = useIsMobile();
  return (
    <div className="w-full">
        <div className="container mx-auto flex md:justify-between items-center p-4">
            { isMobile && <HamburgerMenu />}
            <div className="absolute left-1/2 -translate-x-1/2 md:static">
              <Logo />
            </div>
            { !isMobile && <Menu />}
        </div>
    </div>
  );
}