"use client";
import { useRouter } from "next/navigation";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { authClient } from "@/lib/auth-client";
const SignOutBtn = () => {
  const router = useRouter();

  const handleSignOut = async () => {
  const {data, error} =  await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
    console.log(data);
    console.log(error);
  };

  return (
    <>
      <button
        onClick={handleSignOut}
        className="flex justify-start text-red-600"
      >
        <HiMiniArrowUturnLeft className="inline" /> সাইন আউট
      </button>
    </>
  );
};

export default SignOutBtn;
