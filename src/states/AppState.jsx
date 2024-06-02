// [AppState.jsx]
import { create } from "zustand";

export const AppState = create((set) => ({
  appName: "nasTaskApp",
  appVersion: "0.3.0",
  setAppName: (appName) => set({ appName }),
  setAppVersion: (appVersion) => set({ appVersion }),
}));
