import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import { TbBookmarks, TbLanguage, TbLogout } from "react-icons/tb";

function Footer() {
  const { data: session } = useSession();

  return (
    session && (
      <div className="w-full md:w-1/3 rounded-full fixed bottom-2 flex items-center justify-between border shadow text-stone-800">
        <Link
          className="flex flex-col gap-1 p-3 w-full items-center justify-center cursor-pointer  rounded-l-full hover:bg-stone-100"
          href="/start"
        >
          <TbLanguage size={28} />
          <span className="text-xs">New Game</span>
        </Link>
        <Link
          className="flex flex-col gap-1 p-3 w-full items-center justify-center cursor-pointer border-x hover:bg-stone-100"
          href="/words"
        >
          <TbBookmarks size={28} />
          <span className="text-xs">Words</span>
        </Link>
        <div
          className="flex flex-col gap-1 p-3 w-full items-center justify-center cursor-pointer  rounded-r-full hover:bg-stone-100"
          onClick={() => signOut()}
        >
          <TbLogout size={28} />
          <span className="text-xs">Log Out</span>
        </div>
      </div>
    )
  );
}

export default Footer;
