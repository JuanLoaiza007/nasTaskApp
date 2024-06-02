"use client";
import { usePathname } from "next/navigation";
import { SideEditorState } from "@/states/SideEditorState";
import ProjectForm from "@/app/components/projectForm";
import TaskForm from "@/app/components/taskForm";
import ButtonCreate from "@/app/components/ButtonCreate";

export default function SectionTitle() {
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
    <div className="flex flex-wrap justify-between content-center items-center text-center ">
      <h1 className="text-4xl my-4 font-bold select-none">{titulo}</h1>
      {titulo === "Proyectos" && <ButtonCreate onClick={handleCreateProject} />}
      {titulo === "Tareas" && <ButtonCreate onClick={handleCreateTask} />}
    </div>
  );
}
