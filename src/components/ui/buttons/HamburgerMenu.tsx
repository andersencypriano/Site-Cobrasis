
"use client";
import { MenuIcon } from "lucide-react";
import useDrawer from "../../../../store/UseDrawerStore";

export default function HamburgerMenu() {
  const {onOpen} = useDrawer();
  return (
    <>
      <button 
        className="flex items-center w-10 h-10 cursor-pointer"
        onClick={onOpen}
      >
        <MenuIcon color="white"/>
      </button>
    </>
  );
}
