import { create } from "zustand";

export const SideEditorState = create((set) => ({
  isEditing: false,
  component: <></>,
  setIsEditing: (value) => set({ isEditing: value }),
  setComponent: (value) => set({ component: value }),
}));
