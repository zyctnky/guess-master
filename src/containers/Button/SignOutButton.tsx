import { signOut } from "next-auth/react";

import GmButton from "@/components/GmButton";

function SignOutButton() {
  return (
    <GmButton
      onClick={() => signOut()}
      icon="TbLogout"
      text="Sign Out"
      bgColor="bg-red-400"
      textColor="text-white"
    />
  );
}

export default SignOutButton;
