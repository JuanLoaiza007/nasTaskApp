"use client";
import { SideEditorState } from "@/states/SideEditorState";
import { formatDate } from "@/utils/formatDate";
import TaskForm from "@/app/ui/taskForm";

export default function MiniCardTarea({ tarea }) {
  const useSideEditorState = SideEditorState();

  return (
    <>
      <div
        className="flex flex-col space-y-2 p-4 rounded-lg bg-blue-100 my-4 hover:bg-blue-400 hover:text-white hover:cursor-pointer"
        onClick={() => {
          useSideEditorState.setIsEditing(true);
          useSideEditorState.setComponent(<TaskForm tarea={tarea} />);
        }}
      >
        <div className="flex justify-between w-full p-2 ">
          <div className="px-2">
            <p className="text-lg font-bold mb-2">{tarea.nombre}</p>
            <p className="text-md">
              <strong>Id proyecto:</strong> {tarea.proyecto_id}
            </p>
          </div>
          <div className="text-sm font-medium text-slate-600 px-2 my-auto">
            Termina el:{" "}
            <strong>
              <p>{formatDate(tarea.fecha_terminacion)}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
