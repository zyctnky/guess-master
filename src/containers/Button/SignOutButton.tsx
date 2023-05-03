import GmButton from "@/components/GmButton";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <GmButton
      onClick={() => signOut()}
      text="Sign Out"
      bgColor="bg-red-400"
      textColor="text-white"
    />
  );
}

export default SignOutButton;
