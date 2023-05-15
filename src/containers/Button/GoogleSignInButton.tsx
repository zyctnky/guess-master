import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import GmButton from "@/components/GmButton";

function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackurl") || "";

  return (
    <>
      <GmButton
        onClick={() => signIn("google", { callbackUrl })}
        icon="FcGoogle"
        text="Play with Google"
      />
    </>
  );
}

export default GoogleSignInButton;
