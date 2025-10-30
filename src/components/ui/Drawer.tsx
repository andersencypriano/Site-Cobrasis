'use client'
import { X } from "lucide-react";
import useDrawer from "../../../store/UseDrawerStore";
import Menu from "../layout/Menu";

export default function Drawer() {
  const { isOpen, onOpen } = useDrawer();

  const drawer = {
    open: 'translate-x-0',
    close: '-translate-x-full',
  }

  return (
    <>
      <div className={`fixed w-full h-full p-4 transition-all duration-300  bg-gray-900 z-40 pt-32 ${isOpen ? drawer.open : drawer.close}`} id="overlay">
        <div className="flex justify-end mb-8">
          <button className="cursor-pointer" onClick={onOpen}>
            <X color="white" />
          </button>
        </div>
        <div className="pt-4 pb-4 border-t-gray-500 border-b-gray-500 border-t border-b">
          <Menu direction="column" />
        </div>
        <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
          <div className="mt-3 rounded-lg sm:mt-0">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </>
  )
}