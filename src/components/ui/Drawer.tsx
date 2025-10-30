'use client'
import { X } from "lucide-react";
import useDrawer from "../../../store/UseDrawerStore";
import Menu from "../layout/Menu";

export default function Drawer() {
  const {isOpen, onOpen} = useDrawer();

  const drawer = {
    open: 'translate-x-0',
    close: '-translate-x-full',
  }

  return (
    <>
      <div className={`fixed w-full h-full p-4 transition-all duration-300  bg-gray-900/95 z-40 pt-32 ${isOpen ? drawer.open : drawer.close}` } id="overlay">
        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={onOpen}>
            <X color="white"/>
          </button>
        </div>
        <Menu direction="column"/>
      </div>
    </>
  )
  }