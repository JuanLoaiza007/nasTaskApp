// [buttonSideNav.jsx]
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonSideNav({ name }) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${name.toLowerCase()}`}
      className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 hover:bg-blue-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
            ${
              pathname === `/${name.toLowerCase()}`
                ? "bg-blue-700 text-white"
                : ""
            }`}
    >
      {name}
    </Link>
  );
}
