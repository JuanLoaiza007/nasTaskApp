// [AppState.jsx]
import { create } from "zustand";

export const AppState = create((set) => ({
  appName: "nasTaskApp",
  appVersion: "0.2.1",
  setAppName: (appName) => set({ appName }),
  setAppVersion: (appVersion) => set({ appVersion }),
}));
