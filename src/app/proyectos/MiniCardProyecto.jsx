// [MiniCardProyecto.jsx]
"use client";
import { SideEditorState } from "@/states/SideEditorState";
import ProjectForm from "@/app/components/projectForm";
import { formatDate } from "@/utils/formatDate";

export default function MiniCardProyecto({ proyecto }) {
  const useSideEditorState = SideEditorState();

  return (
    <>
      <div
        className="flex flex-col space-y-2 p-4 rounded-lg bg-blue-100 my-4 hover:bg-blue-400 hover:text-white hover:cursor-pointer transition ease-in-out duration-50"
        onClick={() => {
          useSideEditorState.setIsEditing(true);
          useSideEditorState.setComponent(<ProjectForm proyecto={proyecto} />);
        }}
      >
        <div className="flex justify-between w-full p-2">
          <div className="text-lg font-bold my-auto px-2">
            {proyecto.nombre}
          </div>
          <div className="text-sm font-medium text-slate-600 px-2">
            Termina el:{" "}
            <strong>
              <p>{formatDate(proyecto.fecha_terminacion)}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
