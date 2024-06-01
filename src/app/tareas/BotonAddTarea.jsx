"use client";
import TaskForm from "@/app/components/taskForm";
import { SideEditorState } from "@/states/SideEditorState";

export default function BotonAddTarea() {
  const useSideEditorState = SideEditorState();

  return (
    <button
      className="px-2 py-1 mx-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer"
      onClick={() => {
        useSideEditorState.setIsEditing(true);
        useSideEditorState.setComponent(<TaskForm tarea={{}} />);
      }}
    >
      +
    </button>
  );
}
