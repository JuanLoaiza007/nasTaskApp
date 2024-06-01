"use client";
import { useState } from "react";
import { SideEditorState } from "@/states/SideEditorState";

export default function SideEditor() {
  const useSideEditorState = SideEditorState();

  return (
    <>
      {useSideEditorState.isEditing && (
        <div className="max-w-lg mx-2 px-2">
          <button
            className="
            px-4 py-2 my-4 text-white bg-blue-600 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer"
            onClick={() => {
              useSideEditorState.setIsEditing(false);
            }}
          >
            {">"}
          </button>
          {useSideEditorState.component}
        </div>
      )}
    </>
  );
}
