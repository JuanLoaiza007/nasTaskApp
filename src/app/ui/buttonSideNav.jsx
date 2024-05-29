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
      className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 hover:bg-blue-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3
            ${
              pathname === `/${name.toLowerCase()}`
                ? "bg-custom-blue text-white font-bold"
                : ""
            }`}
    >
      {name}
    </Link>
  );
}
