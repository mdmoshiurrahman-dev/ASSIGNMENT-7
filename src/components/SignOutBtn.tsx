"use client";
import { useRouter } from "next/navigation";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
const SignOutBtn = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signout success");
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <>
      <button
        onClick={handleSignOut}
        className="flex justify-start text-red-600 cursor-pointer"
      >
        <HiMiniArrowUturnLeft className="inline" /> সাইন আউট
      </button>
    </>
  );
};

export default SignOutBtn;
