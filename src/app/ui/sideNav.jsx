"use client";
import Link from "next/link";
import { AppState } from "@/states/AppState";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const useAppState = AppState();
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full w-full md:w-48 px-3 py-4 md:px-2 md:flex-shrink-0">
      <div className="mb-4 bg-blue-600 text-white text-center p-4 rounded-lg">
        <Link href="/" className="text-2xl font-bold ">
          <p>{useAppState.appName}</p>
          <p className="text-sm font-medium text-slate-200">
            v{useAppState.appVersion}
          </p>
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <Link
          href="/proyectos"
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3

            ${pathname === "/proyectos" ? "bg-sky-100 text-blue-600" : ""}`}
        >
          Proyectos
        </Link>
        <Link
          href="/tareas"
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3

            ${pathname === "/tareas" ? "bg-sky-100 text-blue-600" : ""}`}
        >
          Tareas
        </Link>
      </div>
      <div className="mt-auto">
        <Link
          href="/logs"
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3

            ${pathname === "/logs" ? "bg-sky-100 text-blue-600" : ""}`}
        >
          Logs
        </Link>
      </div>
    </div>
  );
}
