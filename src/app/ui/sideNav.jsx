// [sideNav.jsx]
"use client";
import Link from "next/link";
import { AppState } from "@/states/AppState";
import { usePathname } from "next/navigation";
import ButtonSideNav from "./buttonSideNav";

export default function SideNav() {
  const useAppState = AppState();
  const pathname = usePathname();

  function handleClick() {}

  return (
    <div className="flex flex-col h-full w-full md:w-48 px-3 py-4 md:px-2 md:flex-shrink-0 bg-blue-100">
      <div className="mb-4 bg-blue-800 text-white text-center p-4 rounded-lg">
        <Link href="/" className="text-2xl font-bold ">
          <p>{useAppState.appName}</p>
          <p className="text-sm font-medium text-slate-200">
            v{useAppState.appVersion}
          </p>
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <ButtonSideNav name="Proyectos" />
        <ButtonSideNav name="Tareas" />
        <ButtonSideNav name="Logs" />
      </div>
    </div>
  );
}
