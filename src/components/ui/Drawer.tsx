'use client'
import { X } from "lucide-react";
import useDrawer from "../../../store/UseDrawerStore";

export default function Drawer() {
  const {isOpen, onOpen} = useDrawer();

  const drawer = {
    open: 'translate-x-0',
    close: '-translate-x-full',
  }

  return (
    <>
      <div className={`fixed w-4/5 h-full p-4 transition-all duration-300 bg-gray-900 bg-opacity-80 z-50 ${isOpen ? drawer.open : drawer.close}` } id="overlay">
        <div className="w-full flex justify-end">
          <button className="cursor-pointer" onClick={onOpen}>
            <X color="white"/>
          </button>
        </div>
      </div>
    </>
  )
  }