import Image from "next/image";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    session && (
      <div className="px-2 w-full md:w-1/3">
        <div className="flex items-center justify-between rounded-full p-2 border mb-3 shadow">
          <div className="flex items-center justify-center gap-2 ">
            {session.user?.image && (
              <div className="relative h-10 w-10">
                <Image
                  src={session.user?.image}
                  alt={session.user?.name || ""}
                  className="inline-block rounded-full"
                  fill
                  sizes="10"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span>{session.user?.name}</span>
              <span className="text-xs text-gray-400">{session.user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Header;
