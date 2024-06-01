// [layout.jsx]
"use client";
import "./globals.css";
import SideNav from "@/app/components/sideNav";
import SideEditor from "@/app/components/sideEditor";
import { usePathname } from "next/navigation";
import { SideEditorState } from "@/states/SideEditorState";
import ButtonCreate from "@/app/components/ButtonCreate";
import ProjectForm from "@/app/components/projectForm";
import TaskForm from "@/app/components/taskForm";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const useSideEditorState = SideEditorState();

  let titulo = "";

  if (pathname === "/") {
    titulo = "Pagina principal";
  } else if (pathname === "/proyectos") {
    titulo = "Proyectos";
  } else if (pathname === "/tareas") {
    titulo = "Tareas";
  } else if (pathname === "/logs") {
    titulo = "Logs";
  }

  function handleCreateProject() {
    useSideEditorState.setIsEditing(true);
    useSideEditorState.setComponent(<ProjectForm proyecto={{}} />);
  }

  function handleCreateTask() {
    useSideEditorState.setIsEditing(true);
    useSideEditorState.setComponent(<TaskForm tarea={{}} />);
  }

  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <SideNav />
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            <div className="flex flex-wrap justify-between content-center items-center text-center ">
              <h1 className="text-4xl my-4 font-bold">{titulo}</h1>
              {titulo === "Proyectos" && (
                <ButtonCreate onClick={handleCreateProject} />
              )}
              {titulo === "Tareas" && (
                <ButtonCreate onClick={handleCreateTask} />
              )}
            </div>
            {children}
          </div>
          <SideEditor />
        </div>
      </body>
    </html>
  );
}
