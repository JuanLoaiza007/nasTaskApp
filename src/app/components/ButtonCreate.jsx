import { SideEditorState } from "@/states/SideEditorState";

export default function ButtonCreate({ onClick }) {
  const useSideEditorState = SideEditorState();

  return (
    <>
      {!useSideEditorState.isEditing && (
        <button
          className="px-5 py-3 font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100"
          onClick={onClick}
        >
          +
        </button>
      )}
    </>
  );
}
