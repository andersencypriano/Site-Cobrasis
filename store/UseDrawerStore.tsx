import { create } from 'zustand'

interface DrawerState {
  isOpen: boolean;
  onOpen: () => void;
}

const useDrawer = create<DrawerState>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export default useDrawer;