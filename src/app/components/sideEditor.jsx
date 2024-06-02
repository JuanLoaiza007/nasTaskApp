"use client";
import { SideEditorState } from "@/states/SideEditorState";

export default function SideEditor() {
  const useSideEditorState = SideEditorState();

  return (
    <>
      {useSideEditorState.isEditing && (
        <div className="w-full md:max-w-xs">
          <button
            className="
            px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer"
            onClick={() => {
              useSideEditorState.setIsEditing(false);
            }}
          >
            {"X"}
          </button>
          {useSideEditorState.component}
        </div>
      )}
    </>
  );
}
