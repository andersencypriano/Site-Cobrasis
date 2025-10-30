import { create } from 'zustand'

interface DrawerState {
  isOpen: boolean;
  closeMenu: () => void;
  onOpen: () => void;
}

const useDrawer = create<DrawerState>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set(() => ({ isOpen: false })),
}))

export default useDrawer;