// [MiniCard.jsx]
"use client";
import { SideEditorState } from "@/states/SideEditorState";
import TaskForm from "@/app/components/taskForm";
import ProjectForm from "@/app/components/projectForm";
import { formatDate } from "@/utils/formatDate";

export default function MiniCard({ data, type }) {
  const useSideEditorState = SideEditorState();

  const handleClick = () => {
    useSideEditorState.setIsEditing(true);
    if (type === "tarea") {
      useSideEditorState.setComponent(<TaskForm tarea={data} />);
    } else if (type === "proyecto") {
      useSideEditorState.setComponent(<ProjectForm proyecto={data} />);
    }
  };

  return (
    <>
      <div
        className="flex flex-col p-4 rounded-xl bg-blue-100 my-4 hover:bg-blue-500 hover:text-white hover:cursor-pointer transition ease-in-out duration-50"
        onClick={handleClick}
      >
        <div className="flex justify-between w-full p-2">
          <div>
            <div className="text-lg font-bold px-2">{data.nombre}</div>
            {type === "tarea" && (
              <div className="px-2">
                <p className="text-md">
                  <strong>Id proyecto:</strong> {data.proyecto_id}
                </p>
              </div>
            )}
          </div>
          <div className="text-sm font-medium px-2">
            Termina el:{" "}
            <strong>
              <p>{formatDate(data.fecha_terminacion)}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
