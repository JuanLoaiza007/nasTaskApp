import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideEditorState } from "@/states/SideEditorState";

export default function ButtonSideNav({ name, href }) {
  const pathname = usePathname();
  const useSideEditorState = SideEditorState();

  const handleClick = () => {
    useSideEditorState.setIsEditing(false);
  };

  return (
    <Link
      href={`/${name.toLowerCase()}`}
      onClick={handleClick}
      className={`flex h-12 bg-white p-4 my-1 items-center rounded-xl hover:bg-blue-200 hover:text-black
            ${
              pathname === `/${name.toLowerCase()}`
                ? "bg-custom-blue text-white font-bold"
                : ""
            } transition ease-in-out duration-50`}
    >
      {name}
    </Link>
  );
}
