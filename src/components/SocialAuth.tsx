"use client";
import { signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  const handelGoogleSignIn = async () => {
    const {} = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handelGithubSignIn = async () => {
    const {} = await signIn.social({
      provider: "github",
    });
  };
  return (
    <>
      <div className="flex gap-2 justify-center items-center flex-col md:flex-row w-full">
        <button
          className="btn w-full md:w-1/2 bg-white"
          onClick={handelGoogleSignIn}
        >
          <FcGoogle className="inline " /> Google দিয়ে চালিয়ে যান
        </button>
        <button className="btn w-full md:w-1/2 bg-white" onClick={handelGithubSignIn}>
          <FaGithub className="inline" /> GitHub দিয়ে চালিয়ে যান
        </button>
      </div>
    </>
  );
};

export default SocialAuth;
