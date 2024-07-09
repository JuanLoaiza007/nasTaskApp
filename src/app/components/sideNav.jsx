// [sideNav.jsx]
"use client";
import Link from "next/link";
import { AppState } from "@/states/AppState";
import { usePathname } from "next/navigation";
import ButtonSideNav from "./buttonSideNav";
import { useState } from "react";

export default function SideNav() {
  const useAppState = AppState();
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col flex-wrap md:h-full py-2 px-4 bg-blue-100">
      <div className="flex flex-row content-center justify-between md:flex-col flex-wrap bg-blue-800 text-white rounded-xl">
        <div className="p-4 mb-4 text-white rounded-lg">
          <Link href="/" className="text-2xl font-bold ">
            <p>{useAppState.appName}</p>
            <p className="text-sm font-medium text-slate-200">
              v{useAppState.appVersion}
            </p>
          </Link>
        </div>
        <button
          className={`p-4 m-4 border-2 border-white text-bold rounded-full block md:hidden ${
            showMenu ? "bg-white text-blue-800" : "text-white"
          } transition ease-in-out duration-200`}
          onClick={handleShowMenu}
        >
          ☰
        </button>
      </div>
      <div
        className={`flex flex-col mt-2 flex-wrap text-center ${
          showMenu ? "block" : "hidden"
        } md:block`}
      >
        <ButtonSideNav name="Proyectos" />
        <ButtonSideNav name="Tareas" />
        <ButtonSideNav name="Logs" />
      </div>
    </div>
  );
}
