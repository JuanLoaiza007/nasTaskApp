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
        className={`flex flex-col p-4 my-2 rounded-xl hover:cursor-pointer transition ease-in-out duration-50 ${
          type === "log"
            ? "bg-blue-100 hover:bg-slate-200"
            : "bg-blue-100 hover:bg-blue-500 hover:text-white"
        }`}
        onClick={type !== "log" ? handleClick : null}
      >
        <div className="flex justify-between w-full p-2">
          <div>
            <div className="text-lg font-bold px-2">
              {data.nombre || `Operacion: ${data.operacion}`}
            </div>
            {type === "tarea" && (
              <div className="px-2">
                <p className="text-md">
                  <strong>Id proyecto:</strong> {data.proyecto_id}
                </p>
              </div>
            )}
            {type === "log" && (
              <div className="px-2">
                <p>
                  <strong className="text-lg">Detalles:</strong> {data.detalles}
                </p>
              </div>
            )}
          </div>
          <div className="text-sm font-medium px-2">
            {type !== "log" ? (
              <>
                Termina el:{" "}
                <strong>
                  <p>{formatDate(data.fecha_terminacion)}</p>
                </strong>
              </>
            ) : (
              <div className="text-slate-600 my-auto px-2">
                <div>
                  <p className="text-sm">Fecha:</p>
                  <p className="text-md font-medium">
                    {formatDate(data.timestamp)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
